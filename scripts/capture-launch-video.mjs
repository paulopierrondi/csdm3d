import { spawn } from "node:child_process";
import { mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium, devices } from "playwright";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "csdm3d-assets");
const videoDir = path.join(outDir, "video-launch");
const port = process.env.PORT ?? "3110";
const baseUrl = `http://localhost:${port}`;

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

  // ---------- Mobile portrait recording ----------
  const mobile = await browser.newContext({
    ...devices["iPhone 14"],
    recordVideo: { dir: videoDir, size: { width: 390, height: 844 } },
  });
  const m = await mobile.newPage();
  await m.goto(baseUrl, { waitUntil: "networkidle" });
  await m.waitForTimeout(1200);
  await caption(m, "CSDM3D · AI Briefing");
  await m.getByRole("button", { name: "Continue" }).click();
  await m.waitForTimeout(800);
  await caption(m, "Workspace · CSDM 5.0 maturity");
  await m.getByRole("button", { name: /Load demo data/i }).click();
  await m.waitForTimeout(1200);
  await m.getByRole("heading", { name: "AI Briefing" }).waitFor({ timeout: 10_000 });
  await m.getByRole("heading", { name: "AI Briefing" }).scrollIntoViewIfNeeded();
  await m.waitForTimeout(600);
  await caption(m, "Two specialist agents brief you like Stories");
  await m.waitForTimeout(7500);
  await caption(m, "Tap to navigate. Hold to pause.");
  // Tap right half of the briefing to advance
  const briefing = m.locator("text=AI Briefing").first().locator("..").locator("..");
  await m.waitForTimeout(2500);
  await caption(m, "Ask the agents — answers from your live analysis");
  await m.getByRole("button", { name: /What should I tackle first/i }).click();
  await m.waitForTimeout(4500);
  await caption(m, "");
  await m.getByRole("button", { name: /Are we ready for Now Assist/i }).click();
  await m.waitForTimeout(5000);
  await caption(m, "Open source · github.com/paulopierrondi/csdm3d");
  await m.waitForTimeout(2500);
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
        "top:80px",
        "z-index:9999",
        "transform:translateX(-50%)",
        "max-width:340px",
        "padding:10px 16px",
        "border-radius:999px",
        "background:rgba(8,12,20,0.92)",
        "border:1px solid rgba(255,255,255,0.10)",
        "color:#ffffff",
        "font:600 14px/1.25 -apple-system,BlinkMacSystemFont,Inter,sans-serif",
        "letter-spacing:-0.01em",
        "text-align:center",
        "box-shadow:0 12px 40px rgba(0,0,0,0.4)",
        "backdrop-filter:blur(12px)",
      ].join(";"),
    );
  }, text);
}
