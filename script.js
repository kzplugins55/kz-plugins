/* ==========================================================================
   KAIZEN STUDIO — Interactive Plugin Catalog, Inspector & Download Controller
   ========================================================================== */

const PLUGINS_DATA = [
  {
    id: "kaizen-core",
    name: "KaizenCore",
    category: "core",
    categoryLabel: "Core & Library",
    version: "v2.4.1",
    mcCompatibility: "1.20.x – 1.21.4",
    supportedPlatforms: "Paper, Purpur, Pufferfish, Folia (Java 21)",
    fileSize: "482 KB",
    downloadUrl: "releases/KaizenCore-2.4.1.jar",
    fileName: "KaizenCore-2.4.1.jar",
    releaseDate: "2026-11-10",
    shortDesc:
      "High-performance async foundation library providing HikariCP connection pooling, MiniMessage parsing, and packet-based UI builders.",
    fullDesc:
      "KaizenCore is the shared runtime backbone powering the KAIZEN STUDIO ecosystem. Built specifically for modern Java 21 virtual threads and PaperMC's async scheduler, it eliminates boilerplate across database migrations, Redis pub/sub messaging, and flicker-free scoreboard/bossbar rendering.",
    features: [
      "Zero-lock HikariCP SQLite, MySQL, and MariaDB connection pool manager with automatic schema migrations",
      "Native Adventure MiniMessage component serializer with PlaceholderAPI caching",
      "Thread-safe GUI inventory framework with paginated menus and async item skulls",
      "Built-in Redis cross-server pub/sub broker for Velocity & BungeeCord networks",
      "Real-time TPS and memory telemetry exporter for server administrators"
    ],
    commands: [
      { cmd: "/kaizencore reload", desc: "Reloads core database pools and locale configurations safely." },
      { cmd: "/kaizencore info", desc: "Displays active KAIZEN plugins, Java runtime, and pool health." },
      { cmd: "/kaizencore benchmark", desc: "Runs a non-blocking async I/O latency diagnostic." }
    ],
    permissions: [
      { node: "kaizencore.admin", desc: "Full administrative access to KaizenCore commands." },
      { node: "kaizencore.notify.updates", desc: "Receives in-game notifications when new studio builds release." }
    ],
    changelog: [
      {
        version: "v2.4.1",
        date: "2026-11-10",
        notes: [
          "Added native support for Minecraft 1.21.4 NBT data component changes.",
          "Reduced Redis pub/sub serialization overhead by 22%.",
          "Fixed rare connection leak during hot-reloads on MariaDB 11."
        ]
      },
      {
        version: "v2.4.0",
        date: "2026-10-18",
        notes: [
          "Introduced Java 21 Virtual Thread executor wrapper for async tasks.",
          "Upgraded bundled HikariCP and Adventure libraries."
        ]
      }
    ]
  },
  {
    id: "kaizen-skyblock",
    name: "KaizenSkyblock",
    category: "gameplay",
    categoryLabel: "Gameplay",
    version: "v3.8.0",
    mcCompatibility: "1.20.4 – 1.21.4",
    supportedPlatforms: "Paper, Purpur, Pufferfish (Requires KaizenCore)",
    fileSize: "1.14 MB",
    downloadUrl: "releases/KaizenSkyblock-3.8.0.jar",
    fileName: "KaizenSkyblock-3.8.0.jar",
    releaseDate: "2026-11-06",
    shortDesc:
      "Asynchronous Slime-format island world engine with custom upgrades, co-op permissions, automated minions, and live value leaderboards.",
    fullDesc:
      "Engineered to sustain 350+ concurrent players on a single Skyblock realm at a locked 20.0 TPS. KaizenSkyblock pastes schematics asynchronously without main-thread lag spikes and calculates island worth incrementally using chunk block snapshots.",
    features: [
      "Non-blocking schematic pasting and island resets with multi-biome support",
      "Granular per-member and per-visitor permission flags via interactive GUI",
      "Incremental async block value scanner supporting stacked blocks and spawners",
      "Configurable island border expansion, generator tiers, and team bank upgrades",
      "Full PlaceholderAPI, Vault, and cross-server SQL synchronization"
    ],
    commands: [
      { cmd: "/island create [template]", desc: "Generates a new personal or co-op island asynchronously." },
      { cmd: "/island panel", desc: "Opens the main island management, upgrades, and permissions GUI." },
      { cmd: "/island top", desc: "Displays the top 10 highest-value islands with live calculation timestamps." },
      { cmd: "/isadmin setlevel <player> <lvl>", desc: "Overrides an island's calculated level." }
    ],
    permissions: [
      { node: "kaizenskyblock.player", desc: "Grants standard island creation, invite, and home commands." },
      { node: "kaizenskyblock.upgrades.bypass", desc: "Allows unlocking island generator tiers without cost." },
      { node: "kaizenskyblock.admin", desc: "Grants full administrative island inspection and teleportation." }
    ],
    changelog: [
      {
        version: "v3.8.0",
        date: "2026-11-06",
        notes: [
          "Added custom cobble/basalt ore generator weights per island prestige level.",
          "Optimized chunk snapshot caching for 40% faster /is top recalculations.",
          "Added Hex & MiniMessage gradient support for island warp titles."
        ]
      }
    ]
  },
  {
    id: "kaizen-anticheat",
    name: "KaizenAnticheat",
    category: "security",
    categoryLabel: "Security",
    version: "v1.9.4",
    mcCompatibility: "1.19.4 – 1.21.4",
    supportedPlatforms: "Paper, Purpur, Spigot (PacketEvents Powered)",
    fileSize: "890 KB",
    downloadUrl: "releases/KaizenAnticheat-1.9.4.jar",
    fileName: "KaizenAnticheat-1.9.4.jar",
    releaseDate: "2026-11-02",
    shortDesc:
      "Packet-level movement prediction, reach & autoclicker heuristics, and zero-lag replay logs built directly on Netty.",
    fullDesc:
      "KaizenAnticheat inspects incoming and outgoing Netty packets off-thread to detect subtle combat and movement exploits without false-flagging high-ping or Bedrock/Geyser players.",
    features: [
      "1:1 Minecraft physics movement simulation engine with ping-compensated rollback",
      "Sub-block reach raytracing and statistical autoclicker entropy analysis",
      "Automatic Geyser/Floodgate Bedrock player profile adjustments",
      "Lightweight binary violation logs with instant staff hover-teleport alerts",
      "Configurable silent mode, setback thresholds, and automated ban-wave queues"
    ],
    commands: [
      { cmd: "/kac alerts", desc: "Toggles real-time staff violation alerts in chat." },
      { cmd: "/kac profile <player>", desc: "Inspects a player's ping, client brand, and recent check flags." },
      { cmd: "/kac logs <player>", desc: "Queries historical violation logs from async storage." }
    ],
    permissions: [
      { node: "kaizenac.alerts", desc: "Allows viewing real-time cheat detection alerts." },
      { node: "kaizenac.bypass", desc: "Exempts trusted staff accounts from active checks." },
      { node: "kaizenac.admin", desc: "Allows modifying check sensitivity and executing manual banwaves." }
    ],
    changelog: [
      {
        version: "v1.9.4",
        date: "2026-11-02",
        notes: [
          "Added Wind Charge & Mace velocity compensation for 1.21+ PvP arenas.",
          "Eliminated false positives when swimming through bubble columns with Depth Strider III."
        ]
      }
    ]
  },
  {
    id: "kaizen-economy",
    name: "KaizenEconomy",
    category: "economy",
    categoryLabel: "Economy",
    version: "v2.1.2",
    mcCompatibility: "1.20.x – 1.21.4",
    supportedPlatforms: "Paper, Purpur, Velocity Sync",
    fileSize: "640 KB",
    downloadUrl: "releases/KaizenEconomy-2.1.2.jar",
    fileName: "KaizenEconomy-2.1.2.jar",
    releaseDate: "2026-10-25",
    shortDesc:
      "Multi-currency Vault-compatible economy featuring atomic MySQL/Redis cross-server sync, player auction house, and audit ledgers.",
    fullDesc:
      "Prevent duplication exploits and race conditions during cross-server transfers. KaizenEconomy uses atomic database transactions with optimistic locking, supporting unlimited custom currencies alongside primary Vault balances.",
    features: [
      "Atomic cross-server balance locking to prevent proxy-switch dupe exploits",
      "Unlimited secondary currencies (Tokens, Gems, Shards) with custom formatting",
      "Built-in player Auction House (/ah) with category filters and expired item mail",
      "Complete searchable transaction ledger for staff anti-dupe auditing",
      "Configurable progressive wealth tax and transaction fee sinks"
    ],
    commands: [
      { cmd: "/balance [player]", desc: "Checks primary and secondary currency balances." },
      { cmd: "/pay <player> <amount>", desc: "Transfers funds with anti-spam and minimum threshold checks." },
      { cmd: "/ah", desc: "Opens the global cross-server Auction House interface." },
      { cmd: "/ecoaudit <player>", desc: "Displays the last 50 atomic transactions for an account." }
    ],
    permissions: [
      { node: "kaizeneconomy.pay", desc: "Allows sending currency to other online players." },
      { node: "kaizeneconomy.ah.sell", desc: "Allows listing items on the global Auction House." },
      { node: "kaizeneconomy.admin", desc: "Grants /eco give, take, set, and audit ledger inspection." }
    ],
    changelog: [
      {
        version: "v2.1.2",
        date: "2026-10-25",
        notes: [
          "Added shorthand suffixes (10k, 2.5m, 1b) to /pay and /ah listing commands.",
          "Improved Redis lock timeout recovery during proxy restarts."
        ]
      }
    ]
  },
  {
    id: "kaizen-dungeons",
    name: "KaizenDungeons",
    category: "gameplay",
    categoryLabel: "Gameplay",
    version: "v1.5.0",
    mcCompatibility: "1.20.4 – 1.21.4",
    supportedPlatforms: "Paper, Purpur (Java 21)",
    fileSize: "965 KB",
    downloadUrl: "releases/KaizenDungeons-1.5.0.jar",
    fileName: "KaizenDungeons-1.5.0.jar",
    releaseDate: "2026-10-12",
    shortDesc:
      "Instanced procedural dungeon runs with custom mythic boss scripting, party matchmaking, and weighted loot tables.",
    fullDesc:
      "Create replayable PvE endgame content without cluttering your main survival world. KaizenDungeons spins up isolated temporary dungeon instances, scales monster attributes to party size, and cleans up world memory immediately upon completion.",
    features: [
      "Isolated instanced dungeon worlds with automatic post-run memory disposal",
      "YAML-driven boss phase scripting with telegraph particles and custom mechanics",
      "Built-in party finder lobby GUI with class/role readiness checks",
      "Weighted loot chests with per-player instanced drops and pity timers",
      "Speedrun leaderboards with seasonal reward distribution"
    ],
    commands: [
      { cmd: "/dungeon join <id>", desc: "Queues your party into an instanced dungeon run." },
      { cmd: "/party invite <player>", desc: "Invites players to your dungeon squad." },
      { cmd: "/dungeon leave", desc: "Safely exits the active instance and restores previous location." }
    ],
    permissions: [
      { node: "kaizendungeons.play", desc: "Allows joining public dungeon queues and forming parties." },
      { node: "kaizendungeons.bypass.cooldown", desc: "Bypasses daily dungeon entry key/cooldown limits." },
      { node: "kaizendungeons.admin", desc: "Access to dungeon schematic wand and wave trigger editors." }
    ],
    changelog: [
      {
        version: "v1.5.0",
        date: "2026-10-12",
        notes: [
          "Added MythicMobs 5.7+ hook for custom boss phase triggers.",
          "Added spectate mode for downed party members inside active runs."
        ]
      }
    ]
  },
  {
    id: "kaizen-queue",
    name: "KaizenQueue",
    category: "network",
    categoryLabel: "Network",
    version: "v1.3.2",
    mcCompatibility: "Velocity / Paper 1.20+",
    supportedPlatforms: "Velocity 3.3+, Paper 1.20.x – 1.21.4",
    fileSize: "340 KB",
    downloadUrl: "releases/KaizenQueue-1.3.2.jar",
    fileName: "KaizenQueue-1.3.2.jar",
    releaseDate: "2026-09-29",
    shortDesc:
      "Smart priority proxy queue system with dynamic server balancing, AFK bypass detection, and live bossbar ETA.",
    fullDesc:
      "Manage launch-day player surges gracefully. KaizenQueue sits at the Velocity proxy layer, sorting players by rank weight, monitoring target backend TPS before forwarding connections, and displaying live position and estimated wait times.",
    features: [
      "Weighted priority tiers via LuckPerms metadata with instant rank promotion",
      "Backend server health checks (pauses queue automatically if target TPS drops)",
      "Live actionbar, bossbar, and title position/ETA indicators",
      "Graceful disconnect grace period (60s reconnect slot reservation)",
      "Per-server queue pause, whitelist, and max-player cap overrides"
    ],
    commands: [
      { cmd: "/queue <server>", desc: "Enters the proxy queue for the specified backend server." },
      { cmd: "/leavequeue", desc: "Exits your current active server queue." },
      { cmd: "/queueadmin pause <server>", desc: "Pauses or resumes connection forwarding for a server." }
    ],
    permissions: [
      { node: "kaizenqueue.priority.<weight>", desc: "Assigns numerical queue priority weight (higher = faster)." },
      { node: "kaizenqueue.bypass", desc: "Bypasses the queue completely when slots are available." },
      { node: "kaizenqueue.admin", desc: "Allows pausing, flushing, and inspecting proxy queues." }
    ],
    changelog: [
      {
        version: "v1.3.2",
        date: "2026-09-29",
        notes: [
          "Added 60-second crash reconnect protection so disconnected players keep their spot.",
          "Added PlaceholderAPI expansion (%kaizenqueue_position%, %kaizenqueue_eta%)."
        ]
      }
    ]
  }
];

// DOM Elements
const pluginsGrid = document.getElementById("pluginsGrid");
const pluginSearch = document.getElementById("pluginSearch");
const clearSearchBtn = document.getElementById("clearSearch");
const categoryPills = document.querySelectorAll(".pill");
const emptyState = document.getElementById("emptyState");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const updatesTimeline = document.getElementById("updatesTimeline");

// Modal Elements
const pluginModal = document.getElementById("pluginModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalVersion = document.getElementById("modalVersion");
const modalCompat = document.getElementById("modalCompat");
const modalSize = document.getElementById("modalSize");
const modalDescription = document.getElementById("modalDescription");
const modalSupportedNote = document.getElementById("modalSupportedNote");
const modalDownloadBtn = document.getElementById("modalDownloadBtn");
const modalDownloadLabel = document.getElementById("modalDownloadLabel");
const detailTabs = document.querySelectorAll(".detail-tab");
const detailPanels = document.querySelectorAll(".detail-panel");

// Toast Elements
const downloadToast = document.getElementById("downloadToast");
const toastTitle = document.getElementById("toastTitle");
const toastMessage = document.getElementById("toastMessage");
let toastTimeout;

// State
let activeCategory = "all";
let searchQuery = "";

// Show Download Feedback Toast
function triggerDownloadNotification(pluginName, fileName) {
  toastTitle.textContent = `Downloading ${pluginName}`;
  toastMessage.textContent = `${fileName} • Verified JAR Package`;
  downloadToast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    downloadToast.classList.remove("show");
  }, 3800);
}

// Render Plugin Cards
function renderPlugins() {
  const query = searchQuery.trim().toLowerCase();

  const filtered = PLUGINS_DATA.filter((plugin) => {
    const matchesCategory = activeCategory === "all" || plugin.category === activeCategory;
    if (!matchesCategory) return false;

    if (!query) return true;
    const searchable = [
      plugin.name,
      plugin.categoryLabel,
      plugin.shortDesc,
      plugin.mcCompatibility,
      ...plugin.commands.map((c) => c.cmd),
      ...plugin.features
    ]
      .join(" ")
      .toLowerCase();

    return searchable.includes(query);
  });

  if (filtered.length === 0) {
    pluginsGrid.innerHTML = "";
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;
  pluginsGrid.innerHTML = filtered
    .map(
      (plugin) => `
      <article class="plugin-card" data-id="${plugin.id}">
        <div>
          <div class="plugin-card-top">
            <span class="plugin-cat-badge">${plugin.categoryLabel}</span>
            <span class="plugin-version-tag">${plugin.version}</span>
          </div>
          <h3 class="plugin-title">${plugin.name}</h3>
          <p class="plugin-desc">${plugin.shortDesc}</p>
          <div class="plugin-meta">
            <span class="meta-chip">MC ${plugin.mcCompatibility}</span>
            <span class="meta-chip">${plugin.fileSize}</span>
          </div>
        </div>
        <div class="plugin-card-actions">
          <button type="button" class="btn btn-secondary btn-sm js-open-details" data-plugin-id="${plugin.id}">
            Details &amp; Docs
          </button>
          <a href="${plugin.downloadUrl}" download="${plugin.fileName}" class="btn btn-primary btn-sm js-download-plugin" data-plugin-name="${plugin.name}" data-file-name="${plugin.fileName}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span>Download</span>
          </a>
        </div>
      </article>
    `
    )
    .join("");
}

// Open Plugin Details Modal
function openPluginModal(pluginId) {
  const plugin = PLUGINS_DATA.find((p) => p.id === pluginId);
  if (!plugin) return;

  modalCategory.textContent = plugin.categoryLabel;
  modalTitle.textContent = plugin.name;
  modalVersion.textContent = plugin.version;
  modalCompat.textContent = `MC ${plugin.mcCompatibility}`;
  modalSize.textContent = plugin.fileSize;
  modalDescription.textContent = plugin.fullDesc;
  modalSupportedNote.textContent = `Supported Platforms: ${plugin.supportedPlatforms}`;

  modalDownloadBtn.href = plugin.downloadUrl;
  modalDownloadBtn.setAttribute("download", plugin.fileName);
  modalDownloadBtn.dataset.pluginName = plugin.name;
  modalDownloadBtn.dataset.fileName = plugin.fileName;
  modalDownloadLabel.textContent = `Download ${plugin.fileName}`;

  // Populate Features Tab
  document.getElementById("panel-features").innerHTML = `
    <ul class="feature-list">
      ${plugin.features
        .map(
          (feat) => `
        <li>
          <span class="feature-check">&#10003;</span>
          <span>${feat}</span>
        </li>
      `
        )
        .join("")}
    </ul>
  `;

  // Populate Commands Tab
  document.getElementById("panel-commands").innerHTML = `
    <table class="spec-table">
      <thead>
        <tr>
          <th>Command</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        ${plugin.commands
          .map(
            (c) => `
          <tr>
            <td><code class="spec-code">${c.cmd}</code></td>
            <td>${c.desc}</td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>
  `;

  // Populate Permissions Tab
  document.getElementById("panel-permissions").innerHTML = `
    <table class="spec-table">
      <thead>
        <tr>
          <th>Permission Node</th>
          <th>Access Granted</th>
        </tr>
      </thead>
      <tbody>
        ${plugin.permissions
   
