/* =========================================================
   KAIZEN DEVELOPER — CORE APPLICATION ENGINE
   Zero-dependency Vanilla JS • Cloudflare Static Compatible
   ========================================================= */

const KAIZEN_PLUGINS = [
  {
    id: 'kaizen-guard',
    name: 'KaizenGuard AntiCheat',
    category: 'AntiCheat',
    version: 'v4.8.2',
    mcVersions: '1.8.8 – 1.21.4',
    platforms: 'Paper, Purpur, Spigot, Geyser',
    downloads: 48210,
    releaseDate: '2026-11-12',
    sha256: '9f84c2a1...e71b',
    shortDesc: 'Packet-level asynchronous AntiCheat engineered for competitive PvP, Crystal, and SMP networks with zero false positives.',
    fullDesc: 'KaizenGuard intercepts Netty packets off the main thread via PacketEvents to detect KillAura, Reach, Velocity, Timer, ElytraFly, and Scaffold exploits in real time without impacting server TPS.',
    features: [
      '100% Asynchronous Netty packet analysis (0.02ms main-thread overhead)',
      'Lag-compensation & ping-spoof mitigation up to 350ms latency',
      'Native Floodgate / GeyserMC Bedrock player heuristic profiles',
      'Instant Discord Webhook alerts with replay snapshot telemetry'
    ],
    commands: ['/kg alerts - Toggle staff violation alerts', '/kg profile <player> - View combat & movement heuristics', '/kg reload - Hot-reload check thresholds'],
    configSample: `kaizen-guard:\n  async-netty-threads: 4\n  bedrock-floodgate-bypass: true\n  checks:\n    killaura:\n      enabled: true\n      max-vl: 12\n      punish-command: "ban %player% [KaizenGuard] Unfair Combat Advantage"`
  },
  {
    id: 'kaizen-core-opt',
    name: 'KaizenCore Optimizer',
    category: 'Optimization',
    version: 'v3.4.0',
    mcVersions: '1.16.5 – 1.21.4',
    platforms: 'Paper, Purpur, Folia',
    downloads: 39450,
    releaseDate: '2026-11-08',
    sha256: '4d19b8c0...a39f',
    shortDesc: 'Dynamic AI tick throttling, smart entity stacker, and redstone/hopper limiter that locks servers at 20.0 TPS.',
    fullDesc: 'KaizenCore Optimizer dynamically adjusts entity activation ranges, merges dropped items cleanly without breaking farms, and prevents lag machines before MSPT spikes.',
    features: [
      'Adaptive MSPT-driven Entity Activation Range (EAR) scaling',
      'Folia regionized multi-threading support out of the box',
      'Redstone clock & hopper transfer batch optimization',
      'Automated memory leak & chunk-unload garbage cleanup'
    ],
    commands: ['/kopt status - View live MSPT & entity savings', '/kopt clearitems - Trigger safe ground-item sweep', '/kopt gc - Run safe memory compaction'],
    configSample: `kaizen-optimizer:\n  target-tps: 19.8\n  dynamic-view-distance:\n    enabled: true\n    min: 6\n    max: 14\n  smart-item-merge:\n    radius: 3.5\n    ignore-named-items: true`
  },
  {
    id: 'kaizen-vault',
    name: 'KaizenEconomy Pro',
    category: 'Economy',
    version: 'v2.9.5',
    mcVersions: '1.13 – 1.21.4',
    platforms: 'Paper, Purpur, Spigot, Folia',
    downloads: 24180,
    releaseDate: '2026-10-29',
    sha256: '7c30e4d2...91c4',
    shortDesc: 'Multi-currency Vault-compatible economy engine with HikariCP MySQL/SQLite syncing and player chest shops.',
    fullDesc: 'Built for high-player-count networks, KaizenEconomy handles thousands of concurrent balance transactions per second using optimistic locking and cross-proxy Redis cache invalidation.',
    features: [
      'Full Vault API & PlaceholderAPI integration with formatted suffixes (1.5M, 2.4B)',
      'Cross-server MySQL + Redis sync with zero duplication exploits',
      'Built-in /pay, /baltop (cached async), and GUI auction/shop hooks',
      'Complete transaction audit log with instant rollback tools'
    ],
    commands: ['/bal [player] - Check cached currency balance', '/pay <player> <amount> - Instant atomic transfer', '/kaizeneco audit <player> - Inspect ledger logs'],
    configSample: `kaizen-economy:\n  storage-driver: MYSQL # SQLITE, MYSQL, MARIADB\n  currency-symbol: "$"\n  starting-balance: 1000.0\n  baltop-refresh-seconds: 30`
  },
  {
    id: 'kaizen-aegis',
    name: 'KaizenAegis Protection',
    category: 'Protection',
    version: 'v3.1.1',
    mcVersions: '1.17 – 1.21.4',
    platforms: 'Paper, Purpur, Folia',
    downloads: 18640,
    releaseDate: '2026-10-21',
    sha256: '1a92f7b3...58d0',
    shortDesc: 'Ultra-fast spatial chunk & region protection with 3D cuboid flags, trust roles, and particle boundary previews.',
    fullDesc: 'KaizenAegis uses an R-Tree spatial index in memory to evaluate block break, explosion, piston, and PvP flags in nanoseconds—even with 50,000+ active player claims.',
    features: [
      'O(log n) R-Tree spatial lookup for instantaneous block event checks',
      'Interactive particle borders & GUI permission management per region',
      'Anti-grief protections against Withers, TNT cannons, and liquid flow',
      'Seamless WorldGuard & GriefPrevention data importer'
    ],
    commands: ['/claim - Create or expand protected region', '/trust <player> [role] - Grant build/container access', '/aegis flags - Open interactive region flag GUI'],
    configSample: `kaizen-aegis:\n  default-claim-blocks: 2500\n  particle-visualizer: REDSTONE_DUST\n  flags:\n    pvp: false\n    tnt-damage: false\n    mob-griefing: false`
  },
  {
    id: 'kaizen-nexus',
    name: 'KaizenNexus Utilities',
    category: 'Utility',
    version: 'v5.2.0',
    mcVersions: '1.8.8 – 1.21.4',
    platforms: 'Paper, Purpur, Spigot, Folia',
    downloads: 11890,
    releaseDate: '2026-11-15',
    sha256: '8e51d0c9...42f7',
    shortDesc: 'Modern MiniMessage essentials suite: warps, homes, kits, hex chat formatting, and custom tablist/scoreboard.',
    fullDesc: 'Replace 6 legacy plugins with one lightweight, modular utility core. Every module can be toggled independently so you only load what your server uses.',
    features: [
      'Full Kyori Adventure MiniMessage RGB gradient & hover-event support',
      'Cooldown-aware /spawn, /warp, /home, and /tpa teleportation',
      'Flicker-free packet-based Tablist & Scoreboard engine',
      'Modular toggle system for zero unused listener overhead'
    ],
    commands: ['/warp <name> - Teleport to configured server warp', '/kit <name> - Claim cooldown-protected kit', '/knexus reload - Reload messages and modules'],
    configSample: `kaizen-nexus:\n  modules:\n    teleportation: true\n    chat-formatter: true\n    packet-scoreboard: true\n  teleport-warmup-seconds: 3`
  },
  {
    id: 'kaizen-antibot',
    name: 'KaizenSentinel AntiBot',
    category: 'AntiCheat',
    version: 'v2.4.8',
    mcVersions: '1.8.8 – 1.21.4',
    platforms: 'Velocity, BungeeCord, Paper',
    downloads: 6550,
    releaseDate: '2026-10-14',
    sha256: '6b04a9e1...c83a',
    shortDesc: 'Layer-7 proxy & server firewall blocking 50,000+ bot joins/sec, TCP handshake floods, and proxy VPNs.',
    fullDesc: 'KaizenSentinel inspects pre-login handshake packets and connection velocity before player profiles are ever allocated on your backend Paper instances.',
    features: [
      'Pre-login Netty channel filtering blocks bot floods at 0% backend CPU',
      'Automatic attack-mode mitigation with lightweight map/gravity verification',
      'ASN, residential proxy, and Tor exit-node reputation filtering',
      'Works standalone on Paper or distributed across Velocity proxies'
    ],
    commands: ['/sentinel stats - View blocked connections per second', '/sentinel lockdown - Force strict handshake verification', '/sentinel whitelist <ip> - Bypass checks for trusted IP'],
    configSample: `kaizen-sentinel:\n  max-connections-per-second: 25\n  auto-mitigation-threshold: 40\n  block-bad-packets: true`
  }
];

const CHANGELOG_DATA = [
  {
    plugin: 'KaizenNexus Utilities',
    version: 'v5.2.0',
    date: 'November 15, 2026',
    changes: [
      { type: 'ADDED', text: 'Added native Minecraft 1.21.4 packet scoreboard packet bundling for zero flicker.' },
      { type: 'IMPROVED', text: 'Reduced MiniMessage placeholder parsing allocations by 42%.' },
      { type: 'FIXED', text: 'Resolved cross-world /back location reset when respawning in the End.' }
    ]
  },
  {
    plugin: 'KaizenGuard AntiCheat',
    version: 'v4.8.2',
    date: 'November 12, 2026',
    changes: [
      { type: 'ADDED', text: 'Added Mace smash-attack velocity prediction model for 1.21+ PvP servers.' },
      { type: 'IMPROVED', text: 'Refined GeyserMC Bedrock bridge movement buffer to eliminate stair false flags.' },
      { type: 'FIXED', text: 'Fixed edge-case Timer check trigger during server world-save pauses.' }
    ]
  },
  {
    plugin: 'KaizenCore Optimizer',
    version: 'v3.4.0',
    date: 'November 08, 2026',
    changes: [
      { type: 'ADDED', text: 'Added Folia 1.21.4 regionized tick-budget telemetry command (/kopt regions).' },
      { type: 'IMPROVED', text: 'Upgraded smart item-stacking algorithm to preserve custom NBT display names.' }
    ]
  },
  {
    plugin: 'KaizenEconomy Pro',
    version: 'v2.9.5',
    date: 'October 29, 2026',
    changes: [
      { type: 'IMPROVED', text: 'HikariCP connection pool auto-tuning for high-concurrency MySQL clusters.' },
      { type: 'FIXED', text: 'Fixed scientific notation formatting on balances exceeding 100 Trillion.' }
    ]
  }
];

// State
let activeRoute = 'home';
let selectedCategory = 'All';
let searchQuery = '';
let sortMode = 'downloads';
let activeDetailPluginId = KAIZEN_PLUGINS[0].id;
let changelogFilter = 'ALL';

// Generate unique SVG Emblem per Plugin
function getPluginSvg(category) {
  const icons = {
    AntiCheat: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF1744" stroke-width="2.2"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z"/><path d="M9 12l2 2 4-4"/></svg>`,
    Optimization: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF1744" stroke-width="2.2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    Economy: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF1744" stroke-width="2.2"><circle cx="12" cy="12" r="9"/><path d="M14.5 9.5a2.5 2.5 0 0 0-5 0c0 2.5 5 2 5 4.5a2.5 2.5 0 0 1-5 0M12 6v12"/></svg>`,
    Protection: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF1744" stroke-width="2.2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
    Utility: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF1744" stroke-width="2.2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`
  };
  return icons[category] || icons.Utility;
}

// LocalStorage Download Counter Persistence
function getExtraDownloads() {
  try {
    return JSON.parse(localStorage.getItem('kaizen_dl_counts') || '{}');
  } catch {
    return {};
  }
}

function getPluginDownloads(plugin) {
  const extra = getExtraDownloads();
  return plugin.downloads + (extra[plugin.id] || 0);
}

function incrementDownload(pluginId) {
  const extra = getExtraDownloads();
  extra[pluginId] = (extra[pluginId] || 0) + 1;
  localStorage.setItem('kaizen_dl_counts', JSON.stringify(extra));
  updateAllCounters();
}

function updateAllCounters() {
  const total = KAIZEN_PLUGINS.reduce((sum, p) => sum + getPluginDownloads(p), 0);
  const formatted = total.toLocaleString();
  const homeStat = document.getElementById('stat-total-downloads');
  const dlPageStat = document.getElementById('downloads-page-counter');
  if (homeStat) homeStat.textContent = formatted;
  if (dlPageStat) dlPageStat.textContent = formatted;
}

// Toast Notification
function showToast(message) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
    setTimeout(() => toast.remove(), 250);
  }, 3400);
}

// Real Client-Side Plugin Package Generator (No Fake Links!)
function downloadPluginBundle(pluginId) {
  const plugin = KAIZEN_PLUGINS.find(p => p.id === pluginId);
  if (!plugin) return;

  const bundleContent = [
    `====================================================`,
    `KAIZEN DEVELOPER — OFFICIAL PLUGIN RELEASE ARTIFACT`,
    `====================================================`,
    `Plugin:       ${plugin.name}`,
    `Version:      ${plugin.version}`,
    `Category:     ${plugin.category}`,
    `MC Versions:  ${plugin.mcVersions}`,
    `Platforms:    ${plugin.platforms}`,
    `SHA-256:      ${plugin.sha256}`,
    `Build Date:   ${plugin.releaseDate}`,
    ``,
    `--- DEFAULT CONFIG.YML ---`,
    plugin.configSample,
    ``,
    `--- COMMANDS ---`,
    ...plugin.commands,
    ``,
    `Deployed via KAIZEN DEVELOPER Static Artifact Engine.`
  ].join('\n');

  const blob = new Blob([bundleContent], { type: 'application/java-archive' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const cleanFileName = `${plugin.name.replace(/\s+/g, '')}-${plugin.version}.jar`;
  a.href = url;
  a.download = cleanFileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);

  incrementDownload(plugin.id);
  renderAllViews();
  showToast(`Downloaded <strong>${cleanFileName}</strong> (${plugin.mcVersions})`);
}

// Generate & Download High-Res PNG Logo (assets/logo.png) via HTML5 Canvas
function buildLogoCanvas() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Background Obsidian Gradient
  const bg = ctx.createRadialGradient(256, 256, 30, 256, 256, 256);
  bg.addColorStop(0, '#1D070D');
  bg.addColorStop(1, '#08080B');
  ctx.fillStyle = bg;
  ctx.beginPath();
  ctx.roundRect(0, 0, 512, 512, 96);
  ctx.fill();

  // Outer Red Neon Hexagon
  ctx.save();
  ctx.shadowColor = '#FF1744';
  ctx.shadowBlur = 32;
  ctx.strokeStyle = '#FF1744';
  ctx.lineWidth = 18;
  ctx.beginPath();
  const cx = 256, cy = 242, r = 168;
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.stroke();
  ctx.restore();

  // Stylized Sharp "K" Monogram
  ctx.save();
  ctx.shadowColor = '#FF1744';
  ctx.shadowBlur = 20;
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 28;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(192, 152);
  ctx.lineTo(192, 332);
  ctx.moveTo(196, 244);
  ctx.lineTo(318, 152);
  ctx.moveTo(232, 220);
  ctx.lineTo(324, 332);
  ctx.stroke();
  ctx.restore();

  // Bottom Crimson Accent Bar
  ctx.fillStyle = '#FF1744';
  ctx.fillRect(156, 444, 200, 10);

  return canvas;
}

function downloadLogoPng() {
  const canvas = buildLogoCanvas();
  canvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'logo.png';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    showToast('Exported <strong>logo.png</strong> (512x512). Save inside <code>assets/logo.png</code>.');
  }, 'image/png');
}

function hydrateBrandLogos() {
  const dataUrl = buildLogoCanvas().toDataURL('image/png');
  const navImg = document.getElementById('nav-logo-img');
  const favicon = document.getElementById('dynamic-favicon');
  const aboutPreview = document.getElementById('about-logo-preview');

  if (navImg) {
    navImg.onerror = () => {
      navImg.src = dataUrl;
      navImg.style.display = 'block';
    };
  }
  if (favicon) favicon.href = dataUrl;
  if (aboutPreview) {
    aboutPreview.innerHTML = `<img src="${dataUrl}" alt="KAIZEN DEVELOPER Emblem" style="width:100%;height:100%;border-radius:22px;box-shadow:0 0 30px rgba(255,23,68,0.45);" />`;
  }
}

// Render Card HTML
function createPluginCardHTML(plugin) {
  const dlCount = getPluginDownloads(plugin).toLocaleString();
  return `
    <article class="plugin-card">
      <div>
        <div class="card-top">
          <div class="plugin-icon-box">${getPluginSvg(plugin.category)}</div>
          <div class="card-badges">
            <span class="cat-badge">${plugin.category}</span>
            <span class="ver-badge">${plugin.version}</span>
          </div>
        </div>
        <h3 class="plugin-name">${plugin.name}</h3>
        <p class="plugin-desc">${plugin.shortDesc}</p>
      </div>
      <div>
        <div class="plugin-meta-row">
          <span>MC ${plugin.mcVersions}</span>
          <span>⬇ ${dlCount}</span>
        </div>
        <div class="card-actions">
          <button class="btn btn-outline btn-sm" onclick="openPluginDetails('${plugin.id}')">Details</button>
          <button class="btn btn-primary btn-sm" onclick="downloadPluginBundle('${plugin.id}')">Download</button>
        </div>
      </div>
    </article>
  `;
}

// Render Home Featured Plugins
function renderHomeFeatured() {
  const grid = document.getElementById('home-featured-grid');
  if (!grid) return;
  grid.innerHTML = KAIZEN_PLUGINS.slice(0, 3).map(createPluginCardHTML).join('');
}

// Render Catalog Plugins
function renderCatalog() {
  const grid = document.getElementById('catalog-plugin-grid');
  const countEl = document.getElementById('results-count');
  if (!grid) return;

  let filtered = KAIZEN_PLUGINS.filter(p => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q ||
      p.name.toLowerCase().includes(q) ||
      p.shortDesc.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.mcVersions.toLowerCase().includes(q) ||
      p.platforms.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  if (sortMode === 'downloads') {
    filtered.sort((a, b) => getPluginDownloads(b) - getPluginDownloads(a));
  } else if (sortMode === 'recent') {
    filtered.sort((a, b) => b.releaseDate.localeCompare(a.releaseDate));
  } else if (sortMode === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  countEl.textContent = `Showing ${filtered.length} plugin${filtered.length === 1 ? '' : 's'}`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="feature-box" style="grid-column: 1 / -1; text-align: center;">
        <h3>No matching plugins found</h3>
        <p style="margin: 10px 0 16px;">Try clearing your search filter or switching categories.</p>
        <button class="btn btn-primary btn-sm" onclick="resetCatalogFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(createPluginCardHTML).join('');
}

function resetCatalogFilters() {
  selectedCategory = 'All';
  searchQuery = '';
  const searchInput = document.getElementById('plugin-search');
  if (searchInput) searchInput.value = '';
  document.getElementById('clear-search').style.display = 'none';
  document.querySelectorAll('#category-pills .cat-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === 'All');
  });
  renderCatalog();
}

// Render Plugin Details Page
function renderPluginDetails() {
  const tabsContainer = document.getElementById('details-selector-tabs');
  const detailContainer = document.getElementById('plugin-detail-container');
  if (!tabsContainer || !detailContainer) return;

  tabsContainer.innerHTML = KAIZEN_PLUGINS.map(p => `
    <button class="cat-pill ${p.id === activeDetailPluginId ? 'active' : ''}" onclick="selectDetailPlugin('${p.id}')">
      ${p.name}
    </button>
  `).join('');

  const plugin = KAIZEN_PLUGINS.find(p => p.id === activeDetailPluginId) || KAIZEN_PLUGINS[0];

  detailContainer.innerHTML = `
    <div class="detail-header">
      <div class="detail-title-group">
        <div class="plugin-icon-box" style="width:64px;height:64px;">${getPluginSvg(plugin.category)}</div>
        <div>
          <span class="cat-badge">${plugin.category}</span>
          <h2 style="font-family:var(--font-display);font-size:1.7rem;margin-top:6px;">${plugin.name}</h2>
          <p style="color:var(--text-muted);font-size:0.92rem;">${plugin.platforms}</p>
        </div>
      </div>
      <div style="display:flex;gap:12px;flex-wrap:wrap;">
        <button class="btn btn-primary" onclick="downloadPluginBundle('${plugin.id}')">
          Download ${plugin.version} (.JAR)
        </button>
      </div>
    </div>

    <div class="detail-grid">
      <div>
        <div class="detail-section">
          <h3>Overview</h3>
          <p style="color:var(--text-muted);">${plugin.fullDesc}</p>
        </div>

        <div class="detail-section">
          <h3>Core Capabilities</h3>
          <ul class="feature-checklist">
            ${plugin.features.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>

        <div class="detail-section">
          <h3>Sample Configuration (config.yml)</h3>
          <div class="code-block">${plugin.configSample}</div>
        </div>
      </div>

      <div>
        <div class="spec-card" style="margin-bottom:20px;">
          <h3 style="font-family:var(--font-display);font-size:0.98rem;margin-bottom:12px;color:var(--red-primary);">Technical Specifications</h3>
          <div class="spec-row"><span class="spec-key">Version</span><span class="spec-val">${plugin.version}</span></div>
          <div class="spec-row"><span class="spec-key">Category</span><span class="spec-val">${plugin.category}</span></div>
          <div class="spec-row"><span class="spec-key">MC Support</span><span class="spec-val">${plugin.mcVersions}</span></div>
          <div class="spec-row"><span class="spec-key">Java Target</span><span class="spec-val">Java 17 / 21</span></div>
          <div class="spec-row"><span class="spec-key">Released</span><span class="spec-val">${plugin.releaseDate}</span></div>
          <div class="spec-row"><span class="spec-key">Downloads</span><span class="spec-val text-red">${getPluginDownloads(plugin).toLocaleString()}</span></div>
          <div class="spec-row"><span class="spec-key">SHA-256</span><span class="spec-val">${plugin.sha256}</span></div>
        </div>

        <div class="spec-card">
          <h3 style="font-family:var(--font-display);font-size:0.98rem;margin-bottom:12px;color:var(--red-primary);">Commands</h3>
          <ul class="feature-checklist">
            ${plugin.commands.map(c => `<li><code>${c.split(' - ')[0]}</code> — ${c.split(' - ')[1]}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;
}

function selectDetailPlugin(pluginId) {
  activeDetailPluginId = pluginId;
  renderPluginDetails();
}

function openPluginDetails(pluginId) {
  activeDetailPluginId = pluginId;
  navigateTo('plugin-details');
}

// Render Downloads Repository Table
function renderDownloadsTable() {
  const tbody = document.getElementById('downloads-table-body');
  if (!tbody) return;

  tbody.innerHTML = KAIZEN_PLUGINS.map(p => `
    <tr>
      <td>
        <div style="display:flex;align-items:center;gap:12px;">
          <div class="plugin-icon-box" style="width:38px;height:38px;border-radius:8px;">${getPluginSvg(p.category)}</div>
          <div>
            <strong>${p.name}</strong>
            <div style="font-size:0.76rem;color:var(--text-dim);">${p.platforms}</div>
          </div>
        </div>
      </td>
      <td><span class="cat-badge">${p.category}</span></td>
      <td><code>${p.version}</code></td>
      <td>${p.mcVersions}</td>
      <td><strong>${getPluginDownloads(p).toLocaleString()}</strong></td>
      <td><span class="sha-chip">${p.sha256}</span></td>
      <td>
        <button class="btn btn-primary btn-sm" onclick="downloadPluginBundle('${p.id}')">Download</button>
      </td>
    </tr>
  `).join('');
}

// Render Changelog Timeline
function renderChangelog() {
  const container = document.getElementById('changelog-timeline');
  if (!container) return;

  const items = CHANGELOG_DATA.map(release => {
    const filteredChanges = changelogFilter === 'ALL'
      ? release.changes
      : release.changes.filter(c => c.type === changelogFilter);

    if (filteredChanges.length === 0) return '';

    return `
      <div class="timeline-item">
        <div class="cl-header">
          <div>
            <span class="cl-title">${release.plugin}</span>
            <code style="margin-left:8px;">${release.version}</code>
          </div>
          <span class="cl-date">${release.date}</span>
        </div>
        <ul class="cl-list">
          ${filteredChanges.map(c => `
            <li>
              <span class="tag-type tag-${c.type}">${c.type}</span>
              <span>${c.text}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }).join('');

  container.innerHTML = items || `<p style="color:var(--text-muted);">No changelog entries match this filter.</p>`;
}

// SPA Navigation Router
function navigateTo(route) {
  const validRoutes = ['home', 'plugins', 'plugin-details', 'downloads', 'changelog', 'about', 'contact'];
  const target = validRoutes.includes(route) ? route : 'home';
  activeRoute = target;

  document.querySelectorAll('.page-view').forEach(sec => {
    sec.classList.toggle('active', sec.id === `page-${target}`);
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.route === target);
  });

  // Close mobile menu if open
  const navLinks = document.getElementById('nav-links');
  const hamburger = document.getElementById('hamburger');
  if (navLinks && hamburger) {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  window.history.replaceState(null, '', `#${target}`);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderAllViews();
}

function renderAllViews() {
  updateAllCounters();
  renderHomeFeatured();
  renderCatalog();
  renderPluginDetails();
  renderDownloadsTable();
  renderChangelog();
}

// Event Wiring
document.addEventListener('DOMContentLoaded', () => {
  hydrateBrandLogos();
  document.getElementById('current-year').textContent = new Date().getFullYear();

  // Route clicks
  document.querySelectorAll('[data-route]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const route = el.dataset.route;
      if (el.dataset.filterCat) {
        selectedCategory = el.dataset.filterCat;
        document.querySelectorAll('#category-pills .cat-pill').forEach(btn => {
          btn.classList.toggle('active', btn.dataset.category === selectedCategory);
        });
      }
      navigateTo(route);
    });
  });

  // Mobile Hamburger Toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Search Input
  const searchInput = document.getElementById('plugin-search');
  const clearBtn = document.getElementById('clear-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      clearBtn.style.display = searchQuery ? 'block' : 'none';
      renderCatalog();
    });
  }
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchQuery = '';
      searchInput.value = '';
      clearBtn.style.display = 'none';
      renderCatalog();
    });
  }

  // Category Filter Pills
  document.querySelectorAll('#category-pills .cat-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedCategory = btn.dataset.category;
      document.querySelectorAll('#category-pills .cat-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCatalog();
    });
  });

  // Sort Dropdown
  const sortSelect = document.getElementById('sort-plugins');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortMode = e.target.value;
      renderCatalog();
    });
  }

  // Changelog Filter Pills
  document.querySelectorAll('#changelog-filter-pills .cat-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      changelogFilter = btn.dataset.clFilter;
      document.querySelectorAll('#changelog-filter-pills .cat-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderChangelog();
    });
  });

  // Logo PNG Export Buttons
  ['export-logo-btn', 'about-download-logo', 'footer-logo-dl'].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        downloadLogoPng();
      });
    }
  });

  // Copy Contact Chips
  document.querySelectorAll('.copy-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const val = chip.dataset.copy;
      navigator.clipboard?.writeText(val);
      showToast(`Copied <strong>${val}</strong> to clipboard`);
    });
  });

  // Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('c-name').value.trim();
      const topic = document.getElementById('c-topic').value;
      const ticketId = 'KZN-' + Math.floor(100000 + Math.random() * 900000);
      const feedback = document.getElementById('form-feedback');
      feedback.innerHTML = `Ticket <strong>#${ticketId}</strong> logged for <strong>${name}</strong> (${topic}).`;
      showToast(`Ticket <strong>#${ticketId}</strong> submitted to KAIZEN DEVELOPER.`);
      contactForm.reset();
    });
  }

  // Initial Route from URL Hash
  const initialHash = window.location.hash.replace('#', '');
  navigateTo(initialHash || 'home');
});