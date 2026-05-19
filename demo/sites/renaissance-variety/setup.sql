-- ============================================================
-- Renaissance Variety — Database Setup
-- Run this in phpMyAdmin on your database
-- ============================================================

CREATE TABLE IF NOT EXISTS `catalog` (
  `id`          INT UNSIGNED    NOT NULL AUTO_INCREMENT,
  `title`       VARCHAR(255)    NOT NULL,
  `category`    ENUM('games','books','music','movies','collectibles','other') NOT NULL DEFAULT 'other',
  `sub`         VARCHAR(255)    NOT NULL DEFAULT '',
  `description` TEXT            NOT NULL DEFAULT '',
  `image`       VARCHAR(500)    NOT NULL DEFAULT '',
  `notes`       TEXT            NOT NULL DEFAULT '',
  `condition`   VARCHAR(50)     NOT NULL DEFAULT 'Good',
  `badge`       VARCHAR(20)     NOT NULL DEFAULT '',
  `year`        VARCHAR(10)     NOT NULL DEFAULT '',
  `genre`       VARCHAR(255)    NOT NULL DEFAULT '',
  `source`      VARCHAR(50)     NOT NULL DEFAULT 'manual',
  `created_at`  DATETIME        NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_category` (`category`),
  FULLTEXT INDEX `idx_search` (`title`, `sub`, `description`, `notes`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- Optional: seed a few sample items to test with
-- ============================================================
INSERT INTO `catalog` (title, category, sub, description, image, notes, `condition`, badge, year, genre, source) VALUES
('Super Nintendo Console', 'games', 'SNES System', 'The classic 16-bit home video game console by Nintendo, released in 1990.', '', 'Tested and working. All cables included.', 'Good', 'hot', '1990', 'Console', 'manual'),
('The Shawshank Redemption', 'movies', 'DVD · 1994', 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', '', '', 'Like New', 'hot', '1994', 'Drama', 'manual'),
('Fleetwood Mac – Rumours', 'music', 'Vinyl LP · 1977', 'The eleventh studio album by Fleetwood Mac, one of the best-selling albums of all time.', '', 'Original 1977 pressing. Light surface marks only.', 'Good', 'rare', '1977', 'Rock', 'manual'),
('The Lord of the Rings', 'books', 'J.R.R. Tolkien · Paperback', 'An epic high-fantasy novel by the English author and scholar J. R. R. Tolkien.', '', '', 'Good', 'new', '1954', 'Fantasy', 'manual');
