import { spawn } from "node:child_process";
import { mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "csdm3d-assets");
const videoDir = path.join(outDir, "video");
const port = process.env.PORT ?? "3100";
const baseUrl = `http://localhost:${port}`;

await mkdir(videoDir, { recursive: true });

const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "dev", "--port", port], {
  cwd: root,
  env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
  stdio: "ignore",
});

try {
  await waitForServer(baseUrl);
  const browser = await chromium.launch();

  const screenshotPage = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await screenshotPage.goto(baseUrl, { waitUntil: "networkidle" });
  await screenshotPage.waitForTimeout(1000);
  await screenshotPage.screenshot({ path: path.join(outDir, "01-login.png"), fullPage: true });
  await screenshotPage.getByRole("button", { name: /Continue to workspace/i }).click();
  await screenshotPage.getByRole("heading", { name: /Score a ServiceNow instance/i }).waitFor();
  await screenshotPage.getByRole("button", { name: /Load demo/i }).click();
  await screenshotPage.getByRole("heading", { name: /Maturity universe/i }).waitFor();
  await screenshotPage.waitForTimeout(1500);
  await screenshotPage.screenshot({ path: path.join(outDir, "02-workspace-overview.png"), fullPage: true });
  await screenshotPage.locator("[data-csdm3d-universe]").screenshot({ path: path.join(outDir, "03-csdm3d-universe.png") });
  await screenshotPage.locator("aside").last().screenshot({ path: path.join(outDir, "03-dashboard-insights.png") });
  await screenshotPage.close();

  await rm(videoDir, { recursive: true, force: true });
  await mkdir(videoDir, { recursive: true });

  const videoContext = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    recordVideo: { dir: videoDir, size: { width: 1920, height: 1080 } },
  });
  const page = await videoContext.newPage();
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  await caption(page, "CSDM 5.0 maturity, in seconds.");
  await page.getByRole("button", { name: /Continue to workspace/i }).click();
  await page.getByRole("heading", { name: /Score a ServiceNow instance/i }).waitFor();
  await caption(page, "Connect a ServiceNow instance — read-only, never persisted.");
  await page.getByRole("button", { name: /Load demo/i }).click();
  await page.getByRole("heading", { name: /Maturity universe/i }).waitFor();
  await page.waitForTimeout(1200);
  await caption(page, "5 domains, scored 0–100 against the CSDM 5.0 ladder.");
  await caption(page, "Two specialist agents read the result and tell you where to start.");
  await caption(page, "Pierrondi EA · ITOM Doctor — opinionated, data-driven.");
  await page.evaluate(() => window.scrollTo({ top: 360, behavior: "smooth" }));
  await caption(page, "Built for the ServiceNow community by Paulo Pierrondi.");
  const video = page.video();
  await videoContext.close();
  if (video) {
    await video.saveAs(path.join(outDir, "csdm3d-demo.webm"));
  }
  await rm(videoDir, { recursive: true, force: true });

  await browser.close();
} finally {
  server.kill("SIGTERM");
}

async function waitForServer(url) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < 30_000) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // Next.js is still booting.
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(`Timed out waiting for ${url}`);
}

async function caption(page, text) {
  await page.evaluate((captionText) => {
    let el = document.querySelector("[data-csdm3d-caption]");
    if (!el) {
      el = document.createElement("div");
      el.setAttribute("data-csdm3d-caption", "true");
      document.body.appendChild(el);
    }

    el.textContent = captionText;
    el.setAttribute(
      "style",
      [
        "position:fixed",
        "left:50%",
        "bottom:34px",
        "z-index:9999",
        "transform:translateX(-50%)",
        "max-width:980px",
        "padding:18px 24px",
        "border-radius:18px",
        "background:rgba(6,19,30,0.88)",
        "color:#ffffff",
        "font:800 30px/1.15 sans-serif",
        "letter-spacing:-0.03em",
        "text-align:center",
        "box-shadow:0 30px 80px rgba(0,0,0,0.30)",
      ].join(";"),
    );
  }, text);
  await page.waitForTimeout(3800);
}
