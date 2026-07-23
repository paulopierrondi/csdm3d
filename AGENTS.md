<!-- BACKGROUND_CODERS_START -->
## Background Coders Protocol

`AGENTS.md` e o contrato operacional canonico. Os demais arquivos de rules sao
stubs fail-closed que apontam para ele. Qwen e Ornith estao aposentados e nao
podem ser workers, reviewers, fallbacks, jobs ou gates de QA.

Antes de responder, planejar, explorar ou usar uma ferramenta com efeito local
ou externo, execute:

`/Users/paulopierrondi/.local/bin/coder-bootstrap --surface "<surface>" --cwd "$PWD" --project-id "csdm3d" --risk workspace_write --refresh-context --task "<pedido sem secrets>"`

Um digest inalterado e ja atestado pode retornar READY por carry-forward
auditado. Em `CODER_CONTEXT_REQUIRED`, leia todas as fontes e execute o
`context_ack_command` exato. So continue apos `CODER_BOOTSTRAP_READY`,
`operational_ready=true` e `context_consumption.status=acknowledged`. Falha ou `BLOCKED` e
fail-closed. Em host sem Hub, use `portable/degraded` e apenas read-only.

Hard gates exigem comando explicito de Paulo: push/merge/force-push, deploy,
producao/migrations, App Store/TestFlight, paid ads, social publish, secrets,
config de producao, bulk Linear e destrutivo. Nunca registre valores secretos.

Use Linear live para produto, Vault para memoria, Git/GitHub para codigo,
CodeGraph para estrutura e Agent Hub para gates. Um writer por repo. Todo
trabalho relevante registra Slack/outbox, heartbeat, artefato, teste, risco e
proxima acao. Automacoes seguem a Automation Email Policy.

Karpathy Guidelines governam codigo e criacao (skill
`external-multica-ai-karpathy-guidelines`): Think Before Coding, Simplicity
First, Surgical Changes, Goal-Driven Execution. Cada linha alterada rastreia ao
pedido; minimo que resolve; criterio verificavel antes de fechar.

Leia `.brain/PROJECT_CONTEXT.md`, `.brain/HUB_COUNCIL_CONTEXT.md`, o project
note e o contrato global:
`/Users/paulopierrondi/agents-hub/configs/CODER_RUNTIME_ENFORCEMENT.md`.
<!-- BACKGROUND_CODERS_END -->

<!-- CURSOR_BACKGROUND_AGENT_START -->
## Cursor Background Agent Protocol

Cursor Background Agent is currently dormant. Paulo is not opening Cursor for now.

Do not route background work to Cursor by default. Use the active Background Coders model:

- Kimi CLI: broad scan, cheap triage, reports, backlog, docs.
- Codex: safe patch, tests, integration, local verification.
- Claude Code: hard bug, architecture, compliance, App Store/release risk.
- Gemini CLI: independent Google-model CLI validation, MCP checks, terminal utility tasks.
- Google Antigravity: agent-first orchestration, Chrome/browser verification, multi-folder/worktree tasks, artifacts.

Cursor may only be used if Paulo explicitly activates it.

### Required context

Read before editing:

- `AGENTS.md`
- `CODEX_RULES.md`
- `.brain/PROJECT_CONTEXT.md`
- `.brain/HUB_COUNCIL_CONTEXT.md`
- `.brain/CURSOR_BACKGROUND_AGENT_CONTEXT.md`
- `.cursor/rules/010-paulo-agent-hub.mdc`
- `.cursor/rules/020-cursor-background-agent.mdc`

### Scope and branch

- Registry id: `csdm3d`
- Branch pattern if explicitly activated: `cursor/<linear-id>-<short-task>` or `cursor/<short-task>`.
- One issue/task per branch.
- Keep diffs small and reversible.

### Handoff

Final summary must include:

- what changed;
- files touched;
- commands/tests run;
- risks or blockers;
- exact Obsidian/Linear update for the local operator.

### Hard stops

Stop and ask for local Codex/Claude/Gemini/Antigravity/Paulo handoff before secrets, `.env`, production deploys, App Store/TestFlight submission, paid ads, social publishing, production migrations, force push, multi-repo changes or macOS signing assumptions.
<!-- CURSOR_BACKGROUND_AGENT_END -->

<!-- HUB_COUNCIL_TRIGGER_START -->
# Hub de Agentes / Product Council - Required Coder Gate

Este projeto e gerenciado pelo Hub de Agentes de Paulo. Antes de planejar, editar, revisar, debugar, criar release, mexer em UI/UX, marketing, SEO, seguranca ou automacao, acione o Product Council.

## Start gate obrigatorio

```bash
/Users/paulopierrondi/agents-hub/scripts/project-council-touchpoint.py --project-id "csdm3d" --phase start
```

Leia tambem:

- `.brain/HUB_COUNCIL_CONTEXT.md`
- `.brain/PROJECT_CONTEXT.md`
- `/Users/paulopierrondi/Documents/Obsidian Vault/Hub_Agentes/05_Configuracao/config_product_council.md`
- `/Users/paulopierrondi/Documents/Obsidian Vault/99_System/Prompt Caching Workflow Policy.md`
- `/Users/paulopierrondi/Documents/Obsidian Vault/Hub_Agentes/03_Outputs/council_reviews/`

## Finish gate obrigatorio

```bash
/Users/paulopierrondi/agents-hub/scripts/project-council-touchpoint.py --project-id "csdm3d" --phase finish --summary "<o que mudou; testes; riscos; proximos passos>"
```

## Regras

- Registry-first: estado vem de `/Users/paulopierrondi/agents-hub/registry/projects_registry.json`.
- Evidence-based: cite arquivo, linha, commit, log, URL ou report.
- No secrets: nunca grave tokens, API keys, cookies, chaves privadas, AuthKeys ou valores `.env` em Markdown.
- Prompt caching: contexto estavel primeiro, task delta por ultimo, secrets fora do prefixo cacheavel, telemetry registrada quando disponivel.
- Human-gated: deploy, push, App Store submit, ads spend, publicacao social, migrations, producao, secrets, cron e LaunchAgents exigem aprovacao explicita do Paulo.
<!-- HUB_COUNCIL_TRIGGER_END -->

<!-- OBSIDIAN_SECOND_BRAIN_START -->
# Obsidian Second Brain - Required Preflight

Primary vault: `/Users/paulopierrondi/Documents/Obsidian Vault`
Repository: `/Users/paulopierrondi/Projects/csdm3d`

This repository is part of Paulo's Obsidian second brain. For AI coding agents, this is a required workflow, not optional context.

## User Profile Snapshot

- Paulo is a ServiceNow Technical Account Executive focused on Banco Bradesco / FSI Brazil, working with Rodrigo Rezende, Joao Saes, Impact and CEG/Services.
- Core enterprise themes: Bradesco strategy, CMDB/CSDM, Now Assist/AI Agents, governance, operating model, FSI positioning and 2026 roadmap.
- Top-of-mind projects include `pptx-engine`, autonomous Claude Code agents, `exploratorio`, `investcoach_ai`, Now Assist Bradesco Operating Model and side-project monetization/IP.
- Style: direct, executive, dense, structured, copy-paste ready, no fluff or motivational tone; PT-BR for Brazil-facing content; honest analytical pushback is welcome.
- For Bradesco Now Assist content, always connect operating model -> adoption velocity -> revenue expansion.

## Agent Hub Enforcement

Before local work with terminal, patch, automation, release, ads, App Store, Linear, secrets or production, run:

```bash
/Users/paulopierrondi/agents-hub/scripts/agent-preflight.py --automation manual-codex --surface Codex --risk workspace_write --cwd "$PWD"
```

If the preflight fails or blocks on a human gate, stop and report. The source of truth is registry + scheduler + handoffs + state + health + human gates, not any individual CLI. App Store, ads, deploy/production, Git push/merge, bulk Linear and secrets require Paulo's explicit command. Automations cannot use Claude Sonnet; automated Claude requires an explicit non-Sonnet model or must stay paused.

## Prompt Caching

- Read `/Users/paulopierrondi/Documents/Obsidian Vault/99_System/Prompt Caching Workflow Policy.md` before high-token, recurring or multi-agent work.
- Structure prompts with a stable cacheable prefix first: Agent Hub rules, Paulo style, project context, gates, checklists and output schema.
- Put dynamic task delta last: current request, date, live status, diffs, logs, search results and screenshots.
- Never include secrets, `.env` values, cookies, private keys, provider variable dumps or `ROTATE_REQUIRED` values in a cacheable prefix.
- Report `prompt_cache.strategy`, `prefix_version`, nonsecret cache key/tag and `cached_tokens` when the provider exposes it; use `cli-prefix-layout` with null token metrics when a CLI hides telemetry.

## Mandatory Start Gate

Before planning, editing, refactoring, reviewing, or debugging:
- Read `/Users/paulopierrondi/Documents/Obsidian Vault/Home.md` when the local vault is accessible.
- Read `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Profile/Paulo Pierrondi Profile.md` for Paulo's professional/personal context, response style, ServiceNow/Bradesco context and current priorities.
- Read `/Users/paulopierrondi/Documents/Obsidian Vault/02_Projects/Projects Index.md` and the matching project note under `/Users/paulopierrondi/Documents/Obsidian Vault/02_Projects`.
- Read `/Users/paulopierrondi/Documents/Obsidian Vault/03_AI-Chats/AI Chats Index.md` and any matching project AI history note when relevant.
- Read `/Users/paulopierrondi/Documents/Obsidian Vault/99_System/AI Agent Vault Policy.md`.
- Read `/Users/paulopierrondi/Documents/Obsidian Vault/99_System/Prompt Caching Workflow Policy.md` before building prompts, handoffs, automations, reports or agent contexts.
- Run `brain-linear-sync` or read `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Coding/Linear/Linear Git Sync Report.md` before choosing work.
- For roadmap, bug, status, priority, release, sprint/cycle, automation, product planning or backlog cleanup, read `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Coding/Linear/Linear Git Development Tracking OS.md`, `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Coding/Linear/Linear Project Map.md`, and the matching Linear project/issue through the Linear connector when available.
- Treat the Linear app connector as the live source of truth for projects, issues, statuses, labels, assignees, comments, cycles and project updates. The sync report is local Git metadata only.
- Read `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Coding/Best Practices/Development Best Practices Hub.md` and relevant platform best-practice notes.
- Read `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Coding/Checklists/Project Checklist Hub.md` and the relevant frontend/backend/platform/AI/security checklists.
- For app, site, UI, visual flow, screenshot, iOS, Android or store work, read `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Coding/Best Practices/App Web Quality Best Practices.md`, `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Coding/Checklists/App Web Preflight Checklist.md`, `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Coding/Checklists/Screenshots Visual QA Checklist.md`, and the relevant web/iOS/Android preflight.
- For iOS/App Store Connect/TestFlight/signing/IAP/APNS work, read `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Coding/Checklists/Apple Developer And App Store Connect Inventory.md` and `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Coding/Checklists/App Store Connect Upload Runbook.md` before asking for IDs, keys, CI values, provider env vars or running an upload.
- For product, monetization, app ideas, revenue, pricing, growth or side-project prioritization, read `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Product/Product Revenue MOC.md`, `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Product/Nightly Opportunity Engine.md`, `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Product/App Ideas Revenue Backlog.md`, `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Product/App Refinement Backlog.md`, and `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Product/Nightly Opportunity Report.md`.
- For marketing creative, social video, ElevenLabs, subtitles, LinkedIn, Shorts, TikTok, Instagram/Reels or pierrondi.dev work, read `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Marketing/Marketing MOC.md`, `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Marketing/Pierrondi.dev Creative Video OS.md`, `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Marketing/ElevenLabs Voice And Subtitle Workflow.md`, `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Marketing/Social Video Platform Specs 2026.md`, and `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Marketing/Creative QA Checklist.md`.
- For Apple Ads / ASA, App Store paid acquisition, ASO, CPP, paid campaigns or app marketing tuning, read `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Marketing/App Marketing Intelligence OS.md`, `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Marketing/Apple Ads ASA Tuning Runbook.md`, `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Marketing/App Marketing Metrics Inventory.md`, `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Marketing/App Marketing Daily Tuning Report.md`, and `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Marketing/App Marketing Tuning Backlog.md`.
- For Obsidian, second-brain, vault, agent-memory, MOC or automation improvements, read `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Second Brain/Second Brain Intelligence Loop.md`, `/Users/paulopierrondi/Documents/Obsidian Vault/99_System/Second Brain Intelligence Report.md`, `/Users/paulopierrondi/Documents/Obsidian Vault/99_System/Claude Code Nightly Second Brain Routine.md`, and `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Second Brain/External Source Watchlist.md`.
- For any automation, routine, scheduled job, cron, LaunchAgent, cloud runner or automatic follow-up, read `/Users/paulopierrondi/Documents/Obsidian Vault/99_System/Automation Email Policy.md` and send a completion email to `pierrondi@gmail.com`.
- Read `/Users/paulopierrondi/Documents/Obsidian Vault/99_System/Security And Secrets Policy.md` before touching auth, APIs, env vars, API keys, tokens, deploy or production config.
- For credentials, read `/Users/paulopierrondi/Documents/Obsidian Vault/99_System/Credential Vault Operating Model.md`: the vault stores inventory/references, never real secret values.
- If credentials are in scope for `/Users/paulopierrondi/Documents/Obsidian Vault/99_System/Secret Exposure Incident - 2026-05-19.md`, require rotation before use and use Keychain/secret manager/provider env vars, never chat.
- If Paulo uses `/Users/paulopierrondi/.second-brain-secrets.env` for bulk import, treat it as temporary staging outside the vault and delete it through `brain-secret-intake import ... --delete`.
- For Railway projects, read `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Coding/Checklists/Railway Secrets Inventory.md` and use `brain-railway-run -- <command>` instead of asking Paulo to paste secrets.
- Read `.brain/PROJECT_CONTEXT.md` if present. In cloud environments, treat `.brain/PROJECT_CONTEXT.md` and `.brain/CLAUDE_CLOUD_CONTEXT.md` as the available vault snapshot.

## Multi-Agent Compatibility

- `AGENTS.md` is the cross-agent contract for Codex and all local coders.
- `CLAUDE.md`, `GEMINI.md` and `KIMI.md` must remain operationally equivalent to `AGENTS.md`; do not simplify one file and leave gates out of another.
- Google Antigravity must read both `AGENTS.md` and `GEMINI.md`; if the vault is outside Antigravity Project folders, explicitly add the vault folder or use `.brain/PROJECT_CONTEXT.md` as the safe snapshot.
- Active Background Coders: Kimi for broad scans/reports, Codex for patch/integration, Claude Code for complex/compliance, Gemini CLI for independent MCP/terminal validation, Google Antigravity for agent-first/browser/worktree/artifact orchestration.
- Cursor Background Agent remains dormant unless Paulo explicitly activates it.

## Hard Gates

- Do not store real secrets in Markdown, Linear, chat, logs, screenshots, commits or email.
- Never ask Paulo to paste API keys, tokens, passwords, cookies, OAuth credentials, private keys or production secrets in chat when a provider env var, Keychain, 1Password/op reference, `brain-secret-intake`, `brain-railway-run` or another secret manager path exists.
- Do not bulk-close, archive, delete, relabel, reassign or move Linear issues without an explicit cleanup proposal and approval.
- Do not push, merge, force-push, deploy, submit to App Store/TestFlight, change paid ads, publish social content, run production migrations, rotate secrets or change production config without Paulo's explicit command.

## Mandatory Finish Gate

After meaningful work:
- Update the matching Obsidian project note with decisions, commands, files changed, risks, deploy state, and next steps.
- Update Linear when issue reality changes; do not bulk-close/archive/relabel without a cleanup proposal.
- Register screenshot/visual QA evidence paths when visual work changed, or record why screenshots were not captured.
- Register creative/video assets, scriptId/renderId, caption files, platform variants and marketing learnings when relevant.
- If the local vault is not accessible, update `.brain/SESSION_NOTES.md` with durable project knowledge that should later be synced back to Obsidian.
- Never write secrets to Markdown. Redact API keys, tokens, passwords, cookies, OAuth credentials, private keys, and production secrets.
- API keys belong in a secret manager or provider env vars. The vault stores only inventory: env var name, provider, scope, storage location, owner and rotation date.
- Automation runs must send a final email to `pierrondi@gmail.com` with status, summary, updated reports, pending decisions and failures; redact secrets before sending.
- If the session reveals a reusable development lesson, append it to `/Users/paulopierrondi/Documents/Obsidian Vault/04_Areas/Coding/Best Practices/Learning Inbox.md` or run `brain-learn`.
<!-- OBSIDIAN_SECOND_BRAIN_END -->

<!-- PAULO_OPS_SKILL_PACK_START -->
## Paulo Ops Skill Pack

Installed shared skill root: `/Users/paulopierrondi/.agents/skills`.

All coders should use the relevant `paulo-ops-*` skill whenever a task touches
Agent Hub, Vault, Linear, Git/GitHub, CodeGraph, Browser/AGY, automation,
skills/MCP, secrets, release, paid growth, App Store, production, tests,
dashboards, handoffs or multi-coder routing.

Canon:
- Manifest: `/Users/paulopierrondi/agents-hub/configs/paulo_ops_skill_pack.yaml`
- Vault note: `/Users/paulopierrondi/Documents/Obsidian Vault/Hub_Agentes/05_Configuracao/config_paulo_ops_skills.md`
- Count: `32` operational skills (`30` installer-managed, `2` preserved local).
- Antigravity/AGY is the default validator; Gemini is explicit fallback only.
- Third-party skill/MCP repos are discovery/quarantine only until reviewed.
- Relevance upgrade: use the smallest matching skill set; each skill must match
  a current trigger, live source, artifact and stop condition.

Installed skills:
`paulo-ops-preflight-gate`, `paulo-ops-human-gates`, `paulo-ops-session-journal`, `paulo-ops-slack-outbox`, `paulo-ops-vault-memory`, `paulo-ops-linear-agent-ready`, `paulo-ops-linear-coding-session`, `paulo-ops-antigravity-validation`, `paulo-ops-skills-mcp-radar`, `paulo-ops-supply-chain-quarantine`, `paulo-ops-mcp-permission-review`, `paulo-ops-codegraph-impact`, `paulo-ops-route-learning`, `paulo-ops-automation-email`, `paulo-ops-launchagent-health`, `paulo-ops-agent-baseline`, `paulo-ops-product-revenue`, `paulo-ops-app-store-release-gate`, `paulo-ops-paid-growth-gate`, `paulo-ops-secrets-central-env`, `paulo-ops-browser-visual-qa`, `paulo-ops-webapp-smoke`, `paulo-ops-frontend-quality`, `paulo-ops-github-pr-diff`, `paulo-ops-multi-coder-swarm`, `paulo-ops-learning-retro`, `paulo-ops-repo-intake-router`, `paulo-ops-dirty-worktree-triage`, `paulo-ops-test-gap-map`, `paulo-ops-operations-dashboard`, `paulo-ops-agent-flow-validation`, `paulo-ops-evolve-lab`
<!-- PAULO_OPS_SKILL_PACK_END -->

<!-- EXTERNAL_MARKETING_WEBDESIGN_SKILLS_START -->
## External Marketing/Webdesign Skills Pack

Installed shared skill root: `/Users/paulopierrondi/.agents/skills`.

All coders may use these external `external-*` skills for marketing strategy,
programmatic SEO, CRO, site architecture, product marketing, sales enablement,
web design and frontend/interface work.

Canon:
- Manifest: `/Users/paulopierrondi/agents-hub/configs/external_marketing_webdesign_skill_pack.yaml`
- Vault note: `/Users/paulopierrondi/Documents/Obsidian Vault/Hub_Agentes/05_Configuracao/config_external_marketing_webdesign_skills.md`
- Source report: `/Users/paulopierrondi/Documents/Obsidian Vault/Hub_Agentes/03_Outputs/skills_mcp_radar/2026-06-12-marketing-webdesign-skills-absorption.md`
- Count: `12` external skills.
- These skills are guidance only; Agent Hub, project `AGENTS.md`, Paulo hard
  gates, secrets policy, Vault/Linear source-of-truth and runtime enforcement
  override them.

Still human-gated: paid ads, social publishing, outbound/email/SMS, production,
deploy, push/merge, App Store/TestFlight, secrets, MCP enabling and bulk Linear.

Installed skills:
`external-addyosmani-agent-skills-api-and-interface-design`, `external-addyosmani-agent-skills-frontend-ui-engineering`, `external-conardli-garden-skills-web-design-engineer`, `external-coreyhaines31-marketingskills-community-marketing`, `external-coreyhaines31-marketingskills-competitors`, `external-coreyhaines31-marketingskills-cro`, `external-coreyhaines31-marketingskills-free-tools`, `external-coreyhaines31-marketingskills-product-marketing`, `external-coreyhaines31-marketingskills-programmatic-seo`, `external-coreyhaines31-marketingskills-sales-enablement`, `external-coreyhaines31-marketingskills-site-architecture`, `external-nextlevelbuilder-ui-ux-pro-max-skill-ckm-slides`
<!-- EXTERNAL_MARKETING_WEBDESIGN_SKILLS_END -->

<!-- EXTERNAL_HIGH_STAR_SKILLS_START -->
## External High-Star Skills Pack

Installed shared skill root: `/Users/paulopierrondi/.agents/skills`.

All coders may use these reviewed external `external-*` skills for
architecture stress-testing, TDD, prototyping, code review, requirements
interviewing, Google Workspace document drafting recipes and product naming.

Canon:
- Manifest: `/Users/paulopierrondi/agents-hub/configs/external_high_star_skill_pack.yaml`
- Vault note: `/Users/paulopierrondi/Documents/Obsidian Vault/Hub_Agentes/05_Configuracao/config_external_high_star_skills.md`
- Source report: `/Users/paulopierrondi/Documents/Obsidian Vault/Hub_Agentes/03_Outputs/skills_mcp_radar/2026-06-12-skills-mcp-install-proposal.md`
- Source repos: `addyosmani/agent-skills`, `googleworkspace/cli`, `mattpocock/skills`, `phuryn/pm-skills`
- Count: `10` external high-star skills.
- These skills are guidance only; Agent Hub, project `AGENTS.md`, Paulo hard
  gates, secrets policy, Vault/Linear source-of-truth and runtime enforcement
  override them.

Still human-gated: Google Workspace create/share/send actions, paid ads, social
publishing, outbound/email/SMS, production, deploy, push/merge, App
Store/TestFlight, secrets, MCP enabling and bulk Linear.

Installed skills:
`external-addyosmani-agent-skills-code-review-and-quality`, `external-addyosmani-agent-skills-interview-me`, `external-googleworkspace-cli-recipe-create-doc-from-template`, `external-googleworkspace-cli-recipe-draft-email-from-doc`, `external-mattpocock-skills-grill-me`, `external-mattpocock-skills-grill-with-docs`, `external-mattpocock-skills-improve-codebase-architecture`, `external-mattpocock-skills-prototype`, `external-mattpocock-skills-tdd`, `external-phuryn-pm-skills-product-name`
<!-- EXTERNAL_HIGH_STAR_SKILLS_END -->
