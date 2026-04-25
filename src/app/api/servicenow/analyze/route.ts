import { NextRequest, NextResponse } from "next/server";

type Stage = "foundation" | "crawl" | "walk" | "run" | "fly";
type Domain = "foundational" | "design" | "build" | "technical-services" | "sell-consume";

const TABLES: Record<Domain, string[]> = {
  foundational: ["cmdb_ci", "core_company", "cmn_location", "cmn_department"],
  design: ["cmdb_ci_business_app"],
  build: ["cmdb_ci_service_discovered", "cmdb_ci_service_auto"],
  "technical-services": ["service_offering", "cmdb_ci_service"],
  "sell-consume": ["business_service", "service_offering"],
};

const LABELS: Record<Domain, string> = {
  foundational: "Foundational Data",
  design: "Design",
  build: "Build",
  "technical-services": "Manage Technical Services",
  "sell-consume": "Sell / Consume Services",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const instanceUrl = normalizeInstanceUrl(body.instanceUrl);
    const username = String(body.username ?? "");
    const password = String(body.password ?? "");

    if (!instanceUrl || !username || !password) {
      return NextResponse.json({ error: "Instance URL, username and password are required." }, { status: 400 });
    }

    const domains = await Promise.all(
      (Object.keys(TABLES) as Domain[]).map(async (domain) => {
        const counts = await Promise.all(
          TABLES[domain].map((table) => fetchTableCount(instanceUrl, username, password, table)),
        );
        const availableTables = counts.filter((count) => count.available).length;
        const recordSignal = counts.reduce((sum, count) => sum + Math.min(count.count, 500), 0);
        const tableCoverage = availableTables / TABLES[domain].length;
        const score = Math.max(20, Math.min(92, Math.round(tableCoverage * 62 + Math.min(recordSignal / 24, 30))));

        return {
          domain,
          label: LABELS[domain],
          score,
          stage: scoreToStage(score),
          blockers: Math.max(0, Math.round((100 - score) / 11)),
          evidence: `${availableTables}/${TABLES[domain].length} expected tables responded through the Table API.`,
        };
      }),
    );

    const overallScore = Math.round(domains.reduce((sum, domain) => sum + domain.score, 0) / domains.length);
    const weakest = [...domains].sort((a, b) => a.score - b.score)[0];

    return NextResponse.json({
      analysis: {
        instanceName: new URL(instanceUrl).hostname.split(".")[0],
        instanceUrl,
        overallScore,
        globalStage: scoreToStage(Math.min(...domains.map((domain) => domain.score))),
        progressToNext: Math.max(0, Math.min(100, overallScore - 40)),
        domains,
        generatedAt: new Date().toISOString(),
        insights: [
          {
            title: "Executive narrative",
            detail: `This instance scored ${overallScore}/100. Position the story around CSDM maturity as a practical path to better governance and AI readiness.`,
          },
          {
            title: "Weakest maturity domain",
            detail: `${weakest.label} is the lowest-scoring domain. Use it as the starting point for the first remediation workshop.`,
          },
          {
            title: "AI readiness implication",
            detail: "AI can summarize gaps and prioritize next actions, but production remediation should stay governed by ServiceNow controls.",
          },
        ],
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

function normalizeInstanceUrl(value: unknown) {
  const raw = String(value ?? "").trim();
  if (!raw) return "";
  const withProtocol = raw.startsWith("http") ? raw : `https://${raw}`;
  const url = new URL(withProtocol);
  return `${url.protocol}//${url.host}`;
}

async function fetchTableCount(instanceUrl: string, username: string, password: string, table: string) {
  const url = `${instanceUrl}/api/now/table/${table}?sysparm_limit=1&sysparm_fields=sys_id`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`,
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) return { available: false, count: 0 };

  const total = response.headers.get("x-total-count");
  const count = total ? Number(total) : 1;
  return { available: true, count: Number.isFinite(count) ? count : 1 };
}

function scoreToStage(score: number): Stage {
  if (score >= 90) return "fly";
  if (score >= 78) return "run";
  if (score >= 66) return "walk";
  if (score >= 48) return "crawl";
  return "foundation";
}
