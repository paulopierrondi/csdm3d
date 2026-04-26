"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  ChevronRight,
  Command,
  Database,
  Download,
  LayoutGrid,
  LogOut,
  Map as MapIcon,
  Sparkles,
  Stethoscope,
  TerminalSquare,
  X,
} from "lucide-react";
import { Csdm3dUniverse } from "@/components/Csdm3dUniverse";

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

type MobileTab = "map" | "agents" | "domains" | "report";

const stageLabels: Record<Stage, string> = {
  foundation: "Foundation",
  crawl: "Crawl",
  walk: "Walk",
  run: "Run",
  fly: "Fly",
};

const domainOrder: Domain[] = ["foundational", "design", "build", "technical-services", "sell-consume"];

const domainShort: Record<Domain, string> = {
  foundational: "Foundation",
  design: "Design",
  build: "Build",
  "technical-services": "Tech Services",
  "sell-consume": "Sell / Consume",
};

const demoAnalysis: Analysis = {
  instanceName: "Demo Customer",
  instanceUrl: "https://demo.service-now.com",
  overallScore: 70,
  globalStage: "crawl",
  progressToNext: 42,
  csdmVersion: "CSDM 5.0",
  generatedAt: new Date().toISOString(),
  domains: [
    {
      domain: "foundational",
      label: "Foundational Data",
      score: 84,
      stage: "walk",
      blockers: 1,
      evidence: "Company, location and core CI records have enough quality to support next-stage governance.",
    },
    {
      domain: "design",
      label: "Design",
      score: 70,
      stage: "crawl",
      blockers: 3,
      evidence: "Business application ownership and lifecycle fields need stronger consistency.",
    },
    {
      domain: "build",
      label: "Build",
      score: 64,
      stage: "crawl",
      blockers: 4,
      evidence: "Application services exist, but relationship depth is not strong enough for run-stage automation.",
    },
    {
      domain: "technical-services",
      label: "Manage Technical Services",
      score: 76,
      stage: "walk",
      blockers: 2,
      evidence: "Technical services are visible, but service offering alignment still limits operational use.",
    },
    {
      domain: "sell-consume",
      label: "Sell / Consume Services",
      score: 57,
      stage: "crawl",
      blockers: 5,
      evidence: "Customer-facing service portfolio traceability is the weakest maturity signal.",
    },
  ],
  agents: [
    {
      id: "pierrondi-ea",
      name: "Paulo Pierrondi",
      role: "Enterprise Architect",
      avatar: "PP",
      color: "#5e6ad2",
      tagline: "Strategy, exec narrative, CSDM 5.0 roadmap.",
      insights: [
        {
          title: "Executive narrative",
          detail:
            "Crawl maturity. Position CSDM 5.0 as the operating backbone for ITOM, Service Mapping and Now Assist trust — sell incremental wins, not a multi-year program.",
        },
        {
          title: "Where to start",
          detail:
            "Sell / Consume Services scored lowest (57). Make portfolio traceability and business service ownership the first remediation workshop and tie it to a measurable KPI.",
        },
        {
          title: "AI readiness implication",
          detail:
            "Now Assist outputs are high-risk on this data shape. Use AI for explanation and prioritization, keep autonomous action governed.",
        },
      ],
    },
    {
      id: "itom-doctor",
      name: "ITOM Doctor",
      role: "CMDB & Discovery Specialist",
      avatar: "Rx",
      color: "#26b58a",
      tagline: "CMDB health, Discovery coverage, Service Mapping signals.",
      insights: [
        {
          title: "CMDB health",
          detail:
            "Foundational layer at 84/100 — good baseline. Push for CI relationship density and reduce orphan CIs before scaling Discovery patterns.",
        },
        {
          title: "Discovery & Service Mapping",
          detail:
            "Build domain at 64/100. Application Service population is the leading indicator — this signal says Service Mapping has not been run end-to-end.",
        },
        {
          title: "CMDB Health backlog",
          detail:
            "15 blockers across the 5 domains. Treat them as a CMDB Health dashboard backlog, not a single program.",
        },
      ],
    },
  ],
  insights: [
    {
      title: "Executive narrative",
      detail:
        "Crawl maturity. Position CSDM 5.0 as the operating backbone for ITOM, Service Mapping and Now Assist trust.",
    },
    {
      title: "CMDB health",
      detail:
        "Foundational layer at 84/100 — good baseline. Push for CI relationship density.",
    },
  ],
};

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
  const [mobileTab, setMobileTab] = useState<MobileTab>("map");
  const [connectOpen, setConnectOpen] = useState(false);

  const ranked = useMemo(
    () => [...(analysis?.domains ?? [])].sort((a, b) => a.score - b.score),
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
      setMobileTab("map");
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
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      {/* Top bar */}
      <header className="sticky top-0 z-30 flex h-12 items-center justify-between border-b border-[var(--border)] bg-[var(--bg)]/95 px-3 backdrop-blur md:px-4">
        <div className="flex items-center gap-2.5">
          <div className="grid h-6 w-6 place-items-center rounded-md bg-[var(--accent)] text-[11px] font-semibold text-white">
            3D
          </div>
          <div className="hidden items-baseline gap-2 sm:flex">
            <span className="text-[13px] font-semibold tracking-tight">CSDM3D</span>
            <span className="text-[11px] text-[var(--text-3)]">/ {analysis?.csdmVersion ?? "CSDM 5.0"}</span>
          </div>
          {analysis && (
            <span className="ml-1 hidden items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--bg-elev-1)] px-2 py-1 text-[11px] text-[var(--text-2)] md:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
              {analysis.instanceName}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <KeyHint />
          <button
            onClick={() => setAnalysis(demoAnalysis)}
            className="rounded-md border border-[var(--border)] bg-[var(--bg-elev-1)] px-2.5 py-1.5 text-[12px] text-[var(--text-2)] hover:border-[var(--border-strong)] hover:text-[var(--text)]"
          >
            Demo data
          </button>
          <button
            onClick={() => setConnectOpen(true)}
            className="rounded-md bg-[var(--accent)] px-2.5 py-1.5 text-[12px] font-medium text-white hover:bg-[var(--accent-hover)]"
          >
            Connect
          </button>
          <button
            onClick={() => setLoggedIn(false)}
            aria-label="Sign out"
            className="rounded-md border border-[var(--border)] bg-[var(--bg-elev-1)] p-1.5 text-[var(--text-2)] hover:text-[var(--text)]"
          >
            <LogOut className="h-3.5 w-3.5" />
          </button>
        </div>
      </header>

      {/* Layout: 3 columns on desktop, single column + bottom tabs on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_340px]">
        {/* Sidebar — desktop only */}
        <aside className="hidden border-r border-[var(--border)] lg:block">
          <Sidebar analysis={analysis} ranked={ranked} onPickDomain={() => {}} />
        </aside>

        {/* Main canvas */}
        <section className="min-h-[calc(100vh-3rem-3.25rem)] lg:min-h-[calc(100vh-3rem)]">
          <MainCanvas analysis={analysis} mobileTab={mobileTab} ranked={ranked} />
        </section>

        {/* Right inspector — desktop only */}
        <aside className="hidden border-l border-[var(--border)] lg:block">
          <Inspector analysis={analysis} ranked={ranked} />
        </aside>
      </div>

      {/* Mobile bottom tab bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 grid grid-cols-4 border-t border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur lg:hidden">
        <TabButton active={mobileTab === "map"} onClick={() => setMobileTab("map")} icon={<MapIcon className="h-4 w-4" />} label="Map" />
        <TabButton active={mobileTab === "agents"} onClick={() => setMobileTab("agents")} icon={<Sparkles className="h-4 w-4" />} label="Agents" />
        <TabButton active={mobileTab === "domains"} onClick={() => setMobileTab("domains")} icon={<LayoutGrid className="h-4 w-4" />} label="Domains" />
        <TabButton active={mobileTab === "report"} onClick={() => setMobileTab("report")} icon={<Download className="h-4 w-4" />} label="Report" />
      </nav>

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
    <main className="grid min-h-screen place-items-center bg-[var(--bg)] px-4 text-[var(--text)]">
      <div className="w-full max-w-[380px]">
        <div className="mb-8 flex items-center gap-2.5">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-[var(--accent)] text-[12px] font-semibold text-white">3D</div>
          <span className="text-[14px] font-semibold tracking-tight">CSDM3D</span>
        </div>

        <h1 className="text-[22px] font-semibold leading-tight tracking-tight">Sign in to your workspace</h1>
        <p className="mt-1.5 text-[13px] text-[var(--text-2)]">
          CSDM 5.0 maturity assessment with two specialist agents.
        </p>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit();
          }}
          className="mt-7 space-y-3"
        >
          <Field label="Email" value={email} onChange={setEmail} type="email" />
          <Field label="Password" value={password} onChange={setPassword} type="password" />
          <button
            type="submit"
            className="mt-2 w-full rounded-md bg-[var(--accent)] px-3 py-2 text-[13px] font-medium text-white hover:bg-[var(--accent-hover)]"
          >
            Continue
          </button>
        </form>

        <p className="mt-6 text-[11px] text-[var(--text-3)]">
          Public demo · no credentials are persisted server-side.
        </p>
      </div>
    </main>
  );
}

function Sidebar({
  analysis,
  ranked,
}: {
  analysis: Analysis | null;
  ranked: DomainScore[];
  onPickDomain: (d: Domain) => void;
}) {
  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-[var(--border)] p-4">
        <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--text-3)]">Workspace</p>
        <h2 className="mt-1 text-[14px] font-semibold tracking-tight">CSDM 5.0 Assessment</h2>
        {analysis ? (
          <div className="mt-3 grid grid-cols-3 gap-1.5">
            <Mini label="Score" value={String(analysis.overallScore)} />
            <Mini label="Stage" value={stageLabels[analysis.globalStage]} />
            <Mini label="Next" value={`${analysis.progressToNext}%`} />
          </div>
        ) : (
          <p className="mt-3 text-[12px] text-[var(--text-2)]">Run an analysis or load demo data.</p>
        )}
      </div>

      <SidebarSection title="Agents">
        {analysis?.agents?.map((agent) => (
          <SidebarRow key={agent.id} avatar={agent.avatar} avatarColor={agent.color} title={agent.name} subtitle={agent.role} />
        )) ?? <Empty text="No analysis" />}
      </SidebarSection>

      <SidebarSection title="Priorities">
        {ranked.length > 0 ? (
          ranked.slice(0, 3).map((domain) => (
            <SidebarRow
              key={domain.domain}
              icon={<ChevronRight className="h-3.5 w-3.5 text-[var(--text-3)]" />}
              title={domainShort[domain.domain]}
              subtitle={`${domain.blockers} blockers`}
              right={<ScorePill score={domain.score} />}
            />
          ))
        ) : (
          <Empty text="No priorities" />
        )}
      </SidebarSection>

      <div className="mt-auto border-t border-[var(--border)] p-3 text-[11px] text-[var(--text-3)]">
        <div className="flex items-center gap-1.5">
          <Database className="h-3.5 w-3.5" />
          <span>ServiceNow Table API</span>
        </div>
        <p className="mt-1 leading-relaxed">Lightweight CSDM 5.0 anchor-table probe. Credentials stay in memory.</p>
      </div>
    </div>
  );
}

function MainCanvas({ analysis, mobileTab, ranked }: { analysis: Analysis | null; mobileTab: MobileTab; ranked: DomainScore[] }) {
  if (!analysis) {
    return (
      <div className="grid h-full min-h-[calc(100vh-7rem)] place-items-center px-4 lg:min-h-[calc(100vh-3rem)]">
        <div className="max-w-[420px] text-center">
          <div className="mx-auto grid h-10 w-10 place-items-center rounded-md border border-[var(--border)] bg-[var(--bg-elev-1)]">
            <MapIcon className="h-4 w-4 text-[var(--text-2)]" />
          </div>
          <h2 className="mt-4 text-[18px] font-semibold tracking-tight">No analysis yet</h2>
          <p className="mt-1.5 text-[13px] text-[var(--text-2)]">
            Connect a ServiceNow instance, or load the demo to explore the CSDM 5.0 maturity universe.
          </p>
        </div>
      </div>
    );
  }

  // Mobile: render the active tab. Desktop: render full canvas (map + dock).
  return (
    <div className="px-3 pb-20 pt-3 md:px-4 md:pb-4">
      {/* MAP tab on mobile + full on desktop */}
      <div className={mobileTab === "map" ? "block" : "hidden lg:block"}>
        <CanvasHeader analysis={analysis} />
        <Csdm3dUniverse analysis={analysis} />
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
          {ranked.slice(0, 3).map((domain) => (
            <PriorityCard key={domain.domain} domain={domain} />
          ))}
        </div>
      </div>

      {/* AGENTS tab on mobile */}
      <div className={mobileTab === "agents" ? "block lg:hidden" : "hidden"}>
        <PanelHeading title="Specialist agents" subtitle={`${analysis.agents.length} active for this assessment`} />
        <div className="mt-3 space-y-3">
          {analysis.agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>

      {/* DOMAINS tab on mobile */}
      <div className={mobileTab === "domains" ? "block lg:hidden" : "hidden"}>
        <PanelHeading title="CSDM 5.0 domains" subtitle="Score per anchor-table probe" />
        <div className="mt-3 space-y-2">
          {domainOrder.map((id) => {
            const d = analysis.domains.find((x) => x.domain === id);
            return d ? <DomainRow key={id} domain={d} /> : null;
          })}
        </div>
      </div>

      {/* REPORT tab on mobile */}
      <div className={mobileTab === "report" ? "block lg:hidden" : "hidden"}>
        <PanelHeading title="Export" subtitle="Audit-friendly JSON snapshot" />
        <button
          onClick={() => downloadReport(analysis)}
          className="mt-3 flex w-full items-center justify-between rounded-md border border-[var(--border)] bg-[var(--bg-elev-1)] px-3 py-3 text-[13px] hover:border-[var(--border-strong)]"
        >
          <span>
            <span className="block font-medium">Download JSON report</span>
            <span className="text-[11px] text-[var(--text-3)]">Domains, scores, tables, agents</span>
          </span>
          <Download className="h-4 w-4 text-[var(--text-2)]" />
        </button>
      </div>
    </div>
  );
}

function CanvasHeader({ analysis }: { analysis: Analysis }) {
  return (
    <div className="mb-3 flex items-center justify-between gap-3">
      <div>
        <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--text-3)]">Maturity universe</p>
        <h2 className="mt-0.5 text-[16px] font-semibold tracking-tight md:text-[18px]">
          {analysis.instanceName} <span className="text-[var(--text-3)]">/ {stageLabels[analysis.globalStage]}</span>
        </h2>
      </div>
      <div className="flex items-center gap-2 text-[11px] text-[var(--text-2)]">
        <span className="rounded-md border border-[var(--border)] bg-[var(--bg-elev-1)] px-2 py-1">
          Score <span className="ml-1 text-[var(--text)]">{analysis.overallScore}</span>
        </span>
        <span className="rounded-md border border-[var(--border)] bg-[var(--bg-elev-1)] px-2 py-1">
          Next <span className="ml-1 text-[var(--text)]">{analysis.progressToNext}%</span>
        </span>
      </div>
    </div>
  );
}

function Inspector({ analysis, ranked }: { analysis: Analysis | null; ranked: DomainScore[] }) {
  if (!analysis) {
    return (
      <div className="p-4">
        <Empty text="Run an analysis to populate the inspector." />
      </div>
    );
  }
  return (
    <div className="flex h-full flex-col">
      <SidebarSection title="Specialist agents">
        {analysis.agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} compact />
        ))}
      </SidebarSection>

      <SidebarSection title="Domains">
        {domainOrder.map((id) => {
          const d = analysis.domains.find((x) => x.domain === id);
          return d ? <DomainRow key={id} domain={d} compact /> : null;
        })}
      </SidebarSection>

      <div className="border-t border-[var(--border)] p-3">
        <button
          onClick={() => downloadReport(analysis)}
          className="flex w-full items-center justify-between rounded-md border border-[var(--border)] bg-[var(--bg-elev-1)] px-3 py-2 text-[12px] hover:border-[var(--border-strong)]"
        >
          <span>Download JSON report</span>
          <Download className="h-3.5 w-3.5 text-[var(--text-2)]" />
        </button>
        <p className="mt-2 text-[10px] text-[var(--text-3)]">{ranked.length} domains · {analysis.csdmVersion}</p>
      </div>
    </div>
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
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-[440px] rounded-lg border border-[var(--border-strong)] bg-[var(--bg-elev-1)] shadow-2xl">
        <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--text-3)]">ServiceNow</p>
            <h3 className="text-[14px] font-semibold tracking-tight">Connect instance</h3>
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
          <div className="flex items-center justify-between gap-2 pt-1">
            <p className="text-[11px] text-[var(--text-3)]">Probes CSDM 5.0 anchor tables via Table API.</p>
            <button
              type="submit"
              disabled={loading}
              className="rounded-md bg-[var(--accent)] px-3 py-2 text-[12px] font-medium text-white hover:bg-[var(--accent-hover)] disabled:opacity-60"
            >
              {loading ? "Analyzing…" : "Run analysis"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

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
        className="mt-1 w-full rounded-md border border-[var(--border)] bg-[var(--bg-elev-2)] px-2.5 py-2 text-[13px] text-[var(--text)] placeholder:text-[var(--text-3)] focus:border-[var(--accent)]"
      />
    </label>
  );
}

function SidebarSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-[var(--border)] p-3">
      <p className="px-1 text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--text-3)]">{title}</p>
      <div className="mt-2 space-y-1.5">{children}</div>
    </section>
  );
}

function SidebarRow({
  avatar,
  avatarColor,
  icon,
  title,
  subtitle,
  right,
}: {
  avatar?: string;
  avatarColor?: string;
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-md px-2 py-1.5 hover:bg-[var(--bg-elev-1)]">
      {avatar ? (
        <div className="grid h-6 w-6 place-items-center rounded-full text-[10px] font-semibold text-white" style={{ background: avatarColor }}>
          {avatar}
        </div>
      ) : (
        icon
      )}
      <div className="min-w-0 flex-1">
        <p className="truncate text-[12.5px] font-medium">{title}</p>
        {subtitle && <p className="truncate text-[11px] text-[var(--text-3)]">{subtitle}</p>}
      </div>
      {right}
    </div>
  );
}

function AgentCard({ agent, compact }: { agent: Agent; compact?: boolean }) {
  return (
    <article className={`rounded-md border border-[var(--border)] bg-[var(--bg-elev-1)] ${compact ? "p-3" : "p-4"}`}>
      <header className="flex items-center gap-2.5">
        <div className="grid h-7 w-7 place-items-center rounded-full text-[11px] font-semibold text-white" style={{ background: agent.color }}>
          {agent.avatar}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-semibold tracking-tight">{agent.name}</p>
          <p className="truncate text-[11px] text-[var(--text-2)]">{agent.role}</p>
        </div>
        {agent.id === "itom-doctor" ? (
          <Stethoscope className="h-3.5 w-3.5 text-[var(--text-3)]" />
        ) : (
          <TerminalSquare className="h-3.5 w-3.5 text-[var(--text-3)]" />
        )}
      </header>
      <p className="mt-2 text-[11px] text-[var(--text-3)]">{agent.tagline}</p>
      <ul className="mt-3 space-y-2.5">
        {agent.insights.map((insight) => (
          <li key={insight.title} className="rounded-md border border-[var(--border)] bg-[var(--bg)] p-2.5">
            <p className="text-[12px] font-medium">{insight.title}</p>
            <p className="mt-1 text-[12px] leading-relaxed text-[var(--text-2)]">{insight.detail}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}

function DomainRow({ domain, compact }: { domain: DomainScore; compact?: boolean }) {
  return (
    <div className={`rounded-md border border-[var(--border)] bg-[var(--bg-elev-1)] ${compact ? "p-2.5" : "p-3"}`}>
      <div className="flex items-center justify-between gap-2">
        <p className="text-[12.5px] font-medium">{domain.label}</p>
        <ScorePill score={domain.score} />
      </div>
      <div className="mt-2 h-1 overflow-hidden rounded-full bg-[var(--bg-elev-3)]">
        <div className="h-full rounded-full" style={{ width: `${domain.score}%`, background: scoreColor(domain.score) }} />
      </div>
      <div className="mt-2 flex items-center justify-between text-[10.5px] text-[var(--text-3)]">
        <span>{stageLabels[domain.stage]}</span>
        <span>{domain.blockers} blockers</span>
      </div>
    </div>
  );
}

function PriorityCard({ domain }: { domain: DomainScore }) {
  return (
    <div className="rounded-md border border-[var(--border)] bg-[var(--bg-elev-1)] p-3">
      <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--danger)]">Priority · {domain.label}</p>
      <p className="mt-1.5 text-[12px] font-medium">{domain.blockers} blockers to investigate</p>
      <p className="mt-1 text-[11.5px] leading-relaxed text-[var(--text-2)]">{domain.evidence}</p>
    </div>
  );
}

function PanelHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--text-3)]">CSDM3D</p>
      <h2 className="mt-0.5 text-[16px] font-semibold tracking-tight">{title}</h2>
      <p className="text-[12px] text-[var(--text-2)]">{subtitle}</p>
    </div>
  );
}

function ScorePill({ score }: { score: number }) {
  return (
    <span
      className="rounded px-1.5 py-0.5 text-[10.5px] font-medium tabular-nums"
      style={{
        background: `${scoreColor(score)}1f`,
        color: scoreColor(score),
      }}
    >
      {score}
    </span>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-[var(--border)] bg-[var(--bg-elev-1)] px-2 py-1.5">
      <p className="text-[9.5px] uppercase tracking-[0.1em] text-[var(--text-3)]">{label}</p>
      <p className="mt-0.5 text-[13px] font-semibold tabular-nums">{value}</p>
    </div>
  );
}

function Empty({ text }: { text: string }) {
  return <p className="px-1 text-[11px] text-[var(--text-3)]">{text}</p>;
}

function TabButton({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-0.5 py-2.5 text-[10.5px] ${active ? "text-[var(--text)]" : "text-[var(--text-3)]"}`}
    >
      <span className={`grid h-7 w-7 place-items-center rounded-md ${active ? "bg-[var(--bg-elev-2)] text-[var(--accent)]" : ""}`}>{icon}</span>
      {label}
    </button>
  );
}

function KeyHint() {
  return (
    <div className="hidden items-center gap-1 rounded-md border border-[var(--border)] bg-[var(--bg-elev-1)] px-1.5 py-1 text-[10.5px] text-[var(--text-3)] md:flex">
      <Command className="h-3 w-3" />
      <span>K</span>
    </div>
  );
}

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
