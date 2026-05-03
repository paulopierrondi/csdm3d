import { NextRequest, NextResponse } from "next/server";
import { buildAgents, scoreToStage } from "@/lib/agents";

type Stage = "foundation" | "crawl" | "walk" | "run" | "fly";
type Domain = "foundational" | "design" | "build" | "technical-services" | "sell-consume";

type TableProbe = { table: string; available: boolean; count: number };

type DomainResult = {
  domain: Domain;
  label: string;
  score: number;
  stage: Stage;
  blockers: number;
  evidence: string;
  tables: TableProbe[];
};

// CSDM 5.0 anchor tables per domain — kept lightweight to keep the analysis
// fast and to avoid requiring privileged ITOM roles on the target instance.
const TABLES: Record<Domain, string[]> = {
  foundational: ["cmdb_ci", "core_company", "cmn_location", "cmn_department", "sys_user_group", "cmdb_rel_ci"],
  design: ["cmdb_ci_business_app", "cmdb_application_product_model"],
  build: ["cmdb_ci_service_discovered", "cmdb_ci_service_auto", "cmdb_ci_appl"],
  "technical-services": ["cmdb_ci_service_technical", "service_offering", "sla_definition"],
  "sell-consume": ["cmdb_ci_service_business", "contract", "sn_consumer"],
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

    const domains: DomainResult[] = await Promise.all(
      (Object.keys(TABLES) as Domain[]).map(async (domain) => {
        const probes = await Promise.all(
          TABLES[domain].map((table) => fetchTableCount(instanceUrl, username, password, table)),
        );
        const availableTables = probes.filter((p) => p.available).length;
        const recordSignal = probes.reduce((sum, p) => sum + Math.min(p.count, 500), 0);
        const tableCoverage = availableTables / TABLES[domain].length;
        const score = Math.max(20, Math.min(92, Math.round(tableCoverage * 62 + Math.min(recordSignal / 24, 30))));

        return {
          domain,
          label: LABELS[domain],
          score,
          stage: scoreToStage(score),
          blockers: Math.max(0, Math.round((100 - score) / 11)),
          evidence: `${availableTables}/${TABLES[domain].length} CSDM5 anchor tables responded through the Table API.`,
          tables: probes,
        };
      }),
    );

    const overallScore = Math.round(domains.reduce((sum, d) => sum + d.score, 0) / domains.length);
    const globalStage = scoreToStage(Math.min(...domains.map((d) => d.score)));
    const ranked = [...domains].sort((a, b) => a.score - b.score);
    const weakest = ranked[0];
    const agents = buildAgents({ domains, overallScore, globalStage, weakest });

    return NextResponse.json({
      analysis: {
        instanceName: new URL(instanceUrl).hostname.split(".")[0],
        instanceUrl,
        overallScore,
        globalStage,
        progressToNext: Math.max(0, Math.min(100, overallScore - 40)),
        domains,
        generatedAt: new Date().toISOString(),
        csdmVersion: "CSDM 5.0",
        agents,
        // Flat fallback used by the 3D HUD overlay.
        insights: agents.flatMap((agent) => agent.insights.slice(0, 1)),
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

async function fetchTableCount(instanceUrl: string, username: string, password: string, table: string): Promise<TableProbe> {
  const url = `${instanceUrl}/api/now/table/${table}?sysparm_limit=1&sysparm_fields=sys_id`;
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`,
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) return { table, available: false, count: 0 };

    const total = response.headers.get("x-total-count");
    const count = total ? Number(total) : 1;
    return { table, available: true, count: Number.isFinite(count) ? count : 1 };
  } catch {
    return { table, available: false, count: 0 };
  }
}

