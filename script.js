/* ==========================================================================
       CAREERVERSE AI — LIVING DESIGN SYSTEM & CHAMELEON ENGINE
       ========================================================================== */

// Curated Presets Library with Font Pairings & Roles
const CuratedPresets = {
  "modern-saas": {
    name: "Modern SaaS Horizon",
    colors: ["#050816", "#38BDF8", "#818CF8", "#C084FC", "#F43F5E"],
    roles: [
      "Void Obsidian",
      "Sky Brand",
      "Indigo Primary",
      "Luminous Glow",
      "Coral Accent",
    ],
    vibe: "Modern SaaS Architecture",
    typography: {
      heading: "'Space Grotesk', sans-serif",
      headingName: "Space Grotesk",
      body: "'Plus Jakarta Sans', sans-serif",
      bodyName: "Plus Jakarta Sans",
      importUrl:
        "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600&family=Space+Grotesk:wght@600;700&display=swap",
    },
  },
  "cyber-tech": {
    name: "Cybernetic Neon",
    colors: ["#040810", "#00FF87", "#60EFFF", "#8B5CF6", "#FAFAFA"],
    roles: [
      "Dark Matrix",
      "Neon Emerald",
      "Cyan Pulse",
      "Electric Violet",
      "Pure White",
    ],
    vibe: "Cyber Tech & AI Systems",
    typography: {
      heading: "'Syne', sans-serif",
      headingName: "Syne",
      body: "'Inter', sans-serif",
      bodyName: "Inter",
      importUrl:
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Syne:wght@700;800&display=swap",
    },
  },
  "editorial-luxury": {
    name: "Velvet Champagne",
    colors: ["#0F0C15", "#FF4E50", "#F9D423", "#D946EF", "#FFF8F0"],
    roles: [
      "Night Velvet",
      "Sunset Coral",
      "Pure Gold",
      "Neon Orchid",
      "Alabaster",
    ],
    vibe: "Editorial Luxury",
    typography: {
      heading: "'Playfair Display', serif",
      headingName: "Playfair Display",
      body: "'Plus Jakarta Sans', sans-serif",
      bodyName: "Plus Jakarta Sans",
      importUrl:
        "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Plus+Jakarta+Sans:wght@400;500&display=swap",
    },
  },
  "fintech-systems": {
    name: "Fintech Precision",
    colors: ["#030712", "#10B981", "#06B6D4", "#3B82F6", "#F3F4F6"],
    roles: [
      "Deep Slate",
      "Emerald Ledger",
      "Cyan Horizon",
      "Royal Cobalt",
      "Clean White",
    ],
    vibe: "Fintech & Scalable Systems",
    typography: {
      heading: "'Outfit', sans-serif",
      headingName: "Outfit",
      body: "'Inter', sans-serif",
      bodyName: "Inter",
      importUrl:
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Outfit:wght@600;700&display=swap",
    },
  },
};

// Central Studio Application State
const StudioState = {
  theme: "dark",
  previewMode: "side-by-side",
  activePresetKey: "modern-saas",
  swatches: [],
  typography: CuratedPresets["modern-saas"].typography,
  harmonyMode: "analogous",
  exportFormat: "css",
  favorites: [],
};

// DOM Element Caches
const dom = {
  html: document.documentElement,
  themeToggleBtn: document.getElementById("themeToggleBtn"),
  themeToggleIcon: document.getElementById("themeToggleIcon"),
  headerGenerateBtn: document.getElementById("headerGenerateBtn"),
  studioShuffleBtn: document.getElementById("studioShuffleBtn"),
  copyAllHexBtn: document.getElementById("copyAllHexBtn"),
  harmonySelect: document.getElementById("harmonySelect"),
  customColorPicker: document.getElementById("customColorPicker"),
  customColorInput: document.getElementById("customColorInput"),
  customColorPreview: document.getElementById("customColorPreview"),
  generateFromColorBtn: document.getElementById("generateFromColorBtn"),
  addSwatchBtn: document.getElementById("addSwatchBtn"),
  removeSwatchBtn: document.getElementById("removeSwatchBtn"),
  swatchCountBadge: document.getElementById("swatchCountBadge"),
  paletteStage: document.getElementById("paletteStage"),
  toastDock: document.getElementById("toastDock"),
  footerYear: document.getElementById("footerYear"),
  cursorLight: document.getElementById("cursorLight"),
  mobileMenuBtn: document.getElementById("mobileMenuBtn"),
  mobileDrawer: document.getElementById("mobileDrawer"),

  // Gemini Vision Studio Caches
  openApiKeyModalBtn: document.getElementById("openApiKeyModalBtn"),
  headerKeyActiveDot: document.getElementById("headerKeyActiveDot"),
  visionKeyModalBtn: document.getElementById("visionKeyModalBtn"),
  visionKeyStatusLabel: document.getElementById("visionKeyStatusLabel"),
  geminiKeyModal: document.getElementById("geminiKeyModal"),
  closeGeminiKeyModalBtn: document.getElementById("closeGeminiKeyModalBtn"),
  cancelGeminiKeyBtn: document.getElementById("cancelGeminiKeyBtn"),
  clearGeminiKeyBtn: document.getElementById("clearGeminiKeyBtn"),
  saveGeminiKeyBtn: document.getElementById("saveGeminiKeyBtn"),
  geminiApiKeyInput: document.getElementById("geminiApiKeyInput"),
  toggleApiKeyVisibilityBtn: document.getElementById("toggleApiKeyVisibilityBtn"),
  imageDropZone: document.getElementById("imageDropZone"),
  visionImageInput: document.getElementById("visionImageInput"),
  dropPlaceholder: document.getElementById("dropPlaceholder"),
  dropPreviewContainer: document.getElementById("dropPreviewContainer"),
  visionImagePreview: document.getElementById("visionImagePreview"),
  visionScanLine: document.getElementById("visionScanLine"),
  sampleMoodboardGrid: document.getElementById("sampleMoodboardGrid"),
  visionPaletteTitle: document.getElementById("visionPaletteTitle"),
  visionPaletteSubtitle: document.getElementById("visionPaletteSubtitle"),
  visionEngineBadge: document.getElementById("visionEngineBadge"),
  visionExtractedChips: document.getElementById("visionExtractedChips"),
  visionMatchedFontLabel: document.getElementById("visionMatchedFontLabel"),
  visionFontVibeLabel: document.getElementById("visionFontVibeLabel"),
  visionMoodLabel: document.getElementById("visionMoodLabel"),
  visionRationaleText: document.getElementById("visionRationaleText"),
  applyVisionToStudioBtn: document.getElementById("applyVisionToStudioBtn"),

  // Prompt-to-Theme Studio Caches (Feature 2)
  promptToThemeForm: document.getElementById("promptToThemeForm"),
  themePromptInput: document.getElementById("themePromptInput"),
  clearPromptBtn: document.getElementById("clearPromptBtn"),
  submitPromptBtn: document.getElementById("submitPromptBtn"),
  submitPromptIcon: document.getElementById("submitPromptIcon"),
  submitPromptLabel: document.getElementById("submitPromptLabel"),
  promptPillsContainer: document.getElementById("promptPillsContainer"),
  promptResultCard: document.getElementById("promptResultCard"),
  activePromptTitle: document.getElementById("activePromptTitle"),
  activePromptMoodBadge: document.getElementById("activePromptMoodBadge"),
  activePromptTypoBadge: document.getElementById("activePromptTypoBadge"),
  activePromptRationale: document.getElementById("activePromptRationale"),
  promptEngineBadge: document.getElementById("promptEngineBadge"),

  // Hero Caches
  heroHeadline: document.getElementById("heroHeadline"),
  heroMoodBadge: document.getElementById("heroMoodBadge"),
  heroMeshStrip: document.getElementById("heroMeshStrip"),
  heroFontPairingLabel: document.getElementById("heroFontPairingLabel"),

  // Living Simulation Caches
  simBadge1: document.getElementById("simBadge1"),
  simProgressBar: document.getElementById("simProgressBar"),
  simDotAccent: document.getElementById("simDotAccent"),
  simCtaPrimary: document.getElementById("simCtaPrimary"),
  simCtaSecondary: document.getElementById("simCtaSecondary"),
  tokenDot0: document.getElementById("tokenDot0"),
  tokenHex0: document.getElementById("tokenHex0"),
  tokenDot1: document.getElementById("tokenDot1"),
  tokenHex1: document.getElementById("tokenHex1"),
  tokenDot2: document.getElementById("tokenDot2"),
  tokenHex2: document.getElementById("tokenHex2"),
  simWcagRatio: document.getElementById("simWcagRatio"),

  // Dual-Mode Lab Caches
  viewSideBySideBtn: document.getElementById("viewSideBySideBtn"),
  viewDarkOnlyBtn: document.getElementById("viewDarkOnlyBtn"),
  viewLightOnlyBtn: document.getElementById("viewLightOnlyBtn"),
  specimenDark: document.getElementById("specimenDark"),
  specimenLight: document.getElementById("specimenLight"),

  // Typography Caches
  activeTypoVibeBadge: document.getElementById("activeTypoVibeBadge"),
  sampleHeadingText: document.getElementById("sampleHeadingText"),
  sampleBodyText: document.getElementById("sampleBodyText"),
  activeHeadingName: document.getElementById("activeHeadingName"),
  activeBodyName: document.getElementById("activeBodyName"),
  fontCodeSnippet: document.getElementById("fontCodeSnippet"),
  copyFontSnippetBtn: document.getElementById("copyFontSnippetBtn"),

  // Contrast Caches
  contrastFgSelect: document.getElementById("contrastFgSelect"),
  contrastBgSelect: document.getElementById("contrastBgSelect"),
  contrastRatioValue: document.getElementById("contrastRatioValue"),
  contrastNormalStatus: document.getElementById("contrastNormalStatus"),
  contrastLargeStatus: document.getElementById("contrastLargeStatus"),
  contrastRecommendation: document.getElementById("contrastRecommendation"),
  contrastLiveCard: document.getElementById("contrastLiveCard"),

  // Preset Gallery Caches
  presetGrid: document.getElementById("presetGrid"),

  // AI Assistant Caches
  assistantAdviceText: document.getElementById("assistantAdviceText"),
  assistantLuminanceSpread: document.getElementById("assistantLuminanceSpread"),
  assistantWarmthScore: document.getElementById("assistantWarmthScore"),

  // Saved Palettes Caches
  saveCurrentPaletteBtn: document.getElementById("saveCurrentPaletteBtn"),
  savedPalettesGrid: document.getElementById("savedPalettesGrid"),

  // Export Caches
  exportFormatTitle: document.getElementById("exportFormatTitle"),
  exportCodeBlock: document.getElementById("exportCodeBlock"),
  copyExportCodeBtn: document.getElementById("copyExportCodeBtn"),
  downloadExportFileBtn: document.getElementById("downloadExportFileBtn"),

  // Bottom CTA
  ctaBottomShuffle: document.getElementById("ctaBottomShuffle"),
};

// Safe LocalStorage Utility Wrapper
const safeStore = {
  get: (key, fallback = null) => {
    try {
      const val = localStorage.getItem(key);
      return val ? JSON.parse(val) : fallback;
    } catch (e) {
      return fallback;
    }
  },
  set: (key, val) => {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {}
  },
};

// Color Math Utilities
function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const num = parseInt(
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean,
    16,
  );
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b]
      .map((x) =>
        Math.round(Math.max(0, Math.min(255, x)))
          .toString(16)
          .padStart(2, "0"),
      )
      .join("")
      .toUpperCase()
  );
}

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function hslToRgb(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}

// Relative Luminance for WCAG 2.2 Standard
function getLuminance(hex) {
  const { r, g, b } = hexToRgb(hex);
  const a = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function calculateContrast(hex1, hex2) {
  const lum1 = getLuminance(hex1);
  const lum2 = getLuminance(hex2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

// Micro-Toast Notification Utility
function showToast(message, colorBadge = null) {
  const toast = document.createElement("div");
  toast.className =
    "pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-2xl glass-studio text-xs font-semibold text-[var(--text-main)] shadow-2xl transition-all duration-300 transform translate-y-3 opacity-0 border border-[var(--border-subtle)]";

  let badge = "";
  if (colorBadge) {
    badge = `<span class="w-3.5 h-3.5 rounded-full border border-white/20 inline-block shadow-sm" style="background-color: ${colorBadge}"></span>`;
  }
  toast.innerHTML = `${badge}<span>${message}</span>`;
  dom.toastDock.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-3", "opacity-0");
  });

  setTimeout(() => {
    toast.classList.add("translate-y-3", "opacity-0");
    setTimeout(() => toast.remove(), 260);
  }, 2500);
}

function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
  } catch (e) {
    console.warn("Clipboard copy fallback error:", e);
  }
  textarea.remove();
}

// Core Chameleon Engine: Injects Active Palette into Global CSS Variables
function executeChameleonReTheming() {
  const s = StudioState.swatches;
  if (s.length < 3) return;

  // Assign Nodes
  const n0 = s[0].hex;
  const n1 = s[1].hex;
  const n2 = s[2].hex;
  const n3 = s[3] ? s[3].hex : s[1].hex;
  const n4 = s[4] ? s[4].hex : s[2].hex;

  dom.html.style.setProperty("--c-node-0", n0);
  dom.html.style.setProperty("--c-node-1", n1);
  dom.html.style.setProperty("--c-node-2", n2);
  dom.html.style.setProperty("--c-node-3", n3);
  dom.html.style.setProperty("--c-node-4", n4);

  // Dynamically apply typography tokens
  if (StudioState.typography) {
    dom.html.style.setProperty(
      "--font-heading",
      StudioState.typography.heading,
    );
    dom.html.style.setProperty("--font-body", StudioState.typography.body);
  }

  // Compute environmental background adaptation
  const rgb0 = hexToRgb(n0);
  const rgb1 = hexToRgb(n1);

  if (StudioState.theme === "dark") {
    const bgR = Math.max(5, Math.floor(rgb0.r * 0.12));
    const bgG = Math.max(8, Math.floor(rgb0.g * 0.12));
    const bgB = Math.max(22, Math.floor(rgb0.b * 0.14));
    dom.html.style.setProperty("--bg-base", `rgb(${bgR}, ${bgG}, ${bgB})`);
    dom.html.style.setProperty(
      "--border-highlight",
      `rgba(${rgb1.r}, ${rgb1.g}, ${rgb1.b}, 0.45)`,
    );
  } else {
    const bgR = Math.min(252, 245 + Math.floor(rgb0.r * 0.03));
    const bgG = Math.min(252, 247 + Math.floor(rgb0.g * 0.03));
    const bgB = Math.min(255, 250 + Math.floor(rgb0.b * 0.03));
    dom.html.style.setProperty("--bg-base", `rgb(${bgR}, ${bgG}, ${bgB})`);
    dom.html.style.setProperty(
      "--border-highlight",
      `rgba(${rgb1.r}, ${rgb1.g}, ${rgb1.b}, 0.35)`,
    );
  }

  // Update Cursor Light
  if (dom.cursorLight) {
    dom.cursorLight.style.background = `radial-gradient(circle, ${n1} 0%, transparent 65%)`;
  }

  // Sync Components & Analytics
  updateComponentSimulation();
  updateContrastMatrix();
  updateAssistantIntelligence();
  updateExportBlock();
}

// Render Swatch Columns in the Main Studio
function renderSwatchStudio() {
  dom.paletteStage.innerHTML = "";
  dom.swatchCountBadge.textContent = StudioState.swatches.length;

  StudioState.swatches.forEach((swatch, idx) => {
    const lum = getLuminance(swatch.hex);
    const isBright = lum > 0.46;
    const textColor = isBright ? "#0f172a" : "#ffffff";
    const badgeBg = isBright
      ? "rgba(0, 0, 0, 0.08)"
      : "rgba(255, 255, 255, 0.16)";

    const col = document.createElement("div");
    col.className =
      "swatch-column flex-1 min-h-[92px] sm:min-h-0 h-full rounded-2xl flex flex-col justify-between p-3.5 sm:p-5 relative group cursor-pointer overflow-hidden border border-black/5 hover:border-black/15 shadow-sm transition-all";
    col.style.backgroundColor = swatch.hex;
    col.style.color = textColor;

    col.innerHTML = `
          <!-- Hidden Native Color Picker -->
          <input type="color" class="color-picker-input absolute inset-0 opacity-0 w-full h-full cursor-pointer pointer-events-none" value="${swatch.hex}">

          <!-- Top Action Row -->
          <div class="flex items-center justify-between z-10">
            <span class="text-[10px] font-code font-bold uppercase tracking-wider px-2 py-0.5 rounded-md" style="background-color: ${badgeBg}">
              0${idx + 1} • ${swatch.role}
            </span>
            <div class="flex items-center gap-1">
              <button class="picker-trigger-btn p-2 rounded-xl transition-transform hover:scale-110 active:scale-95" style="background-color: ${badgeBg}" title="Change color">
                <i data-lucide="pipette" class="w-3.5 h-3.5"></i>
              </button>
              <button class="lock-btn p-2 rounded-xl transition-transform hover:scale-110 active:scale-95" style="background-color: ${badgeBg}" title="${swatch.isLocked ? "Locked" : "Unlocked"}">
                <i data-lucide="${swatch.isLocked ? "lock" : "unlock"}" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          </div>

          <!-- Middle Copy Hint -->
          <div class="z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 self-center">
            <span class="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full font-code shadow-sm backdrop-blur-md" style="background-color: ${badgeBg}">
              Click to Copy
            </span>
          </div>

          <!-- Bottom Meta -->
          <div class="z-10 space-y-1">
            <span class="text-[9px] uppercase font-semibold tracking-wider opacity-70 block font-code">Hex Code</span>
            <div class="flex items-center justify-between">
              <h3 class="font-code text-lg sm:text-2xl font-bold tracking-tight">${swatch.hex}</h3>
              <i data-lucide="copy" class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"></i>
            </div>
          </div>
        `;

    // Click on pillar to copy Hex
    col.addEventListener("click", (e) => {
      if (
        e.target.closest(".lock-btn") ||
        e.target.closest(".picker-trigger-btn")
      )
        return;
      copyToClipboard(swatch.hex);
      showToast(`Copied ${swatch.hex} to clipboard!`, swatch.hex);
    });

    // Lock button handler
    const lockBtn = col.querySelector(".lock-btn");
    lockBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      swatch.isLocked = !swatch.isLocked;
      renderSwatchStudio();
      showToast(
        swatch.isLocked ? `Locked ${swatch.hex}` : `Unlocked ${swatch.hex}`,
      );
    });

    // Trigger native color picker
    const pickerTriggerBtn = col.querySelector(".picker-trigger-btn");
    const colorInput = col.querySelector(".color-picker-input");
    pickerTriggerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      colorInput.showPicker ? colorInput.showPicker() : colorInput.click();
    });

    colorInput.addEventListener("input", (e) => {
      swatch.hex = e.target.value.toUpperCase();
      col.style.backgroundColor = swatch.hex;
      col.querySelector("h3").textContent = swatch.hex;
      if (idx === 1) {
        if (dom.customColorInput && dom.customColorInput !== document.activeElement) {
          dom.customColorInput.value = swatch.hex;
        }
        if (dom.customColorPicker) dom.customColorPicker.value = swatch.hex;
        if (dom.customColorPreview) dom.customColorPreview.style.backgroundColor = swatch.hex;
      }
      executeChameleonReTheming();
    });

    colorInput.addEventListener("change", () => {
      renderSwatchStudio();
      showToast(`Palette updated with ${swatch.hex}!`, swatch.hex);
    });

    dom.paletteStage.appendChild(col);
  });

  executeChameleonReTheming();
  lucide.createIcons();
}

// Component Simulation Updates
function updateComponentSimulation() {
  const s = StudioState.swatches;
  if (s.length < 3) return;

  const c0 = s[0].hex;
  const c1 = s[1].hex;
  const c2 = s[2].hex;
  const c3 = s[3] ? s[3].hex : c1;

  // Update Hero Mesh
  const stops = s.map((item) => item.hex).join(", ");
  dom.heroMeshStrip.style.background = `linear-gradient(90deg, ${stops})`;

  // Update simulation cards
  dom.simBadge1.style.background = c1;
  dom.simBadge1.style.color = getLuminance(c1) > 0.46 ? "#0f172a" : "#ffffff";
  dom.simProgressBar.style.background = `linear-gradient(90deg, ${c1}, ${c2}, ${c3})`;
  dom.simDotAccent.style.background = c3;

  dom.simCtaPrimary.style.background = c1;
  dom.simCtaPrimary.style.color =
    getLuminance(c1) > 0.46 ? "#0f172a" : "#ffffff";

  dom.simCtaSecondary.style.background = `linear-gradient(135deg, ${c1}, ${c2})`;
  dom.simCtaSecondary.style.color =
    getLuminance(c1) > 0.46 ? "#0f172a" : "#ffffff";

  dom.tokenDot0.style.background = c1;
  dom.tokenHex0.textContent = c1;
  dom.tokenDot1.style.background = c2;
  dom.tokenHex1.textContent = c2;
  dom.tokenDot2.style.background = c3;
  dom.tokenHex2.textContent = c3;

  const contrastRatio = calculateContrast(c1, c0).toFixed(1);
  dom.simWcagRatio.textContent = `${contrastRatio}:1 ${contrastRatio >= 7 ? "AAA" : contrastRatio >= 4.5 ? "AA" : "Fail"}`;

  // Sync Dual Mode Specimen Actions
  const darkBtn = dom.specimenDark.querySelector("button");
  if (darkBtn) darkBtn.style.background = c1;
  const lightBtn = dom.specimenLight.querySelector("button");
  if (lightBtn) lightBtn.style.background = c1;
}

// Contrast Matrix Synchronization
function updateContrastMatrix() {
  const s = StudioState.swatches;
  if (s.length === 0) return;

  // Preserve selections or default
  const prevFg = dom.contrastFgSelect.value || s[1].hex;
  const prevBg = dom.contrastBgSelect.value || s[0].hex;

  dom.contrastFgSelect.innerHTML = "";
  dom.contrastBgSelect.innerHTML = "";

  s.forEach((swatch, idx) => {
    const optFg = document.createElement("option");
    optFg.value = swatch.hex;
    optFg.textContent = `Node 0${idx + 1} (${swatch.hex})`;
    dom.contrastFgSelect.appendChild(optFg);

    const optBg = document.createElement("option");
    optBg.value = swatch.hex;
    optBg.textContent = `Node 0${idx + 1} (${swatch.hex})`;
    dom.contrastBgSelect.appendChild(optBg);
  });

  dom.contrastFgSelect.value = s.some((x) => x.hex === prevFg)
    ? prevFg
    : s[1].hex;
  dom.contrastBgSelect.value = s.some((x) => x.hex === prevBg)
    ? prevBg
    : s[0].hex;

  evaluateActiveContrast();
}

function evaluateActiveContrast() {
  const fg = dom.contrastFgSelect.value;
  const bg = dom.contrastBgSelect.value;
  if (!fg || !bg) return;

  const ratio = calculateContrast(fg, bg);
  dom.contrastRatioValue.textContent = `${ratio.toFixed(2)}:1`;

  // Update specimen card
  dom.contrastLiveCard.style.backgroundColor = bg;
  dom.contrastLiveCard.style.color = fg;
  dom.contrastLiveCard.style.borderColor = `rgba(${hexToRgb(fg).r}, ${hexToRgb(fg).g}, ${hexToRgb(fg).b}, 0.3)`;

  // Normal Text Check (4.5:1 AA, 7:1 AAA)
  if (ratio >= 7) {
    dom.contrastNormalStatus.className =
      "font-code text-sm font-bold text-emerald-400 flex items-center justify-center gap-1 mt-1";
    dom.contrastNormalStatus.innerHTML =
      '<i data-lucide="check" class="w-4 h-4"></i> AAA Pass';
  } else if (ratio >= 4.5) {
    dom.contrastNormalStatus.className =
      "font-code text-sm font-bold text-amber-400 flex items-center justify-center gap-1 mt-1";
    dom.contrastNormalStatus.innerHTML =
      '<i data-lucide="check" class="w-4 h-4"></i> AA Pass';
  } else {
    dom.contrastNormalStatus.className =
      "font-code text-sm font-bold text-red-400 flex items-center justify-center gap-1 mt-1";
    dom.contrastNormalStatus.innerHTML =
      '<i data-lucide="x" class="w-4 h-4"></i> Fail';
  }

  // Large Heading Check (3:1 AA, 4.5:1 AAA)
  if (ratio >= 4.5) {
    dom.contrastLargeStatus.className =
      "font-code text-sm font-bold text-emerald-400 flex items-center justify-center gap-1 mt-1";
    dom.contrastLargeStatus.innerHTML =
      '<i data-lucide="check" class="w-4 h-4"></i> AAA Pass';
  } else if (ratio >= 3) {
    dom.contrastLargeStatus.className =
      "font-code text-sm font-bold text-amber-400 flex items-center justify-center gap-1 mt-1";
    dom.contrastLargeStatus.innerHTML =
      '<i data-lucide="check" class="w-4 h-4"></i> AA Pass';
  } else {
    dom.contrastLargeStatus.className =
      "font-code text-sm font-bold text-red-400 flex items-center justify-center gap-1 mt-1";
    dom.contrastLargeStatus.innerHTML =
      '<i data-lucide="x" class="w-4 h-4"></i> Fail';
  }

  if (ratio >= 7) {
    dom.contrastRecommendation.textContent =
      "Certified for critical dashboard typography, body text, and dense data tables under all illumination levels.";
  } else if (ratio >= 4.5) {
    dom.contrastRecommendation.textContent =
      "Acceptable for standard body copy and headings. Meets WCAG 2.2 Level AA.";
  } else if (ratio >= 3) {
    dom.contrastRecommendation.textContent =
      "Recommended only for large display titles (18pt+) or non-text UI boundaries.";
  } else {
    dom.contrastRecommendation.textContent =
      "Warning: Insufficient contrast. May cause severe eye strain. Increase luminance separation.";
  }

  lucide.createIcons();
}

// AI-Inspired Analytical Assistant Calculations
function updateAssistantIntelligence() {
  const s = StudioState.swatches;
  if (s.length < 3) return;

  const luminances = s.map((x) => getLuminance(x.hex));
  const minLum = Math.min(...luminances);
  const maxLum = Math.max(...luminances);
  const spread = (maxLum - minLum).toFixed(2);

  dom.assistantLuminanceSpread.textContent = `Luminance Range: ${spread} / 1.0`;

  // Calculate warmth via average Hue
  const hues = s.map(
    (x) => rgbToHsl(hexToRgb(x.hex).r, hexToRgb(x.hex).g, hexToRgb(x.hex).b).h,
  );
  const avgHue = hues.reduce((a, b) => a + b, 0) / hues.length;

  let tempDesc = "Balanced";
  if (avgHue >= 0 && avgHue <= 70) tempDesc = "Warm Radiant";
  else if (avgHue > 70 && avgHue <= 165) tempDesc = "Organic Botanical";
  else if (avgHue > 165 && avgHue <= 270) tempDesc = "Cool Oceanic / Cyber";
  else tempDesc = "Royal Velvet";

  dom.assistantWarmthScore.textContent = `Color Mood: ${tempDesc}`;

  let advice = "";
  if (spread < 0.35) {
    advice =
      "The current palette has a narrow luminance distribution. Consider introducing a high-luminance node or an obsidian base to increase UI component hierarchy.";
  } else if (spread > 0.8) {
    advice =
      "Exceptional dynamic dynamic range! This palette provides distinct separation between backgrounds, elevated surfaces, and glowing call-to-actions.";
  } else {
    advice = `Harmonious ${tempDesc} tone structure. Well-suited for modern digital products, interactive dashboards, and design systems.`;
  }

  dom.assistantAdviceText.textContent = advice;
}

// Production Token Exporters (CSS, JSON, SCSS, Tailwind)
function updateExportBlock() {
  const s = StudioState.swatches;
  const typo = StudioState.typography;
  const fmt = StudioState.exportFormat;

  let code = "";

  if (fmt === "css") {
    dom.exportFormatTitle.textContent =
      "CSS Custom Properties (design-tokens.css)";
    code = `:root {
  /* CareerVerse Living Design Tokens */
  --font-heading: ${typo.heading};
  --font-body:    ${typo.body};

  /* Active Color Nodes */
${s.map((sw, i) => `  --color-node-${i + 1}: ${sw.hex}; /* ${sw.role} */`).join("\n")}

  /* Semantic UI Tokens */
  --color-primary:   ${s[1] ? s[1].hex : "#38bdf8"};
  --color-secondary: ${s[2] ? s[2].hex : "#818cf8"};
  --color-accent:    ${s[3] ? s[3].hex : "#c084fc"};
  --color-surface:   ${s[0] ? s[0].hex : "#050816"};
}`;
  } else if (fmt === "json") {
    dom.exportFormatTitle.textContent =
      "W3C Standard JSON Design Tokens (tokens.json)";
    const tokenObj = {
      name: "CareerVerse System Tokens",
      typography: {
        heading: typo.headingName,
        body: typo.bodyName,
      },
      colors: s.reduce((acc, sw, i) => {
        acc[`node_${i + 1}`] = { value: sw.hex, role: sw.role };
        return acc;
      }, {}),
    };
    code = JSON.stringify(tokenObj, null, 2);
  } else if (fmt === "scss") {
    dom.exportFormatTitle.textContent = "SCSS Variables (_variables.scss)";
    code = `// CareerVerse SCSS Token Map
$font-heading: ${typo.heading};
$font-body:    ${typo.body};

${s.map((sw, i) => `$color-node-${i + 1}: ${sw.hex}; // ${sw.role}`).join("\n")}

$color-primary:   ${s[1] ? s[1].hex : "#38bdf8"};
$color-secondary: ${s[2] ? s[2].hex : "#818cf8"};
$color-accent:    ${s[3] ? s[3].hex : "#c084fc"};`;
  } else if (fmt === "tailwind") {
    dom.exportFormatTitle.textContent =
      "Tailwind CSS Configuration (tailwind.config.js)";
    code = `module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
${s.map((sw, i) => `          ${(i + 1) * 100}: '${sw.hex}',`).join("\n")}
        }
      },
      fontFamily: {
        heading: [${typo.heading}],
        body: [${typo.body}]
      }
    }
  }
};`;
  }

  dom.exportCodeBlock.textContent = code;
}

// Algorithmic Palette Generator
function generateHarmonicPalette(strategy = "analogous", customBaseHex = null) {
  const currentCount = StudioState.swatches.length || 5;

  let baseHue;
  let baseSat;
  let baseLum;
  let normalizedCustomHex = null;

  if (customBaseHex) {
    let hex = customBaseHex.trim();
    if (!hex.startsWith("#")) hex = "#" + hex;
    if (hex.length === 4) {
      hex = "#" + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    }
    if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
      normalizedCustomHex = hex.toUpperCase();
      const rgb = hexToRgb(normalizedCustomHex);
      const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
      baseHue = hsl.h;
      baseSat = hsl.s;
      baseLum = hsl.l;
    }
  }

  if (baseHue === undefined) {
    baseHue = Math.floor(Math.random() * 360);
    baseSat = 75 + Math.floor(Math.random() * 20);
    baseLum = 50;
  }

  const generatedColors = [];

  for (let i = 0; i < currentCount; i++) {
    // If custom color is provided and this is the primary brand node (index 1), preserve it directly
    if (normalizedCustomHex && (i === 1 || (currentCount === 1 && i === 0))) {
      generatedColors.push(normalizedCustomHex);
      continue;
    }

    let h = baseHue;
    let s = normalizedCustomHex
      ? Math.max(35, Math.min(95, baseSat))
      : 75 + Math.floor(Math.random() * 20);
    let l = 50;

    if (strategy === "analogous") {
      h = (baseHue + i * 32) % 360;
      l = i === 0 ? 8 : (normalizedCustomHex ? Math.min(88, Math.max(25, 45 + (i - 1) * 11)) : 45 + i * 10);
    } else if (strategy === "complementary") {
      h = i % 2 === 0 ? (i === 0 ? baseHue : (baseHue + 180) % 360) : baseHue;
      if (i > 2) h = (baseHue + 180 + (i - 2) * 28) % 360;
      l = i === 0 ? 8 : (normalizedCustomHex ? Math.min(88, Math.max(25, 48 + (i - 1) * 9)) : 48 + i * 8);
    } else if (strategy === "triadic") {
      h = (baseHue + (i === 0 ? 0 : (i - 1) * 120)) % 360;
      l = i === 0 ? 8 : (normalizedCustomHex ? Math.min(88, Math.max(25, 48 + (i - 1) * 9)) : 50 + i * 8);
    } else if (strategy === "monochromatic") {
      h = baseHue;
      s = Math.max(20, baseSat);
      l = i === 0 ? 8 : Math.min(94, Math.max(18, Math.round(18 + (i / currentCount) * 72)));
    } else {
      // Curated random sampling / Luxe
      h = (baseHue + i * 55) % 360;
      l = i === 0 ? 8 : (normalizedCustomHex ? Math.min(88, Math.max(25, 48 + (i - 1) * 10)) : 50 + i * 9);
    }

    // Node 0 is always an obsidian base tinted with base hue for harmonious dark surfaces
    if (i === 0) {
      s = Math.min(s, 30);
      l = 8;
    }

    const rgb = hslToRgb(h, s, l);
    generatedColors.push(rgbToHex(rgb.r, rgb.g, rgb.b));
  }

  // Update swatches
  StudioState.swatches.forEach((swatch, idx) => {
    if (normalizedCustomHex && (idx === 1 || (currentCount === 1 && idx === 0))) {
      swatch.hex = normalizedCustomHex;
      swatch.isLocked = false;
    } else if (!swatch.isLocked && generatedColors[idx]) {
      swatch.hex = generatedColors[idx];
    }
  });

  // Keep custom color inputs in sync
  const activeColor = StudioState.swatches[1] ? StudioState.swatches[1].hex : StudioState.swatches[0].hex;
  if (dom.customColorInput && dom.customColorInput !== document.activeElement) {
    dom.customColorInput.value = activeColor;
  }
  if (dom.customColorPicker) {
    dom.customColorPicker.value = activeColor;
  }
  if (dom.customColorPreview) {
    dom.customColorPreview.style.backgroundColor = activeColor;
  }

  renderSwatchStudio();
  showToast(
    normalizedCustomHex
      ? `Generated ${strategy.toUpperCase()} palette from ${normalizedCustomHex}!`
      : `Generated ${strategy.toUpperCase()} palette!`,
    normalizedCustomHex || activeColor
  );
}

// Generate palette from user's custom color input
function generatePaletteFromCustomColor(rawHex) {
  let hex = (rawHex || "").trim();
  if (!hex) {
    showToast("Please enter a color HEX code!");
    return;
  }
  if (!hex.startsWith("#")) hex = "#" + hex;
  if (hex.length === 4) {
    hex = "#" + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
  }
  if (!/^#[0-9A-Fa-f]{6}$/.test(hex)) {
    showToast("Invalid HEX code! Format: #RRGGBB (e.g. #38BDF8)");
    return;
  }
  hex = hex.toUpperCase();

  if (dom.customColorInput) dom.customColorInput.value = hex;
  if (dom.customColorPicker) dom.customColorPicker.value = hex;
  if (dom.customColorPreview) dom.customColorPreview.style.backgroundColor = hex;

  generateHarmonicPalette(StudioState.harmonyMode, hex);
}

// Apply Presets
function loadPreset(presetKey) {
  StudioState.activePresetKey = presetKey;
  const preset = CuratedPresets[presetKey] || CuratedPresets["modern-saas"];
  StudioState.typography = preset.typography;

  StudioState.swatches = preset.colors.map((color, i) => ({
    hex: color,
    role: preset.roles[i] || `Node ${i + 1}`,
    isLocked: false,
  }));

  // Update Typography Preview Block
  dom.activeTypoVibeBadge.textContent = preset.vibe;
  dom.activeHeadingName.textContent = preset.typography.headingName;
  dom.activeBodyName.textContent = preset.typography.bodyName;
  dom.fontCodeSnippet.textContent = `@import url('${preset.typography.importUrl}');\n\nh1, h2, h3 { font-family: ${preset.typography.heading}; }\nbody { font-family: ${preset.typography.body}; }`;

  dom.heroMoodBadge.textContent = preset.name;
  dom.heroFontPairingLabel.textContent = `${preset.typography.headingName} + ${preset.typography.bodyName}`;

  if (dom.customColorInput && StudioState.swatches[1]) {
    dom.customColorInput.value = StudioState.swatches[1].hex;
    if (dom.customColorPicker) dom.customColorPicker.value = StudioState.swatches[1].hex;
    if (dom.customColorPreview) dom.customColorPreview.style.backgroundColor = StudioState.swatches[1].hex;
  }

  renderSwatchStudio();
  showToast(
    `Loaded ${preset.name} with ${preset.typography.headingName} fonts!`,
  );
}

// Render Preset Gallery
function renderPresetGallery() {
  dom.presetGrid.innerHTML = "";

  Object.entries(CuratedPresets).forEach(([key, preset]) => {
    const card = document.createElement("div");
    card.className =
      "glass-studio p-4 rounded-2xl border border-[var(--border-subtle)] space-y-3 cursor-pointer hover:border-sky-500/40 transition-all";

    const previewStrips = preset.colors
      .map(
        (c) =>
          `<div class="flex-1 h-8 rounded-lg shadow-inner" style="background-color: ${c}"></div>`,
      )
      .join("");

    card.innerHTML = `
          <div class="flex items-center justify-between">
            <h4 class="font-dyn-heading text-xs font-bold text-[var(--text-main)]">${preset.name}</h4>
            <span class="text-[10px] font-code text-[var(--text-muted)]">${preset.typography.headingName}</span>
          </div>
          <div class="flex gap-1.5">${previewStrips}</div>
        `;

    card.addEventListener("click", () => loadPreset(key));
    dom.presetGrid.appendChild(card);
  });
}

// Saved Palettes / Favorites Management
function saveCurrentPalette() {
  const paletteItem = {
    id: "pal_" + Date.now(),
    name: `Palette ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`,
    colors: StudioState.swatches.map((x) => x.hex),
    date: new Date().toLocaleDateString(),
  };

  StudioState.favorites.unshift(paletteItem);
  safeStore.set("careerverse_saved_palettes", StudioState.favorites);
  renderSavedPalettes();
  showToast("Palette saved to browser favorites!", paletteItem.colors[1]);
}

function renderSavedPalettes() {
  dom.savedPalettesGrid.innerHTML = "";

  if (StudioState.favorites.length === 0) {
    dom.savedPalettesGrid.innerHTML = `
          <div class="col-span-full p-8 text-center rounded-2xl border border-[var(--border-subtle)] text-xs text-[var(--text-muted)]">
            No saved palettes yet. Click "Save Current Palette" above to store your favorite color systems locally.
          </div>
        `;
    return;
  }

  StudioState.favorites.forEach((item, index) => {
    const card = document.createElement("div");
    card.className =
      "glass-studio p-4 rounded-2xl border border-[var(--border-subtle)] space-y-3";

    const strips = item.colors
      .map(
        (c) =>
          `<div class="flex-1 h-6 rounded-md shadow-sm" style="background-color: ${c}"></div>`,
      )
      .join("");

    card.innerHTML = `
          <div class="flex items-center justify-between text-xs">
            <span class="font-dyn-heading font-bold text-[var(--text-main)]">${item.name}</span>
            <button class="delete-saved-btn p-1 text-[var(--text-muted)] hover:text-red-400 transition-colors" data-index="${index}">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
          <div class="flex gap-1">${strips}</div>
          <button class="load-saved-btn w-full py-1.5 rounded-xl text-[11px] font-semibold bg-[var(--bg-surface-elevated)] hover:border-sky-500/40 border border-[var(--border-subtle)] text-[var(--text-main)] transition-colors" data-index="${index}">
            Load Palette
          </button>
        `;

    card.querySelector(".load-saved-btn").addEventListener("click", () => {
      StudioState.swatches = item.colors.map((c, i) => ({
        hex: c,
        role: `Node ${i + 1}`,
        isLocked: false,
      }));
      renderSwatchStudio();
      showToast(`Restored ${item.name}!`);
    });

    card.querySelector(".delete-saved-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      StudioState.favorites.splice(index, 1);
      safeStore.set("careerverse_saved_palettes", StudioState.favorites);
      renderSavedPalettes();
      showToast("Palette removed.");
    });

    dom.savedPalettesGrid.appendChild(card);
  });

  lucide.createIcons();
}

// Theme Switcher (Dark vs Light Shell)
function setInterfaceTheme(targetTheme) {
  StudioState.theme = targetTheme;
  dom.html.setAttribute("data-theme", targetTheme);
  safeStore.set("careerverse_theme", targetTheme);

  if (targetTheme === "dark") {
    dom.themeToggleIcon.setAttribute("data-lucide", "sun");
  } else {
    dom.themeToggleIcon.setAttribute("data-lucide", "moon");
  }
  lucide.createIcons();
  executeChameleonReTheming();
}

// Event Bindings
function bindStudioEvents() {
  // Theme Toggle Button
  dom.themeToggleBtn.addEventListener("click", () => {
    const nextTheme = StudioState.theme === "dark" ? "light" : "dark";
    setInterfaceTheme(nextTheme);
    showToast(
      `Switched to ${nextTheme === "dark" ? "Obsidian Dark" : "Alabaster Light"} Mode`,
    );
  });

  // Generation Buttons
  dom.headerGenerateBtn.addEventListener("click", () =>
    generateHarmonicPalette(StudioState.harmonyMode),
  );
  dom.studioShuffleBtn.addEventListener("click", () =>
    generateHarmonicPalette(StudioState.harmonyMode),
  );
  if (dom.ctaBottomShuffle) {
    dom.ctaBottomShuffle.addEventListener("click", () =>
      generateHarmonicPalette(StudioState.harmonyMode),
    );
  }

  // Spacebar to Shuffle
  window.addEventListener("keydown", (e) => {
    if (
      e.code === "Space" &&
      e.target.tagName !== "INPUT" &&
      e.target.tagName !== "TEXTAREA" &&
      e.target.tagName !== "SELECT"
    ) {
      e.preventDefault();
      generateHarmonicPalette(StudioState.harmonyMode);
    }
  });

  // Custom Color Input & Generation Controls
  if (dom.customColorPicker) {
    dom.customColorPicker.addEventListener("input", (e) => {
      const val = e.target.value.toUpperCase();
      if (dom.customColorInput) dom.customColorInput.value = val;
      if (dom.customColorPreview) dom.customColorPreview.style.backgroundColor = val;
    });
    dom.customColorPicker.addEventListener("change", (e) => {
      const val = e.target.value.toUpperCase();
      generatePaletteFromCustomColor(val);
    });
  }

  if (dom.customColorInput) {
    dom.customColorInput.addEventListener("input", (e) => {
      let val = e.target.value.trim();
      if (!val.startsWith("#") && val.length > 0) val = "#" + val;
      if (/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(val)) {
        if (dom.customColorPreview) dom.customColorPreview.style.backgroundColor = val;
        const expanded =
          val.length === 4
            ? "#" + val[1] + val[1] + val[2] + val[2] + val[3] + val[3]
            : val;
        if (dom.customColorPicker) dom.customColorPicker.value = expanded;
      }
    });

    dom.customColorInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        generatePaletteFromCustomColor(dom.customColorInput.value);
      }
    });
  }

  if (dom.generateFromColorBtn) {
    dom.generateFromColorBtn.addEventListener("click", () => {
      generatePaletteFromCustomColor(
        dom.customColorInput
          ? dom.customColorInput.value
          : dom.customColorPicker.value,
      );
    });
  }

  // Harmony Selector Change
  dom.harmonySelect.addEventListener("change", (e) => {
    StudioState.harmonyMode = e.target.value;
    generateHarmonicPalette(StudioState.harmonyMode);
  });

  // Add & Remove Swatch Controls
  dom.addSwatchBtn.addEventListener("click", () => {
    if (StudioState.swatches.length >= 7) {
      showToast("Maximum 7 swatches allowed in studio mode.");
      return;
    }
    const lastColor = StudioState.swatches[StudioState.swatches.length - 1].hex;
    const rgb = hexToRgb(lastColor);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    const newHsl = {
      h: (hsl.h + 40) % 360,
      s: hsl.s,
      l: Math.min(85, hsl.l + 10),
    };
    const newRgb = hslToRgb(newHsl.h, newHsl.s, newHsl.l);
    StudioState.swatches.push({
      hex: rgbToHex(newRgb.r, newRgb.g, newRgb.b),
      role: `Node ${StudioState.swatches.length + 1}`,
      isLocked: false,
    });
    renderSwatchStudio();
    showToast("Added new harmonic swatch node.");
  });

  dom.removeSwatchBtn.addEventListener("click", () => {
    if (StudioState.swatches.length <= 3) {
      showToast("Minimum 3 swatches required for design tokens.");
      return;
    }
    StudioState.swatches.pop();
    renderSwatchStudio();
    showToast("Removed swatch node.");
  });

  // Copy All Hex
  dom.copyAllHexBtn.addEventListener("click", () => {
    const hexList = StudioState.swatches.map((s) => s.hex).join(", ");
    copyToClipboard(hexList);
    showToast("Copied all HEX codes!");
  });

  // Dual Mode Switcher Tabs
  dom.viewSideBySideBtn.addEventListener("click", () => {
    dom.specimenDark.style.display = "block";
    dom.specimenLight.style.display = "block";
    dom.viewSideBySideBtn.className =
      "px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-purple-600 shadow";
    dom.viewDarkOnlyBtn.className =
      "px-3 py-1.5 rounded-xl text-xs font-semibold text-[var(--text-sub)] hover:text-[var(--text-main)]";
    dom.viewLightOnlyBtn.className =
      "px-3 py-1.5 rounded-xl text-xs font-semibold text-[var(--text-sub)] hover:text-[var(--text-main)]";
  });

  dom.viewDarkOnlyBtn.addEventListener("click", () => {
    dom.specimenDark.style.display = "block";
    dom.specimenLight.style.display = "none";
    dom.viewSideBySideBtn.className =
      "px-3 py-1.5 rounded-xl text-xs font-semibold text-[var(--text-sub)] hover:text-[var(--text-main)]";
    dom.viewDarkOnlyBtn.className =
      "px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-purple-600 shadow";
    dom.viewLightOnlyBtn.className =
      "px-3 py-1.5 rounded-xl text-xs font-semibold text-[var(--text-sub)] hover:text-[var(--text-main)]";
  });

  dom.viewLightOnlyBtn.addEventListener("click", () => {
    dom.specimenDark.style.display = "none";
    dom.specimenLight.style.display = "block";
    dom.viewSideBySideBtn.className =
      "px-3 py-1.5 rounded-xl text-xs font-semibold text-[var(--text-sub)] hover:text-[var(--text-main)]";
    dom.viewDarkOnlyBtn.className =
      "px-3 py-1.5 rounded-xl text-xs font-semibold text-[var(--text-sub)] hover:text-[var(--text-main)]";
    dom.viewLightOnlyBtn.className =
      "px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-purple-600 shadow";
  });

  // Contrast Selectors
  dom.contrastFgSelect.addEventListener("change", evaluateActiveContrast);
  dom.contrastBgSelect.addEventListener("change", evaluateActiveContrast);

  // Typography Pills
  document.querySelectorAll(".typo-pill").forEach((pill) => {
    pill.addEventListener("click", (e) => {
      const key = e.currentTarget.getAttribute("data-typo-preset");
      loadPreset(key);
      document.querySelectorAll(".typo-pill").forEach((p) => {
        p.className =
          "typo-pill px-3 py-1.5 rounded-xl text-xs font-semibold text-[var(--text-sub)] hover:text-[var(--text-main)] glass-studio border border-[var(--border-subtle)]";
      });
      e.currentTarget.className =
        "typo-pill px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-cyan-600 shadow";
    });
  });

  // Copy Font Snippet
  dom.copyFontSnippetBtn.addEventListener("click", () => {
    copyToClipboard(dom.fontCodeSnippet.textContent);
    showToast("Copied typography import code!");
  });

  // Export Format Tabs
  document.querySelectorAll(".export-tab").forEach((tab) => {
    tab.addEventListener("click", (e) => {
      document.querySelectorAll(".export-tab").forEach((t) => {
        t.className =
          "export-tab px-3 py-1.5 rounded-xl text-xs font-semibold text-[var(--text-sub)] hover:text-[var(--text-main)]";
      });
      e.currentTarget.className =
        "export-tab px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-sky-600 shadow";
      StudioState.exportFormat =
        e.currentTarget.getAttribute("data-export-format");
      updateExportBlock();
    });
  });

  // Copy Export Code
  dom.copyExportCodeBtn.addEventListener("click", () => {
    copyToClipboard(dom.exportCodeBlock.textContent);
    showToast(
      `Copied ${StudioState.exportFormat.toUpperCase()} design tokens!`,
    );
  });

  // Download Export File
  dom.downloadExportFileBtn.addEventListener("click", () => {
    const text = dom.exportCodeBlock.textContent;
    const fmt = StudioState.exportFormat;
    let filename = "design-tokens.css";
    let mime = "text/css";

    if (fmt === "json") {
      filename = "tokens.json";
      mime = "application/json";
    } else if (fmt === "scss") {
      filename = "_variables.scss";
      mime = "text/x-scss";
    } else if (fmt === "tailwind") {
      filename = "tailwind.config.js";
      mime = "application/javascript";
    }

    const blob = new Blob([text], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    showToast(`Downloaded ${filename}!`);
  });

  // Save Palette
  dom.saveCurrentPaletteBtn.addEventListener("click", saveCurrentPalette);

  // Mouse Follower
  window.addEventListener("mousemove", (e) => {
    if (dom.cursorLight) {
      dom.cursorLight.style.left = `${e.clientX}px`;
      dom.cursorLight.style.top = `${e.clientY}px`;
    }
  });

  // Mobile Drawer Toggle
  dom.mobileMenuBtn.addEventListener("click", () => {
    dom.mobileDrawer.classList.toggle("hidden");
    dom.mobileDrawer.classList.toggle("flex");
  });

  // Auto-close drawer on link click
  dom.mobileDrawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      dom.mobileDrawer.classList.add("hidden");
      dom.mobileDrawer.classList.remove("flex");
    });
  });
}

// ==========================================================================
// GEMINI 2.5 FLASH MULTIMODAL VISION STUDIO (FEATURE 1)
// ==========================================================================

const SampleMoodboards = [
  {
    id: "cyber-tokyo",
    name: "Cyberpunk Horizon",
    mood: "Cybernetic AI & Night Matrix",
    svg: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full rounded-xl"><defs><linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#040814"/><stop offset="50%" stop-color="#1e1035"/><stop offset="100%" stop-color="#00ff87"/></linearGradient><linearGradient id="sun" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ff007a"/><stop offset="100%" stop-color="#8b5cf6"/></linearGradient></defs><rect width="160" height="120" fill="url(#g1)"/><circle cx="80" cy="55" r="28" fill="url(#sun)" opacity="0.9"/><path d="M0 80 Q40 68 80 80 T160 80 L160 120 L0 120 Z" fill="#030611"/><line x1="0" y1="95" x2="160" y2="95" stroke="#00e5ff" stroke-width="0.75" opacity="0.6"/><line x1="80" y1="80" x2="80" y2="120" stroke="#00e5ff" stroke-width="0.75" opacity="0.6"/><line x1="40" y1="85" x2="20" y2="120" stroke="#00e5ff" stroke-width="0.75" opacity="0.6"/><line x1="120" y1="85" x2="140" y2="120" stroke="#00e5ff" stroke-width="0.75" opacity="0.6"/></svg>`,
    colors: ["#040814", "#00FF87", "#00E5FF", "#8B5CF6", "#FDFDFD"],
    roles: ["Void Matrix", "Neon Emerald", "Cyber Cyan", "Electric Violet", "Pure White"],
    typography: {
      heading: "'Syne', sans-serif",
      headingName: "Syne",
      body: "'Inter', sans-serif",
      bodyName: "Inter",
      importUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Syne:wght@700;800&display=swap",
    },
    philosophy: "Neon cyber-emerald and electric violet pierce obsidian space, establishing an authoritative tactical interface calibrated for high-throughput AI systems."
  },
  {
    id: "nordic-travertine",
    name: "Nordic Travertine",
    mood: "Architectural Serenity & Craft",
    svg: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full rounded-xl"><defs><linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#171412"/><stop offset="100%" stop-color="#3d2f26"/></linearGradient><linearGradient id="arch" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#d97757"/><stop offset="100%" stop-color="#b45309"/></linearGradient></defs><rect width="160" height="120" fill="url(#g2)"/><rect x="30" y="25" width="45" height="95" rx="22.5" fill="url(#arch)" opacity="0.9"/><rect x="85" y="45" width="45" height="75" rx="22.5" fill="#78716c" opacity="0.75"/><circle cx="110" cy="30" r="14" fill="#faf8f5" opacity="0.9"/></svg>`,
    colors: ["#171412", "#D97757", "#B45309", "#78716C", "#FAF8F5"],
    roles: ["Espresso Shadow", "Terracotta Clay", "Warm Travertine", "Stone Ochre", "Alabaster Base"],
    typography: {
      heading: "'Space Grotesk', sans-serif",
      headingName: "Space Grotesk",
      body: "'Plus Jakarta Sans', sans-serif",
      bodyName: "Plus Jakarta Sans",
      importUrl: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600&family=Space+Grotesk:wght@600;700&display=swap",
    },
    philosophy: "Earthy mineral pigments derived from natural travertine and sun-baked terracotta, projecting artisanal tactility and architectural calm."
  },
  {
    id: "sunset-velvet",
    name: "Sunset Velvet",
    mood: "Editorial Glamour & Radiance",
    svg: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full rounded-xl"><defs><linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#0f0a1c"/><stop offset="40%" stop-color="#4a0e4e"/><stop offset="100%" stop-color="#ff4e50"/></linearGradient><linearGradient id="rad" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#d946ef"/></linearGradient></defs><rect width="160" height="120" fill="url(#g3)"/><circle cx="80" cy="60" r="38" fill="url(#rad)" opacity="0.85"/><ellipse cx="80" cy="95" rx="65" ry="25" fill="#0f0a1c" opacity="0.9"/></svg>`,
    colors: ["#0F0A1C", "#FF4E50", "#F59E0B", "#D946EF", "#FFF8F0"],
    roles: ["Night Velvet", "Sunset Coral", "Honey Gold", "Neon Orchid", "Champagne Silk"],
    typography: {
      heading: "'Playfair Display', serif",
      headingName: "Playfair Display",
      body: "'Plus Jakarta Sans', sans-serif",
      bodyName: "Plus Jakarta Sans",
      importUrl: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Plus+Jakarta+Sans:wght@400;500&display=swap",
    },
    philosophy: "Deep violet dusk cradles incandescent coral and champagne highlights, achieving high-luxury editorial warmth and expressive visual storytelling."
  },
  {
    id: "emerald-mist",
    name: "Rainforest Canopy",
    mood: "Organic Bio-Systems & Vitality",
    svg: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full rounded-xl"><defs><linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#022018"/><stop offset="60%" stop-color="#064e3b"/><stop offset="100%" stop-color="#10b981"/></linearGradient></defs><rect width="160" height="120" fill="url(#g4)"/><circle cx="120" cy="35" r="22" fill="#fbbf24" opacity="0.85"/><path d="M0 120 L35 60 L70 120 Z" fill="#032b20" opacity="0.95"/><path d="M50 120 L90 50 L130 120 Z" fill="#065f46" opacity="0.9"/><path d="M100 120 L135 65 L160 120 Z" fill="#047857" opacity="0.85"/></svg>`,
    colors: ["#022018", "#10B981", "#06B6D4", "#FBBF24", "#F0FDF4"],
    roles: ["Abyssal Moss", "Bio Emerald", "Misty Cyan", "Solar Amber", "Mint Dew"],
    typography: {
      heading: "'Outfit', sans-serif",
      headingName: "Outfit",
      body: "'Inter', sans-serif",
      bodyName: "Inter",
      importUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Outfit:wght@600;700&display=swap",
    },
    philosophy: "Lush bio-emerald accents anchored by abyssal moss, balanced by solar gold accents for an organic, regenerative product aura."
  }
];

function initGeminiVisionStudio() {
  const currentKey = safeStore.get("careerverse_gemini_api_key", "");

  function updateKeyBadgeUI() {
    const key = safeStore.get("careerverse_gemini_api_key", "");
    if (key && key.trim().length > 10) {
      if (dom.headerKeyActiveDot) dom.headerKeyActiveDot.classList.remove("hidden");
      if (dom.visionKeyStatusLabel) dom.visionKeyStatusLabel.textContent = "Gemini Key: Active";
      if (dom.visionEngineBadge) {
        dom.visionEngineBadge.textContent = "Gemini 2.5 Flash Vision";
        dom.visionEngineBadge.className =
          "self-start sm:self-auto px-2.5 py-1 rounded-full text-[10px] font-code font-bold bg-purple-500/15 text-purple-400 border border-purple-500/30";
      }
    } else {
      if (dom.headerKeyActiveDot) dom.headerKeyActiveDot.classList.add("hidden");
      if (dom.visionKeyStatusLabel) dom.visionKeyStatusLabel.textContent = "Configure Gemini Key";
      if (dom.visionEngineBadge) {
        dom.visionEngineBadge.textContent = "Chameleon Vision Engine";
        dom.visionEngineBadge.className =
          "self-start sm:self-auto px-2.5 py-1 rounded-full text-[10px] font-code font-bold bg-sky-500/10 text-sky-400 border border-sky-500/20";
      }
    }
  }

  updateKeyBadgeUI();

  // Modal event bindings
  function openKeyModal() {
    if (dom.geminiKeyModal) {
      dom.geminiKeyModal.classList.remove("hidden");
      dom.geminiKeyModal.classList.add("flex");
      const stored = safeStore.get("careerverse_gemini_api_key", "");
      if (dom.geminiApiKeyInput) dom.geminiApiKeyInput.value = stored;
    }
  }

  function closeKeyModal() {
    if (dom.geminiKeyModal) {
      dom.geminiKeyModal.classList.add("hidden");
      dom.geminiKeyModal.classList.remove("flex");
    }
  }

  if (dom.openApiKeyModalBtn) dom.openApiKeyModalBtn.addEventListener("click", openKeyModal);
  if (dom.visionKeyModalBtn) dom.visionKeyModalBtn.addEventListener("click", openKeyModal);
  if (dom.closeGeminiKeyModalBtn) dom.closeGeminiKeyModalBtn.addEventListener("click", closeKeyModal);
  if (dom.cancelGeminiKeyBtn) dom.cancelGeminiKeyBtn.addEventListener("click", closeKeyModal);

  if (dom.geminiKeyModal) {
    dom.geminiKeyModal.addEventListener("click", (e) => {
      if (e.target === dom.geminiKeyModal) closeKeyModal();
    });
  }

  if (dom.saveGeminiKeyBtn) {
    dom.saveGeminiKeyBtn.addEventListener("click", () => {
      const val = (dom.geminiApiKeyInput ? dom.geminiApiKeyInput.value : "").trim();
      if (!val) {
        showToast("Please enter an API key or use demo mode.");
        return;
      }
      safeStore.set("careerverse_gemini_api_key", val);
      updateKeyBadgeUI();
      closeKeyModal();
      showToast("Gemini 2.5 Flash Vision API Key activated!");
    });
  }

  if (dom.clearGeminiKeyBtn) {
    dom.clearGeminiKeyBtn.addEventListener("click", () => {
      safeStore.set("careerverse_gemini_api_key", "");
      if (dom.geminiApiKeyInput) dom.geminiApiKeyInput.value = "";
      updateKeyBadgeUI();
      closeKeyModal();
      showToast("Gemini Key removed. Switched to Vision Engine fallback.");
    });
  }

  if (dom.toggleApiKeyVisibilityBtn && dom.geminiApiKeyInput) {
    dom.toggleApiKeyVisibilityBtn.addEventListener("click", () => {
      const isPwd = dom.geminiApiKeyInput.type === "password";
      dom.geminiApiKeyInput.type = isPwd ? "text" : "password";
    });
  }

  // Render Sample Moodboard Cards
  if (dom.sampleMoodboardGrid) {
    dom.sampleMoodboardGrid.innerHTML = "";
    SampleMoodboards.forEach((item) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className =
        "sample-moodboard-card group relative p-1.5 rounded-2xl glass-studio border border-[var(--border-subtle)] hover:border-sky-500/50 transition-all text-left flex flex-col gap-1.5 active:scale-95";
      btn.innerHTML = `
        <div class="w-full h-14 rounded-xl overflow-hidden pointer-events-none shadow-sm">
          ${item.svg}
        </div>
        <div class="px-1 py-0.5">
          <p class="text-[11px] font-bold text-[var(--text-main)] truncate">${item.name}</p>
          <div class="flex items-center gap-1 mt-1">
            ${item.colors.slice(0, 4).map(c => `<span class="w-2.5 h-2.5 rounded-full inline-block shadow-xs" style="background-color: ${c}"></span>`).join("")}
          </div>
        </div>
      `;
      btn.addEventListener("click", () => {
        applyVisionDesignSystem(item, `data:image/svg+xml;utf8,${encodeURIComponent(item.svg)}`);
      });
      dom.sampleMoodboardGrid.appendChild(btn);
    });
  }

  // Render Extracted Color Chips
  function renderVisionChips(colors, roles) {
    if (!dom.visionExtractedChips) return;
    dom.visionExtractedChips.innerHTML = "";

    colors.forEach((color, idx) => {
      const lum = getLuminance(color);
      const isBright = lum > 0.46;
      const textColor = isBright ? "#0f172a" : "#ffffff";
      const badgeBg = isBright ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.16)";

      const chip = document.createElement("div");
      chip.className =
        "rounded-2xl p-2 sm:p-2.5 flex flex-col justify-between border border-black/5 hover:border-white/30 cursor-pointer transition-transform hover:scale-105 shadow-sm";
      chip.style.backgroundColor = color;
      chip.style.color = textColor;
      chip.title = `Click to copy ${color}`;

      chip.innerHTML = `
        <span class="text-[9px] font-code font-bold uppercase tracking-wider px-1.5 py-0.5 rounded" style="background-color: ${badgeBg}">
          0${idx + 1}
        </span>
        <div class="space-y-0.5">
          <span class="text-[8px] font-code block uppercase opacity-80 truncate">${roles[idx] || "Node"}</span>
          <span class="text-[10px] sm:text-xs font-code font-bold block">${color}</span>
        </div>
      `;

      chip.addEventListener("click", () => {
        copyToClipboard(color);
        showToast(`Copied ${color}!`, color);
      });

      dom.visionExtractedChips.appendChild(chip);
    });
  }

  // Apply Vision tokens across whole app
  function applyVisionDesignSystem(result, previewImageSrc = null) {
    if (!result || !result.colors || result.colors.length < 5) return;

    // Show image in preview box
    if (previewImageSrc) {
      if (dom.visionImagePreview) dom.visionImagePreview.src = previewImageSrc;
      if (dom.dropPreviewContainer) dom.dropPreviewContainer.classList.remove("hidden");
      if (dom.dropPlaceholder) dom.dropPlaceholder.classList.add("hidden");
    }

    // Apply swatches
    StudioState.swatches = result.colors.map((hex, i) => ({
      hex: hex.toUpperCase(),
      role: result.roles[i] || `Node ${i + 1}`,
      isLocked: false,
    }));

    // Apply typography if returned
    if (result.typography) {
      StudioState.typography = result.typography;
      if (result.typography.importUrl) {
        let dynamicFontLink = document.getElementById("dynamicAiFontLink");
        if (!dynamicFontLink) {
          dynamicFontLink = document.createElement("link");
          dynamicFontLink.id = "dynamicAiFontLink";
          dynamicFontLink.rel = "stylesheet";
          document.head.appendChild(dynamicFontLink);
        }
        dynamicFontLink.href = result.typography.importUrl;
      }

      dom.html.style.setProperty("--font-heading", result.typography.heading);
      dom.html.style.setProperty("--font-body", result.typography.body);

      if (dom.activeHeadingName) dom.activeHeadingName.textContent = result.typography.headingName;
      if (dom.activeBodyName) dom.activeBodyName.textContent = result.typography.bodyName;
      if (dom.heroFontPairingLabel) dom.heroFontPairingLabel.textContent = `${result.typography.headingName} + ${result.typography.bodyName}`;
      if (dom.fontCodeSnippet) {
        dom.fontCodeSnippet.textContent = `@import url('${result.typography.importUrl}');\n\nh1, h2, h3 { font-family: ${result.typography.heading}; }\nbody { font-family: ${result.typography.body}; }`;
      }
    }

    // Update vision UI cards
    if (dom.visionPaletteTitle) dom.visionPaletteTitle.textContent = result.paletteName || result.name || "Moodboard System";
    if (dom.visionPaletteSubtitle) dom.visionPaletteSubtitle.textContent = result.mood || "Multimodal Vision Extraction";
    if (dom.visionMatchedFontLabel && result.typography) {
      dom.visionMatchedFontLabel.textContent = `${result.typography.headingName} + ${result.typography.bodyName}`;
    }
    if (dom.visionMoodLabel) dom.visionMoodLabel.textContent = result.mood || "Visual Moodboard Extraction";
    if (dom.visionRationaleText) {
      dom.visionRationaleText.textContent = `“${result.philosophy || result.designPhilosophy || "Colors and typography extracted to preserve semantic hierarchy and spatial contrast."}”`;
    }

    renderVisionChips(result.colors, result.roles);
    executeChameleonReTheming();
    renderSwatchStudio();

    // Sync custom color input
    if (dom.customColorInput) dom.customColorInput.value = result.colors[1];
    if (dom.customColorPicker) dom.customColorPicker.value = result.colors[1];
    if (dom.customColorPreview) dom.customColorPreview.style.backgroundColor = result.colors[1];

    showToast(`Moodboard Theme: ${result.paletteName || result.name}!`, result.colors[1]);
  }

  // Local Canvas Color Extractor (Fallback & 0-latency engine)
  function extractColorsFromCanvas(img) {
    try {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const maxDim = 80;
      const scale = Math.min(maxDim / (img.naturalWidth || 80), maxDim / (img.naturalHeight || 80), 1);
      canvas.width = Math.max(10, Math.floor((img.naturalWidth || 80) * scale));
      canvas.height = Math.max(10, Math.floor((img.naturalHeight || 80) * scale));
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

      const samples = [];
      for (let i = 0; i < data.length; i += 16) {
        const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
        if (a < 128) continue;
        const hsl = rgbToHsl(r, g, b);
        samples.push({ hex: rgbToHex(r, g, b), r, g, b, ...hsl });
      }

      if (samples.length === 0) throw new Error("No pixel samples");

      const byLightness = [...samples].sort((a, b) => a.l - b.l);
      const voidNode = byLightness[0].hex;
      const lightNode = byLightness[byLightness.length - 1].hex;

      let vibrants = samples.filter((s) => s.s >= 25 && s.l >= 25 && s.l <= 75);
      if (vibrants.length === 0) vibrants = samples;
      vibrants.sort((a, b) => b.s - a.s);

      const primaryNode = vibrants[0].hex;
      const primHsl = vibrants[0];

      let secondaryCandidate = vibrants.find(
        (v) => Math.abs(v.h - primHsl.h) > 35 && Math.abs(v.h - primHsl.h) < 325,
      );
      const secondaryNode = secondaryCandidate ? secondaryCandidate.hex : (vibrants[1] ? vibrants[1].hex : "#818CF8");

      let glowCandidate = vibrants.find(
        (v) => v.l >= 55 && v.hex !== primaryNode && v.hex !== secondaryNode,
      );
      const glowNode = glowCandidate ? glowCandidate.hex : (vibrants[2] ? vibrants[2].hex : "#C084FC");

      const colors = [voidNode, primaryNode, secondaryNode, glowNode, lightNode];

      let typography;
      let moodName;
      if (primHsl.h >= 160 && primHsl.h <= 260) {
        typography = CuratedPresets["modern-saas"].typography;
        moodName = "Digital Horizon & Cool SaaS";
      } else if (primHsl.h >= 270 && primHsl.h <= 340) {
        typography = CuratedPresets["cyber-tech"].typography;
        moodName = "Cybernetic Pulse & Neon Matrix";
      } else if (primHsl.h >= 10 && primHsl.h <= 70) {
        typography = CuratedPresets["editorial-luxury"].typography;
        moodName = "Warm Mineral & Editorial Elegance";
      } else {
        typography = CuratedPresets["fintech-systems"].typography;
        moodName = "Regenerative Harmony & Precision";
      }

      return {
        paletteName: "Image Atmosphere System",
        mood: moodName,
        colors,
        roles: ["Void Base", "Primary Brand", "Secondary Accent", "Luminous Glow", "Surface Light"],
        typography,
        designPhilosophy: "Synthesized via Chameleon Vision Engine. Color clustering isolated high-chroma brand focal points balanced against deep void anchors."
      };
    } catch (err) {
      return SampleMoodboards[0];
    }
  }

  // Google Gemini 2.5 Flash Vision API Caller
  async function callGeminiVisionApi(base64Data, mimeType, apiKey) {
    const prompt = `You are an elite design systems architect and color theorist.
Analyze this moodboard/image and extract a production-grade 5-color living design system and matching Google Fonts typography pairing.
Return ONLY raw JSON with this exact schema (no markdown formatting, no backticks):
{
  "paletteName": "Creative 2-3 word name for this palette",
  "mood": "Short emotional mood description (e.g., Cyberpunk AI Matrix, Minimalist Nordic Calm)",
  "colors": ["#050816", "#38BDF8", "#818CF8", "#C084FC", "#F43F5E"],
  "roles": ["Void Base", "Primary Brand", "Secondary Accent", "Luminous Glow", "Surface Light"],
  "typography": {
    "headingName": "Space Grotesk | Syne | Playfair Display | Outfit | Inter",
    "heading": "'Space Grotesk', sans-serif",
    "bodyName": "Plus Jakarta Sans | Inter",
    "body": "'Plus Jakarta Sans', sans-serif",
    "importUrl": "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600&family=Space+Grotesk:wght@600;700&display=swap"
  },
  "designPhilosophy": "2-3 sentences explaining the visual harmony and why these tokens represent the soul of the image."
}
Rules:
1. colors[0] MUST be a deep, dark obsidian/base surface (luminance < 12%) tinted with the image's dominant mood.
2. colors[1] MUST be the primary vibrant hero/brand color extracted from the most emotional part of the image.
3. colors[2] and colors[3] are secondary and glow accents.
4. colors[4] MUST be a crisp high-luminance light surface/highlight (luminance > 88%).
5. All 5 colors must be valid 6-character hex format (#RRGGBB).`;

    const cleanBase64 = base64Data.replace(/^data:image\/[a-z]+;base64,/, "");

    const tryModels = ["gemini-2.5-flash", "gemini-1.5-flash"];
    for (const model of tryModels) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  { text: prompt },
                  { inline_data: { mime_type: mimeType || "image/jpeg", data: cleanBase64 } },
                ],
              },
            ],
            generationConfig: {
              response_mime_type: "application/json",
            },
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (rawText) {
            return JSON.parse(rawText.replace(/```json/g, "").replace(/```/g, "").trim());
          }
        }
      } catch (e) {
        console.warn(`Vision model ${model} failed, trying next:`, e);
      }
    }
    throw new Error("Gemini Vision API request failed");
  }

  // Handle Image Processing (Gemini API with Canvas fallback)
  async function processImageForVision(dataUrl, mimeType) {
    if (dom.visionScanLine) {
      dom.visionScanLine.classList.remove("hidden");
      dom.visionScanLine.classList.add("vision-scanning-active");
    }
    if (dom.visionImagePreview) dom.visionImagePreview.src = dataUrl;
    if (dom.dropPreviewContainer) dom.dropPreviewContainer.classList.remove("hidden");
    if (dom.dropPlaceholder) dom.dropPlaceholder.classList.add("hidden");

    showToast("Analyzing moodboard with Vision Engine...");

    const apiKey = safeStore.get("careerverse_gemini_api_key", "");

    if (apiKey && apiKey.trim().length > 10) {
      try {
        const result = await callGeminiVisionApi(dataUrl, mimeType, apiKey.trim());
        if (result && result.colors && result.colors.length >= 5) {
          applyVisionDesignSystem(result, dataUrl);
          if (dom.visionScanLine) dom.visionScanLine.classList.add("hidden");
          return;
        }
      } catch (err) {
        console.warn("Gemini Vision call fallback:", err);
        showToast("Gemini API call timed out or failed. Utilizing high-fidelity Vision Engine.");
      }
    }

    // Fallback: Canvas extraction
    const img = new Image();
    img.onload = () => {
      const result = extractColorsFromCanvas(img);
      applyVisionDesignSystem(result, dataUrl);
      if (dom.visionScanLine) dom.visionScanLine.classList.add("hidden");
    };
    img.src = dataUrl;
  }

  // File Input Handler
  if (dom.visionImageInput) {
    dom.visionImageInput.addEventListener("change", (e) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (re) => processImageForVision(re.target.result, file.type);
        reader.readAsDataURL(file);
      }
    });
  }

  // Drag and Drop Handlers
  if (dom.imageDropZone) {
    dom.imageDropZone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dom.imageDropZone.classList.add("border-sky-400", "scale-[1.01]");
    });
    dom.imageDropZone.addEventListener("dragleave", () => {
      dom.imageDropZone.classList.remove("border-sky-400", "scale-[1.01]");
    });
    dom.imageDropZone.addEventListener("drop", (e) => {
      e.preventDefault();
      dom.imageDropZone.classList.remove("border-sky-400", "scale-[1.01]");
      const file = e.dataTransfer.files?.[0];
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (re) => processImageForVision(re.target.result, file.type);
        reader.readAsDataURL(file);
      }
    });
  }

  // Global Clipboard Paste Handler (Ctrl+V)
  window.addEventListener("paste", (e) => {
    const items = (e.clipboardData || e.originalEvent?.clipboardData)?.items;
    if (items) {
      for (const item of items) {
        if (item.type.indexOf("image") !== -1) {
          const file = item.getAsFile();
          if (file) {
            const reader = new FileReader();
            reader.onload = (re) => processImageForVision(re.target.result, file.type);
            reader.readAsDataURL(file);
            showToast("Pasted image from clipboard!");
          }
          break;
        }
      }
    }
  });

  // Synchronize button
  if (dom.applyVisionToStudioBtn) {
    dom.applyVisionToStudioBtn.addEventListener("click", () => {
      const studioSec = document.getElementById("generator-studio");
      if (studioSec) {
        studioSec.scrollIntoView({ behavior: "smooth" });
        showToast("Synchronized with Swatch Studio!");
      }
    });
  }

  // Load initial preset into vision studio preview chips
  renderVisionChips(
    CuratedPresets["modern-saas"].colors,
    CuratedPresets["modern-saas"].roles
  );
}

// ==========================================================================
// GEMINI 2.5 FLASH PROMPT-TO-THEME STUDIO (FEATURE 2)
// ==========================================================================

const PromptInspirations = [
  {
    icon: "gem",
    badge: "Swiss Luxury",
    prompt: "A luxury Swiss watchmaking brand inspired by obsidian slate and champagne gold",
    fallback: {
      paletteName: "Obsidian & Champagne Horology",
      mood: "Luxury Swiss Haute Horlogerie",
      colors: ["#0C0A09", "#D4AF37", "#9E814D", "#E8D8B0", "#FAF8F5"],
      roles: ["Obsidian Slate", "Champagne Gold", "Smoked Quartz", "Luminous Pearl", "Alabaster Base"],
      typography: {
        heading: "'Playfair Display', serif",
        headingName: "Playfair Display",
        body: "'Plus Jakarta Sans', sans-serif",
        bodyName: "Plus Jakarta Sans",
        importUrl: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Plus+Jakarta+Sans:wght@400;500&display=swap"
      },
      designPhilosophy: "Deep obsidian surfaces frame champagne gold accents, balanced by editorial serif typography to convey timeless Swiss prestige and mechanical precision."
    }
  },
  {
    icon: "zap",
    badge: "Gen-Z Fintech",
    prompt: "A playful fintech app for Gen-Z college students with high contrast and dark mode",
    fallback: {
      paletteName: "Electric Neon Ledger",
      mood: "Playful Gen-Z Financial Velocity",
      colors: ["#050B14", "#10B981", "#3B82F6", "#F43F5E", "#F8FAFC"],
      roles: ["Abyssal Space", "Electric Lime", "Vivid Cobalt", "Sunset Coral", "Ultra White"],
      typography: {
        heading: "'Space Grotesk', sans-serif",
        headingName: "Space Grotesk",
        body: "'Plus Jakarta Sans', sans-serif",
        bodyName: "Plus Jakarta Sans",
        importUrl: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600&family=Space+Grotesk:wght@600;700&display=swap"
      },
      designPhilosophy: "High-voltage neon accents pop against deep dark surfaces, providing tactile component hierarchy and maximum micro-interaction engagement for modern banking."
    }
  },
  {
    icon: "shield-check",
    badge: "Cyberpunk AAA",
    prompt: "Cyberpunk neon crypto dashboard with WCAG AAA readability",
    fallback: {
      paletteName: "Matrix Cyberpulse AAA",
      mood: "Tactical Cyberpunk & High Accessibility",
      colors: ["#040812", "#00FF87", "#00E5FF", "#8B5CF6", "#FFFFFF"],
      roles: ["Void Core", "Cyber Matrix", "Cyan Terminal", "Electric Violet", "High-Contrast White"],
      typography: {
        heading: "'Syne', sans-serif",
        headingName: "Syne",
        body: "'Inter', sans-serif",
        bodyName: "Inter",
        importUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Syne:wght@700;800&display=swap"
      },
      designPhilosophy: "Ultra-vibrant bio-fluorescent cyans and matrix greens paired with stark white text guarantees over 7:1 contrast compliance across all crypto telemetry."
    }
  },
  {
    icon: "leaf",
    badge: "Matcha Botanical",
    prompt: "Minimalist Japanese matcha tea ceremonial brand with sage green and cream",
    fallback: {
      paletteName: "Ceremonial Matcha & Wabi-Sabi",
      mood: "Botanical Tranquility & Ritual",
      colors: ["#0E1913", "#6B8E23", "#8A9A86", "#D4C5B9", "#FCFBF7"],
      roles: ["Charcoal Moss", "Ceremonial Sage", "Muted Lichen", "Wabi Travertine", "Warm Cream"],
      typography: {
        heading: "'Outfit', sans-serif",
        headingName: "Outfit",
        body: "'Inter', sans-serif",
        bodyName: "Inter",
        importUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Outfit:wght@600;700&display=swap"
      },
      designPhilosophy: "Natural botanical greens grounded in warm earthen minerals cultivate an aura of meditative calm, clarity, and ritualistic focus."
    }
  },
  {
    icon: "waves",
    badge: "Deep Ocean",
    prompt: "Deep oceanic bioluminescent dashboard with cyan glow and abyssal navy",
    fallback: {
      paletteName: "Abyssal Mariana Glow",
      mood: "Submersible Bioluminescence & Depth",
      colors: ["#020A17", "#06B6D4", "#2563EB", "#67E8F9", "#F0F9FF"],
      roles: ["Midnight Trench", "Bioluminescent Cyan", "Cobalt Pelagic", "Shallow Aqua", "Foam Highlight"],
      typography: {
        heading: "'Space Grotesk', sans-serif",
        headingName: "Space Grotesk",
        body: "'Inter', sans-serif",
        bodyName: "Inter",
        importUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Space+Grotesk:wght@600;700&display=swap"
      },
      designPhilosophy: "Vivid cyan and aqua luminescence emanate from deep oceanic navy, mirroring deep-sea sonar telemetry and radiant bio-luminescence."
    }
  }
];

function initPromptToThemeStudio() {
  function renderPromptPills() {
    if (!dom.promptPillsContainer) return;
    dom.promptPillsContainer.innerHTML = "";

    PromptInspirations.forEach((item) => {
      const pill = document.createElement("button");
      pill.type = "button";
      pill.className =
        "px-3 py-1.5 rounded-xl glass-studio border border-[var(--border-subtle)] hover:border-amber-400/50 text-[11px] font-medium text-[var(--text-sub)] hover:text-[var(--text-main)] transition-all flex items-center gap-1.5 active:scale-95 text-left";
      pill.innerHTML = `
        <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
        <span class="font-bold text-amber-400">${item.badge}:</span>
        <span class="truncate max-w-[220px] sm:max-w-xs">${item.prompt}</span>
      `;
      pill.addEventListener("click", () => {
        if (dom.themePromptInput) {
          dom.themePromptInput.value = item.prompt;
          if (dom.clearPromptBtn) dom.clearPromptBtn.classList.remove("hidden");
        }
        executeThemePrompt(item.prompt, item.fallback);
      });
      dom.promptPillsContainer.appendChild(pill);
    });
  }

  renderPromptPills();

  // Clear button logic
  if (dom.themePromptInput) {
    dom.themePromptInput.addEventListener("input", (e) => {
      if (dom.clearPromptBtn) {
        if (e.target.value.trim().length > 0) {
          dom.clearPromptBtn.classList.remove("hidden");
        } else {
          dom.clearPromptBtn.classList.add("hidden");
        }
      }
    });
  }

  if (dom.clearPromptBtn && dom.themePromptInput) {
    dom.clearPromptBtn.addEventListener("click", () => {
      dom.themePromptInput.value = "";
      dom.clearPromptBtn.classList.add("hidden");
      dom.themePromptInput.focus();
    });
  }

  // Apply Prompt Design System to app
  function applyPromptDesignSystem(result) {
    if (!result || !result.colors || result.colors.length < 5) return;

    // Apply swatches
    StudioState.swatches = result.colors.map((hex, i) => ({
      hex: hex.toUpperCase(),
      role: result.roles[i] || `Node ${i + 1}`,
      isLocked: false,
    }));

    // Apply typography
    if (result.typography) {
      StudioState.typography = result.typography;
      if (result.typography.importUrl) {
        let dynamicFontLink = document.getElementById("dynamicAiFontLink");
        if (!dynamicFontLink) {
          dynamicFontLink = document.createElement("link");
          dynamicFontLink.id = "dynamicAiFontLink";
          dynamicFontLink.rel = "stylesheet";
          document.head.appendChild(dynamicFontLink);
        }
        dynamicFontLink.href = result.typography.importUrl;
      }

      dom.html.style.setProperty("--font-heading", result.typography.heading);
      dom.html.style.setProperty("--font-body", result.typography.body);

      if (dom.activeHeadingName) dom.activeHeadingName.textContent = result.typography.headingName;
      if (dom.activeBodyName) dom.activeBodyName.textContent = result.typography.bodyName;
      if (dom.heroFontPairingLabel) dom.heroFontPairingLabel.textContent = `${result.typography.headingName} + ${result.typography.bodyName}`;
      if (dom.fontCodeSnippet) {
        dom.fontCodeSnippet.textContent = `@import url('${result.typography.importUrl}');\n\nh1, h2, h3 { font-family: ${result.typography.heading}; }\nbody { font-family: ${result.typography.body}; }`;
      }
    }

    // Update Result Card
    if (dom.promptResultCard) dom.promptResultCard.classList.remove("hidden");
    if (dom.activePromptTitle) dom.activePromptTitle.textContent = result.paletteName || "Synthesized Theme";
    if (dom.activePromptMoodBadge) dom.activePromptMoodBadge.textContent = result.mood || "Dynamic Atmosphere";
    if (dom.activePromptTypoBadge && result.typography) {
      dom.activePromptTypoBadge.textContent = `${result.typography.headingName} + ${result.typography.bodyName}`;
    }
    if (dom.activePromptRationale) {
      dom.activePromptRationale.textContent = `“${result.designPhilosophy || "Living design system synthesized to match prompt semantic tone and spatial contrast."}”`;
    }

    executeChameleonReTheming();
    renderSwatchStudio();

    // Sync custom color input
    if (dom.customColorInput) dom.customColorInput.value = result.colors[1];
    if (dom.customColorPicker) dom.customColorPicker.value = result.colors[1];
    if (dom.customColorPreview) dom.customColorPreview.style.backgroundColor = result.colors[1];

    showToast(`Prompt Theme: ${result.paletteName}!`, result.colors[1]);
  }

  // Procedural Semantic NLP Fallback Engine
  function resolveProceduralPrompt(userPrompt) {
    const p = userPrompt.toLowerCase();

    for (const item of PromptInspirations) {
      if (p.includes(item.badge.toLowerCase()) || p.includes(item.prompt.toLowerCase())) {
        return item.fallback;
      }
    }

    if (p.includes("luxury") || p.includes("swiss") || p.includes("watch") || p.includes("gold") || p.includes("champagne") || p.includes("velvet")) {
      return PromptInspirations[0].fallback;
    }
    if (p.includes("fintech") || p.includes("gen-z") || p.includes("college") || p.includes("playful") || p.includes("student")) {
      return PromptInspirations[1].fallback;
    }
    if (p.includes("cyber") || p.includes("neon") || p.includes("crypto") || p.includes("hacker") || p.includes("matrix") || p.includes("aaa")) {
      return PromptInspirations[2].fallback;
    }
    if (p.includes("matcha") || p.includes("tea") || p.includes("japan") || p.includes("sage") || p.includes("green") || p.includes("botanical")) {
      return PromptInspirations[3].fallback;
    }
    if (p.includes("ocean") || p.includes("sea") || p.includes("navy") || p.includes("blue") || p.includes("water") || p.includes("abyss")) {
      return PromptInspirations[4].fallback;
    }

    // Dynamic procedural extraction for general prompts
    let baseHue = 210;
    if (p.includes("red") || p.includes("fire") || p.includes("warm") || p.includes("sun")) baseHue = 15;
    else if (p.includes("purple") || p.includes("violet") || p.includes("royal")) baseHue = 270;
    else if (p.includes("pink") || p.includes("rose")) baseHue = 335;
    else if (p.includes("emerald") || p.includes("mint")) baseHue = 155;
    else if (p.includes("amber") || p.includes("orange")) baseHue = 35;
    else baseHue = Math.floor(Math.random() * 360);

    const c0 = rgbToHex(...Object.values(hslToRgb(baseHue, 30, 8)));
    const c1 = rgbToHex(...Object.values(hslToRgb(baseHue, 80, 52)));
    const c2 = rgbToHex(...Object.values(hslToRgb((baseHue + 35) % 360, 75, 58)));
    const c3 = rgbToHex(...Object.values(hslToRgb((baseHue + 160) % 360, 80, 68)));
    const c4 = rgbToHex(...Object.values(hslToRgb(baseHue, 15, 96)));

    return {
      paletteName: "Synthesized Atmosphere",
      mood: "Natural Language Synthesis",
      colors: [c0, c1, c2, c3, c4],
      roles: ["Void Obsidian", "Primary Brand", "Secondary Accent", "Luminous Glow", "Surface Light"],
      typography: CuratedPresets["modern-saas"].typography,
      designPhilosophy: `Synthesized from prompt keywords: “${userPrompt}”. Color temperature and contrast steps calibrated for WCAG 2.2 AA balance.`
    };
  }

  // Google Gemini API Caller (Structured JSON Mode)
  async function callGeminiPromptApi(userPrompt, apiKey) {
    const systemPrompt = `You are an elite design systems architect, typographer, and master color theorist.
The user wants to generate a complete living design system based on this natural language prompt:
"${userPrompt}"

Generate a production-grade 5-color semantic palette and matching Google Fonts typography pairing.
Return ONLY raw JSON with this exact schema (no markdown, no backticks):
{
  "paletteName": "Creative 2-4 word title for this design system",
  "mood": "Short emotional mood summary",
  "colors": ["#050816", "#38BDF8", "#818CF8", "#C084FC", "#F43F5E"],
  "roles": ["Void Obsidian Base", "Primary Brand Accent", "Secondary Surface", "Luminous Accent", "Highlight/Light Surface"],
  "typography": {
    "headingName": "Space Grotesk | Playfair Display | Syne | Outfit | Inter",
    "heading": "'Space Grotesk', sans-serif",
    "bodyName": "Plus Jakarta Sans | Inter",
    "body": "'Plus Jakarta Sans', sans-serif",
    "importUrl": "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600&family=Space+Grotesk:wght@600;700&display=swap"
  },
  "designPhilosophy": "2 sentences explaining why this color palette and typography perfectly capture the user prompt."
}
Rules:
1. colors[0] MUST be a deep, dark obsidian/base surface (luminance < 12%) tinted with the prompt's theme.
2. colors[1] MUST be the dominant brand color directly answering the prompt.
3. colors[2] and colors[3] are secondary and glow accents.
4. colors[4] MUST be a crisp high-luminance light surface/highlight (luminance > 88%).
5. All 5 colors must have valid 6-character hex format (#RRGGBB).`;

    const tryModels = ["gemini-2.5-flash", "gemini-1.5-flash"];
    for (const model of tryModels) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{
              parts: [{ text: systemPrompt }]
            }],
            generationConfig: {
              response_mime_type: "application/json"
            }
          })
        });

        if (response.ok) {
          const data = await response.json();
          const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (rawText) {
            return JSON.parse(rawText.replace(/```json/g, "").replace(/```/g, "").trim());
          }
        }
      } catch (e) {
        console.warn(`Prompt model ${model} failed, trying next:`, e);
      }
    }
    throw new Error("Gemini Prompt API request failed");
  }

  // Execution Handler
  async function executeThemePrompt(promptText, presetFallback = null) {
    const text = (promptText || "").trim();
    if (!text) {
      showToast("Please enter a design prompt!");
      return;
    }

    // Set loading button state
    if (dom.submitPromptLabel) dom.submitPromptLabel.textContent = "Synthesizing...";
    if (dom.submitPromptIcon) dom.submitPromptIcon.classList.add("animate-spin");
    if (dom.promptEngineBadge) dom.promptEngineBadge.textContent = "Synthesizing Tokens...";

    showToast("Gemini AI synthesizing design tokens...");

    const apiKey = safeStore.get("careerverse_gemini_api_key", "");

    if (apiKey && apiKey.trim().length > 10) {
      try {
        const result = await callGeminiPromptApi(text, apiKey.trim());
        if (result && result.colors && result.colors.length >= 5) {
          applyPromptDesignSystem(result);
          resetButtonState();
          return;
        }
      } catch (err) {
        console.warn("Gemini Prompt API fallback:", err);
        showToast("Gemini API call timed out or failed. Utilizing high-fidelity NLP synthesis.");
      }
    }

    // Fallback execution
    setTimeout(() => {
      const result = presetFallback || resolveProceduralPrompt(text);
      applyPromptDesignSystem(result);
      resetButtonState();
    }, 320);
  }

  function resetButtonState() {
    if (dom.submitPromptLabel) dom.submitPromptLabel.textContent = "Generate Theme";
    if (dom.submitPromptIcon) dom.submitPromptIcon.classList.remove("animate-spin");
    if (dom.promptEngineBadge) dom.promptEngineBadge.textContent = "Structured JSON Engine";
  }

  // Form submit listener
  if (dom.promptToThemeForm) {
    dom.promptToThemeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = dom.themePromptInput ? dom.themePromptInput.value : "";
      executeThemePrompt(val);
    });
  }
}

// Connect in-page anchor links to Lenis
function initKineticScroll() {
  try {
    if (typeof Lenis !== "undefined") {
      const lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.9,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          const targetId = this.getAttribute("href");
          if (targetId && targetId !== "#") {
            const target = document.querySelector(targetId);
            if (target) {
              e.preventDefault();
              lenis.scrollTo(target, { offset: -60 });
              if (!dom.mobileDrawer.classList.contains("hidden")) {
                dom.mobileDrawer.classList.add("hidden");
                dom.mobileDrawer.classList.remove("flex");
              }
            }
          }
        });
      });
    }
  } catch (e) {
    console.warn("Kinetic scroll init fallback:", e);
  }
}

// Bootstrapping
window.addEventListener("DOMContentLoaded", () => {
  if (dom.footerYear) dom.footerYear.textContent = new Date().getFullYear();

  // Load saved preferences
  const savedTheme = safeStore.get("careerverse_theme", "dark");
  StudioState.favorites = safeStore.get("careerverse_saved_palettes", []);

  setInterfaceTheme(savedTheme);
  loadPreset("modern-saas");
  renderPresetGallery();
  renderSavedPalettes();
  bindStudioEvents();
  initGeminiVisionStudio();
  initPromptToThemeStudio();
  initKineticScroll();
});
