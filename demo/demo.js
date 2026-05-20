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
    desc: 'Charming family-owned ice cream parlour and treat shop in Shawville, QC, offering dozens of flavours, sundaes, and specialty treats alongside Fusion Mineral Paint since 1999.',
    tag: 'restaurant',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/brooklyn-place/',
    date: '2026-05-01',
    featured: true,
  },
  {
	id: 'tracy-crane',
	title: 'Tracy Crane',
	client: 'Demo Client — Trades',
	desc: 'need a desc',
	tag: 'trades',
	tech: ['HTML', 'CSS', 'JS'],
	url: 'sites/tracy-crane/',
	date: '2026-05-01',
	featured: true,
  },
  {
    id: 'cafe-349',
    title: 'Cafe 349',
    client: 'Demo Client — Restaurant',
    desc: 'Cozy homemade café in Shawville, QC, serving fresh-from-scratch lunches, soups, salads, paninis, daily specials, and house-made desserts with a rotating local art gallery since 2002',
    tag: 'restaurant',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/cafe-349/',
    date: '2026-04-18',
    featured: false,
  },
  {
    id: 'campbellsbay-ciment',
    title: 'Campbell&apos;s Bay Ciment',
    client: 'Demo Client — Trades',
    desc: 'Established ready-mix concrete and aggregates supplier in Campbell&apos;s Bay, QC, offering poured foundations, stamped concrete, stone slinging, and construction services across the Pontiac and Ottawa Valley since 1982.',
    tag: 'trades',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/campbellsbay-ciment/',
    date: '2026-04-05',
    featured: false,
  },
  {
    id: 'dk-contracting',
    title: 'DK Contracting',
    client: 'Demo Client — Trades',
    desc: 'Fully insured residential and commercial renovation contractor in Shawville, QC, specializing in kitchen and bathroom remodels, basement finishing, home additions, and decks in the Pontiac and Renfrew regions.',
    tag: 'trades',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/dk-contracting/',
    date: '2026-03-22',
    featured: true,
  },
  {
    id: 'dolan-art-photopraphy',
    title: 'Dolan Art & Photography',
    client: 'Demo Client — Other',
    desc: 'Quebec-based fine art studio featuring original oil, acrylic, and watercolor paintings, custom commissions, pet portraits, and landscapes by artist Cheryl Dolan.',
    tag: 'other',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/dolan-art-photography/',
    date: '2026-03-10',
    featured: false,
  },
  {
    id: 'garage-sixth-line',
    title: 'Garage Sixth Line',
    client: 'Demo Client — Trades',
    desc: 'Mobile automotive repair service in Bristol, Québec, providing on-site mechanical repairs, undercoating, Polaris/BRP diagnostics, and used auto parts.',
    tag: 'trades',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/garage-sixth-line/',
    date: '2026-02-28',
    featured: false,
  },
  {
    id: 'greenwood-paving',
    title: 'Greenwood Paving',
    client: 'Demo Client — Trades',
    desc: 'Professional asphalt paving contractor in Pembroke, Ontario, delivering driveways, parking lots, sealcoating, and road construction across Renfrew County and the Ottawa Valley.',
    tag: 'trades',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/greenwood-paving/',
    date: '2026-02-28',
    featured: false,
  },
  {
    id: 'howard-construction',
    title: 'Howard Construction',
    client: 'Demo Client — Trades',
    desc: 'amily-owned custom home builder and renovation specialist in Shawville, QC, offering excavation, septic systems, and energy-efficient construction since 1974.',
    tag: 'trades',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/howard-construction/',
    date: '2026-02-28',
    featured: false,
  },
  {
    id: 'hurstys',
    title: 'Hursty&apos;s',
    client: 'Demo Client — Restaurant',
    desc: 'Popular local bar and grill on Main Street in Shawville, QC, serving all-day breakfast, hearty lunches, dinners, and homemade specials with a welcoming patio.',
    tag: 'restaurant',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/hurstys/',
    date: '2026-02-28',
    featured: false,
  },
  {
    id: 'jr-drilling',
    title: 'JR Drilling',
    client: 'Demo Client — Trades',
    desc: 'Licensed water well drilling company based in Shawville, QC, providing residential and commercial wells, geothermal, geotechnical, and environmental drilling across Quebec.',
    tag: 'trades',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/jr-drilling/',
    date: '2026-02-28',
    featured: false,
  },
  {
    id: 'kl-dairy-butcher',
    title: 'KL Dairy & Butcher',
    client: 'Demo Client — Retail',
    desc: 'Local family-run butcher and dairy store in Shawville, QC, offering fresh-cut meats, weekly specials, dairy products, and produce in the heart of Pontiac County.',
    tag: 'retail',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/kl-dairy-butcher/',
    date: '2026-02-28',
    featured: false,
  },
  {
    id: 'kojacks',
    title: 'Kojack&apos;s',
    client: 'Demo Client — Restaurant',
    desc: 'Authentic Chinese restaurant in Shawville, QC, under new ownership, serving dine-in and takeout with lunch specials and classic favourites on Main Street.',
    tag: 'restaurant',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/kojacks/',
    date: '2026-02-28',
    featured: false,
  },
  {
    id: 'micky-mcguire-construction',
    title: 'Micky Mcguire Construction',
    client: 'Demo Client — Trades',
    desc: 'Reliable Shawville-based construction company specializing in new homes, commercial builds, renovations, roofing, and site work across the Pontiac region.',
    tag: 'trades',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/micky-mcguire-construction/',
    date: '2026-02-28',
    featured: false,
  },
  {
    id: 'morin-construction',
    title: 'Morin Construction',
    client: 'Demo Client — Trades',
    desc: 'Family-owned custom home builder since 1985 specializing in luxury modern homes, authentic log homes, timber frame construction, renovations, and premium building lots across the Outaouais, Pontiac County, and Eastern Ontario.',
    tag: 'trades',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/morin-construction/',
    date: '2026-02-28',
    featured: false,
  },
  {
    id: 'deanos',
    title: 'Deano&apos;s Chicken',
    client: 'Demo Client — Restaurant',
    desc: 'Local favourite in Shawville, QC, known for fresh whole chickens, Friday specials, sides, and takeout chicken dinners.',
    tag: 'restaurant',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/deanos/',
    date: '2026-02-28',
    featured: false,
  },
  {
    id: 'renaissance-variety',
    title: 'Renaissance Variety',
    client: 'Demo Client — Retail',
    desc: 'Retro-to-modern entertainment shop in Shawville, QC, stocking video games, books, movies, music, collectibles, and offering buy/sell/trade.',
    tag: 'retail',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/renaissance-variety/',
    date: '2026-02-28',
    featured: false,
  },
  {
    id: 'reno-pontiac',
    title: 'Reno Pontiac',
    client: 'Demo Client — Trades',
    desc: 'Professional home renovation service in the Pontiac region, specializing in kitchens, bathrooms, flooring, drywall, painting, and clean, modern finishes.',
    tag: 'trades',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/reno-pontiac/',
    date: '2026-02-28',
    featured: false,
  },
  {
    id: 'shawville-auto',
    title: 'Shawville Auto',
    client: 'Demo Client — Trades',
    desc: 'Trusted full-service auto repair shop in Shawville, QC, offering mechanical repairs, wheel alignments, and quality used car sales for over 30 years.',
    tag: 'trades',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/shawville-auto/',
    date: '2026-02-28',
    featured: false,
  },
  {
    id: 'the-cleaning-fairy',
    title: 'The Cleaning Fairy',
    client: 'Demo Client — Other',
    desc: 'Professional residential cleaning service serving Gatineau, QC and Ottawa, ON, with regular, deep, move-in/out, and post-renovation cleans.',
    tag: 'other',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/the-cleaning-fairy/',
    date: '2026-02-28',
    featured: false,
  },
  {
    id: 'valley-landscaping',
    title: 'Valley Landscaping',
    client: 'Demo Client — Trades',
    desc: 'Full-service landscaping company in Simcoe County, Ontario, providing lawn care, hardscaping, gardens, retaining walls, and snow removal since 2002.',
    tag: 'trades',
    tech: ['HTML', 'CSS', 'JS'],
    url: 'sites/valley-landscaping/',
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
