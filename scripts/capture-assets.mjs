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

  const screenshotPage = await browser.newPage({ viewport: { width: 1440, height: 1080 } });
  await screenshotPage.goto(baseUrl, { waitUntil: "networkidle" });
  await screenshotPage.waitForTimeout(1000);
  await screenshotPage.screenshot({ path: path.join(outDir, "01-login.png"), fullPage: true });
  await screenshotPage.getByRole("button", { name: "Enter workspace" }).click();
  await screenshotPage.getByText("ServiceNow instance", { exact: true }).waitFor();
  await screenshotPage.getByText("Load demo", { exact: true }).click();
  await screenshotPage.getByRole("heading", { name: "3D maturity map" }).waitFor();
  await screenshotPage.screenshot({ path: path.join(outDir, "02-workspace-map.png"), fullPage: true });
  await screenshotPage.locator("aside").last().screenshot({ path: path.join(outDir, "03-dashboard-insights.png") });
  await screenshotPage.close();

  await rm(videoDir, { recursive: true, force: true });
  await mkdir(videoDir, { recursive: true });

  const videoContext = await browser.newContext({
    viewport: { width: 1440, height: 1080 },
    recordVideo: { dir: videoDir, size: { width: 1440, height: 1080 } },
  });
  const page = await videoContext.newPage();
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  await caption(page, "CSDM maturity should not live in spreadsheets.");
  await page.getByRole("button", { name: "Enter workspace" }).click();
  await page.getByText("ServiceNow instance", { exact: true }).waitFor();
  await caption(page, "Login. Connect ServiceNow. Analyze CSDM5.");
  await page.getByText("Load demo", { exact: true }).click();
  await page.getByRole("heading", { name: "3D maturity map" }).waitFor();
  await caption(page, "A 3D maturity map across the five CSDM domains.");
  await caption(page, "AI-ready insights turn CMDB signals into next actions.");
  await page.evaluate(() => window.scrollTo({ top: 420, behavior: "smooth" }));
  await caption(page, "Open source for the ServiceNow community.");
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
  await page.waitForTimeout(2200);
}
