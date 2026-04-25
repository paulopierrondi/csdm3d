"use client";

import { FormEvent, useMemo, useState } from "react";

type Stage = "foundation" | "crawl" | "walk" | "run" | "fly";
type Domain = "foundational" | "design" | "build" | "technical-services" | "sell-consume";

type DomainScore = {
  domain: Domain;
  label: string;
  score: number;
  stage: Stage;
  blockers: number;
  evidence: string;
};

type Analysis = {
  instanceName: string;
  instanceUrl: string;
  overallScore: number;
  globalStage: Stage;
  progressToNext: number;
  domains: DomainScore[];
  insights: Array<{ title: string; detail: string }>;
  generatedAt: string;
};

const stageLabels: Record<Stage, string> = {
  foundation: "Foundation",
  crawl: "Crawl",
  walk: "Walk",
  run: "Run",
  fly: "Fly",
};

const domainMeta: Record<Domain, { label: string; color: string; position: { left: string; top: string } }> = {
  foundational: {
    label: "Foundational Data",
    color: "#0ca678",
    position: { left: "9%", top: "24%" },
  },
  design: {
    label: "Design",
    color: "#1c7ed6",
    position: { left: "39%", top: "16%" },
  },
  build: {
    label: "Build",
    color: "#f08c00",
    position: { left: "63%", top: "43%" },
  },
  "technical-services": {
    label: "Manage Technical Services",
    color: "#15aabf",
    position: { left: "18%", top: "59%" },
  },
  "sell-consume": {
    label: "Sell / Consume Services",
    color: "#2f9e44",
    position: { left: "71%", top: "20%" },
  },
};

const demoAnalysis: Analysis = {
  instanceName: "Demo Customer",
  instanceUrl: "https://demo.service-now.com",
  overallScore: 70,
  globalStage: "crawl",
  progressToNext: 42,
  generatedAt: new Date().toISOString(),
  domains: [
    {
      domain: "foundational",
      label: domainMeta.foundational.label,
      score: 84,
      stage: "walk",
      blockers: 1,
      evidence: "Company, location and core CI records have enough quality to support next-stage governance.",
    },
    {
      domain: "design",
      label: domainMeta.design.label,
      score: 70,
      stage: "crawl",
      blockers: 3,
      evidence: "Business application ownership and lifecycle fields need stronger consistency.",
    },
    {
      domain: "build",
      label: domainMeta.build.label,
      score: 64,
      stage: "crawl",
      blockers: 4,
      evidence: "Application services exist, but relationship depth is not strong enough for run-stage automation.",
    },
    {
      domain: "technical-services",
      label: domainMeta["technical-services"].label,
      score: 76,
      stage: "walk",
      blockers: 2,
      evidence: "Technical services are visible, but service offering alignment still limits operational use.",
    },
    {
      domain: "sell-consume",
      label: domainMeta["sell-consume"].label,
      score: 57,
      stage: "crawl",
      blockers: 5,
      evidence: "Customer-facing service portfolio traceability is the weakest maturity signal.",
    },
  ],
  insights: [
    {
      title: "Executive narrative",
      detail: "The instance is at Crawl maturity. The story should focus on incremental trust in CMDB data before scaling automation and AI use cases.",
    },
    {
      title: "Weakest maturity domain",
      detail: "Sell / Consume Services is limiting the global stage. Start with portfolio traceability and business service ownership.",
    },
    {
      title: "AI readiness implication",
      detail: "AI can explain patterns and prioritize remediation, but autonomous action should wait until relationships and ownership are more reliable.",
    },
  ],
};

const domains = Object.keys(domainMeta) as Domain[];

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

  const rankedDomains = useMemo(
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
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unexpected error");
    } finally {
      setLoading(false);
    }
  }

  if (!loggedIn) {
    return (
      <main className="min-h-screen bg-[#071924] text-white">
        <div className="grid min-h-screen lg:grid-cols-[1.05fr_0.95fr]">
          <section className="relative flex flex-col justify-between overflow-hidden px-6 py-8 md:px-12">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(61,208,216,0.22),transparent_34%),linear-gradient(180deg,#082331,#06131e)]" />
            <div className="relative z-10 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#3dd0d8] font-black text-[#06131e]">
                3D
              </div>
              <div>
                <p className="text-sm font-black">CSDM3D</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-cyan-100/55">Maturity map</p>
              </div>
            </div>
            <p className="relative z-10 mt-4 w-fit rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-xs font-bold text-cyan-50/80">
              Built for the ServiceNow community by Paulo Pierrondi
            </p>

            <div className="relative z-10 max-w-3xl py-20">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-[#8ce99a]">
                ServiceNow CMDB + CSDM5
              </p>
              <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                Turn CSDM maturity into a map people can act on.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Login, connect a ServiceNow instance, analyze the five CSDM domains, and generate an executive-ready maturity view with AI-guided insights.
              </p>
            </div>

            <div className="relative z-10 grid max-w-3xl gap-3 md:grid-cols-3">
              <LaunchProof label="Domains" value="CSDM5" />
              <LaunchProof label="Output" value="3D Map" />
              <LaunchProof label="AI role" value="Explain" />
            </div>
          </section>

          <section className="flex items-center justify-center bg-[#f4f7fb] px-6 py-10 text-[#102a43]">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleLogin();
              }}
              className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-7 shadow-xl"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0b7285]">Private workspace</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">Sign in to CSDM3D</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                This public build uses a lightweight local login gate so teams can test the concept without server secrets.
              </p>

              <label className="mt-6 block text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Email</label>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3 text-sm outline-none focus:border-[#0b7285]"
                type="email"
              />
              <label className="mt-4 block text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Password</label>
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3 text-sm outline-none focus:border-[#0b7285]"
                type="password"
              />
              <button
                type="button"
                onClick={handleLogin}
                className="mt-6 w-full rounded-md bg-[#0b7285] px-4 py-3 text-sm font-black text-white transition hover:bg-[#095c6b]"
              >
                Enter workspace
              </button>
            </form>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#eaf0f7] text-[#102a43]">
      <header className="flex min-h-16 items-center justify-between border-b border-white/10 bg-[#0b3041] px-5 text-white">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-[#3dd0d8] text-sm font-black text-[#06131e]">3D</div>
          <div>
            <p className="text-lg font-black">CSDM3D</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">CMDB maturity workspace</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setAnalysis(demoAnalysis)} className="rounded-md border border-white/20 px-4 py-2 text-sm font-bold text-white/90 hover:bg-white/10">
            Load demo
          </button>
          <button onClick={() => setLoggedIn(false)} className="rounded-md bg-white/10 px-4 py-2 text-sm font-bold text-white/80 hover:bg-white/15">
            Sign out
          </button>
        </div>
      </header>

      <div className="grid min-h-[calc(100vh-4rem)] grid-cols-1 xl:grid-cols-[360px_1fr_380px]">
        <aside className="border-r border-slate-200 bg-white">
          <section className="border-b border-slate-200 p-5">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0b7285]">ServiceNow instance</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight">Connect and analyze</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Credentials are sent only to your local API route for this analysis request. Do not deploy this demo without adding production-grade auth and secret storage.
            </p>
          </section>

          <form onSubmit={runLiveAnalysis} className="space-y-4 border-b border-slate-200 p-5">
            <Field label="Instance URL" value={instanceUrl} onChange={setInstanceUrl} placeholder="https://example.service-now.com" type="url" />
            <Field label="Username" value={username} onChange={setUsername} placeholder="api.user" />
            <Field label="Password" value={instancePassword} onChange={setInstancePassword} placeholder="••••••••" type="password" />
            {error && <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}
            <button disabled={loading} className="w-full rounded-md bg-[#0b7285] px-4 py-3 text-sm font-black text-white transition hover:bg-[#095c6b] disabled:opacity-60">
              {loading ? "Analyzing..." : "Analyze CSDM5"}
            </button>
          </form>

          <section className="space-y-3 p-5">
            <PipelineStep done label="1. Login" detail="Enter the protected CSDM3D workspace." />
            <PipelineStep done={!!analysis} label="2. CSDM5 analysis" detail="Connect ServiceNow or load the sample data." />
            <PipelineStep done={!!analysis} label="3. Map and insights" detail="Use the result in a workshop, report, or LinkedIn demo." />
          </section>
        </aside>

        <section className="min-h-[760px] p-5">
          {analysis ? (
            <>
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#43617a]">CSDM5 maturity universe</p>
                  <h2 className="mt-1 text-3xl font-black tracking-tight">3D maturity map</h2>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-right shadow-sm">
                  <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">Global stage</p>
                  <p className="text-xl font-black text-[#0b7285]">{stageLabels[analysis.globalStage]}</p>
                </div>
              </div>
              <CsdmMap analysis={analysis} />
              <div className="mt-4 grid gap-3 lg:grid-cols-3">
                {rankedDomains.slice(0, 3).map((domain) => (
                  <div key={domain.domain} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-red-600">Priority · {domain.label}</p>
                    <p className="mt-2 text-sm font-black">{domain.blockers} blockers to investigate</p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">{domain.evidence}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex h-full min-h-[760px] items-center justify-center">
              <div className="max-w-xl">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0b7285]">No analysis yet</p>
                <h2 className="mt-2 text-4xl font-black tracking-tight">Start with demo data or connect a ServiceNow instance.</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  The demo data shows the full product story for community sharing. A live instance run calls the ServiceNow Table API for lightweight maturity signals.
                </p>
                <button onClick={() => setAnalysis(demoAnalysis)} className="mt-6 rounded-md bg-[#0b7285] px-4 py-3 text-sm font-black text-white">
                  Load demo analysis
                </button>
              </div>
            </div>
          )}
        </section>

        <aside className="overflow-auto border-l border-slate-200 bg-white">
          <section className="border-b border-slate-200 p-5">
            <PanelTitle title="Dashboard" />
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Metric label="Score" value={analysis ? String(analysis.overallScore) : "--"} />
              <Metric label="Stage" value={analysis ? stageLabels[analysis.globalStage] : "--"} />
              <Metric label="To next" value={analysis ? `${analysis.progressToNext}%` : "--"} />
              <Metric label="Domains" value={analysis ? String(analysis.domains.length) : "--"} />
            </div>
          </section>

          <section className="border-b border-slate-200 p-5">
            <PanelTitle title="AI insights" />
            <div className="mt-4 space-y-3">
              {analysis ? (
                analysis.insights.map((insight) => (
                  <div key={insight.title} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                    <p className="text-sm font-black">{insight.title}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">{insight.detail}</p>
                  </div>
                ))
              ) : (
                <p className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500">Run an analysis to generate AI-ready insights.</p>
              )}
            </div>
          </section>

          <section className="border-b border-slate-200 p-5">
            <PanelTitle title="Domains" />
            <div className="mt-4 space-y-2">
              {domains.map((domain) => {
                const result = analysis?.domains.find((item) => item.domain === domain);
                return (
                  <div key={domain} className="rounded-lg border border-slate-200 bg-white p-3">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-black">{domainMeta[domain].label}</p>
                      <span className="text-sm font-black text-[#0b7285]">{result?.score ?? "--"}</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full rounded-full bg-[#0b7285]" style={{ width: `${result?.score ?? 0}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="p-5">
            <PanelTitle title="Report" />
            <button
              disabled={!analysis}
              onClick={() => downloadReport(analysis)}
              className="mt-4 w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-left text-sm font-black transition hover:border-[#0b7285] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Download JSON report
            </button>
          </section>
        </aside>
      </div>
    </main>
  );
}

function CsdmMap({ analysis }: { analysis: Analysis }) {
  return (
    <div className="relative h-[620px] overflow-hidden rounded-lg border border-slate-200 bg-[linear-gradient(145deg,#f8fbff_0%,#dbe8f7_58%,#c6d5ec_100%)] shadow-sm">
      <div className="absolute left-5 top-5 z-10 rounded-lg border border-slate-200 bg-white/90 px-4 py-3 shadow-sm backdrop-blur">
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">CSDM5 stage rail</p>
        <div className="mt-2 flex gap-2">
          {(Object.keys(stageLabels) as Stage[]).map((stage) => (
            <span key={stage} className={`rounded-full px-3 py-1 text-xs font-black ${stage === analysis.globalStage ? "bg-[#0b7285] text-white" : "bg-slate-100 text-slate-500"}`}>
              {stageLabels[stage]}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-10 bottom-8 top-20 [perspective:1200px]">
        <div className="absolute inset-0 rounded-[18px] border border-white/70 bg-white/40 shadow-[0_40px_90px_rgba(30,64,100,0.18)] [transform:rotateX(58deg)_rotateZ(-8deg)] [transform-origin:center]">
          <div className="absolute inset-8 rounded-xl border border-[#9fb6cf]/40 bg-[linear-gradient(90deg,rgba(15,118,110,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(15,118,110,0.10)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="absolute left-[12%] top-[32%] h-1 w-[64%] rotate-[10deg] rounded-full bg-[#0b7285]/30" />
          <div className="absolute left-[22%] top-[52%] h-1 w-[50%] -rotate-[16deg] rounded-full bg-[#0b7285]/24" />
          <div className="absolute left-[45%] top-[28%] h-1 w-[32%] rotate-[38deg] rounded-full bg-[#0b7285]/22" />
        </div>

        {analysis.domains.map((domain) => {
          const meta = domainMeta[domain.domain];
          const height = 56 + domain.score * 1.1;
          return (
            <div key={domain.domain} className="absolute z-20 w-[190px]" style={{ left: meta.position.left, top: meta.position.top }}>
              <div className="relative rounded-lg border border-white/70 bg-white px-4 pb-4 pt-3 shadow-[0_26px_50px_rgba(15,42,70,0.18)]">
                <div className="absolute -top-8 left-1/2 w-16 -translate-x-1/2 rounded-t-md shadow-[0_16px_26px_rgba(15,42,70,0.18)]" style={{ height, background: `linear-gradient(180deg, ${meta.color}, #102a43)` }} />
                <div className="relative z-10">
                  <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">{stageLabels[domain.stage]}</p>
                  <p className="mt-1 text-sm font-black leading-5">{domain.label}</p>
                  <div className="mt-3 flex items-end justify-between gap-3">
                    <span className="text-3xl font-black">{domain.score}</span>
                    <span className="rounded-full px-2 py-1 text-[10px] font-black text-white" style={{ background: meta.color }}>
                      {domain.blockers} blockers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-5 left-5 right-5 z-30 grid gap-3 md:grid-cols-3">
        <MapStat label="Global stage" value={stageLabels[analysis.globalStage]} />
        <MapStat label="Progress to next" value={`${analysis.progressToNext}%`} />
        <MapStat label="AI narrative" value="Prioritize weakest domain before scaling automation." compact />
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
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type={type}
        className="mt-2 w-full rounded-md border border-slate-300 px-3 py-3 text-sm outline-none focus:border-[#0b7285]"
      />
    </label>
  );
}

function LaunchProof({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.08] p-4">
      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-100/50">{label}</p>
      <p className="mt-2 text-2xl font-black">{value}</p>
    </div>
  );
}

function PipelineStep({ done, label, detail }: { done: boolean; label: string; detail: string }) {
  return (
    <div className="grid grid-cols-[28px_1fr] gap-3">
      <div className={`mt-0.5 grid h-7 w-7 place-items-center rounded-full border ${done ? "border-[#087f5b] bg-[#e6fcf5] text-[#087f5b]" : "border-slate-200 bg-white text-slate-400"}`}>
        <span className="text-xs font-black">✓</span>
      </div>
      <div>
        <p className="text-sm font-black">{label}</p>
        <p className="mt-0.5 text-xs leading-5 text-slate-500">{detail}</p>
      </div>
    </div>
  );
}

function PanelTitle({ title }: { title: string }) {
  return <h2 className="text-sm font-black uppercase tracking-[0.14em]">{title}</h2>;
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
      <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">{label}</p>
      <p className="mt-1 text-xl font-black">{value}</p>
    </div>
  );
}

function MapStat({ label, value, compact = false }: { label: string; value: string; compact?: boolean }) {
  return (
    <div className="rounded-lg border border-white/70 bg-white/[0.88] p-3 shadow-sm backdrop-blur">
      <p className="text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">{label}</p>
      <p className={`mt-1 font-black ${compact ? "text-sm" : "text-lg text-[#0b7285]"}`}>{value}</p>
    </div>
  );
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
