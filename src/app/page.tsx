"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  Boxes,
  Command,
  Database,
  Download,
  Gauge,
  Layers,
  LogOut,
  Plus,
  Search,
  Settings,
  Sparkles,
  Stethoscope,
  TerminalSquare,
  TrendingUp,
  X,
} from "lucide-react";
import { Csdm3dUniverse } from "@/components/Csdm3dUniverse";
import { buildAgents, scoreToStage } from "@/lib/agents";

type Stage = "foundation" | "crawl" | "walk" | "run" | "fly";
type Domain = "foundational" | "design" | "build" | "technical-services" | "sell-consume";

type TableProbe = { table: string; available: boolean; count: number };

type DomainScore = {
  domain: Domain;
  label: string;
  score: number;
  stage: Stage;
  blockers: number;
  evidence: string;
  tables?: TableProbe[];
};

type Agent = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  color: string;
  tagline: string;
  insights: Array<{ title: string; detail: string }>;
};

type Analysis = {
  instanceName: string;
  instanceUrl: string;
  overallScore: number;
  globalStage: Stage;
  progressToNext: number;
  csdmVersion: string;
  domains: DomainScore[];
  agents: Agent[];
  insights: Array<{ title: string; detail: string }>;
  generatedAt: string;
};

type Tab = "overview" | "map" | "domains" | "agents" | "activity" | "settings";

const stageLabels: Record<Stage, string> = {
  foundation: "Foundation",
  crawl: "Crawl",
  walk: "Walk",
  run: "Run",
  fly: "Fly",
};

const domainOrder: Domain[] = ["foundational", "design", "build", "technical-services", "sell-consume"];

// Realistic CMDB story for the Load demo button — counts and reachability
// chosen so the engine produces a sharp, opinionated narrative:
//   • Foundational baseline solid (3:1 cmdb_rel_ci ratio, healthy seed)
//   • APM never deployed → cmdb_application_product_model unreachable
//   • Service Mapping ran but very lightly → cmdb_ci_service_auto count low
//   • Business service portfolio is thin → sn_consumer unreachable
const demoDomainsRaw = [
  {
    domain: "foundational" as const,
    label: "Foundational Data",
    tables: [
      { table: "cmdb_ci", available: true, count: 47210 },
      { table: "core_company", available: true, count: 28 },
      { table: "cmn_location", available: true, count: 412 },
      { table: "cmn_department", available: true, count: 124 },
      { table: "sys_user_group", available: true, count: 386 },
      { table: "cmdb_rel_ci", available: true, count: 142800 },
    ],
    evidence: "CI seed and relationship density healthy (3:1 ratio). Owner and location coverage above 80%.",
  },
  {
    domain: "design" as const,
    label: "Design",
    tables: [
      { table: "cmdb_ci_business_app", available: true, count: 287 },
      { table: "cmdb_application_product_model", available: false, count: 0 },
    ],
    evidence: "Business apps registered, but APM (cmdb_application_product_model) is not deployed — product-model lineage is missing.",
  },
  {
    domain: "build" as const,
    label: "Build",
    tables: [
      { table: "cmdb_ci_service_discovered", available: true, count: 76 },
      { table: "cmdb_ci_service_auto", available: true, count: 14 },
      { table: "cmdb_ci_appl", available: true, count: 2140 },
    ],
    evidence: "Service Mapping is installed but the automated-services table is shallow — discovery patterns aren't covering the long tail of business apps.",
  },
  {
    domain: "technical-services" as const,
    label: "Manage Technical Services",
    tables: [
      { table: "cmdb_ci_service_technical", available: true, count: 71 },
      { table: "service_offering", available: true, count: 24 },
      { table: "sla_definition", available: true, count: 18 },
    ],
    evidence: "Technical services and offerings exist, SLA definitions are sparse but present. Workable as the operational layer.",
  },
  {
    domain: "sell-consume" as const,
    label: "Sell / Consume Services",
    tables: [
      { table: "cmdb_ci_service_business", available: true, count: 12 },
      { table: "contract", available: true, count: 89 },
      { table: "sn_consumer", available: false, count: 0 },
    ],
    evidence: "Business service portfolio is thin (12 entries) and the consumer registry is unreachable — consumer-contract traceability is broken.",
  },
];

function getDemoAnalysis(): Analysis {
  // Mirror the scoring formula from src/app/api/servicenow/analyze/route.ts
  const domains: DomainScore[] = demoDomainsRaw.map((raw) => {
    const available = raw.tables.filter((t) => t.available).length;
    const records = raw.tables.reduce((sum, t) => sum + Math.min(t.count, 500), 0);
    const coverage = available / raw.tables.length;
    const score = Math.max(20, Math.min(92, Math.round(coverage * 62 + Math.min(records / 24, 30))));
    return {
      domain: raw.domain,
      label: raw.label,
      score,
      stage: scoreToStage(score),
      blockers: Math.max(0, Math.round((100 - score) / 11)),
      evidence: raw.evidence,
      tables: raw.tables,
    };
  });

  const overallScore = Math.round(domains.reduce((sum, d) => sum + d.score, 0) / domains.length);
  const globalStage = scoreToStage(Math.min(...domains.map((d) => d.score)));
  const weakest = [...domains].sort((a, b) => a.score - b.score)[0];
  // Engine expects tables to be defined; demoDomainsRaw always provides them.
  const enginePayload = domains.map((d) => ({ ...d, tables: d.tables ?? [] }));
  const agents = buildAgents({
    domains: enginePayload,
    overallScore,
    globalStage,
    weakest: { ...weakest, tables: weakest.tables ?? [] },
  }) as Agent[];

  return {
    instanceName: "Northwind Bank",
    instanceUrl: "https://northwind.service-now.com",
    overallScore,
    globalStage,
    progressToNext: Math.max(0, Math.min(100, overallScore - 40)),
    csdmVersion: "CSDM 5.0",
    generatedAt: new Date(Date.now() - 90 * 1000).toISOString(),
    domains,
    agents,
    insights: agents.flatMap((agent) => agent.insights.slice(0, 1)),
  };
}


export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("architect@company.com");
  const [password, setPassword] = useState("demo");
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [instanceUrl, setInstanceUrl] = useState("");
  const [username, setUsername] = useState("");
  const [instancePassword, setInstancePassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [tab, setTab] = useState<Tab>("overview");
  const [connectOpen, setConnectOpen] = useState(false);

  const ranked = useMemo(
    () => [...(analysis?.domains ?? [])].sort((a, b) => a.score - b.score),
    [analysis],
  );

  const totalBlockers = useMemo(
    () => (analysis?.domains ?? []).reduce((acc, d) => acc + d.blockers, 0),
    [analysis],
  );

  function handleLogin() {
    if (!email || !password) return;
    setLoggedIn(true);
  }

  async function runLiveAnalysis(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/servicenow/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ instanceUrl, username, password: instancePassword }),
      });

      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error ?? "Unable to analyze this instance.");
      setAnalysis(payload.analysis);
      setConnectOpen(false);
      setTab("overview");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unexpected error");
    } finally {
      setLoading(false);
    }
  }

  if (!loggedIn) {
    return <LoginScreen email={email} password={password} setEmail={setEmail} setPassword={setPassword} onSubmit={handleLogin} />;
  }

  return (
    <main className="relative z-10 min-h-screen text-[var(--text)]">
      <TopBar
        instanceName={analysis?.instanceName}
        onConnect={() => setConnectOpen(true)}
        onDemo={() => setAnalysis(getDemoAnalysis())}
        onSignOut={() => setLoggedIn(false)}
      />
      <Tabs current={tab} onChange={setTab} />

      <div className="mx-auto max-w-[1400px] px-4 pb-24 pt-6 md:px-6 md:pb-10">
        {tab === "overview" && (
          <Overview
            analysis={analysis}
            ranked={ranked}
            totalBlockers={totalBlockers}
            onConnect={() => setConnectOpen(true)}
            onDemo={() => setAnalysis(getDemoAnalysis())}
            onJump={(t) => setTab(t)}
          />
        )}
        {tab === "map" && <MapTab analysis={analysis} />}
        {tab === "domains" && <DomainsTab analysis={analysis} />}
        {tab === "agents" && <AgentsTab analysis={analysis} />}
        {tab === "activity" && <ActivityTab analysis={analysis} />}
        {tab === "settings" && <SettingsTab analysis={analysis} onDownload={() => downloadReport(analysis)} />}
      </div>

      <MobileTabBar current={tab} onChange={setTab} />

      {connectOpen && (
        <ConnectModal
          instanceUrl={instanceUrl}
          username={username}
          password={instancePassword}
          loading={loading}
          error={error}
          setInstanceUrl={setInstanceUrl}
          setUsername={setUsername}
          setPassword={setInstancePassword}
          onClose={() => setConnectOpen(false)}
          onSubmit={runLiveAnalysis}
        />
      )}
    </main>
  );
}

/* ──────────────────────────── Top bar ──────────────────────────── */

function TopBar({
  instanceName,
  onConnect,
  onDemo,
  onSignOut,
}: {
  instanceName?: string;
  onConnect: () => void;
  onDemo: () => void;
  onSignOut: () => void;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-4 md:px-6">
        <div className="flex min-w-0 items-center gap-3">
          {/* Triangle mark */}
          <span className="flex items-center gap-2">
            <svg width="22" height="22" viewBox="0 0 76 65" fill="none" aria-hidden>
              <path d="M37.527.5L75.054 65H0L37.527.5z" fill="currentColor" />
            </svg>
          </span>
          <Slash />
          <div className="flex items-center gap-1.5">
            <Avatar text="PP" size={20} bg="#5e6ad2" />
            <span className="hidden text-[13px] font-medium md:inline">paulo</span>
          </div>
          <Slash />
          <button className="flex min-w-0 items-center gap-1.5 rounded-md px-1.5 py-1 hover:bg-[var(--bg-elev-1)]">
            <span className="truncate text-[13px] font-medium">CSDM3D</span>
            <span className="hidden rounded border border-[var(--border)] bg-[var(--bg-elev-2)] px-1 py-px text-[9.5px] font-medium uppercase tracking-wider text-[var(--text-2)] sm:inline">
              Pro
            </span>
            <ChevronUpDown />
          </button>
          {instanceName && (
            <>
              <Slash />
              <span className="hidden items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--bg-elev-1)] px-2 py-1 text-[11.5px] text-[var(--text-2)] md:inline-flex">
                <span className="csdm-pulse h-1.5 w-1.5 rounded-full bg-[var(--success)] shadow-[0_0_8px_var(--success)]" />
                {instanceName}
              </span>
            </>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <SearchHint />
          <button
            onClick={onDemo}
            className="hidden rounded-md border border-[var(--border)] bg-[var(--bg-elev-1)] px-2.5 py-1.5 text-[12.5px] text-[var(--text-2)] hover:border-[var(--border-strong)] hover:text-[var(--text)] md:inline-flex"
          >
            Load demo
          </button>
          <button
            onClick={onConnect}
            className="inline-flex items-center gap-1.5 rounded-md bg-[var(--text)] px-3 py-1.5 text-[12.5px] font-medium text-black hover:bg-white"
          >
            <Plus className="h-3.5 w-3.5" />
            Connect instance
          </button>
          <button
            onClick={onSignOut}
            aria-label="Sign out"
            className="rounded-md border border-[var(--border)] bg-[var(--bg-elev-1)] p-1.5 text-[var(--text-2)] hover:text-[var(--text)]"
          >
            <LogOut className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}

function Tabs({ current, onChange }: { current: Tab; onChange: (t: Tab) => void }) {
  const items: Array<{ id: Tab; label: string }> = [
    { id: "overview", label: "Overview" },
    { id: "map", label: "Map" },
    { id: "domains", label: "Domains" },
    { id: "agents", label: "Agents" },
    { id: "activity", label: "Activity" },
    { id: "settings", label: "Settings" },
  ];
  return (
    <nav className="sticky top-14 z-30 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center gap-1 overflow-x-auto px-2 md:px-4">
        {items.map((item) => {
          const active = current === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onChange(item.id)}
              className={`relative whitespace-nowrap px-3 py-3 text-[13px] transition-colors ${
                active ? "text-[var(--text)]" : "text-[var(--text-2)] hover:text-[var(--text)]"
              }`}
            >
              {item.label}
              {active && <span className="absolute inset-x-3 -bottom-px h-px bg-[var(--text)]" />}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

/* ──────────────────────────── Overview tab ──────────────────────────── */

function Overview({
  analysis,
  ranked,
  totalBlockers,
  onConnect,
  onDemo,
  onJump,
}: {
  analysis: Analysis | null;
  ranked: DomainScore[];
  totalBlockers: number;
  onConnect: () => void;
  onDemo: () => void;
  onJump: (t: Tab) => void;
}) {
  if (!analysis) {
    return <EmptyState onConnect={onConnect} onDemo={onDemo} />;
  }

  return (
    <div className="space-y-4">
      {/* Page heading */}
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-[24px] font-semibold tracking-tight md:text-[28px]">
            {analysis.instanceName}
          </h1>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-[var(--text-2)]">
            <span>{analysis.csdmVersion}</span>
            <span className="text-[var(--text-3)]">·</span>
            <span>{stageLabels[analysis.globalStage]} maturity</span>
            <span className="text-[var(--text-3)]">·</span>
            <span className="font-mono text-[var(--text-3)]">{analysis.instanceUrl}</span>
            <span className="text-[var(--text-3)]">·</span>
            <span className="inline-flex items-center gap-1.5 text-[var(--text-3)]">
              <span className="csdm-pulse h-1.5 w-1.5 rounded-full bg-[var(--success)] shadow-[0_0_8px_var(--success)]" />
              Updated {formatRelative(new Date(analysis.generatedAt).getTime())}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => onJump("map")}
            className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--bg-elev-1)] px-2.5 py-1.5 text-[12px] hover:border-[var(--border-strong)]"
          >
            View map <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={() => onJump("settings")}
            className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--bg-elev-1)] px-2.5 py-1.5 text-[12px] hover:border-[var(--border-strong)]"
          >
            <Download className="h-3.5 w-3.5" /> Export
          </button>
        </div>
      </div>

      {/* Metric tiles */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <MetricTile
          icon={<Gauge className="h-3.5 w-3.5" />}
          label="Overall score"
          value={String(analysis.overallScore)}
          unit="/100"
          delta={`${analysis.progressToNext} pts to next stage`}
          color={scoreColor(analysis.overallScore)}
          trend={analysis.overallScore >= 66 ? "up" : analysis.overallScore >= 48 ? "flat" : "down"}
        />
        <MetricTile
          icon={<TrendingUp className="h-3.5 w-3.5" />}
          label="Maturity stage"
          value={stageLabels[analysis.globalStage]}
          unit=""
          delta="CSDM 5.0 ladder"
        />
        <MetricTile
          icon={<Layers className="h-3.5 w-3.5" />}
          label="Domains scored"
          value={String(analysis.domains.length)}
          unit="/5"
          delta={`${analysis.domains.filter((d) => d.score >= 75).length} at Walk+`}
        />
        <MetricTile
          icon={<Boxes className="h-3.5 w-3.5" />}
          label="Open blockers"
          value={String(totalBlockers)}
          unit=""
          delta={`${ranked[0]?.label ?? "—"} weakest`}
          color={totalBlockers > 10 ? "var(--danger)" : totalBlockers > 5 ? "var(--warn)" : "var(--success)"}
          trend={totalBlockers > 10 ? "down" : totalBlockers > 5 ? "flat" : "up"}
        />
      </div>

      {/* Bento row 1: 3D + activity */}
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <Card className="lg:col-span-2" title="Maturity universe" subtitle="3D map of CSDM 5.0 anchor tables">
          <div className="-mx-px -mb-px overflow-hidden rounded-b-[var(--radius)]">
            <Csdm3dUniverse analysis={analysis} />
          </div>
        </Card>
        <Card title="Activity" subtitle="Last 24h" actions={<button className="text-[11.5px] text-[var(--text-2)] hover:text-[var(--text)]" onClick={() => onJump("activity")}>View all</button>}>
          <ActivityFeed analysis={analysis} />
        </Card>
      </div>

      {/* Bento row 2: domains + agents */}
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <Card className="lg:col-span-2" title="Domain scores" subtitle="Sorted by lowest score">
          <DomainTable domains={ranked} />
        </Card>
        <Card title="Specialist agents" subtitle={`${analysis.agents.length} active`}>
          <div className="space-y-2.5 p-3">
            {analysis.agents.map((agent) => (
              <AgentMini key={agent.id} agent={agent} />
            ))}
          </div>
        </Card>
      </div>

      {/* Bento row 3: AI briefing */}
      <AiBriefing key={analysis.instanceUrl} analysis={analysis} />
    </div>
  );
}

/* ──────────────────────────── Tabs ──────────────────────────── */

function MapTab({ analysis }: { analysis: Analysis | null }) {
  if (!analysis) return <EmptyState />;
  return (
    <Card title="Maturity universe" subtitle={`${analysis.instanceName} · ${stageLabels[analysis.globalStage]}`}>
      <div className="-mx-px -mb-px overflow-hidden rounded-b-[var(--radius)]">
        <Csdm3dUniverse analysis={analysis} />
      </div>
    </Card>
  );
}

function DomainsTab({ analysis }: { analysis: Analysis | null }) {
  if (!analysis) return <EmptyState />;
  const ordered = domainOrder.map((id) => analysis.domains.find((d) => d.domain === id)!).filter(Boolean);
  return (
    <div className="space-y-3">
      <Card title="CSDM 5.0 domains" subtitle="Anchor-table probe + score">
        <DomainTable domains={ordered} />
      </Card>
      <Card title="Anchor tables" subtitle="Per-domain probe response (Table API)">
        <div className="grid grid-cols-1 gap-px bg-[var(--border)] md:grid-cols-2">
          {ordered.map((d) => (
            <DomainAnchorPanel key={d.domain} domain={d} />
          ))}
        </div>
      </Card>
    </div>
  );
}

function DomainAnchorPanel({ domain }: { domain: DomainScore }) {
  const tables = domain.tables ?? [];
  const reachable = tables.filter((t) => t.available).length;
  return (
    <div className="bg-[var(--bg-elev-1)] p-4">
      <div className="flex items-center justify-between gap-2">
        <p className="truncate text-[12.5px] font-semibold tracking-tight">{domain.label}</p>
        <span className="font-mono text-[10.5px] text-[var(--text-3)] tabular-nums">
          {reachable}/{tables.length} reachable
        </span>
      </div>
      {tables.length === 0 ? (
        <p className="mt-2 text-[11.5px] text-[var(--text-3)]">No probe data — load demo or run a live analysis.</p>
      ) : (
        <ul className="mt-2.5 space-y-1">
          {tables.map((t) => (
            <li
              key={t.table}
              className="flex items-center justify-between gap-2 rounded-md border border-[var(--border)] bg-[var(--bg-elev-2)] px-2.5 py-1.5"
            >
              <span className="flex items-center gap-2 truncate">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: t.available ? "var(--success)" : "var(--danger)" }}
                />
                <span className="truncate font-mono text-[11px] text-[var(--text-2)]">{t.table}</span>
              </span>
              <span className="font-mono text-[10.5px] text-[var(--text-3)] tabular-nums">
                {t.available ? `${t.count} rec` : "n/a"}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function AgentsTab({ analysis }: { analysis: Analysis | null }) {
  if (!analysis) return <EmptyState />;
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      {analysis.agents.map((agent) => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
  );
}

function ActivityTab({ analysis }: { analysis: Analysis | null }) {
  if (!analysis) return <EmptyState />;
  return (
    <Card title="Activity" subtitle="Latest probes and agent reasoning">
      <ActivityFeed analysis={analysis} extended />
    </Card>
  );
}

function SettingsTab({ analysis, onDownload }: { analysis: Analysis | null; onDownload: () => void }) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      <Card title="Export" subtitle="Audit-friendly JSON snapshot">
        <div className="p-4">
          <button
            onClick={onDownload}
            disabled={!analysis}
            className="flex w-full items-center justify-between rounded-md border border-[var(--border)] bg-[var(--bg-elev-2)] px-3 py-2.5 text-[13px] hover:border-[var(--border-strong)] disabled:opacity-50"
          >
            <span>
              <span className="block font-medium">Download report</span>
              <span className="block text-[11px] text-[var(--text-3)]">domains · scores · tables · agents</span>
            </span>
            <Download className="h-4 w-4 text-[var(--text-2)]" />
          </button>
        </div>
      </Card>
      <Card title="Connection" subtitle="ServiceNow Table API probe">
        <div className="p-4 text-[12.5px] text-[var(--text-2)]">
          <p>Credentials are never persisted server-side — they live only in the request body and Basic-auth header per call.</p>
          <div className="mt-3 grid grid-cols-2 gap-2 text-[11.5px]">
            <KV k="Instance" v={analysis?.instanceUrl ?? "—"} />
            <KV k="Generated" v={analysis ? new Date(analysis.generatedAt).toLocaleString() : "—"} />
            <KV k="CSDM" v={analysis?.csdmVersion ?? "—"} />
            <KV k="Stage" v={analysis ? stageLabels[analysis.globalStage] : "—"} />
          </div>
        </div>
      </Card>
    </div>
  );
}

/* ──────────────────────────── Building blocks ──────────────────────────── */

function Card({
  title,
  subtitle,
  actions,
  children,
  className = "",
}: {
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-elev-1)] ${className}`}
    >
      {(title || subtitle) && (
        <header className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
          <div>
            {title && <h2 className="text-[13.5px] font-semibold tracking-tight">{title}</h2>}
            {subtitle && <p className="mt-0.5 text-[11.5px] text-[var(--text-3)]">{subtitle}</p>}
          </div>
          {actions}
        </header>
      )}
      {children}
    </section>
  );
}

function MetricTile({
  icon,
  label,
  value,
  unit,
  delta,
  color = "var(--text)",
  trend,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  unit: string;
  delta: string;
  color?: string;
  trend?: "up" | "down" | "flat";
}) {
  const trendGlyph = trend === "up" ? "↑" : trend === "down" ? "↓" : trend === "flat" ? "·" : null;
  const trendColor = trend === "up" ? "var(--success)" : trend === "down" ? "var(--danger)" : "var(--text-3)";
  return (
    <div className="group rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-elev-1)] p-4 transition-colors hover:border-[var(--border-strong)]">
      <div className="flex items-center gap-1.5 text-[var(--text-3)]">
        {icon}
        <span className="text-[11px] font-medium uppercase tracking-wider">{label}</span>
      </div>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="font-mono text-[28px] font-semibold leading-none tracking-tight tabular-nums" style={{ color }}>
          {value}
        </span>
        {unit && <span className="font-mono text-[13px] text-[var(--text-3)]">{unit}</span>}
      </div>
      <p className="mt-2 flex items-center gap-1 text-[11.5px] text-[var(--text-2)]">
        {trendGlyph && (
          <span className="font-mono text-[11px] tabular-nums" style={{ color: trendColor }}>
            {trendGlyph}
          </span>
        )}
        <span className="truncate">{delta}</span>
      </p>
    </div>
  );
}

function DomainTable({ domains }: { domains: DomainScore[] }) {
  return (
    <div>
      {domains.map((d, i) => (
        <div
          key={d.domain}
          className={`grid grid-cols-[1fr_auto] items-center gap-3 px-4 py-3 md:grid-cols-[1.4fr_120px_140px_80px_60px] ${
            i !== 0 ? "border-t border-[var(--border)]" : ""
          }`}
        >
          <div className="min-w-0">
            <p className="truncate text-[13px] font-medium">{d.label}</p>
            <p className="mt-0.5 hidden truncate text-[11.5px] text-[var(--text-3)] md:block">{d.evidence}</p>
          </div>
          <div className="hidden md:block">
            <ScoreBar score={d.score} />
          </div>
          <div className="hidden text-[11.5px] text-[var(--text-2)] md:block">
            <span className="rounded border border-[var(--border)] bg-[var(--bg-elev-2)] px-1.5 py-0.5">
              {stageLabels[d.stage]}
            </span>
          </div>
          <div className="hidden font-mono text-[11.5px] text-[var(--text-2)] md:block">
            {d.blockers} blk
          </div>
          <div className="text-right">
            <ScorePill score={d.score} />
          </div>
        </div>
      ))}
    </div>
  );
}

function ScoreBar({ score }: { score: number }) {
  return (
    <div className="h-1 w-full overflow-hidden rounded-full bg-[var(--bg-elev-3)]">
      <div className="h-full rounded-full" style={{ width: `${score}%`, background: scoreColor(score) }} />
    </div>
  );
}

function ScorePill({ score }: { score: number }) {
  const c = scoreColor(score);
  return (
    <span
      className="inline-flex min-w-[42px] justify-center rounded font-mono text-[11.5px] font-semibold tabular-nums"
      style={{
        background: `${c}1a`,
        color: c,
        padding: "2px 6px",
      }}
    >
      {score}
    </span>
  );
}

function AgentCard({ agent }: { agent: Agent }) {
  return (
    <Card>
      <header className="flex items-center gap-2.5 border-b border-[var(--border)] px-4 py-3">
        <Avatar text={agent.avatar} size={28} bg={agent.color} />
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13.5px] font-semibold tracking-tight">{agent.name}</p>
          <p className="truncate text-[11.5px] text-[var(--text-2)]">{agent.role}</p>
        </div>
        {agent.id === "itom-doctor" ? (
          <Stethoscope className="h-3.5 w-3.5 text-[var(--text-3)]" />
        ) : (
          <TerminalSquare className="h-3.5 w-3.5 text-[var(--text-3)]" />
        )}
      </header>
      <div className="px-4 py-3">
        <p className="text-[11.5px] text-[var(--text-3)]">{agent.tagline}</p>
        <ul className="mt-3 space-y-2">
          {agent.insights.map((insight) => (
            <li
              key={insight.title}
              className="rounded-md border border-[var(--border)] bg-[var(--bg-elev-2)] p-3"
            >
              <p className="text-[12.5px] font-medium">{insight.title}</p>
              <p className="mt-1 text-[12px] leading-relaxed text-[var(--text-2)]">{insight.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

function AgentMini({ agent }: { agent: Agent }) {
  return (
    <div className="rounded-md border border-[var(--border)] bg-[var(--bg-elev-2)] p-3">
      <div className="flex items-center gap-2.5">
        <Avatar text={agent.avatar} size={22} bg={agent.color} />
        <div className="min-w-0 flex-1">
          <p className="truncate text-[12.5px] font-medium">{agent.name}</p>
          <p className="truncate text-[11px] text-[var(--text-3)]">{agent.role}</p>
        </div>
      </div>
      <p className="mt-2 line-clamp-2 text-[11.5px] leading-relaxed text-[var(--text-2)]">
        {agent.insights[0]?.detail}
      </p>
    </div>
  );
}

/* ──────────────────────────── AI briefing ──────────────────────────── */

function AiBriefing({ analysis }: { analysis: Analysis }) {
  const segments = useMemo(() => {
    const items: Array<{ agent: Agent; insight: Agent["insights"][number] }> = [];
    const max = analysis.agents.reduce((m, a) => Math.max(m, a.insights.length), 0);
    for (let i = 0; i < max; i++) {
      for (const agent of analysis.agents) {
        if (agent.insights[i]) items.push({ agent, insight: agent.insights[i] });
      }
    }
    return items;
  }, [analysis.agents]);

  const total = segments.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (paused || total === 0) return;
    const STEP = 100 / 70; // ~7s per segment
    const id = window.setInterval(() => {
      setProgress((p) => {
        if (p + STEP >= 100) {
          setActive((a) => (a + 1) % total);
          return 0;
        }
        return p + STEP;
      });
    }, 100);
    return () => window.clearInterval(id);
  }, [paused, total]);

  if (total === 0) return null;
  const segment = segments[active];

  function tapZone(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.currentTarget;
    const x = event.clientX - target.getBoundingClientRect().left;
    setProgress(0);
    if (x < target.clientWidth / 2) {
      setActive((a) => (a - 1 + total) % total);
    } else {
      setActive((a) => (a + 1) % total);
    }
  }

  return (
    <Card
      title="AI Briefing"
      subtitle={`${total} agent insights · auto-playing`}
      actions={
        <span className="flex items-center gap-1.5 text-[10.5px] font-medium uppercase tracking-wider text-[var(--text-3)]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          </span>
          Live
        </span>
      }
    >
      <div
        onClick={tapZone}
        onPointerDown={() => setPaused(true)}
        onPointerUp={() => setPaused(false)}
        onPointerLeave={() => setPaused(false)}
        onPointerCancel={() => setPaused(false)}
        className="relative aspect-[4/5] cursor-pointer select-none overflow-hidden border-b border-[var(--border)] bg-[var(--bg-elev-2)] sm:aspect-[3/2] lg:aspect-[16/8]"
        style={{ background: "linear-gradient(180deg, #0a0a0c 0%, #050507 100%)" }}
      >
        <div
          key={`${segment.agent.id}-${active}-bg`}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 28% 22%, ${segment.agent.color}40, transparent 55%), radial-gradient(circle at 78% 80%, ${segment.agent.color}22, transparent 55%)`,
            animation: "fadeIn 500ms ease-out",
          }}
        />

        <div className="absolute left-3 right-3 top-3 z-20 flex gap-1">
          {segments.map((_, i) => (
            <div key={i} className="h-0.5 flex-1 overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-white"
                style={{
                  width: i < active ? "100%" : i === active ? `${progress}%` : "0%",
                  transition: i === active ? "width 100ms linear" : "none",
                }}
              />
            </div>
          ))}
        </div>

        <div
          key={`${segment.agent.id}-${active}-body`}
          className="relative z-10 flex h-full flex-col justify-end p-5 pb-12 sm:p-7 sm:pb-12"
          style={{ animation: "fadeIn 400ms ease-out" }}
        >
          <div className="flex items-center gap-2.5">
            <Avatar text={segment.agent.avatar} size={32} bg={segment.agent.color} />
            <div className="min-w-0">
              <p className="truncate text-[12.5px] font-semibold tracking-tight">{segment.agent.name}</p>
              <p className="truncate text-[11px] text-[var(--text-3)]">{segment.agent.role}</p>
            </div>
            <span
              className="ml-auto rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider"
              style={{ borderColor: `${segment.agent.color}55`, color: segment.agent.color }}
            >
              {segment.agent.id === "itom-doctor" ? "ITOM" : "EA"}
            </span>
          </div>
          <h3 className="mt-4 text-[18px] font-semibold leading-tight tracking-tight sm:text-[22px]">
            {segment.insight.title}
          </h3>
          <p className="mt-2.5 text-[13.5px] leading-relaxed text-[var(--text-2)] sm:text-[14px]">
            {segment.insight.detail}
          </p>
        </div>

        <div className="pointer-events-none absolute inset-x-3 bottom-3 z-20 flex items-center justify-between font-mono text-[10px] text-[var(--text-3)]">
          <span className="tabular-nums">
            {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <span>{paused ? "paused" : "tap · hold"}</span>
        </div>
      </div>

      <AskBar analysis={analysis} />
    </Card>
  );
}

function AskBar({ analysis }: { analysis: Analysis }) {
  const [active, setActive] = useState<string | null>(null);
  const prompts = useMemo(() => buildPrompts(analysis), [analysis]);
  const answer = prompts.find((p) => p.id === active)?.answer;

  return (
    <div className="space-y-2.5 p-3">
      <div className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-[var(--text-3)]">
        <Sparkles className="h-3 w-3 text-[var(--accent)]" />
        Ask the agents
      </div>
      <div className="flex flex-wrap gap-1.5">
        {prompts.map((p) => {
          const isActive = active === p.id;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(isActive ? null : p.id)}
              className={`rounded-full border px-2.5 py-1 text-[11.5px] transition ${
                isActive
                  ? "border-[var(--accent)] bg-[color-mix(in_oklab,var(--accent)_18%,transparent)] text-[var(--text)]"
                  : "border-[var(--border)] bg-[var(--bg-elev-2)] text-[var(--text-2)] hover:border-[var(--border-strong)] hover:text-[var(--text)]"
              }`}
            >
              {p.question}
            </button>
          );
        })}
      </div>
      {answer && (
        <div
          key={active ?? "empty"}
          className="rounded-md border border-[var(--border)] bg-[var(--bg-elev-2)] p-3"
          style={{ animation: "fadeIn 280ms ease-out" }}
        >
          <p className="text-[12.5px] leading-relaxed text-[var(--text-2)]">{answer}</p>
        </div>
      )}
    </div>
  );
}

function buildPrompts(analysis: Analysis) {
  const ranked = [...analysis.domains].sort((a, b) => a.score - b.score);
  const weakest = ranked[0];
  const strongest = ranked[ranked.length - 1];
  const stage = analysis.globalStage;
  return [
    {
      id: "first",
      question: "What should I tackle first?",
      answer: weakest
        ? `Start with ${weakest.label} — scored ${weakest.score}/100 with ${weakest.blockers} blockers. ${weakest.evidence}`
        : "",
    },
    {
      id: "exec",
      question: "Give me the exec summary.",
      answer: `Overall ${analysis.overallScore}/100 — ${stageLabels[stage]} maturity across ${analysis.domains.length} CSDM 5.0 domains. Strongest: ${strongest?.label} (${strongest?.score}). Weakest: ${weakest?.label} (${weakest?.score}). Position CSDM 5.0 as an incremental operating backbone, not a multi-year program.`,
    },
    {
      id: "ai",
      question: "Are we ready for Now Assist?",
      answer:
        stage === "fly" || stage === "run"
          ? "Yes — scope a single, well-bounded Now Assist use case. Avoid horizontal rollout until ownership and lifecycle fields harden everywhere."
          : stage === "walk"
            ? "Partially. Use AI for explanation and prioritization. Keep autonomous actions governed until the Build domain matures further."
            : "Not yet. Your data shape makes autonomous Now Assist actions high-risk. Use AI only for explanation, ranking and reasoning — not action.",
    },
  ];
}

function ActivityFeed({ analysis, extended = false }: { analysis: Analysis; extended?: boolean }) {
  const generatedAt = new Date(analysis.generatedAt).getTime();
  const items = [
    {
      icon: <Sparkles className="h-3.5 w-3.5" />,
      title: "Analysis generated",
      detail: `${analysis.csdmVersion} · score ${analysis.overallScore}/100`,
      offsetSec: 0,
    },
    ...analysis.agents.map((a, idx) => ({
      icon: <Avatar text={a.avatar} size={16} bg={a.color} />,
      title: `${a.name} produced ${a.insights.length} insights`,
      detail: a.tagline,
      offsetSec: 12 + idx * 4,
    })),
    ...analysis.domains
      .slice()
      .sort((a, b) => a.score - b.score)
      .slice(0, extended ? 5 : 3)
      .map((d, idx) => ({
        icon: <Database className="h-3.5 w-3.5" />,
        title: `${d.label} scored ${d.score}`,
        detail: `Stage ${stageLabels[d.stage]} · ${d.blockers} blocker${d.blockers === 1 ? "" : "s"}`,
        offsetSec: 24 + idx * 5,
      })),
  ];

  return (
    <ul className="divide-y divide-[var(--border)]">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 px-4 py-3">
          <div className="mt-0.5 grid h-6 w-6 place-items-center rounded-md border border-[var(--border)] bg-[var(--bg-elev-2)] text-[var(--text-2)]">
            {item.icon}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[12.5px] font-medium">{item.title}</p>
            <p className="truncate text-[11.5px] text-[var(--text-3)]">{item.detail}</p>
          </div>
          <span className="shrink-0 font-mono text-[10.5px] text-[var(--text-3)]">
            {formatRelative(generatedAt - item.offsetSec * 1000)}
          </span>
        </li>
      ))}
    </ul>
  );
}

function formatRelative(timestamp: number) {
  const diff = Math.max(0, Date.now() - timestamp);
  const sec = Math.round(diff / 1000);
  if (sec < 10) return "just now";
  if (sec < 60) return `${sec}s ago`;
  const min = Math.round(sec / 60);
  if (min < 60) return `${min}m ago`;
  const hr = Math.round(min / 60);
  if (hr < 24) return `${hr}h ago`;
  const day = Math.round(hr / 24);
  return `${day}d ago`;
}

function EmptyState({ onConnect, onDemo }: { onConnect?: () => void; onDemo?: () => void }) {
  return (
    <div className="overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-elev-1)]">
      <div className="relative grid place-items-center px-6 py-12 text-center md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(420px 220px at 50% 0%, rgba(94,106,210,0.10), transparent 70%), radial-gradient(360px 200px at 50% 100%, rgba(38,181,138,0.08), transparent 70%)",
          }}
        />
        <div className="relative">
          <div className="mx-auto grid h-11 w-11 place-items-center rounded-md border border-[var(--border)] bg-[var(--bg-elev-2)] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <Activity className="h-4 w-4 text-[var(--text-2)]" />
          </div>
          <h2 className="mt-5 text-[20px] font-semibold tracking-tight">Score a ServiceNow instance</h2>
          <p className="mx-auto mt-2 max-w-[460px] text-[13px] leading-relaxed text-[var(--text-2)]">
            Probe the CSDM 5.0 anchor tables, score the five domains, and review the result with two specialist
            agents — Pierrondi EA and ITOM Doctor.
          </p>
          {(onConnect || onDemo) && (
            <div className="mt-7 flex flex-col items-center justify-center gap-2 sm:flex-row">
              {onConnect && (
                <button
                  onClick={onConnect}
                  className="inline-flex items-center gap-1.5 rounded-md bg-[var(--text)] px-3.5 py-2 text-[12.5px] font-medium text-black hover:bg-white"
                >
                  <Plus className="h-3.5 w-3.5" /> Connect instance
                </button>
              )}
              {onDemo && (
                <button
                  onClick={onDemo}
                  className="rounded-md border border-[var(--border)] bg-[var(--bg-elev-2)] px-3.5 py-2 text-[12.5px] hover:border-[var(--border-strong)]"
                >
                  Load demo data
                </button>
              )}
            </div>
          )}
          <p className="mt-5 text-[11px] text-[var(--text-3)]">
            Read-only · Basic auth · credentials never persisted server-side
          </p>
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────── Login + modal ──────────────────────────── */

function LoginScreen({
  email,
  password,
  setEmail,
  setPassword,
  onSubmit,
}: {
  email: string;
  password: string;
  setEmail: (v: string) => void;
  setPassword: (v: string) => void;
  onSubmit: () => void;
}) {
  return (
    <main className="relative z-10 grid min-h-screen place-items-center px-4 text-[var(--text)]">
      <div className="w-full max-w-[380px]">
        <div className="mb-7 flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-md border border-[var(--border)] bg-[var(--bg-elev-1)]">
            <svg width="14" height="14" viewBox="0 0 76 65" fill="none" aria-hidden>
              <path d="M37.527.5L75.054 65H0L37.527.5z" fill="currentColor" />
            </svg>
          </span>
          <span className="text-[15px] font-semibold tracking-tight">CSDM3D</span>
          <span className="ml-1 rounded border border-[var(--border)] bg-[var(--bg-elev-2)] px-1 py-px text-[9.5px] font-medium uppercase tracking-wider text-[var(--text-3)]">
            CSDM 5.0
          </span>
        </div>
        <h1 className="text-[26px] font-semibold leading-tight tracking-tight">Welcome back</h1>
        <p className="mt-2 text-[13px] leading-relaxed text-[var(--text-2)]">
          Score a ServiceNow instance against CSDM 5.0 and review the result with two specialist agents — Pierrondi EA
          and ITOM Doctor.
        </p>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit();
          }}
          className="mt-7 space-y-3"
        >
          <Field label="Email" value={email} onChange={setEmail} type="email" placeholder="you@company.com" />
          <Field label="Password" value={password} onChange={setPassword} type="password" placeholder="••••••••" />
          <button
            type="submit"
            className="mt-2 w-full rounded-md bg-[var(--text)] px-3 py-2.5 text-[13px] font-medium text-black hover:bg-white"
          >
            Continue to workspace
          </button>
        </form>
        <div className="mt-6 flex items-center gap-2 text-[11px] text-[var(--text-3)]">
          <span className="h-1 w-1 rounded-full bg-[var(--success)]" />
          Public demo · read-only Basic auth · credentials never persisted
        </div>
      </div>
    </main>
  );
}

function ConnectModal({
  instanceUrl,
  username,
  password,
  loading,
  error,
  setInstanceUrl,
  setUsername,
  setPassword,
  onClose,
  onSubmit,
}: {
  instanceUrl: string;
  username: string;
  password: string;
  loading: boolean;
  error: string;
  setInstanceUrl: (v: string) => void;
  setUsername: (v: string) => void;
  setPassword: (v: string) => void;
  onClose: () => void;
  onSubmit: (e: FormEvent) => void;
}) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 backdrop-blur-sm" onClick={onClose}>
      <div
        className="w-full max-w-[460px] overflow-hidden rounded-[var(--radius)] border border-[var(--border-strong)] bg-[var(--bg-elev-1)] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-md border border-[var(--border)] bg-[var(--bg-elev-2)] text-[var(--text-2)]">
              <Database className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="text-[10.5px] font-medium uppercase tracking-wider text-[var(--text-3)]">ServiceNow</p>
              <h3 className="mt-0.5 text-[14px] font-semibold tracking-tight">Connect instance</h3>
            </div>
          </div>
          <button onClick={onClose} className="rounded-md p-1 text-[var(--text-2)] hover:bg-[var(--bg-elev-2)]" aria-label="Close">
            <X className="h-4 w-4" />
          </button>
        </div>
        <form onSubmit={onSubmit} className="space-y-3 p-4">
          <Field label="Instance URL" value={instanceUrl} onChange={setInstanceUrl} placeholder="https://example.service-now.com" type="url" />
          <Field label="Username" value={username} onChange={setUsername} placeholder="api.user" />
          <Field label="Password" value={password} onChange={setPassword} placeholder="••••••••" type="password" />
          {error && (
            <p className="rounded-md border border-[#3a1f23] bg-[#23151a] px-3 py-2 text-[12px] text-[#ff8a8a]">{error}</p>
          )}
          <div className="rounded-md border border-[var(--border)] bg-[var(--bg-elev-2)] px-3 py-2.5 text-[11px] text-[var(--text-3)]">
            <p className="font-medium text-[var(--text-2)]">What we probe</p>
            <p className="mt-1 leading-relaxed">
              Read-only Table API call against the CSDM 5.0 anchor tables for each domain — no writes, no scheduled
              jobs, credentials never stored.
            </p>
          </div>
          <div className="flex items-center justify-between gap-2 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-[var(--border)] bg-[var(--bg-elev-2)] px-3 py-2 text-[12.5px] text-[var(--text-2)] hover:border-[var(--border-strong)] hover:text-[var(--text)]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-1.5 rounded-md bg-[var(--text)] px-3 py-2 text-[12.5px] font-medium text-black hover:bg-white disabled:opacity-60"
            >
              {loading && <span className="h-3 w-3 animate-spin rounded-full border border-black/30 border-t-black" />}
              {loading ? "Analyzing…" : "Run analysis"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ──────────────────────────── Atoms ──────────────────────────── */

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-[11px] text-[var(--text-2)]">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type={type}
        className="mt-1 w-full rounded-md border border-[var(--border)] bg-[var(--bg-elev-2)] px-2.5 py-2 text-[13px] text-[var(--text)] placeholder:text-[var(--text-3)] focus:border-[var(--border-focus)]"
      />
    </label>
  );
}

function KV({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-md border border-[var(--border)] bg-[var(--bg-elev-2)] px-2.5 py-1.5">
      <p className="text-[10px] uppercase tracking-wider text-[var(--text-3)]">{k}</p>
      <p className="mt-0.5 truncate font-mono text-[12px] text-[var(--text)]">{v}</p>
    </div>
  );
}

function Avatar({ text, size, bg }: { text: string; size: number; bg: string }) {
  return (
    <span
      className="inline-grid place-items-center rounded-full text-white"
      style={{
        width: size,
        height: size,
        background: bg,
        fontSize: Math.max(8, size * 0.45),
        fontWeight: 600,
      }}
    >
      {text}
    </span>
  );
}

function Slash() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[var(--text-3)]">
      <path d="M16.88 3.549L7.12 20.451" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

function ChevronUpDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[var(--text-3)]">
      <path d="M5 6l3-3 3 3M5 10l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchHint() {
  return (
    <div className="hidden h-8 items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--bg-elev-1)] px-2.5 text-[12px] text-[var(--text-3)] hover:border-[var(--border-strong)] md:flex">
      <Search className="h-3.5 w-3.5" />
      <span>Search…</span>
      <span className="ml-2 inline-flex items-center gap-0.5 rounded border border-[var(--border)] bg-[var(--bg-elev-2)] px-1 py-px font-mono text-[10px]">
        <Command className="h-2.5 w-2.5" /> K
      </span>
    </div>
  );
}

function MobileTabBar({ current, onChange }: { current: Tab; onChange: (t: Tab) => void }) {
  const items: Array<{ id: Tab; label: string; icon: React.ReactNode }> = [
    { id: "overview", label: "Home", icon: <Gauge className="h-4 w-4" /> },
    { id: "map", label: "Map", icon: <Boxes className="h-4 w-4" /> },
    { id: "domains", label: "Domains", icon: <Layers className="h-4 w-4" /> },
    { id: "agents", label: "Agents", icon: <Sparkles className="h-4 w-4" /> },
    { id: "settings", label: "More", icon: <Settings className="h-4 w-4" /> },
  ];
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 grid grid-cols-5 border-t border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur md:hidden">
      {items.map((item) => {
        const active = current === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            className={`flex flex-col items-center gap-0.5 py-2.5 text-[10.5px] ${
              active ? "text-[var(--text)]" : "text-[var(--text-3)]"
            }`}
          >
            <span className={`grid h-7 w-7 place-items-center rounded-md ${active ? "bg-[var(--bg-elev-2)]" : ""}`}>
              {item.icon}
            </span>
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}

/* ──────────────────────────── Helpers ──────────────────────────── */

function scoreColor(score: number) {
  if (score >= 75) return "var(--success)";
  if (score >= 55) return "var(--warn)";
  return "var(--danger)";
}

function downloadReport(analysis: Analysis | null) {
  if (!analysis) return;
  const blob = new Blob([JSON.stringify(analysis, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "csdm3d-report.json";
  anchor.click();
  URL.revokeObjectURL(url);
}

