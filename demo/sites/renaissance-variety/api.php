<?php
/**
 * Renaissance Variety — Catalog API
 * Place this file in the same folder as index.html on your server.
 *
 * SETUP:
 *  1. Create a MySQL database in cPanel (e.g. "renaissance_db")
 *  2. Create a database user and assign it to the database (all privileges)
 *  3. Run the SQL in setup.sql via phpMyAdmin
 *  4. Fill in DB_* constants below
 *  5. Change ADMIN_PASSWORD to something strong
 */

// ── CONFIG ────────────────────────────────────────────────
define('DB_HOST',     'localhost');
define('DB_NAME',     'renaissance_db');   // Your database name
define('DB_USER', 'root');     // Your database username
define('DB_PASS', ''); // Your database password
define('DB_CHARSET',  'utf8mb4');

define('ADMIN_PASSWORD', 'renaissance2025'); // Change this before going live!

// OMDB API key (free at https://www.omdbapi.com/apikey.aspx)
define('OMDB_API_KEY', 'YOUR_OMDB_KEY');

// RAWG API key (free at https://rawg.io/apidocs)
define('RAWG_API_KEY', 'YOUR_RAWG_KEY');
// ── END CONFIG ────────────────────────────────────────────

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Admin-Token');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(200); exit; }

// ── DB ────────────────────────────────────────────────────
function db(): PDO {
    static $pdo = null;
    if ($pdo) return $pdo;
    $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
    $pdo = new PDO($dsn, DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ]);
    return $pdo;
}

function ok($data = [], int $code = 200): void {
    http_response_code($code);
    echo json_encode(['ok' => true, 'data' => $data]);
    exit;
}
function err(string $msg, int $code = 400): void {
    http_response_code($code);
    echo json_encode(['ok' => false, 'error' => $msg]);
    exit;
}

// ── AUTH ──────────────────────────────────────────────────
function requireAdmin(): void {
    $body = json_decode(file_get_contents('php://input'), true) ?? [];
    $token = $_SERVER['HTTP_X_ADMIN_TOKEN'] ?? $body['admin_token'] ?? '';
    if ($token !== ADMIN_PASSWORD) err('Unauthorized', 401);
}

// ── EXTERNAL LOOKUP ───────────────────────────────────────
function lookupOMDB(string $title): array {
    if (!OMDB_API_KEY || OMDB_API_KEY === 'YOUR_OMDB_KEY') return [];
    $url = 'https://www.omdbapi.com/?apikey=' . urlencode(OMDB_API_KEY) . '&t=' . urlencode($title);
    $raw = @file_get_contents($url);
    if (!$raw) return [];
    $d = json_decode($raw, true);
    if (!$d || ($d['Response'] ?? '') === 'False') return [];
    return [
        'title'       => $d['Title'] ?? $title,
        'sub'         => trim(($d['Type'] ?? '') . ($d['Year'] ? ' · ' . $d['Year'] : '')),
        'description' => $d['Plot'] ?? '',
        'image'       => (($d['Poster'] ?? 'N/A') !== 'N/A') ? $d['Poster'] : '',
        'year'        => $d['Year'] ?? '',
        'genre'       => $d['Genre'] ?? '',
        'source'      => 'omdb',
    ];
}

function lookupOpenLibrary(string $title): array {
    $url = 'https://openlibrary.org/search.json?q=' . urlencode($title) . '&limit=1';
    $raw = @file_get_contents($url);
    if (!$raw) return [];
    $d = json_decode($raw, true);
    $doc = $d['docs'][0] ?? null;
    if (!$doc) return [];
    $coverId = $doc['cover_i'] ?? null;
    $img = $coverId ? "https://covers.openlibrary.org/b/id/{$coverId}-L.jpg" : '';
    $author = isset($doc['author_name']) ? implode(', ', array_slice($doc['author_name'], 0, 2)) : '';
    return [
        'title'       => $doc['title'] ?? $title,
        'sub'         => $author . ($doc['first_publish_year'] ? ' · ' . $doc['first_publish_year'] : ''),
        'description' => $doc['first_sentence'][0] ?? '',
        'image'       => $img,
        'year'        => (string)($doc['first_publish_year'] ?? ''),
        'genre'       => isset($doc['subject']) ? implode(', ', array_slice($doc['subject'], 0, 3)) : '',
        'source'      => 'openlibrary',
    ];
}

function lookupRAWG(string $title): array {
    if (!RAWG_API_KEY || RAWG_API_KEY === 'YOUR_RAWG_KEY') return [];
    $url = 'https://api.rawg.io/api/games?key=' . urlencode(RAWG_API_KEY) . '&search=' . urlencode($title) . '&page_size=1';
    $raw = @file_get_contents($url);
    if (!$raw) return [];
    $d = json_decode($raw, true);
    $game = $d['results'][0] ?? null;
    if (!$game) return [];
    $platforms = '';
    if (!empty($game['platforms'])) {
        $platforms = implode(', ', array_slice(array_map(fn($p) => $p['platform']['name'], $game['platforms']), 0, 3));
    }
    return [
        'title'       => $game['name'] ?? $title,
        'sub'         => $platforms . ($game['released'] ? ' · ' . substr($game['released'], 0, 4) : ''),
        'description' => $game['description_raw'] ?? '',
        'image'       => $game['background_image'] ?? '',
        'year'        => $game['released'] ? substr($game['released'], 0, 4) : '',
        'genre'       => isset($game['genres']) ? implode(', ', array_map(fn($g) => $g['name'], $game['genres'])) : '',
        'source'      => 'rawg',
    ];
}

// ── ROUTER ────────────────────────────────────────────────
$action = $_GET['action'] ?? '';
$method = $_SERVER['REQUEST_METHOD'];

switch ($action) {

    // GET items (public) — supports search, category filter, pagination
    case 'get_items':
        $page     = max(1, (int)($_GET['page'] ?? 1));
        $perPage  = min(100, max(12, (int)($_GET['per_page'] ?? 24)));
        $q        = trim($_GET['q'] ?? '');
        $category = trim($_GET['category'] ?? '');
        $offset   = ($page - 1) * $perPage;

        $where  = ['1=1'];
        $params = [];

        if ($q !== '') {
            $where[]  = '(title LIKE :q OR sub LIKE :q2 OR description LIKE :q3 OR notes LIKE :q4)';
            $params[':q']  = "%$q%";
            $params[':q2'] = "%$q%";
            $params[':q3'] = "%$q%";
            $params[':q4'] = "%$q%";
        }
        if ($category && $category !== 'all') {
            $where[]  = 'category = :cat';
            $params[':cat'] = $category;
        }

        $whereSQL = implode(' AND ', $where);

        $countStmt = db()->prepare("SELECT COUNT(*) FROM catalog WHERE $whereSQL");
        $countStmt->execute($params);
        $total = (int)$countStmt->fetchColumn();

        $stmt = db()->prepare("SELECT * FROM catalog WHERE $whereSQL ORDER BY created_at DESC LIMIT :limit OFFSET :offset");
        foreach ($params as $k => $v) $stmt->bindValue($k, $v);
        $stmt->bindValue(':limit',  $perPage, PDO::PARAM_INT);
        $stmt->bindValue(':offset', $offset,  PDO::PARAM_INT);
        $stmt->execute();
        $items = $stmt->fetchAll();

        ok([
            'items'      => $items,
            'total'      => $total,
            'page'       => $page,
            'per_page'   => $perPage,
            'total_pages'=> (int)ceil($total / $perPage),
        ]);

    // POST add item (admin)
    case 'add_item':
        requireAdmin();
        $b = json_decode(file_get_contents('php://input'), true) ?? [];
        $title = trim($b['title'] ?? '');
        if (!$title) err('Title is required');

        $stmt = db()->prepare("INSERT INTO catalog
            (title, category, sub, description, image, notes, `condition`, badge, year, genre, source, created_at)
            VALUES (:title,:category,:sub,:description,:image,:notes,:condition,:badge,:year,:genre,:source,NOW())");
        $stmt->execute([
            ':title'       => $title,
            ':category'    => $b['category']    ?? 'other',
            ':sub'         => $b['sub']          ?? '',
            ':description' => $b['description']  ?? '',
            ':image'       => $b['image']        ?? '',
            ':notes'       => $b['notes']        ?? '',
            ':condition'   => $b['condition']    ?? 'Good',
            ':badge'       => $b['badge']        ?? '',
            ':year'        => $b['year']         ?? '',
            ':genre'       => $b['genre']        ?? '',
            ':source'      => $b['source']       ?? 'manual',
        ]);
        ok(['id' => (int)db()->lastInsertId()], 201);

    // POST bulk import (admin)
    case 'bulk_import':
        requireAdmin();
        $b = json_decode(file_get_contents('php://input'), true) ?? [];
        $items = $b['items'] ?? [];
        if (!is_array($items) || empty($items)) err('No items provided');

        $stmt = db()->prepare("INSERT INTO catalog
            (title, category, sub, description, image, notes, `condition`, badge, year, genre, source, created_at)
            VALUES (:title,:category,:sub,:description,:image,:notes,:condition,:badge,:year,:genre,:source,NOW())");

        $count = 0;
        db()->beginTransaction();
        try {
            foreach ($items as $b2) {
                $title = trim($b2['title'] ?? '');
                if (!$title) continue;
                $stmt->execute([
                    ':title'       => $title,
                    ':category'    => $b2['category']    ?? 'other',
                    ':sub'         => $b2['sub']          ?? '',
                    ':description' => $b2['description']  ?? '',
                    ':image'       => $b2['image']        ?? '',
                    ':notes'       => $b2['notes']        ?? '',
                    ':condition'   => $b2['condition']    ?? 'Good',
                    ':badge'       => $b2['badge']        ?? '',
                    ':year'        => $b2['year']         ?? '',
                    ':genre'       => $b2['genre']        ?? '',
                    ':source'      => $b2['source']       ?? 'manual',
                ]);
                $count++;
            }
            db()->commit();
        } catch (Exception $e) {
            db()->rollBack();
            err('Import failed: ' . $e->getMessage());
        }
        ok(['imported' => $count]);

    // DELETE item (admin)
    case 'delete_item':
        requireAdmin();
        $b  = json_decode(file_get_contents('php://input'), true) ?? [];
        $id = (int)($b['id'] ?? 0);
        if (!$id) err('ID required');
        $stmt = db()->prepare("DELETE FROM catalog WHERE id = :id");
        $stmt->execute([':id' => $id]);
        ok(['deleted' => $id]);

    // POST update item (admin)
    case 'update_item':
        requireAdmin();
        $b  = json_decode(file_get_contents('php://input'), true) ?? [];
        $id = (int)($b['id'] ?? 0);
        if (!$id) err('ID required');
        $stmt = db()->prepare("UPDATE catalog SET
            title=:title, category=:category, sub=:sub, description=:description,
            image=:image, notes=:notes, `condition`=:condition, badge=:badge,
            year=:year, genre=:genre WHERE id=:id");
        $stmt->execute([
            ':id'          => $id,
            ':title'       => $b['title']       ?? '',
            ':category'    => $b['category']    ?? 'other',
            ':sub'         => $b['sub']          ?? '',
            ':description' => $b['description']  ?? '',
            ':image'       => $b['image']        ?? '',
            ':notes'       => $b['notes']        ?? '',
            ':condition'   => $b['condition']    ?? 'Good',
            ':badge'       => $b['badge']        ?? '',
            ':year'        => $b['year']         ?? '',
            ':genre'       => $b['genre']        ?? '',
        ]);
        ok(['updated' => $id]);

    // GET lookup from external APIs (admin)
    case 'lookup':
        requireAdmin();
        $title    = trim($_GET['title'] ?? '');
        $category = trim($_GET['category'] ?? '');
        if (!$title) err('Title required');

        $result = [];
        if ($category === 'movies')       $result = lookupOMDB($title);
        elseif ($category === 'books')    $result = lookupOpenLibrary($title);
        elseif ($category === 'games')    $result = lookupRAWG($title);
        else {
            // Try all three, return first match
            $result = lookupOMDB($title) ?: lookupOpenLibrary($title) ?: lookupRAWG($title);
        }

        if (empty($result)) err('Not found', 404);
        ok($result);

    // POST admin login check
    case 'login':
        $b = json_decode(file_get_contents('php://input'), true) ?? [];
        if (($b['password'] ?? '') === ADMIN_PASSWORD) ok(['authenticated' => true]);
        else err('Invalid password', 401);

    // GET stats (public)
    case 'stats':
        $totals = db()->query("SELECT category, COUNT(*) as cnt FROM catalog GROUP BY category")->fetchAll();
        $total  = db()->query("SELECT COUNT(*) FROM catalog")->fetchColumn();
        ok(['total' => (int)$total, 'by_category' => $totals]);

    default:
        err('Unknown action', 404);
}
