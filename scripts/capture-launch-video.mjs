import { spawn } from "node:child_process";
import { mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "csdm3d-assets");
const videoDir = path.join(outDir, "video-launch");
const port = process.env.PORT ?? "3110";
const baseUrl = `http://localhost:${port}`;

const VIEWPORT = { width: 430, height: 932 }; // iPhone 14 Pro Max CSS pixels
const RECORD = { width: 860, height: 1864 }; // 2x — sharper recording

await mkdir(outDir, { recursive: true });
await rm(videoDir, { recursive: true, force: true });
await mkdir(videoDir, { recursive: true });

const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "dev", "--port", port], {
  cwd: root,
  env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
  stdio: "ignore",
});

try {
  await waitForServer(baseUrl);
  const browser = await chromium.launch();

  const mobile = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
    recordVideo: { dir: videoDir, size: RECORD },
  });
  const m = await mobile.newPage();
  await m.goto(baseUrl, { waitUntil: "networkidle" });
  await m.waitForTimeout(1500);

  // 1) Login
  await caption(m, "CSDM3D · CSDM 5.0 maturity, on a phone");
  await m.waitForTimeout(2200);
  await m.getByRole("button", { name: "Continue" }).click();
  await m.waitForTimeout(900);

  // 2) Empty state → load demo
  await caption(m, "Load demo · no live ServiceNow needed");
  await m.waitForTimeout(1600);
  await m.getByRole("button", { name: /Load demo data/i }).click();
  await m.waitForTimeout(1400);

  // 3) 3D map section
  await m.getByRole("heading", { name: "Maturity universe" }).waitFor({ timeout: 10_000 });
  await m.getByRole("heading", { name: "Maturity universe" }).scrollIntoViewIfNeeded();
  await m.waitForTimeout(700);
  await caption(m, "3D maturity universe — domains, stages, blockers");
  await m.waitForTimeout(4500);
  await caption(m, "Auto-rotates · pinch / drag to explore");
  await m.waitForTimeout(3500);

  // 4) AI Briefing reel
  await m.getByRole("heading", { name: "AI Briefing" }).scrollIntoViewIfNeeded();
  await m.waitForTimeout(700);
  await caption(m, "AI Briefing — agent insights as a story reel");
  await m.waitForTimeout(7500);
  await caption(m, "Tap to navigate · hold to pause");
  await m.waitForTimeout(6500);

  // 5) Ask the agents
  await caption(m, "Ask the agents — composed live from your analysis");
  await m.waitForTimeout(2200);
  await m.getByRole("button", { name: /What should I tackle first/i }).click();
  await m.waitForTimeout(5500);
  await m.getByRole("button", { name: /Give me the exec summary/i }).click();
  await m.waitForTimeout(5500);
  await m.getByRole("button", { name: /Are we ready for Now Assist/i }).click();
  await m.waitForTimeout(6000);

  // 6) Outro
  await caption(m, "Open source · github.com/paulopierrondi/csdm3d");
  await m.waitForTimeout(3500);

  const mobileVideo = m.video();
  await mobile.close();
  if (mobileVideo) {
    await mobileVideo.saveAs(path.join(outDir, "ai-briefing-mobile.webm"));
  }

  await rm(videoDir, { recursive: true, force: true });
  await browser.close();
} finally {
  server.kill("SIGTERM");
}

async function waitForServer(url) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < 60_000) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // booting
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(`Timed out waiting for ${url}`);
}

async function caption(page, text) {
  await page.evaluate((captionText) => {
    let el = document.querySelector("[data-launch-caption]");
    if (!captionText) {
      if (el) el.remove();
      return;
    }
    if (!el) {
      el = document.createElement("div");
      el.setAttribute("data-launch-caption", "true");
      document.body.appendChild(el);
    }
    el.textContent = captionText;
    el.setAttribute(
      "style",
      [
        "position:fixed",
        "left:50%",
        "top:84px",
        "z-index:9999",
        "transform:translateX(-50%)",
        "max-width:380px",
        "padding:11px 18px",
        "border-radius:999px",
        "background:rgba(8,12,20,0.94)",
        "border:1px solid rgba(255,255,255,0.12)",
        "color:#ffffff",
        "font:600 15px/1.25 -apple-system,BlinkMacSystemFont,Inter,sans-serif",
        "letter-spacing:-0.01em",
        "text-align:center",
        "box-shadow:0 16px 50px rgba(0,0,0,0.55)",
        "backdrop-filter:blur(14px)",
      ].join(";"),
    );
  }, text);
}
