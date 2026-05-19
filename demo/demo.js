/* ════════════════════════════════════════
   DOLAN PROGRAMMING — demo/demo.js
   ════════════════════════════════════════
   All logic for the demo showcase page.

   HOW TO ADD A NEW DEMO:
   Add an object to the DEMOS array below.
   Fields:
     id         – unique slug (kebab-case)
     title      – display name
     client     – client or project name
     desc       – one-line description
     tag        – category (must match a TAG in TAGS array)
     tech       – array of tech labels (keep to ≤4)
     url        – link to the live demo (relative or absolute)
     date       – "YYYY-MM-DD" (used for "New" badge + sort)
     featured   – true/false (pins to top of featured sort)
   ════════════════════════════════════════ */

const TAGS = [
  { label: 'All',         value: 'all' },
  { label: 'Restaurant',  value: 'restaurant' },
  { label: 'Retail',      value: 'retail' },
  { label: 'Healthcare',  value: 'healthcare' },
  { label: 'Real Estate', value: 'real-estate' },
  { label: 'Trades',      value: 'trades' },
  { label: 'Fitness',     value: 'fitness' },
  { label: 'Education',   value: 'education' },
  { label: 'Tech',        value: 'tech' },
  { label: 'Other',       value: 'other' },
];

// ─────────────────────────────────────────
// DEMO DATA — add your demos here
// ─────────────────────────────────────────
const DEMOS = [
  {
    id: 'brooklyn-place',
    title: 'Brooklyn Place',
    client: 'Demo Client — Restaurant',
    desc: 'Warm, full-featured restaurant site with menu, reservations, and gallery.',
    tag: 'restaurant',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/brooklyn-place/index.html',
    date: '2026-05-01',
    featured: true,
  },
  {
    id: 'cafe-349',
    title: 'Cafe 349',
    client: 'Demo Client — Restaurant',
    desc: 'Elegant clothing boutique with product grid, lookbook, and cart UI.',
    tag: 'restaurant',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/cafe-349/index.html',
    date: '2026-04-18',
    featured: false,
  },
  {
    id: 'campbellbay-ceiment',
    title: 'Campbells Bay Ciment',
    client: 'Demo Client — Trades',
    desc: 'Clean and trustworthy dental practice site with booking flow.',
    tag: 'trades',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/northpine-dental/index.html',
    date: '2026-04-05',
    featured: false,
  },
  {
    id: 'dk-contracting',
    title: 'DK Contracting',
    client: 'Demo Client — Trades',
    desc: 'Property listings site with search filters, map integration, and agent profiles.',
    tag: 'trades',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/dk-contracting/index.html',
    date: '2026-03-22',
    featured: true,
  },
  {
    id: 'dolan-art-photopraphy',
    title: 'Dolan Art & Photography',
    client: 'Demo Client — Other',
    desc: 'Bold trades contractor site with service areas, quotes, and reviews.',
    tag: 'other',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/dolan-art-photography/index.html',
    date: '2026-03-10',
    featured: false,
  },
  {
    id: 'garage-sixth-line',
    title: 'Garage Sixth Line',
    client: 'Demo Client — Trades',
    desc: 'High-energy gym site with class schedule, trainers, and membership tiers.',
    tag: 'trades',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/garage-sixth-line/index.html',
    date: '2026-02-28',
    featured: false,
  },
  {
    id: 'greenwood-paving',
    title: 'Greenwood Paving',
    client: 'Demo Client — Trades',
    desc: 'High-energy gym site with class schedule, trainers, and membership tiers.',
    tag: 'trades',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/greenwood-paving/index.html',
    date: '2026-02-28',
    featured: false,
  },
  {
    id: 'howard-construction',
    title: 'Howard Construction',
    client: 'Demo Client — Trades',
    desc: 'High-energy gym site with class schedule, trainers, and membership tiers.',
    tag: 'trades',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/howard-construction/index.html',
    date: '2026-02-28',
    featured: false,
  },
  {
    id: 'hurstys',
    title: 'Hurstys',
    client: 'Demo Client — Restaurant',
    desc: 'High-energy gym site with class schedule, trainers, and membership tiers.',
    tag: 'restaurant',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/hurstys/index.html',
    date: '2026-02-28',
    featured: false,
  },
  {
    id: 'jr-drilling',
    title: 'JR Drilling',
    client: 'Demo Client — Trades',
    desc: 'High-energy gym site with class schedule, trainers, and membership tiers.',
    tag: 'trades',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/jr-drilling/index.html',
    date: '2026-02-28',
    featured: false,
  },
  {
    id: 'kl-dairy-butcher',
    title: 'KL Dairy & Butcher',
    client: 'Demo Client — Retail',
    desc: 'High-energy gym site with class schedule, trainers, and membership tiers.',
    tag: 'retail',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/kl-dairy-butcher/index.html',
    date: '2026-02-28',
    featured: false,
  },
  {
    id: 'kojacks',
    title: 'Kojacks',
    client: 'Demo Client — Restaurant',
    desc: 'High-energy gym site with class schedule, trainers, and membership tiers.',
    tag: 'restaurant',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/kojacks/index.html',
    date: '2026-02-28',
    featured: false,
  },
  {
    id: 'micky-mcguire-construction',
    title: 'Micky Mcguire Construction',
    client: 'Demo Client — Trades',
    desc: 'High-energy gym site with class schedule, trainers, and membership tiers.',
    tag: 'trades',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/micky-mcguire-construction/index.html',
    date: '2026-02-28',
    featured: false,
  },
  {
    id: 'morin-construction',
    title: 'Morin Construction',
    client: 'Demo Client — Trades',
    desc: 'High-energy gym site with class schedule, trainers, and membership tiers.',
    tag: 'trades',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/morin-construction/index.html',
    date: '2026-02-28',
    featured: false,
  },
  {
    id: 'deanos',
    title: 'Deanos Chicken',
    client: 'Demo Client — Restaurant',
    desc: 'High-energy gym site with class schedule, trainers, and membership tiers.',
    tag: 'restaurant',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/deanos/index.html',
    date: '2026-02-28',
    featured: false,
  },
  {
    id: 'renaissance-variety',
    title: 'Renaissance Variety',
    client: 'Demo Client — Retail',
    desc: 'High-energy gym site with class schedule, trainers, and membership tiers.',
    tag: 'retail',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/renaissance-variety/index.html',
    date: '2026-02-28',
    featured: false,
  },
  {
    id: 'reno-pontiac',
    title: 'Reno Pontiac',
    client: 'Demo Client — Trades',
    desc: 'High-energy gym site with class schedule, trainers, and membership tiers.',
    tag: 'trades',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/reno-pontiac/index.html',
    date: '2026-02-28',
    featured: false,
  },
  {
    id: 'shawville-auto',
    title: 'Shawville Auto',
    client: 'Demo Client — Trades',
    desc: 'High-energy gym site with class schedule, trainers, and membership tiers.',
    tag: 'trades',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/shawville-auto/index.html',
    date: '2026-02-28',
    featured: false,
  },
  {
    id: 'the-cleaning-fairy',
    title: 'The Cleaning Fairy',
    client: 'Demo Client — Other',
    desc: 'High-energy gym site with class schedule, trainers, and membership tiers.',
    tag: 'other',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/the-cleaning-fairy/index.html',
    date: '2026-02-28',
    featured: false,
  },
  {
    id: 'valley-landscaping',
    title: 'Valley Landscaping',
    client: 'Demo Client — Trades',
    desc: 'High-energy gym site with class schedule, trainers, and membership tiers.',
    tag: 'trades',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/valley-landscaping/index.html',
    date: '2026-02-28',
    featured: false,
  },
];

// ─────────────────────────────────────────
// NEW badge threshold — show if within X days
// ─────────────────────────────────────────
const NEW_THRESHOLD_DAYS = 30;

// ─────────────────────────────────────────
// STATE
// ─────────────────────────────────────────
let state = {
  query:      '',
  activeTag:  'all',
  sort:       'newest',
  view:       'grid',
  page:       1,
  perPage:    12,
};

// ─────────────────────────────────────────
// INIT
// ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildTagPills();
  bindEvents();
  updateCounter();
  render();
});

// ─────────────────────────────────────────
// BUILD TAG PILLS
// ─────────────────────────────────────────
function buildTagPills() {
  const wrap = document.getElementById('tag-filters');
  wrap.innerHTML = '';
  TAGS.forEach(tag => {
    const btn = document.createElement('button');
    btn.className = 'tag-pill' + (tag.value === state.activeTag ? ' active' : '');
    btn.dataset.tag = tag.value;
    btn.textContent = tag.label;
    btn.addEventListener('click', () => {
      state.activeTag = tag.value;
      state.page = 1;
      document.querySelectorAll('.tag-pill').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      render();
    });
    wrap.appendChild(btn);
  });
}

// ─────────────────────────────────────────
// UPDATE HERO COUNTER
// ─────────────────────────────────────────
function updateCounter() {
  const el = document.getElementById('demo-total-count');
  if (el) el.textContent = DEMOS.length;
}

// ─────────────────────────────────────────
// FILTER + SORT
// ─────────────────────────────────────────
function getFiltered() {
  const q = state.query.toLowerCase().trim();
  let list = DEMOS.filter(d => {
    const matchTag = state.activeTag === 'all' || d.tag === state.activeTag;
    const matchQ   = !q ||
      d.title.toLowerCase().includes(q) ||
      d.client.toLowerCase().includes(q) ||
      d.desc.toLowerCase().includes(q) ||
      d.tag.toLowerCase().includes(q) ||
      d.tech.some(t => t.toLowerCase().includes(q));
    return matchTag && matchQ;
  });

  switch (state.sort) {
    case 'newest':   list.sort((a,b) => b.date.localeCompare(a.date)); break;
    case 'oldest':   list.sort((a,b) => a.date.localeCompare(b.date)); break;
    case 'alpha':    list.sort((a,b) => a.title.localeCompare(b.title)); break;
    case 'featured': list.sort((a,b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)); break;
  }
  return list;
}

// ─────────────────────────────────────────
// IS NEW?
// ─────────────────────────────────────────
function isNew(dateStr) {
  const now  = new Date();
  const d    = new Date(dateStr);
  const diff = (now - d) / (1000 * 60 * 60 * 24);
  return diff <= NEW_THRESHOLD_DAYS;
}

// ─────────────────────────────────────────
// RENDER
// ─────────────────────────────────────────
function render() {
  const grid    = document.getElementById('demo-grid');
  const empty   = document.getElementById('demo-empty');
  const countEl = document.getElementById('results-count');
  const loadBtn = document.getElementById('load-more-btn');

  const filtered = getFiltered();
  const total    = filtered.length;
  const slice    = filtered.slice(0, state.page * state.perPage);

  // Result count
  countEl.innerHTML = `Showing <strong>${Math.min(slice.length, total)}</strong> of <strong>${total}</strong> demo${total !== 1 ? 's' : ''}`;

  // Empty state
  empty.classList.toggle('visible', total === 0);

  // Grid
  grid.innerHTML = '';
  slice.forEach((demo, i) => {
    const card = buildCard(demo, i);
    grid.appendChild(card);
  });

  // Load more
  const hasMore = total > slice.length;
  loadBtn.classList.toggle('visible', hasMore);
  if (hasMore) {
    loadBtn.textContent = `Load More (${total - slice.length} remaining)`;
  }
}

// ─────────────────────────────────────────
// BUILD CARD
// ─────────────────────────────────────────
function buildCard(demo, idx) {
  const card = document.createElement('div');
  card.className = 'demo-card';
  card.style.animationDelay = `${Math.min(idx, 11) * 40}ms`;

  const newBadge  = isNew(demo.date) ? `<span class="card-badge-new">New</span>` : '';
  const techChips = demo.tech.map(t => `<span class="demo-tech-chip">${t}</span>`).join('');
  const tagLabel  = TAGS.find(t => t.value === demo.tag)?.label || demo.tag;

  const thumbSrc  = `thumbs/${demo.id}.jpg`;
  const thumb = `
    <img
      class="demo-thumb"
      src="${thumbSrc}"
      alt="${demo.title}"
      loading="lazy"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
    >
    <div class="demo-thumb-placeholder" style="display:none;">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(240,90,26,0.35)" stroke-width="1.2">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      <span>${demo.title}</span>
    </div>`;

  card.innerHTML = `
    <div class="demo-thumb-wrap">
      ${thumb}
      ${newBadge}
      <div class="demo-preview-btn">
        <a class="btn-preview-live" href="${demo.url}" target="_blank" rel="noopener">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          Open Demo
        </a>
      </div>
    </div>
    <div class="demo-card-body">
      <div class="demo-card-meta">
        <span class="demo-card-tag">${tagLabel}</span>
        <span class="demo-card-date">${formatDate(demo.date)}</span>
      </div>
      <div class="demo-card-title">${demo.title}</div>
      <div class="demo-card-desc">${demo.desc}</div>
      <div class="demo-card-footer">${techChips}</div>
    </div>
  `;

  // Click anywhere on card (not on the link) also opens demo
  card.addEventListener('click', e => {
    if (!e.target.closest('a')) {
      window.open(demo.url, '_blank', 'noopener');
    }
  });

  return card;
}

// ─────────────────────────────────────────
// FORMAT DATE
// ─────────────────────────────────────────
function formatDate(str) {
  const d = new Date(str);
  return d.toLocaleDateString('en-CA', { month: 'short', year: 'numeric' });
}

// ─────────────────────────────────────────
// BIND EVENTS
// ─────────────────────────────────────────
function bindEvents() {
  // Search
  const searchEl = document.getElementById('demo-search');
  const clearBtn = document.getElementById('search-clear');
  searchEl.addEventListener('input', () => {
    state.query = searchEl.value;
    state.page  = 1;
    clearBtn.classList.toggle('visible', !!state.query);
    render();
  });
  clearBtn.addEventListener('click', () => {
    searchEl.value = '';
    state.query    = '';
    state.page     = 1;
    clearBtn.classList.remove('visible');
    searchEl.focus();
    render();
  });

  // Sort
  document.getElementById('demo-sort').addEventListener('change', e => {
    state.sort = e.target.value;
    state.page = 1;
    render();
  });

  // View toggle
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.view = btn.dataset.view;
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const grid = document.getElementById('demo-grid');
      grid.classList.toggle('list-view', state.view === 'list');
    });
  });

  // Load more
  document.getElementById('load-more-btn').addEventListener('click', () => {
    state.page++;
    render();
    // Smooth scroll to keep position
  });

  // Keyboard shortcut — "/" focuses search
  document.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      document.getElementById('demo-search').focus();
    }
    if (e.key === 'Escape') {
      document.getElementById('demo-search').blur();
    }
  });
}
