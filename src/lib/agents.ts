// Shared content engine for the two specialist agents. Imported by both the
// API route (live analysis) and the demo data on the client, so live and
// demo experiences are guaranteed to be in sync.

type Stage = "foundation" | "crawl" | "walk" | "run" | "fly";
type Domain = "foundational" | "design" | "build" | "technical-services" | "sell-consume";

type Probe = { table: string; available: boolean; count: number };

type DomainInput = {
  domain: Domain;
  label: string;
  score: number;
  stage: Stage;
  blockers: number;
  evidence: string;
  tables: Probe[];
};

export const stageLabels: Record<Stage, string> = {
  foundation: "Foundation",
  crawl: "Crawl",
  walk: "Walk",
  run: "Run",
  fly: "Fly",
};

export const stageThresholds: Record<Stage, number> = {
  foundation: 0,
  crawl: 48,
  walk: 66,
  run: 78,
  fly: 90,
};

export const nextStage: Record<Stage, Stage | null> = {
  foundation: "crawl",
  crawl: "walk",
  walk: "run",
  run: "fly",
  fly: null,
};

export function scoreToStage(score: number): Stage {
  if (score >= 90) return "fly";
  if (score >= 78) return "run";
  if (score >= 66) return "walk";
  if (score >= 48) return "crawl";
  return "foundation";
}

// Plain-language meaning of each anchor table — used to turn missing-table
// signals into specific, opinionated diagnoses instead of opaque sys names.
export const tableMeaning: Record<string, string> = {
  cmdb_ci: "core CI seed",
  core_company: "company master data",
  cmn_location: "location master data",
  cmn_department: "department hierarchy",
  sys_user_group: "support group ownership",
  cmdb_rel_ci: "CI relationship density",
  cmdb_ci_business_app: "business application registry",
  cmdb_application_product_model: "application product catalog (APM)",
  cmdb_ci_service_discovered: "Service Mapping discovered services",
  cmdb_ci_service_auto: "Service Mapping automated services",
  cmdb_ci_appl: "deployed application instances",
  cmdb_ci_service_technical: "technical service catalog",
  service_offering: "service offering layer",
  sla_definition: "SLA definitions",
  cmdb_ci_service_business: "business service portfolio",
  contract: "consumer contract layer",
  sn_consumer: "consumer registry",
};

export function buildAgents({
  domains,
  overallScore,
  globalStage,
  weakest,
}: {
  domains: DomainInput[];
  overallScore: number;
  globalStage: Stage;
  weakest: DomainInput;
}) {
  const stageLabel = stageLabels[globalStage];
  const upcoming = nextStage[globalStage];
  const upcomingLabel = upcoming ? stageLabels[upcoming] : null;
  const gapToNext = upcoming ? Math.max(0, stageThresholds[upcoming] - overallScore) : 0;

  const ranked = [...domains].sort((a, b) => a.score - b.score);
  const strongest = ranked[ranked.length - 1];
  const spread = strongest.score - weakest.score;

  const totalBlockers = domains.reduce((sum, d) => sum + d.blockers, 0);
  const allMissing = domains.flatMap((d) =>
    d.tables.filter((t) => !t.available).map((t) => ({ table: t.table, domain: d.label })),
  );
  const missingNames = allMissing.map((m) => m.table);
  const has = (table: string) => domains.some((d) => d.tables.some((t) => t.table === table && t.available));
  const missingMeanings = allMissing
    .map((m) => tableMeaning[m.table])
    .filter((value): value is string => Boolean(value));

  const foundational = domains.find((d) => d.domain === "foundational");
  const design = domains.find((d) => d.domain === "design");
  const build = domains.find((d) => d.domain === "build");
  const tech = domains.find((d) => d.domain === "technical-services");
  const sell = domains.find((d) => d.domain === "sell-consume");

  const serviceMappingDeployed = has("cmdb_ci_service_discovered") || has("cmdb_ci_service_auto");
  const serviceMappingShallow =
    serviceMappingDeployed &&
    domains.some((d) => d.tables.some((t) => t.table === "cmdb_ci_service_auto" && t.available && t.count < 25));
  const businessServiceCatalog = has("cmdb_ci_service_business");
  const apmDeployed = has("cmdb_application_product_model");

  // ──────── Pierrondi (EA) — strategy & exec narrative ────────

  const execNarrative =
    globalStage === "foundation"
      ? `Score ${overallScore}/100 — Foundation. Today's data shape will not support governed automation. Sell a focused 90-day CMDB Health sprint before any Now Assist or ITOM scope conversation.`
      : globalStage === "crawl"
        ? `Score ${overallScore}/100 — Crawl. Position CSDM 5.0 as the operating backbone for ITOM and Now Assist trust. Sell incremental wins tied to a single business outcome, not a multi-year program.`
        : globalStage === "walk"
          ? `Score ${overallScore}/100 — Walk. The instance is governance-ready; pivot the narrative from "fix the CMDB" to "monetize CSDM" via Service Mapping, SAM and AI-assisted operations.`
          : globalStage === "run"
            ? `Score ${overallScore}/100 — Run. CSDM is no longer the bottleneck. Use the executive narrative to fund Now Assist, predictive AIOps and product-aligned service ownership.`
            : `Score ${overallScore}/100 — Fly. Treat CSDM as a managed product: KPIs, SLAs, and a quarterly health review baked into the operating model.`;

  const whereToStart = `${weakest.label} is the lowest-scoring domain (${weakest.score}). Make it the first remediation workshop. Tie the outcome to a measurable KPI — ${
    weakest.domain === "foundational"
      ? "% of CIs with owner & location"
      : weakest.domain === "design"
        ? "% of business apps with assigned product owner"
        : weakest.domain === "build"
          ? "% of business services backed by an automated application service"
          : weakest.domain === "technical-services"
            ? "% of incidents tied to a technical service offering"
            : "% of consumer contracts traceable to a business service"
  }.`;

  const aiReadiness =
    globalStage === "foundation" || globalStage === "crawl"
      ? "Now Assist outputs are high-risk on this data shape — the model will surface relationships that the CMDB cannot back up. Use AI for explanation and triage support; keep autonomous action governed by humans."
      : globalStage === "walk"
        ? "Data shape can support a single, well-bounded Now Assist pilot. Pick one workflow with crisp ownership (incident summary, change risk) and resist horizontal rollout until ownership fields harden."
        : "Data shape is mature enough for AI-assisted decisions in production. Govern by use case, not by feature flag — every Now Assist surface should map to an owner, a KPI and a rollback path.";

  const roadmap = upcomingLabel
    ? `Roadmap to ${upcomingLabel}: ${gapToNext === 0 ? "instance is on the threshold — close the spread between domains and codify it" : `${gapToNext} pts to close`}.${
        spread >= 25
          ? ` Spread between strongest (${strongest.label} · ${strongest.score}) and weakest (${weakest.label} · ${weakest.score}) is ${spread} pts — uneven maturity will block the next rung until it narrows.`
          : ` Maturity is balanced (${spread}-pt spread) — push the whole instance forward together.`
      }`
    : `At Fly. The risk is no longer maturity — it is keeping the data shape stable as new products and M&A activity reshape the catalog.`;

  // ──────── ITOM Doctor — CMDB, Discovery, Service Mapping ────────

  const cmdbHealth = foundational
    ? `Foundational layer at ${foundational.score}/100${foundational.blockers > 0 ? ` · ${foundational.blockers} blocker${foundational.blockers === 1 ? "" : "s"}` : ""}. ${
        foundational.score >= 75
          ? "Baseline is solid — push for CI relationship density (cmdb_rel_ci) and reduce orphan CIs before scaling Discovery patterns."
          : foundational.score >= 55
            ? "Baseline is workable but uneven. Drive completeness on owner, location and support group before adding new CI classes."
            : "Baseline is the bottleneck. Stop adding sources, run a CMDB Health audit, and remediate duplicate CIs and missing owners first."
      }`
    : "Foundational layer is not measurable from the available signals.";

  const discoverySignal = build
    ? !serviceMappingDeployed
      ? `Build domain at ${build.score}/100. No Application Service population detected (cmdb_ci_service_discovered / cmdb_ci_service_auto are empty or unreachable) — Service Mapping has not been run end-to-end on this instance.`
      : serviceMappingShallow
        ? `Build domain at ${build.score}/100. Service Mapping is installed but the automated-services table is shallow — discovery patterns are not yet covering the long tail of business apps. Prioritize pattern coverage on top-20 revenue-critical apps next.`
        : `Build domain at ${build.score}/100. Application Service population is present — the next gap is depth: contains/runs-on relationship density and pattern coverage on the long-tail of business apps.`
    : "Build domain is not measurable from the available signals.";

  const designSignal = design && !apmDeployed
    ? `Design at ${design.score}/100. APM (cmdb_application_product_model) is not deployed — business apps exist but their product-model lineage is undefined, which caps the Sell / Consume layer above it.`
    : design
      ? `Design at ${design.score}/100. Business app registry is present; the next move is product-model coverage and lifecycle-status governance.`
      : "Design domain is not measurable from the available signals.";

  const serviceLayer = (() => {
    if (!sell || !tech) return "Service-layer signals not available.";
    if (!businessServiceCatalog) {
      return `Sell / Consume at ${sell.score}/100. The business service catalog (cmdb_ci_service_business) is missing — there is no anchor to trace consumer contracts back to ITOM signals. This is the single highest-leverage gap on the instance.`;
    }
    if (sell.score < tech.score - 12) {
      return `Sell / Consume (${sell.score}) is dragging behind Technical Services (${tech.score}). Technical CIs exist but their alignment to consumer-facing offerings is broken — fix the service offering ↔ business service join before scaling Now Assist on customer workflows.`;
    }
    return `Service catalog alignment is consistent (Tech ${tech.score} / Sell ${sell.score}). Use this to scope Service Portfolio Management and SLA-aware automation next.`;
  })();

  const missingAnchors = (() => {
    if (allMissing.length === 0) {
      return "All CSDM 5.0 anchor tables responded. Data shape is consistent with a baseline CMDB Health audit candidate — no role-grant remediation needed before the next probe.";
    }
    const top = missingMeanings.slice(0, 3).join(", ");
    return `${allMissing.length} anchor table${allMissing.length === 1 ? "" : "s"} unreachable for this user${
      top ? ` — missing: ${top}` : ""
    }. Check role grants (snc_internal, itil) and table ACLs before re-running. Affected tables: ${missingNames.slice(0, 4).join(", ")}${missingNames.length > 4 ? "…" : ""}.`;
  })();

  const blockerBacklog = `${totalBlockers} blocker${totalBlockers === 1 ? "" : "s"} across the 5 domains. ${
    weakest.blockers >= 4
      ? `Concentrate the first sprint on ${weakest.label} (${weakest.blockers} of ${totalBlockers}) — clearing it raises the global score the fastest.`
      : "The backlog is evenly distributed — run it as a CMDB Health dashboard cadence, not a one-off program."
  }`;

  return [
    {
      id: "pierrondi-ea",
      name: "Paulo Pierrondi",
      role: "Enterprise Architect",
      avatar: "PP",
      color: "#5e6ad2",
      tagline: `Strategy · ${stageLabel} stage · ${upcomingLabel ? `${gapToNext} pts to ${upcomingLabel}` : "at Fly"}`,
      insights: [
        { title: "Executive narrative", detail: execNarrative },
        { title: "Where to start", detail: whereToStart },
        { title: "AI readiness implication", detail: aiReadiness },
        { title: "Roadmap", detail: roadmap },
      ],
    },
    {
      id: "itom-doctor",
      name: "ITOM Doctor",
      role: "CMDB & Discovery Specialist",
      avatar: "Rx",
      color: "#26b58a",
      tagline: design
        ? `CMDB · Discovery · Service Mapping · ${design.score}/100 design layer`
        : "CMDB health, Discovery coverage, Service Mapping signals.",
      insights: [
        { title: "CMDB health", detail: cmdbHealth },
        { title: "Discovery & Service Mapping", detail: discoverySignal },
        { title: "Design layer", detail: designSignal },
        { title: "Service catalog alignment", detail: serviceLayer },
        { title: "Missing anchors", detail: missingAnchors },
        { title: "Blocker backlog", detail: blockerBacklog },
      ],
    },
  ];
}
