# Project Brain Context

Generated: `2026-05-23 09:04:27`
Tool: `--help`
Local Obsidian vault: `/Users/paulopierrondi/Documents/Obsidian Vault`
Repository: `/Users/paulopierrondi/Projects/csdm3d`

This is a non-secret snapshot of the local Obsidian second brain for this repository.

## Required Agent Workflow

1. Read the repo instruction file for your agent: `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`, or `KIMI.md`. For Google Antigravity, read both `AGENTS.md` and `GEMINI.md`.
2. Read this file before planning work.
3. If local vault access exists, prefer the live Obsidian notes over this snapshot.
4. If running in cloud without local vault access, use this file as the project memory source.
5. Select the relevant best-practice notes and checklists: app/web quality, screenshots, marketing creative/video, frontend, backend/API, web, iOS, Android, AI, release and security.
6. Never store real API keys or secrets in Markdown. Store only inventory metadata.
7. Capture reusable development lessons in the Learning Inbox or `.brain/SESSION_NOTES.md` when the vault is unavailable.
8. After meaningful work, update the live Obsidian project note or append durable context to `.brain/SESSION_NOTES.md`.

## Required Checklist Snapshot

## 04_Areas/Profile/Paulo Pierrondi Profile.md

---
type: profile
owner: Paulo Pierrondi
updated: 2026-05-15
tags:
  - profile
  - operating-context
  - service-now
  - bradesco
  - agent-memory
---
# Paulo Pierrondi Profile

This is required user context for Codex/GPT, Claude Code, Kimi and Gemini.

## Executive Summary

Paulo works across enterprise tech, personal products, family and faith. He is a Technical Account Executive at ServiceNow, focused on the Banco Bradesco account in Brazil, while also building side projects and monetizable frameworks/IP. He prefers direct, structured, information-dense responses with honest analytical pushback. Brazil-facing content defaults to Portuguese.

## Response Style

- Lead with the answer.
- Use executive summary first for complex topics.
- Use bullets and tables when they improve clarity.
- Be direct, dense and copy-paste ready.
- Avoid fluff, motivational tone and vague encouragement.
- Use PT-BR for Brazil-facing material.
- Analogies and frameworks are useful when they sharpen thinking.
- Push back when assumptions are weak, but keep the tone pragmatic.
- Prefer metrics, tradeoffs, explicit risks and next actions.
- Do not end with soft filler such as "se fizer sentido".

## Professional Context

- Role: Technical Account Executive (TAE) at ServiceNow, global team.
- Primary account: Banco Bradesco, FSI Brazil.
- Works with Rodrigo Rezende (Client Director) and Joao Saes (SC).
- Coordinates with Impact and CEG/Services.
- Recurring themes:
  - Bradesco account strategy.
  - CMDB/CSDM transformation.
  - Now Assist and AI Agents.
  - Governance and operating model.
  - FSI positioning.
  - 2026 roadmap.

## Personal Context

- Carioca.
- Lived for a long period in Dublin.
- Currently based in Sao Jose dos Campos, SP.
- Married, family-oriented.
- Faith-oriented worldview.
- Entrepreneurial mindset.
- Active interest in monetizing frameworks and IP.
- US or EMEA relocation is on the radar.

## Top Of Mind

- `pptx-engine`: TypeScript/Node.js CLI for executive deck generation, multi-LLM with Claude and GPT-4, four-phase architecture.
- Claude Code as autonomous long-running agents, including 8-hour runs, across apps such as `exploratorio` and `investcoach_ai`.
- Now Assist Bradesco Operating Model is active.
- Critical open question: direct ServiceNow investment versus Bradesco-authorized budget.

## Bradesco Live Context

- CMDB program organized in four plateaus:
  1. Fundacao.
  2. Fonte Unica.
  3. Conexao Negocio.
  4. Excelencia.
- Accenture is the primary executor, around 800 hours.
- Other partners: NTT, IBM and 4MATT.
- Governance stakeholders:
  - Edson: sponsor.
  - Fabio: strategic forum.
  - Marcena: operational forum.
  - Rodolfo and Rogerio: technical CCB.
- Recurring bottleneck: COI/Sayumi after the January SPM incident.
- Terminology rules:
  - Use `SPM`, not `ITBM`.
  - Use `forum`, not `committee/comite`, unless quoting source material.
  - `Cilmara` is spelled with C.

## Tools And Frameworks

- Claude Code skills:
  - `servicenow-project-pptx`.
  - `bradesco-project-pptx`.
- MCP `servicenow-ai-demo` for `cmdb_ci` queries.
- CMDB context: 61K+ records, with gaps in ownership, serial and IP.
- Framework SADA.
- CSDM Data Quality Analyzer:
  - Python.
  - Bilingual.
  - FSO/regulatory focus.

## Now Assist Editorial Rule

Every Bradesco Now Assist material must explicitly connect:

`operating model -> adoption velocity -> revenue expansion`

## How Agents Should Use This

- Before career, executive, ServiceNow, Bradesco, FSI, Now Assist, CSDM, deck, roadmap or positioning work, read this note.
- When writing for Bradesco or Brazil stakeholders, default to PT-BR and executive density.
- When writing internal or global ServiceNow strategy, keep terminology precise and avoid over-claiming.
- When creating decks, use a consultant-style structure: thesis, evidence, options, recommendation, risks, decision needed.
- For side projects, connect product decisions to monetization, distribution, operational leverage and reusable IP.
- For personal/career questions, balance enterprise credibility, entrepreneurial upside, family constraints, faith-aligned values and relocation optionality.

## Non-Goals

- Do not invent private facts beyond this profile and the project notes.
- Do not over-personalize routine code answers.
- Do not turn faith/family into generic motivational content.
- Do not expose personal or enterprise-sensitive details outside the intended context.

## 99_System/AI Agent Vault Policy.md

---
type: policy
status: generated
generated_at: "2026-05-23 08:55:42"
tags:
  - ai-agents
  - policy
  - second-brain
  - generated
---
# AI Agent Vault Policy

Vault principal: `/Users/paulopierrondi/Documents/Obsidian Vault`

Esta politica vale para Codex, Claude Code, Gemini CLI e Kimi CLI.

## User Operating Profile

- Perfil completo: [[04_Areas/Profile/Paulo Pierrondi Profile]]
- Paulo trabalha entre enterprise tech, side projects, familia e fe.
- Profissionalmente, e TAE na ServiceNow, foco Banco Bradesco / FSI Brasil.
- Estilo esperado: direto, executivo, denso, estruturado, copy-paste ready, sem fluff.
- PT-BR para conteudo Brasil; pushback analitico e bem-vindo.
- Para Now Assist no Bradesco, conectar sempre: modelo operacional -> velocidade de adocao -> expansao de receita.

## Inicio de sessao

- Identificar o `cwd` atual e procurar a nota correspondente em `02_Projects`.
- Ler [[04_Areas/Profile/Paulo Pierrondi Profile]] para entender quem e Paulo, contexto profissional/pessoal, estilo de resposta e prioridades.
- Ler `Home.md`, `02_Projects/Projects Index.md` e a nota do projeto antes de fazer mudancas relevantes.
- Ler `.brain/PROJECT_CONTEXT.md` quando existir no repo.
- Rodar `brain-linear-sync` ou ler [[04_Areas/Coding/Linear/Linear Git Sync Report]] para entender estado Git/local antes de iniciar.
- Para roadmap, bugs, status, prioridade, release ou planejamento, ler [[04_Areas/Coding/Linear/Linear Git Development Tracking OS]] e conferir o projeto/issue no Linear.
- Ler [[04_Areas/Coding/Best Practices/Development Best Practices Hub]] e as melhores praticas relevantes da plataforma.
- Ler [[04_Areas/Coding/Checklists/Project Checklist Hub]] e os checklists relevantes para a plataforma.
- Para app, site, tela, fluxo visual, screenshot ou store submission, ler [[04_Areas/Coding/Best Practices/App Web Quality Best Practices]], [[04_Areas/Coding/Checklists/App Web Preflight Checklist]] e [[04_Areas/Coding/Checklists/Screenshots Visual QA Checklist]].
- Para iOS, Android ou web app, ler tambem o preflight especifico da plataforma.
- Para iOS/App Store Connect/TestFlight/signing/IAP/APNS, ler [[04_Areas/Coding/Checklists/Apple Developer And App Store Connect Inventory]] e [[04_Areas/Coding/Checklists/App Store Connect Upload Runbook]] antes de pedir IDs, chaves, configurar CI ou fazer upload.
- Para produto, monetizacao, novas ideias de app, receita, pricing, growth ou priorizacao de side projects, ler [[04_Areas/Product/Product Revenue MOC]], [[04_Areas/Product/Nightly Opportunity Engine]], [[04_Areas/Product/App Ideas Revenue Backlog]], [[04_Areas/Product/App Refinement Backlog]] e [[04_Areas/Product/Nightly Opportunity Report]].
- Para criativos, videos, social, campanhas, ElevenLabs, legendas ou pierrondi.dev, ler [[04_Areas/Marketing/Marketing MOC]], [[04_Areas/Marketing/Pierrondi.dev Creative Video OS]], [[04_Areas/Marketing/ElevenLabs Voice And Subtitle Workflow]], [[04_Areas/Marketing/Social Video Platform Specs 2026]] e [[04_Areas/Marketing/Creative QA Checklist]].
- Para Apple Ads / ASA, App Store paid acquisition, ASO, CPP, campanhas pagas ou tuning de marketing de apps, ler [[04_Areas/Marketing/App Marketing Intelligence OS]], [[04_Areas/Marketing/Apple Ads ASA Tuning Runbook]], [[04_Areas/Marketing/App Marketing Metrics Inventory]], [[04_Areas/Marketing/App Marketing Daily Tuning Report]] e [[04_Areas/Marketing/App Marketing Tuning Backlog]].
- Para melhorar o proprio vault, memoria de agentes, Obsidian, MOCs ou rotinas, ler [[04_Areas/Second Brain/Second Brain Intelligence Loop]], [[99_System/Second Brain Intelligence Report]], [[99_System/Claude Code Nightly Second Brain Routine]] e [[04_Areas/Second Brain/External Source Watchlist]].
- Para qualquer automacao, rotina, job agendado, cron, LaunchAgent, cloud runner ou follow-up automatico, ler [[99_System/Automation Email Policy]] e enviar email de encerramento para `pierrondi@gmail.com`.
- Ler [[04_Areas/Coding/Checklists/Security Checklist]] antes de auth, dados, APIs, deploy ou IA.
- Ler [[99_System/Security And Secrets Policy]] antes de lidar com API keys, tokens, env vars ou credenciais.
- Para credenciais, tratar [[99_System/Credential Vault Operating Model]] como fonte canonica: o vault guarda inventario/referencia, nunca valor real.
- Se a credencial estiver no escopo de [[99_System/Secret Exposure Incident - 2026-05-19]], exigir rotacao antes de uso e usar `/Users/paulopierrondi/.local/bin/brain-secret-intake` ou secret manager; nunca pedir valor em chat.
- Se Paulo preferir arquivo para importacao em lote, usar apenas `/Users/paulopierrondi/.second-brain-secrets.env` como staging temporario fora do vault e importar com `/Users/paulopierrondi/.local/bin/brain-secret-intake import /Users/paulopierrondi/.second-brain-secrets.env --delete`.
- Se o projeto ainda nao tiver nota, criar uma em `02_Projects` usando `06_Templates/Project Note.md`.

## Durante o trabalho

- Registrar decisoes estaveis, riscos, comandos canonicos
...[truncated]

## 99_System/Prompt Caching Workflow Policy.md

---
type: policy
status: active
created: 2026-05-22
tags:
  - automation
  - agents
  - prompt-caching
  - cost-control
  - ai-runtime
---
# Prompt Caching Workflow Policy

## Rule

All recurring, high-token, multi-agent or production-adjacent AI workflows must be cache-aware.

The required prompt shape is:

```text
CACHEABLE_PREFIX_START
stable operating contract
stable agent / workflow policy
stable project context
stable quality gates
stable output schema
CACHEABLE_PREFIX_END

DYNAMIC_TASK_START
current date, live state, user request, diffs, logs, search results, blockers
DYNAMIC_TASK_END
```

Static context goes first. Dynamic context goes last. Do not mix timestamps, live status, search results, diffs, log tails or user-specific deltas into the cacheable prefix.

## Cacheable Prefix Order

Use this order whenever a workflow builds a prompt, handoff, CLI request or API call:

1. System role and non-negotiable safety rules.
2. Agent Hub enforcement and human gates.
3. Paulo profile, response style and operating preferences.
4. Runtime/provider routing policy.
5. Project static context: `AGENTS.md`, `CLAUDE.md`, `KIMI.md`, `GEMINI.md`, `CODEX_RULES.md`, `.brain/PROJECT_CONTEXT.md`.
6. Reusable checklists, quality gates, App Store rules, security policy and output contracts.
7. Tool schemas or structured output schema.
8. Dynamic task delta only after `CACHEABLE_PREFIX_END`.

## Never Cache

Do not include these in cacheable prefixes:

- API keys, tokens, cookies, private keys, `.env` values, session exports or credential screenshots.
- Current date/time, git dirty lists, live Linear issue bodies, App Store live status, provider dashboard state, web search results, logs, diffs or stack traces.
- Personal data or private note content that is not required by the workflow.
- Anything marked `ROTATE_REQUIRED`.

Secrets must stay in provider env vars, Keychain, 1Password when available, or approved secret-intake flows. The vault stores references and metadata only.

## Provider Mapping

| Provider / surface | Cache mechanism | Required workflow behavior |
| --- | --- | --- |
| OpenAI / Codex / OpenAI API | Automatic prompt caching for exact repeated prefixes on eligible long prompts; optional `prompt_cache_key`; optional `prompt_cache_retention`; usage exposes `cached_tokens` | Keep identical static prefix, put dynamic task last, use a stable `prompt_cache_key` when direct API calls share a prefix, and log `cached_tokens` when surfaced. |
| Anthropic / Claude API | Automatic or explicit `cache_control` breakpoints; default 5 minute TTL; optional 1 hour TTL; tool definitions can be cached | Put `cache_control` on the last stable block, not on timestamp or task delta. Keep stable tools/system/messages ordered; use deferred tools where available to avoid invalidating the prefix. |
| Gemini API | Implicit caching on supported models plus explicit cached content objects for guaranteed savings; usage metadata exposes cached token counts | Create/reuse cached content for stable docs; send only task delta as fresh prompt when direct API supports it. Put large common content at the beginning for implicit cache hits. |
| Kimi / Moonshot API | Context Caching with cache tags and `role=cache` references | Cache stable files/context with a workflow tag; pass `role=cache` reference plus task delta when direct API supports it. |
| CLI wrappers without direct cache controls | Stable prefix file plus dynamic task file | Keep prefix files byte-stable; pass current task as suffix. Record strategy as `cli-prefix-layout`. |

## Cache Keys

When a workflow can control cache routing or tag names, use a stable key with this shape:

```text
paulo:{workflow_id}:{agent_id}:{project_id}:{policy_version}:{context_version}
```

Do not include dates, branch names that churn daily, live issue titles or secrets in cache keys.

## Required Telemetry

Every recurring workflow report, run note or email must include a redacted prompt-cache block:

```yaml
prompt_cache:
  policy: "/Users/paulopierrondi/Documents/Obsidian Vault/99_System/Prompt Caching Workflow Policy.md"
  strategy: "openai-auto | anthropic-cache-control | gemini-cached-content | kimi-context-cache | cli-prefix-layout | not-supported"
  cache_key_or_tag: "redacted-or-nonsecret"
  prefix_version: "YYYY-MM-DD-or-hash"
  prefix_hash_recorded: true
  cached_tokens: null
  input_tokens: null
  output_tokens: null
  cache_hit_rate: null
  notes: "metrics unavailable in this CLI" 
```

If a CLI does not expose token telemetry, record `null` and explain the strategy used. Absence of telemetry is a workflow quality issue, not a blocker for urgent execution.

## Tool And Schema Hygiene

Provider docs agree that cache invalidation is usually caused by changing the prefix. For agent workflows:

- Keep always-needed tools and structured output schemas stable.
- Put optional or discovered tools after the cacheable prefix when the runtime supports deferred tool loading.
- Do not toggle web search
...[truncated]

## 04_Areas/Coding/Linear/Linear Git Development Tracking OS.md

---
type: "coding-note"
status: "indexed"
normalized_on: "2026-05-20"
tags:
  - coding
  - frontmatter-normalized
---
# Linear App + Git Development Tracking OS

Status: active
Owner: Paulo
Updated: 2026-05-16

This is the operating system for keeping the Linear app, Git and the Obsidian second brain aligned. `brain-linear-sync` is useful, but it is not the source of truth for Linear. The Linear app connector is the source of truth for projects, issues, cycles/sprints, statuses, labels, assignees, comments and project updates.

## Sources Of Truth

- Code and local state: Git repositories.
- Product/development queue: Linear app workspace `Agentcore`.
- Durable memory: Obsidian project notes, AI history and `.brain/PROJECT_CONTEXT.md`.
- Local machine report: [[04_Areas/Coding/Linear/Linear Git Sync Report]] generated by `brain-linear-sync`; this is only Git metadata + mapping hints.
- Live Linear objects: read through the Linear app connector before planning, status, sprint/cycle or cleanup decisions.
- Linear mapping notes: [[04_Areas/Coding/Linear/Linear Project Map]].
- Cleanup queue: [[04_Areas/Coding/Linear/Linear Cleanup Backlog]].

## Required Start Gate

Before planning or coding in any project:

1. Run `brain-linear-sync` or read the latest [[04_Areas/Coding/Linear/Linear Git Sync Report]] for local Git state only.
2. Read the matching project note from [[02_Projects/Projects Index]].
3. Read matching AI history under [[03_AI-Chats/AI Chats Index]] when relevant.
4. Use the Linear app connector to read the live Linear project/issue whenever the task is roadmap, bug, status, scope, priority, release, sprint/cycle, automation, product planning or backlog cleanup related.
5. For a normal coding chat, identify the likely Linear issue before edits. If no issue exists and the task is more than a tiny one-off, create or propose a Linear issue instead of letting work disappear into chat history.
6. Check branch, dirty files, ahead/behind state, live Linear status, cycle/sprint and assignee before editing.

## Required Finish Gate

After meaningful work:

- Update the Obsidian project note with decisions, commands, files changed, risks, deploy state and next steps.
- Update the Linear issue when issue reality changed: status, assignee, priority, labels, cycle/sprint, blocker, evidence or completion state.
- Add a Linear comment/status summary when work produced meaningful evidence but should not change status yet.
- Keep Linear issue links in the project note when a task is driven by Linear.
- Store no secrets in Linear or Obsidian. Secret values stay in providers or secret managers.
- If the work creates reusable practice, add it to [[04_Areas/Coding/Best Practices/Learning Inbox]].

## Linear Connector Rules

- Use the Linear app connector for live reads: projects, issues, cycles/sprints, labels, statuses, assignees, comments and project status updates.
- Do not treat [[04_Areas/Coding/Linear/Linear Git Sync Report]] as a substitute for live Linear. It only says which repos look mapped or unmapped from local metadata.
- Every new chat that performs coding/project work must either attach itself to an existing Linear issue/project or explicitly record why no Linear update is appropriate.
- Do not bulk-close, archive, delete, relabel or assign without an explicit cleanup step.
- Automation can generate cleanup proposals, not destructive changes.
- Treat old `Done` issues with missing labels/assignees as cleanup candidates, not coding blockers.
- Treat `In Progress` issues with stale Git repos as daily-priority candidates.
- Treat cycles/sprints as planning data: read current/next cycles before moving work into or out of sprint scope.

## Daily Sync Output

Daily sync should produce:

- Git repo health: dirty/ahead/behind/stale/unmapped.
- Linear app health: active projects, current/next cycles, stale `In Progress`, high-priority `Todo`, backlog overload, unlabeled/unassigned issues, orphan issues with no project and projects with stale status updates.
- Project note updates for active repos.
- Cleanup proposals in [[04_Areas/Coding/Linear/Linear Cleanup Backlog]].
- Learning candidates for best practices.

## Organic Prompt For Coders

Use this at the start of a new coding session:

```text
Read the Obsidian second brain preflight, run or inspect brain-linear-sync for Git state, then use the Linear app connector to read the matching project/issue/cycle/status before edits. Continue from project memory. After meaningful work, update the project note and the live Linear issue/project if reality changed. Do not store secrets.
```

## Cloud / Other Machine Rule

Cloud coders and other machines will not automatically have the local vault. They must use:

- `AGENTS.md`, `CLAUDE.md`, `GEMINI.md` or `KIMI.md`.
- `.brain/PROJECT_CONTEXT.md`.
- `.brain/CLAUDE_CLOUD_CONTEXT.md` when present.
- Live Linear app connector if available. If unavailable, say so clearly and leave a concrete Linear update proposal for the nex
...[truncated]

## 04_Areas/Coding/Linear/Linear Project Map.md

---
type: "coding-note"
status: "indexed"
normalized_on: "2026-05-20"
tags:
  - coding
  - frontmatter-normalized
---
# Linear Project Map

Updated: 2026-05-22

This map links Linear projects to local repos and Obsidian project notes. It is mapping metadata only.

Important: this note is not the Linear source of truth. Always verify live projects/issues/cycles through the Linear app connector before updating status, scope, sprint/cycle, labels or assignees.

| Linear project | Status | Priority | Repo / path hint | Obsidian note hint | Notes |
| --- | --- | --- | --- | --- | --- |
| Itaú NowMobile ServiceNow | Backlog | High | `itau-nowmobile-servicenow` | search Projects Index | New live project from 2026-05-21; repo appears in local sync as `/Users/paulopierrondi/Projects/itau-nowmobile-servicenow` on `codex/AGE-1517-vibe-code-integration` and as `/Users/paulopierrondi/Documents/itau-nowmobile-servicenow` in the project description. |
| nowassistdemo | Planned | High | `nowassistdemo` | search Projects Index | ServiceNow AI demo control plane. Newest project in Linear. |
| Pierrondi.ia - Apple Design Redesign | Backlog | High | `pierrondi-ia` | `pierrondi-ia` | Design-system redesign track for public site and Studio. |
| fifa26bolao - Bolao Express | Backlog | No priority | `fifa2026bolao`, `bolao` | search Projects Index | iOS + Railway backend. Active issues remain in progress/todo. |
| Jarvis Butler Experience | Backlog | No priority | `pierrondi-ia` | `pierrondi-ia` | Butler/chat/voice/dashboard experience inside Marketing OS. |
| ServiceNow Agent Army | In Progress | Urgent | `servicenow-agent-army` | search Projects Index | Community ServiceNow agent product. |
| Pierrondi Marketing OS | In Progress | Urgent | `pierrondi-ia` | `pierrondi-ia` | Core marketing platform and Studio. |
| PPT_Formation | Backlog | High | `ppt_engine`, `ppt` | search Projects Index | Agentic PPTX engine. |
| Fashion Stylist AI | Completed | High | `fashion` | search Projects Index | Completed in Linear, still useful as app pattern source. |
| Faith | Backlog | Urgent | `faith`, `faithschool` | search Projects Index | Homeschool app roadmap and UX track. |
| Design System Consistency | Backlog | High | `csdm-validator` | search Projects Index | CSDM visual consistency project. |
| Privacy & Cookie Compliance | Planned | No priority | `pierrondi-ia`, `agentcore`, `csdm-validator` | search Projects Index | Cross-product compliance queue. |
| Brain Coach - Context-Aware Copilot & AI Architect Workflows | Planned | No priority | `brain`, `servicenow`, `csdm` | search Projects Index | ServiceNow architect/copilot workflows. |
| Investcoach_ai | Backlog | No priority | `investcoach` | search Projects Index | Project exists but needs repo mapping confirmation. |
| Agentcore Website | Backlog | Urgent | `agentcore`, `pierrondi-ia` | `pierrondi-ia` | Institutional/landing website; may overlap with Marketing OS repo. |
| Cantus.ai Harmonizer | In Progress | High | `cantus`, `cantu`, `CantuStudio` | search Projects Index | Harmonizer + iOS review history. |
| csdm_validator | In Progress | Urgent | `csdm-validator`, `csdm_validator` | search Projects Index | ServiceNow CSDM validator web/iOS track. |
| iOS App Portfolio Revenue OS | In Progress | Urgent | multiple app repos | app marketing/product notes | Umbrella tracker for review queue and paid evidence gate; see AGE-1474. |
| Adivinha! Music Quiz | Todo via issue | High | `adivinha-app`, `adivinha-music-quiz` | search Projects Index | Live issue AGE-1477 covers RevenueCat/shared secret and sandbox purchase. |
| Aura Daily Affirmations | Todo via issue | High | `aura-affirmations` | search Projects Index | Live issue AGE-1478 covers audio-led launch and PPO hypothesis. |
| Bandle BR / Music Quiz | Todo via issue | High | `bandle-br`, `adivinha-music-quiz` | search Projects Index | Live issue AGE-1480 covers App Review rejection and retention/share proof. |
| InvestCoach.AI | Todo via issue | Urgent | `investcoach_ai` | `investcoach_ai` | Live issue AGE-1482 gates paid scale on Test Events and Apple Ads export. |
| Muse Edit Growth | Todo via issue | High | `fashioncore` | search Projects Index | Live issue AGE-1481 separates current Muse Edit growth from historical Fashion Stylist AI. |
| MyTone - AI Ringtone Studio | Todo via issue | High | `mytone-app`, `mytone-ringtone` | search Projects Index | Live issue AGE-1476 covers StoreKit smoke test and post-approval hooks. |
| Parabens IA BR | Todo via issue | High | `parabens-ai-br` | search Projects Index | Live issue AGE-1479 covers App Review/resubmit and BR creative proof. |
| pierrondi.dev Public Site | Todo via issue | High | `pierrondi-site` | search Projects Index | Live issue AGE-1486 covers proof page and analytics readiness. |
| ServiceNow SuperApp | Todo via issue | Medium | `servicenow-superapp` | search Projects Index | Live issue AGE-1487 defines product mapping and release readiness before more build work. |
| SpecialA
...[truncated]

## 99_System/Automation Email Policy.md

---
type: policy
status: active
tags:
  - automation
  - email
  - notification
---
# Automation Email Policy

Regra fixa: toda automacao, independente de rodar em Codex, Claude, Kimi/OpenClaw, Gemini, LaunchAgent local, cloud runner ou script agendado, deve enviar um email de encerramento para `pierrondi@gmail.com`.

## Obrigatorio

- Enviar email ao final de cada run, tanto em sucesso quanto em falha.
- Destinatario padrao unico: `pierrondi@gmail.com`.
- Assunto deve identificar automacao e status.
- Corpo deve incluir:
  - nome/id da automacao;
  - status final;
  - horario;
  - principais mudancas/achados;
  - arquivos/relatorios atualizados;
  - decisoes humanas pendentes;
  - falhas ou bloqueios.
- Redigir segredos antes do envio.

## Transporte Local Padrao

Em automacoes locais no Mac, usar:

```bash
/Users/paulopierrondi/.local/bin/brain-send-automation-email --automation "<id>" --status "<success|failed>" --log "<path>"
```

Para LaunchAgents ou `run.sh`, usar o wrapper/trap:

```bash
/Users/paulopierrondi/.local/bin/brain-run-with-email --automation "<id>" --log "<path>" -- <command>
```

ou:

```bash
source /Users/paulopierrondi/.local/bin/brain-automation-email-trap
brain_automation_email_setup "<id>"
```

## Cloud / Connector Rule

Se a automacao rodar fora do Mac local:

- usar o conector/ferramenta de email disponivel para enviar a `pierrondi@gmail.com`;
- se nao houver transporte de email disponivel, criar um draft em Markdown e registrar `EMAIL_FAILED` em [[99_System/Automation Email Log]];
- a falha de transporte deve aparecer no relatorio final e no vault.

## Guardrails

- Esta regra e a unica excecao padrao a "nao enviar mensagens externas".
- Nao enviar email para terceiros automaticamente.
- Nao anexar `.env`, tokens, API keys, cookies, private keys, credenciais, dumps de banco, PII bruta ou logs sem redacao.
- Nao usar `/usr/bin/mail` direto para Gmail; usar Mail.app/iCloud local quando no Mac.
- Se o email falhar, salvar draft seguro em [[99_System/Automation Email Drafts]].

## 99_System/Credential Vault Operating Model.md

---
type: policy
status: active
tags:
  - security
  - secrets
  - credentials
  - second-brain
---
# Credential Vault Operating Model

## Answer First

O Obsidian pode ser o **cofre operacional** das credenciais, mas nao deve guardar o **valor real** de API keys, tokens, senhas, cookies, private keys ou arquivos `.env`.

Modelo correto:

```text
Obsidian = indice, inventario, runbook, owner, escopo, rotacao, referencia
Secret manager = valor real
Provider env vars = runtime/producao
```

## Por que nao guardar segredo real em Markdown

- O Obsidian guarda notas como arquivos Markdown em texto plano no filesystem local.
- Obsidian Sync pode proteger o remote vault, mas o vault local continua legivel para qualquer processo/usuario com acesso ao Mac desbloqueado.
- Plugins, indexadores, backups, search, logs, screenshots e agentes podem acabar lendo o conteudo.
- LLMs e automacoes devem usar referencias e inventario, nao receber valor real.

## Onde guardar o valor real

| Uso | Local recomendado | Motivo |
| --- | --- | --- |
| Senhas/passkeys pessoais | Apple Passwords / iCloud Keychain ou 1Password | Sync seguro com devices aprovados. |
| API keys de desenvolvimento | 1Password Developer / 1Password CLI | Permite `op://...` references e `op run` sem plaintext. |
| Secrets de producao Railway/Vercel/Netlify/Fly/Render | Provider env vars | O runtime injeta sem passar pelo vault. |
| CI/CD | GitHub Actions Secrets ou provider equivalente | Separacao de acesso por repo/env. |
| Cloud enterprise | AWS/GCP/Azure secret manager | IAM, audit, rotacao e least privilege. |
| Fallback local Mac | Apple Keychain | Bom para credenciais humanas; menos pratico para automacao multi-projeto que 1Password CLI. |

## O que o vault deve guardar

Guardar em [[04_Areas/Coding/Checklists/Secrets And API Keys Register]]:

- Nome da env var.
- Provider.
- Projeto/repos que usam.
- Ambiente: local, staging, prod, CI.
- Onde o valor real esta guardado.
- Referencia segura, quando houver, como `op://vault/item/field`.
- Escopo/permissao.
- Owner.
- Data de criacao/rotacao.
- Procedimento de revogacao.
- Evidencia de que `.env.example` existe sem valor real.

## O que o vault nunca deve guardar

- API key real.
- Bearer token, refresh token, session token ou cookie.
- Senha.
- Private key `.p8`, `.pem`, `.key`, `.p12`.
- Service account JSON.
- `.env` completo.
- Screenshot mostrando credenciais.
- Output de CLI que imprima secrets.

## Padrao recomendado para Paulo

### 1. 1Password como cofre principal de developer secrets

Quando `op` estiver instalado:

```bash
export OPENAI_API_KEY="op://Developer/OpenAI/api-key"
op run -- npm run dev
```

Para arquivos:

```bash
op run --env-file .env.op -- npm run dev
```

Regra: `.env.op` pode guardar referencias `op://...`; `.env.local` com valor real fica local e gitignored.

### 2. Apple Passwords / iCloud Keychain para credenciais humanas

Usar para contas, passkeys, senhas de apps e acesso no iPhone/Mac. Bom para uso humano; nao e o melhor formato para automacoes de coders porque nao tem referencias `op://...` portaveis por repo.

### 3. Provider env vars para producao

Railway/Vercel/GitHub/etc. continuam fonte de runtime. O vault guarda somente:

```text
RAILWAY_PROJECT=x
RAILWAY_SERVICE=y
ENV_VAR_NAME=OPENAI_API_KEY
stored_at=Railway Variables
value=never stored here
```

## Regras para coders

- Nunca pedir que Paulo cole uma key no chat se houver alternativa.
- Procurar primeiro o registro em [[04_Areas/Coding/Checklists/Secrets And API Keys Register]].
- Se precisar de uma credencial:
  - usar provider env vars;
  - usar `op run` quando 1Password CLI existir;
  - usar script/provider oficial;
  - ou deixar uma acao humana clara.
- Nunca imprimir secrets em logs, Markdown, Linear, screenshots ou email.
- Ao encontrar secret real no vault, tratar como incidente: remover, rotacionar e registrar sem repetir valor.

## Intake seguro local

Fallback ja configurado neste Mac:

```bash
/Users/paulopierrondi/.local/bin/brain-secret-intake
```

Uso correto:

- inserir somente valores novos/rotacionados;
- nunca inserir valor ja exposto em chat;
- nao passar segredo como argumento de comando;
- usar Apple Keychain como fallback local;
- migrar para 1Password CLI para uso multi-maquina, cloud coder e referencias `op://...`.

Importacao por arquivo temporario:

```bash
/Users/paulopierrondi/.local/bin/brain-secret-intake template /Users/paulopierrondi/.second-brain-secrets.env
/Users/paulopierrondi/.local/bin/brain-secret-intake import /Users/paulopierrondi/.second-brain-secrets.env --delete
```

Runbook visual/manual no Obsidian: [[99_System/Manual Credential Intake]].

Regras do arquivo temporario:

- usar apenas valores novos/rotacionados;
- permissao `600`;
- nunca colocar dentro do Obsidian, repo Git, iCloud Drive compartilhado ou pasta de sync nao-controlada;
- apagar apos importacao;
- o importador grava no Apple Keychain e nao imprime valores.

Para scripts locais que precisem ler um se
...[truncated]

## 04_Areas/Coding/Best Practices/Development Best Practices Hub.md

---
type: best-practices-hub
tags:
  - best-practices
  - coding
  - learning-loop
---
# Development Best Practices Hub

Este e o hub vivo de melhores praticas de desenvolvimento.

## Como usar

Antes de implementar, revisar ou desenhar arquitetura, escolha os guias relevantes:

- App/Web quality: [[04_Areas/Coding/Best Practices/App Web Quality Best Practices]]
- Mobile opening motion: [[04_Areas/Coding/Best Practices/Mobile App Opening Motion Standard]]
- Mobile privacy/consent: [[04_Areas/Coding/Best Practices/Mobile App Privacy Consent Standard]]
- iOS QA/TestFlight closure: [[04_Areas/Coding/Best Practices/iOS Functional QA And TestFlight Closure Standard]]
- Web/Next/React: [[04_Areas/Coding/Best Practices/Web Next React Best Practices]]
- Frontend UI/UX: [[04_Areas/Coding/Best Practices/Frontend UI UX Best Practices]]
- Backend/API: [[04_Areas/Coding/Best Practices/Backend API Best Practices]]
- Database/Data: [[04_Areas/Coding/Best Practices/Database Data Best Practices]]
- Mobile/iOS: [[04_Areas/Coding/Best Practices/Mobile iOS Best Practices]]
- Android: [[04_Areas/Coding/Best Practices/Android App Best Practices]]
- Python/Data tools: [[04_Areas/Coding/Best Practices/Python Data Best Practices]]
- AI/LLM apps: [[04_Areas/Coding/Best Practices/AI LLM Best Practices]]
- DevOps/Railway: [[04_Areas/Coding/Best Practices/DevOps Railway Best Practices]]
- Testing/QA: [[04_Areas/Coding/Best Practices/Testing QA Best Practices]]
- Agent workflow: [[04_Areas/Coding/Best Practices/Agent Workflow Best Practices]]
- Security baseline: [[04_Areas/Coding/Checklists/Security Checklist]]
- Platform checklists: [[04_Areas/Coding/Checklists/Project Checklist Hub]]

## Como aprender automaticamente

Todo coder deve registrar aprendizados reutilizaveis em:

- [[04_Areas/Coding/Best Practices/Learning Inbox]]
- [[04_Areas/Coding/Best Practices/Patterns To Promote]]

Aprendizado reutilizavel e algo que deve guiar projetos futuros:

- erro recorrente;
- comando canonico melhor;
- convencao de plataforma;
- decisao de arquitetura que se repetiu;
- checklist que faltava;
- risco de seguranca percebido;
- padrao de deploy ou rollback;
- regra de UX/design que melhorou resultado;
- falha visual detectada por screenshot ou viewport;
- regra de store readiness para App Store ou Google Play.

## Regra para agentes

Quando uma sessao terminar, perguntar internamente:

- "Isto ensina algo reutilizavel?"
- "Algum checklist deve ganhar item novo?"
- "Alguma pratica antiga deve ser corrigida?"
- "Isso vale para uma plataforma especifica ou para todos os projetos?"

Se sim, registrar no Learning Inbox ou em `.brain/SESSION_NOTES.md` quando o vault nao estiver acessivel.

## Promocao

Itens do Learning Inbox viram melhores praticas quando:

- aconteceram em mais de um projeto;
- evitaram bug, retrabalho, custo ou risco;
- melhoraram qualidade visual, seguranca, performance ou deploy;
- foram confirmados por teste, build, deploy ou revisao.

## Links

- [[04_Areas/Coding/AI Coding Operating System]]
- [[04_Areas/Coding/Checklists/Project Checklist Hub]]
- [[04_Areas/Coding/Checklists/App Web Preflight Checklist]]
- [[04_Areas/Coding/Checklists/Screenshots Visual QA Checklist]]
- [[99_System/AI Agent Vault Policy]]
- [[99_System/Security And Secrets Policy]]

## 04_Areas/Coding/Best Practices/App Web Quality Best Practices.md

---
type: best-practices
platform: app-web-quality
tags:
  - best-practices
  - apps
  - web
  - screenshots
  - quality
---
# App Web Quality Best Practices

## Principio

Qualidade de app/web e uma combinacao de produto, design, estado, performance, acessibilidade, privacy, store readiness e evidencia visual. **Qualidade sempre sobe. Nunca degrada conscientemente.** Cada release, cada tela, cada screenshot, cada copy substituida deve estar igual ou melhor que a versao anterior. Se um deliverable parece pior que o anterior, ou pior que o competidor, e nao-aceitavel; refazer.

## O padrao Paulo

- Construir a experiencia real primeiro.
- Evitar landing generica quando o pedido e app/ferramenta.
- Todo app precisa nascer com identidade publica completa: icone final forte, landing page publica de padrao superior e links legais vivos. Isso e parte do produto, nao acabamento.
- App icon nunca pode ser placeholder. Antes de review, TestFlight, launch, deck ou paid campaign, validar o icone dentro do build/app instalado, no asset catalog completo da plataforma e na landing/favicons/OG image.
- Landing page publica nunca pode ser resposta JSON, pagina generica ou placeholder. `GET /` deve entregar HTML responsivo, branded, com proposta de valor clara, visual real do produto, CTA, links de suporte/privacy/terms e metadata social/SEO.
- Interfaces operacionais devem ser claras, densas e rapidas.
- Apps consumer podem ser mais expressivos, mas ainda precisam de fluxo obvio.
- Todo app mobile deve ter uma pequena animacao de abertura contextual ao dominio do app, antes de privacidade/auth/home, sem parecer splash generico e sem atrasar o uso.
- Em app iOS, modificacao significativa so fecha depois de teste funcional no app instalado e upload do novo build para TestFlight/App Store Connect, salvo excecao explicita.
- Screenshots sao deliverable de primeira classe, nao "depois". Submission, release, post, deck, anuncio ou pagina nova so e "feito" quando os arquivos finais artisticos existem, validados e registrados.
- Privacidade e consentimento tambem sao deliverable de primeira classe. Todo app novo precisa ter tela padrao de primeira abertura, links legais vivos e tracking desligado por padrao antes de qualquer SDK/evento de marketing.
- Toda tela importante precisa lidar com loading, erro, vazio e permissao.
- Classificar cada screenshot por finalidade antes da QA final: produto real, store review, marketing, deck preview, teste visual ou dependencia. Screenshot de `node_modules`, fixture ou snapshot de pacote nao prova qualidade do app.

## Privacy and consent

Regra maxima: app sem clareza de privacidade nao esta pronto para TestFlight externo, review, campanha ou launch.

Padrao:
- Primeiro launch deve explicar uso funcional de dados, oferecer links legais e permitir continuar sem tracking.
- Tracking entre apps/sites, IDFA, ads SDK, MMP e medicao de marketing ficam desligados por padrao e exigem decisao explicita de produto.
- Se nao houver tracking, remover SDKs de ads/attribution, SKAdNetwork IDs e chaves client-side do binario final.
- Se houver tracking, ATT/privacy labels/termos/eventos precisam estar coerentes antes do upload.
- Screenshot da tela de consentimento por idioma principal vira evidencia obrigatoria do release.

Guia canonico: [[04_Areas/Coding/Best Practices/Mobile App Privacy Consent Standard]]

## Opening motion

Regra maxima: todo app mobile precisa de uma assinatura curta de abertura, contextual ao produto, local/offline e respeitando acessibilidade.

Padrao:
- Launch screen nativo fica estatico; a animacao acontece dentro do app apos o primeiro frame.
- A animacao usa a metafora real do produto: musica, financas, devocional, escola, saude, foto/video, SaaS etc.
- Primeiro uso pode durar ate `1.6s`; cold start recorrente deve ser mais curto, idealmente `0.4s-0.9s`; nunca passar de `2s`.
- Deve respeitar Reduce Motion e nao depender de backend.
- Nao pode inicializar tracking, ads SDK ou medicao de marketing antes do consentimento aplicavel.
- Evidencia visual da animacao deve ser registrada na nota do projeto quando houver release visual/mobile.

Guia canonico: [[04_Areas/Coding/Best Practices/Mobile App Opening Motion Standard]]

## iOS QA and TestFlight closure

Regra maxima: para app iOS, "feito" nao significa apenas codigo compilando. Significa app testado, build incrementado, archive/export feito e upload TestFlight concluido.

Padrao:
- Ao fechar mudanca iOS significativa, testar no app instalado: cold start/opening motion, privacy/consent, auth/demo ou anonimo, Home, navegacao principal, feature alterada, links legais e APIs relevantes.
- Incrementar build number antes do archive.
- Usar lane/script existente (`bundle exec fastlane local_beta`, `npm run ios:upload` ou equivalente).
- Confirmar upload para App Store Connect/TestFlight e registrar se esta processing ou `VALID`.
- Atualizar vault e Linear com build/version, comandos, artefatos visuais e riscos.
- TestFlight upload tem
...[truncated]

## 04_Areas/Coding/Best Practices/Recent App Web Screenshot Learnings.md

---
type: learning-review
area: app-web-quality
tags:
  - screenshots
  - visual-qa
  - apps
  - web
  - learning-loop
---
# Recent App Web Screenshot Learnings

Consolidado das criacoes e artefatos recentes encontrados no workspace.

## Fontes observadas

- `pierrondi-ia/docs/marketing/campaigns/.../buildinpublic-stats-1080x1350.png`
- `ppt_engine/workspace/.../*.preview.png`
- `fashioncore/apps/ios/fastlane/screenshots/en-US/*_1284x2778.png`
- `fifa2026bolao/artifacts/review/*iphone*.png`
- `fifa2026bolao/artifacts/review/*ipad*.png`
- `servicenow-agent-army/marketing/video-*`
- `pierrondi-ia/test-results`
- `pierrondi-ia/tmp/ui-review`

## Aprendizados promovidos

- Screenshot de review/store precisa provar plataforma e tamanho, nao apenas "parece bonito".
- App Store/Google Play pedem conjuntos diferentes de evidencia: phone, tablet/large screen quando aplicavel, idioma, dark/light e ausencia de dados sensiveis.
- Imagens de marketing precisam nascer no formato de destino: feed, story, deck, landing, preview e video nao devem reaproveitar crop por acidente.
- Screenshots de UI precisam capturar estado real: loading, empty, erro, permissao, auth, pagamento, onboarding e sucesso.
- Render preview de deck/documento/site e uma forma de teste visual; se nao renderizou, nao esta pronto.
- `node_modules`, package fixtures e snapshots de dependencias nao contam como evidencia do produto.
- O vault deve registrar paths e decisao de qualidade, nao copiar imagens sensiveis nem inflar a memoria com dumps.

## Regra operacional

Quando um agente mexer em app/web visual:

- usar [[04_Areas/Coding/Checklists/Screenshots Visual QA Checklist]];
- registrar os paths de evidencia na nota do projeto;
- transformar falhas recorrentes em item de checklist;
- nao anexar screenshot com segredo, PII, token, cookie ou ambiente de producao exposto.

## Destinos

- [[04_Areas/Coding/Best Practices/App Web Quality Best Practices]]
- [[04_Areas/Coding/Checklists/App Web Preflight Checklist]]
- [[04_Areas/Coding/Checklists/Screenshots Visual QA Checklist]]

## 04_Areas/Coding/Best Practices/Android App Best Practices.md

---
type: best-practices
platform: android
tags:
  - best-practices
  - android
  - google-play
---
# Android App Best Practices

## Principios

- Android nao e apenas "iOS portado": respeitar back navigation, intents, permissions, density, large screens e lifecycle.
- Estado do usuario deve sobreviver background, rotacao e navegacao.
- Permissoes perigosas precisam ser minimizadas e pedidas no contexto certo.
- Data safety e privacy policy precisam bater com codigo e SDKs.

## UI

- Usar Material 3 quando estiver no stack.
- Touch targets e fontes precisam escalar.
- Layouts devem funcionar em phone, tablet e foldable quando relevante.
- Dark mode precisa ser intencional, nao acidental.

## Arquitetura

- Segredos nunca entram no APK/AAB.
- Offline e rede ruim precisam de estado explicito.
- Background work deve usar APIs apropriadas e respeitar bateria.
- Analytics/crash SDKs devem estar no inventario de privacy.

## Release

- Version code/name atualizados.
- App Bundle com signing correto.
- Store listing honesta.
- Test track antes de producao.
- Data safety atualizado a cada novo SDK/coleta.

## Links

- [[04_Areas/Coding/Checklists/Android App Preflight Checklist]]
- [[04_Areas/Coding/Best Practices/App Web Quality Best Practices]]

## 04_Areas/Coding/Best Practices/Agent Workflow Best Practices.md

---
type: best-practices
platform: agents
tags:
  - best-practices
  - agents
  - codex
  - claude
  - kimi
  - gemini
  - cursor
---
# Agent Workflow Best Practices

## Principios

- Primeiro ler memoria; depois planejar; depois editar.
- Agente nao deve pedir segredo que pode ser acessado via provider/CLI.
- Mudancas devem ser pequenas, verificaveis e registradas.
- Aprendizado reutilizavel deve voltar para o vault.
- Quando houver subagentes, manter ownership claro e nao duplicar o mesmo escopo de escrita.
- Antes de promover um padrao, diferenciar lição madura de caso puntual com dependencias de plataforma.
- Para trabalhos paralelos, cada worker precisa de escopo disjunto, nao pode reverter edits de outros e deve aceitar que a base do codigo nao esta isolada.
- Background Coders ativos sao Codex, Claude Code, Kimi CLI, Gemini CLI e Google Antigravity. Cursor Background Agent fica dormente, salvo ativacao explicita do Paulo.
- `GEMINI.md` deve ficar em paridade operacional com `AGENTS.md`; Gemini CLI usa essa memoria e Antigravity tambem deve conseguir ler `AGENTS.md` + `GEMINI.md`.
- Antigravity deve operar com Project folders explicitos. Se o vault nao estiver no Project, usar `.brain/PROJECT_CONTEXT.md` ou pedir acesso ao vault antes de assumir contexto vivo.

## Inicio

- Rodar/usar `brain-preflight`.
- Ler `.brain/PROJECT_CONTEXT.md`.
- Ler nota do projeto e AI history.
- Ler best practices e checklists relevantes.
- Confirmar comandos canonicos.
- Para background work, confirmar `.brain/BACKGROUND_CODER_CONTEXT.md`, owner (`codex`, `claude`, `kimi`, `gemini` ou `antigravity`), issue/tarefa unica, artefato esperado e stop condition.

## Durante

- Preservar mudancas do usuario.
- Evitar refactor fora do escopo.
- Usar ferramentas seguras para secrets: Railway, provider env vars, 1Password/Keychain.
- Nao imprimir env completo.
- Nao pedir a nenhum background coder para operar secrets, deploy, App Store/TestFlight, paid ads, social publishing, migrations de producao ou multi-repo changes sem aprovacao explicita.

## Fim

- Atualizar nota do projeto.
- Atualizar `.brain/SESSION_NOTES.md` se sem vault.
- Registrar aprendizado em [[04_Areas/Coding/Best Practices/Learning Inbox]] quando reutilizavel.
- Sugerir promocao para best practice quando padrao aparecer de novo.
- Se a entrega veio de background coder, registrar owner, handoff aceito/rejeitado e atualizar Linear apenas depois de validação local.

## Aprendizados locais

- Adicionar aqui comportamento que melhorou entregas dos coders.

- 2026-05-21: Cursor Background Agent deve entrar no Hub como worker remoto de branch/PR pequeno, nunca como integrador final. Ele usa snapshots `.brain` e `.cursor/rules`; Codex/Claude local valida e Obsidian/Linear registram a realidade.
- 2026-05-21: Paulo decidiu nao abrir Cursor por ora. Background work deve ficar embutido nos coders atuais: Kimi para volume/triagem, Codex para patch/integracao, Claude Code para complexidade/compliance, Gemini CLI para validacao independente/MCP/terminal e Antigravity para orquestracao/browser/worktree/artefatos. Cursor fica dormente.
- 2026-05-21: Gemini CLI e Google Antigravity entram como coders ativos no Hub. Gemini cobre validacao independente/MCP/terminal com `GEMINI.md`; Antigravity cobre orquestracao agent-first, browser/Chrome, worktrees, subagentes e artefatos com `AGENTS.md` + `GEMINI.md`.

## 04_Areas/Coding/Checklists/Project Checklist Hub.md

---
type: checklist-hub
tags:
  - checklist
  - coding
  - security
---
# Project Checklist Hub

Este e o hub obrigatorio de checklists para todos os projetos.

## Uso por agentes

Antes de implementar, revisar ou fazer deploy, o agente deve escolher os checklists relevantes:

- Preflight essencial app/web: [[04_Areas/Coding/Checklists/App Web Preflight Checklist]]
- Visual QA/screenshots: [[04_Areas/Coding/Checklists/Screenshots Visual QA Checklist]]
- Frontend: [[04_Areas/Coding/Checklists/Frontend Checklist]]
- Backend/API: [[04_Areas/Coding/Checklists/Backend API Checklist]]
- Web/Next/Node: [[04_Areas/Coding/Checklists/Platform Web Next Node Checklist]]
- Web app quality: [[04_Areas/Coding/Checklists/Web App Preflight Checklist]]
- Mobile/iOS: [[04_Areas/Coding/Checklists/Platform Mobile iOS Checklist]]
- iOS app quality: [[04_Areas/Coding/Checklists/iOS App Preflight Checklist]]
- iOS QA/TestFlight closure: [[04_Areas/Coding/Best Practices/iOS Functional QA And TestFlight Closure Standard]]
- App Store Connect upload: [[04_Areas/Coding/Checklists/App Store Connect Upload Runbook]]
- **🚨 Apple reject resolution (LEITURA OBRIGATÓRIA antes de tocar em qualquer reject):** [[04_Areas/Coding/Checklists/Apple Reject Resolution Audit Checklist]]
- Android app quality: [[04_Areas/Coding/Checklists/Android App Preflight Checklist]]
- Python/Data: [[04_Areas/Coding/Checklists/Platform Python Data Checklist]]
- IA/LLM: [[04_Areas/Coding/Checklists/AI Integrations Checklist]]
- Deploy/Release: [[04_Areas/Coding/Checklists/Release Deploy Checklist]]
- Seguranca: [[04_Areas/Coding/Checklists/Security Checklist]]
- Secrets/API keys: [[04_Areas/Coding/Checklists/Secrets And API Keys Register]]
- Apple/App Store Connect: [[04_Areas/Coding/Checklists/Apple Developer And App Store Connect Inventory]]
- Railway variables: [[04_Areas/Coding/Checklists/Railway Secrets Inventory]]

## Regra dura

O vault guarda inventario, decisoes e referencias. O vault **nao guarda valores reais** de API keys, tokens, senhas, cookies, private keys, refresh tokens ou credenciais de producao.

## Start gate para qualquer projeto

- [ ] Identificar plataforma: web, mobile, backend, IA, data, infra.
- [ ] Abrir nota do projeto em `02_Projects`.
- [ ] Abrir `.brain/PROJECT_CONTEXT.md` quando existir.
- [ ] Rodar `brain-linear-sync` ou ler [[04_Areas/Coding/Linear/Linear Git Sync Report]] para estado Git/local.
- [ ] Para roadmap, bug, status, prioridade, release, sprint/cycle, automacao ou backlog cleanup, ler o projeto/issue vivo no Linear via conector quando disponivel.
- [ ] Selecionar checklists relevantes deste hub.
- [ ] Para app, site, tela, fluxo visual ou store submission, abrir [[04_Areas/Coding/Checklists/App Web Preflight Checklist]].
- [ ] Para mudanca visual, planejar screenshots com [[04_Areas/Coding/Checklists/Screenshots Visual QA Checklist]].
- [ ] Verificar riscos e decisoes antigas.
- [ ] Confirmar onde secrets reais devem ficar.
- [ ] Para iOS/App Store, abrir o inventario Apple antes de pedir IDs ou chaves.
- [ ] Para mudanca iOS significativa, planejar QA funcional instalada e upload TestFlight no fechamento.
- [ ] Definir comandos de lint, test e build.

## Finish gate para qualquer projeto

- [ ] Atualizar nota do projeto.
- [ ] Atualizar Linear quando a realidade da issue/projeto mudou; se nao for apropriado alterar status, registrar proposta clara em [[04_Areas/Coding/Linear/Linear Cleanup Backlog]] ou na nota do projeto.
- [ ] Nao fechar, arquivar, relabelar, reatribuir ou mover issues em massa sem proposta e aprovacao explicita.
- [ ] Atualizar inventario de env vars/secrets sem valores reais.
- [ ] Atualizar inventario Apple quando houver mudanca de Issuer ID, Team ID, Key ID, APNS, IAP ou signing.
- [ ] Registrar comandos rodados.
- [ ] Para iOS significativo, registrar TestFlight build/version/status ou excecao explicita.
- [ ] Registrar paths dos screenshots relevantes ou motivo de nao capturar.
- [ ] Registrar riscos, decisoes e proximos passos.
- [ ] Confirmar que nenhum segredo foi escrito em Markdown, logs, commits ou screenshots.
- [ ] Se isto foi automacao/rotina/job/cloud runner, enviar email final para `pierrondi@gmail.com` conforme [[99_System/Automation Email Policy]].

## Referencias externas

- Apple HIG: https://developer.apple.com/design/human-interface-guidelines
- Apple App Review Guidelines: https://developer.apple.com/app-store/review/guidelines/
- Android Core App Quality: https://developer.android.com/docs/quality-guidelines/core-app-quality
- Android technical quality: https://developer.android.com/quality/technical
- Google Play Developer Program Policy: https://support.google.com/googleplay/android-developer/answer/16933379
- Web Vitals: https://web.dev/articles/vitals
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- OWASP Top 10 2021: https://owasp.org/Top10/2021/
- OWASP API Security Top 10 2023: https://owasp.org/API-Security/
- OWASP ASVS: https://owasp.org/www-project-application-security-
...[truncated]

## 04_Areas/Coding/Checklists/App Web Preflight Checklist.md

---
type: preflight-checklist
area: app-web-quality
tags:
  - preflight
  - apps
  - web
  - ios
  - android
  - quality
---
# App Web Preflight Checklist

Este e o preflight mais importante antes de criar, alterar ou revisar qualquer app, web app, site, tela, fluxo, release, screenshot ou submission.

## 0. Classificar o trabalho

- [ ] Tipo: web app, site, iOS, Android, cross-platform, backend-for-frontend, landing, dashboard, game, marketing page.
- [ ] Plataforma alvo primaria definida.
- [ ] Plataforma secundaria definida.
- [ ] Usuario alvo e momento de uso definidos.
- [ ] Fluxo principal em uma frase.
- [ ] Risco principal: design, dados, auth, pagamento, store review, performance, privacy, AI, deploy.

## 0.1 Regra maxima de ads tracking

> Todo app novo ou em uso precisa ter tracking de aquisicao e performance de ads como requisito de produto, nao como tarefa de marketing posterior.

- [ ] Mobile app: TikTok App Events SDK ou MMP equivalente planejado/implementado quando o app puder receber TikTok/Meta/social paid.
- [ ] iOS: SKAN/AdServices/ATT/App Privacy/PrivacyInfo revisados e com um unico owner de conversion value.
- [ ] Web/PWA/landing: TikTok Pixel + Events API/UTM capture planejado/implementado quando houver trafego pago/social.
- [ ] Evento de funil minimo definido: app open/install, onboarding completed, ativacao principal, paywall viewed, trial/purchase started, purchase/subscription completed.
- [ ] Reporting central definido: app, channel, campaign, spend, impressions, clicks/taps, installs/leads, CPA/CPT e receita/trial quando existir.
- [ ] Test Events ou equivalente documentado antes de qualquer campanha paga, budget scale, creative refresh pago ou paid launch.
- [ ] Segredos ficam em secret manager/build env/provider env; vault registra somente nomes de env vars e local de armazenamento.

## 1. Ler memoria e padroes

- [ ] Nota do projeto em `02_Projects`.
- [ ] `.brain/PROJECT_CONTEXT.md`.
- [ ] AI history do projeto.
- [ ] `brain-linear-sync` rodado ou [[04_Areas/Coding/Linear/Linear Git Sync Report]] lido.
- [ ] Linear issue/projeto vivo lido via conector quando o trabalho for roadmap, bug, release, status, prioridade, sprint/cycle, backlog ou automacao.
- [ ] [[04_Areas/Coding/Best Practices/Development Best Practices Hub]]
- [ ] [[04_Areas/Coding/Best Practices/Frontend UI UX Best Practices]]
- [ ] [[04_Areas/Coding/Checklists/Project Checklist Hub]]
- [ ] [[04_Areas/Coding/Checklists/Screenshots Visual QA Checklist]]
- [ ] [[04_Areas/Coding/Checklists/Security Checklist]]

## 2. Plataforma

- [ ] Web: [[04_Areas/Coding/Checklists/Web App Preflight Checklist]]
- [ ] iOS: [[04_Areas/Coding/Checklists/iOS App Preflight Checklist]]
- [ ] Android: [[04_Areas/Coding/Checklists/Android App Preflight Checklist]]
- [ ] Backend/API: [[04_Areas/Coding/Checklists/Backend API Checklist]]
- [ ] AI/LLM: [[04_Areas/Coding/Checklists/AI Integrations Checklist]]
- [ ] Release/deploy: [[04_Areas/Coding/Checklists/Release Deploy Checklist]]

## 3. Produto e UX

- [ ] Primeira tela mostra valor real, nao placeholder ou marketing vazio.
- [ ] Todo app tem identidade publica pronta: icone final forte, landing page publica superior e links legais vivos.
- [ ] Mobile app tem opening motion contextual ao dominio do produto, curto, offline, sem spinner generico e sem bloquear o uso.
- [ ] `GET /` do dominio publico entrega landing HTML responsiva, nao JSON cru, pagina vazia ou placeholder.
- [ ] Landing inclui nome do app, promessa clara, visual real/screenshot, CTA, support/privacy/terms, favicon/app icon e Open Graph/Twitter metadata.
- [ ] Fluxo principal tem inicio, acao, feedback, erro e conclusao.
- [ ] Se for app iOS com mudanca significativa, fechamento inclui QA funcional no app instalado e upload TestFlight/App Store Connect.
- [ ] Estados vazios, loading, erro, offline e permissao negada foram tratados.
- [ ] Usuario consegue recuperar de erro sem perder trabalho.
- [ ] Copy esta em idioma correto e nao promete o que app nao entrega.
- [ ] Nenhum texto explica funcionalidade que a UI deveria tornar obvia.

## 4. Qualidade visual

> **Regra zero:** screenshots para loja, marketing ou release sao deliverable de primeira classe, sempre "super awesome", sempre iguais ou melhores que a versao anterior. Ver [[04_Areas/Coding/Checklists/Screenshots Visual QA Checklist]] e [[04_Areas/Coding/Best Practices/App Web Quality Best Practices]].

- [ ] App icon foi validado como final, forte e reconhecivel; nao e placeholder, template cru ou asset generico.
- [ ] App icon esta consistente entre build instalado, App Store/Play, landing, favicon e OG image.
- [ ] Screenshot desktop e mobile foram capturados quando ha mudanca visual.
- [ ] Opening motion mobile foi capturado em screenshot/video curto e o path foi registrado quando houve mudanca de app/release.
- [ ] Para store submission: 6 screenshots composed por idioma e device class, no formato exato (App Store 6.9" = 1320x2868). Sem composer brandado e
...[truncated]

## 04_Areas/Coding/Checklists/Screenshots Visual QA Checklist.md

---
type: checklist
area: visual-qa
tags:
  - screenshots
  - visual-qa
  - quality
---
# Screenshots Visual QA Checklist

> **Regra zero — sempre awesome, nunca degrada.** Toda screenshot destinada a loja, marketing, post, deck ou capa de release e deliverable de primeira classe. Sai composta, brandada, no formato exato do destino, em todos os idiomas relevantes. Nao existe "screenshot ok pra primeira versao". Cada nova versao deve ser igual ou melhor que a anterior — degradacao visual e regressao e bloqueia release.

## Quando capturar

- [ ] Mudanca visual em tela, componente, landing, dashboard ou app.
- [ ] Novo fluxo de onboarding, auth, pagamento, upload, IA ou deploy.
- [ ] Submission App Store/Google Play — **bloqueador**: sem 6 telas finais composed em cada idioma + device class, nao submete.
- [ ] Resubmission apos rejeicao Apple/Google — refazer set inteiro se o build mudou de jeito visivel.
- [ ] Lancamento de feature consumer — pelo menos 1 hero shot artistico para post/release notes.
- [ ] Bug visual, overflow ou responsividade.
- [ ] Antes/depois de refactor de UI — comparar lado-a-lado.
- [ ] Marketing post, anuncio, deck, video preview — formato e dimensoes do canal final, nao reaproveitar de outro lugar.

## Viewports

- [ ] Mobile estreito.
- [ ] Mobile alto.
- [ ] Tablet quando aplicavel.
- [ ] Desktop padrao.
- [ ] Desktop largo quando layout for responsivo.
- [ ] Light/dark mode quando suportado.

## "Super awesome" para store/marketing — checklist obrigatorio

- [ ] Composicao branded: brand gradient/textura + headline tipografica + frame de device realista + footer com wordmark/logo.
- [ ] Headline tipografica forte (display font, peso 800+, tamanho >= 100px no 1320px), idealmente com gradient sutil.
- [ ] Eyebrow curta acima do headline (uppercase, letter-spacing alto, cor accent da marca).
- [ ] Subhead em uma linha que explica o beneficio.
- [ ] Frame de device com bezel realista, Dynamic Island/notch correto, side buttons, drop shadow.
- [ ] Screenshot interna mostra produto em uso real, com dados de demo plausiveis (nao login, nao splash, nao tela vazia).
- [ ] Resolucao EXATA do destino:
  - iPhone 6.9": 1320x2868
  - iPhone 6.7": 1290x2796
  - iPhone 6.5": 1242x2688
  - iPhone 5.5": 1242x2208
  - iPad 13": 2064x2752
  - iPad 12.9": 2048x2732
  - Instagram feed: 1080x1350
  - Instagram story: 1080x1920
  - LinkedIn post: 1200x627
- [ ] Status bar: 9:41, bateria 100%, sinal cheio, sem operadora estranha. `xcrun simctl status_bar` ou device fisico ja configurado.
- [ ] Por idioma do mercado (minimo pt-BR + en-US para Brasil/global; adicionar es-MX/es-AR/pt-PT conforme distribuicao).
- [ ] Storytelling: 6 screenshots = arco (hook -> mecanica -> payoff -> social -> monetizacao -> upgrade).
- [ ] Comparada lado-a-lado com a versao anterior: igual ou melhor. Nunca pior.
- [ ] Comparada lado-a-lado com competidor direto: aguenta sem parecer pior.

## O que reprova

- [ ] Texto cortado.
- [ ] Texto ou controles sobrepostos.
- [ ] Botao muda tamanho no hover/loading.
- [ ] Cards dentro de cards sem motivo.
- [ ] Hero generico sem produto/objeto real.
- [ ] Imagem escura, cortada ou decorativa quando deveria explicar produto.
- [ ] Loading/empty/error com layout quebrado.
- [ ] Conteudo principal abaixo da dobra sem sinal visual.
- [ ] Cores muito monocromaticas sem hierarquia.
- [ ] Screenshot cru de simulator/device enviado para loja ou marketing sem composicao.
- [ ] Screenshot em idioma errado para o mercado.
- [ ] Apenas tela de login, splash ou title art (Apple Guideline 2.3.3 reprova).
- [ ] Resolucao aproximada (1290x2796 enviado como 6.9" e errado — Apple aceita mas perde fidelidade).
- [ ] Reaproveitar screenshot de release anterior sem comparar — risco de regressao silenciosa.
- [ ] Screenshot de dependencia, fixture ou `node_modules` tratado como prova do app.

## Evidencia

- [ ] Paths dos screenshots registrados na nota do projeto.
- [ ] Cada screenshot de QA tem interpretacao humana registrada: o que passou, o que falhou, se bloqueia release e qual e o proximo passo.
- [ ] Screenshot em simulador/device compartilhado com outros apps/agentes nao conta como evidencia final sem confirmar bundle/app/processo.
- [ ] Para iOS/App Store, a evidencia final precisa mostrar produto real em uso, nao apenas login/tour; login/tour conta somente como evidencia auxiliar.
- [ ] Push/ASC ficam bloqueados ate todos os fluxos core terem screenshot ou video curto com resultado pass/fail registrado.
- [ ] Se screenshot contem dado sensivel, nao anexar ao vault; registrar apenas que foi verificado.
- [ ] Falhas visuais viram item no projeto ou Learning Inbox.

## Pipeline canonico — HTML composer + Playwright

Para produzir screenshots "super awesome" reusavel entre projetos:

```
project/marketing/
  composer/
    template.html      # brand gradient + headline + frame + footer
    manifest.json      # {shots: [{id, raw, pt:{eyebrow,headline,subhead}, en:{...}}, ...]}
    render.mjs         #
...[truncated]

## 04_Areas/Coding/Checklists/Web App Preflight Checklist.md

---
type: preflight-checklist
platform: web
tags:
  - preflight
  - web
  - quality
---
# Web App Preflight Checklist

## UX

- [ ] O primeiro viewport mostra produto, estado real ou tarefa principal.
- [ ] Navegacao principal e retorno sao claros.
- [ ] Estados empty/loading/error/success existem.
- [ ] Forms preservam dados em erro.
- [ ] Tabelas/listas funcionam em mobile ou tem alternativa.
- [ ] Conteudo real nao depende de lorem ipsum/placeholder.

## Web performance

- [ ] LCP target: ate 2.5s quando medido em experiencia real.
- [ ] INP target: ate 200ms.
- [ ] CLS target: ate 0.1.
- [ ] Imagens com dimensoes, lazy loading quando adequado e formatos corretos.
- [ ] Fontes nao bloqueiam render sem motivo.
- [ ] JS pesado foi evitado ou code-split.

## Accessibility

- [ ] WCAG 2.2 como alvo de referencia.
- [ ] Focus nao fica escondido.
- [ ] Target size/touch target aceitavel.
- [ ] Drag-and-drop tem alternativa.
- [ ] Autenticacao acessivel.
- [ ] Ajuda consistente em fluxos complexos.

## Technical

- [ ] SEO/metadata quando pagina publica.
- [ ] Canonical/robots/sitemap quando relevante.
- [ ] CSP, CORS e security headers considerados.
- [ ] API client nao carrega secrets.
- [ ] Error boundaries/logging sem PII.
- [ ] Analytics respeitam consent/privacy.

## Visual QA

- [ ] Screenshot desktop.
- [ ] Screenshot mobile.
- [ ] Screenshot de estado de erro/loading se mudou fluxo.
- [ ] Sem overflow horizontal.
- [ ] Sem texto sobrepondo UI.

## Referencias

- Web Vitals: https://web.dev/articles/vitals
- WCAG 2.2: https://www.w3.org/TR/WCAG22/

## 04_Areas/Coding/Checklists/iOS App Preflight Checklist.md

---
type: preflight-checklist
platform: ios
tags:
  - preflight
  - ios
  - app-store
  - quality
---
# iOS App Preflight Checklist

## Produto e UX

- [ ] App segue convencoes iOS/HIG em navegacao, controles, gestos e feedback.
- [ ] App tem opening motion contextual ao dominio, implementado apos LaunchScreen estatico, curto e sem bloquear o uso.
- [ ] Fluxo principal funciona em device/simulador.
- [ ] Fluxos core e feature alterada foram testados no app instalado antes do fechamento.
- [ ] Safe area, Dynamic Type, dark mode e orientacao foram considerados.
- [ ] Permissoes aparecem no momento certo e explicam valor ao usuario.
- [ ] Offline/network slow nao quebra estado.
- [ ] Nenhum segredo real embutido no app.

## App Store review

- [ ] App nao tem placeholders, telas vazias ou conteudo temporario.
- [ ] App icon e final, forte, reconhecivel e consistente com a landing/App Store; nao e placeholder.
- [ ] App icon esta completo no asset catalog/build final da plataforma, nao apenas como PNG 1024 isolado.
- [ ] Backend esta online para review.
- [ ] URL raiz publica (`GET /`) entrega landing HTML responsiva de padrao superior, nao JSON cru.
- [ ] Landing tem nome do app, promessa clara, screenshots/visual real, CTA, suporte, privacy, terms, favicon/app icon e metadata social.
- [ ] Demo account ou demo mode existe quando login e necessario.
- [ ] Se login e necessario, Apple Sign-In e criacao de conta por e-mail foram testados em producao ou build release-like.
- [ ] App Review Information contem usuario demo e senha no App Store Connect; senha nao foi registrada no vault.
- [ ] Metadata, screenshots, descricao e notas de review batem com o app real.
- [ ] Support URL, Privacy URL e Terms URL retornam `200 text/html` antes da submissao.
- [ ] Se o dominio do produto nao estiver pronto, usar `https://www.pierrondi.dev/apps/<app-slug>/support`, `/privacy` e `/terms` como fallback oficial.
- [ ] Gate de release registrado no vault antes de push/upload: comandos, build number, simulator/device, screenshots, pass/fail humano, blockers e decisao final.
- [ ] Se houver outro chat/agente/processo trabalhando no app, usar simulador/device isolado ou registrar conflito; screenshot de device compartilhado nao conta como evidencia final sem confirmar app/bundle/processo.
- [ ] Push/ASC bloqueados se qualquer fluxo core abrir web indevidamente, mostrar app errado, ficar preso em login sem demo account/demo mode, tiver texto truncado, placeholder visual ou acao principal nao validada.
- [ ] Fluxos nativos minimos testados no app instalado: Auth/demo, Home, Planner/AI planner, Coach, Devotional, Records e Settings/sign-out.
- [ ] IAP/subscriptions estao visiveis, funcionais e explicados.
- [ ] Privacy policy e App Privacy Details batem com SDKs e coleta real.
- [ ] Opening motion nao inicializa tracking/ads/marketing antes de consentimento e respeita Reduce Motion.
- [ ] Privacy manifest (`PrivacyInfo.xcprivacy`) bate com dominios reais usados em producao.
- [ ] UGC tem report, block, moderation e contato quando aplicavel.
- [ ] Kids, saude, financeiro, sorteios/jogos, IA ou conteudo sensivel foram revisados.

## Build

- [ ] Bundle ID correto.
- [ ] Version/build number atualizados.
- [ ] Entitlements/capabilities revisados.
- [ ] Signing/provisioning ok.
- [ ] Archive/test build validado.
- [ ] Crash/logs revisados.
- [ ] Para upload/TestFlight/App Store Connect API, [[04_Areas/Coding/Checklists/Apple Developer And App Store Connect Inventory]] foi conferido.
- [ ] Para upload/TestFlight/App Store Connect API, [[04_Areas/Coding/Checklists/App Store Connect Upload Runbook]] foi seguido.
- [ ] `APP_STORE_CONNECT_ISSUER_ID` usa identificador nao-secreto do inventario; `.p8`, shared secrets e certificados ficam em secret manager/provider env vars.
- [ ] Large app icon 1024px nao tem alpha (`sips -g hasAlpha ...` retorna `no`).
- [ ] Asset catalog de AppIcon tem todos os slots/tamanhos exigidos pelo build alvo ou usa configuracao universal comprovadamente aceita pelo Xcode/App Store; validar no app instalado/TestFlight, nao so no arquivo fonte.
- [ ] Build number foi incrementado antes de novo upload.
- [ ] Upload nao sera considerado concluido ate App Store Connect mostrar build processing/`VALID`.
- [ ] Ao fechar mudanca iOS significativa, novo build foi enviado ao TestFlight/App Store Connect ou excecao explicita foi registrada.

## Screenshots

- [ ] Screenshots mostram valor real do app.
- [ ] Sem dados sensiveis.
- [ ] Textos localizados corretamente.
- [ ] Dispositivos/tamanhos exigidos foram cobertos.
- [ ] Idiomas suportados tem screenshots separados no `fastlane/screenshots/<locale>`.
- [ ] Dimensoes dos screenshots foram validadas por script.

## Fechamento TestFlight

- [ ] [[04_Areas/Coding/Best Practices/iOS Functional QA And TestFlight Closure Standard]] foi seguido.
- [ ] Comando de upload usado foi registrado.
- [ ] IPA/archive/dSYM path registrado quando aplicavel.
- [ ] Status App Store Connect regis
...[truncated]

## 04_Areas/Coding/Checklists/Android App Preflight Checklist.md

---
type: preflight-checklist
platform: android
tags:
  - preflight
  - android
  - google-play
  - quality
---
# Android App Preflight Checklist

## Produto e UX

- [ ] App segue Core App Quality e padroes Android.
- [ ] App tem opening motion contextual ao dominio, curto, offline e coerente com Material/brand.
- [ ] Material 3/Compose ou sistema visual escolhido foi aplicado consistentemente.
- [ ] Back navigation funciona e nao perde dados.
- [ ] Estado e restaurado ao voltar do background.
- [ ] Layout funciona em diferentes tamanhos, densidades, orientacoes e fontes.
- [ ] Foldables/tablets foram considerados se o app se beneficiar.
- [ ] Permissoes perigosas sao pedidas so quando ligadas ao caso de uso principal.

## Technical quality

- [ ] Startup, scroll, transicoes e memoria aceitaveis.
- [ ] Opening motion respeita animator duration scale/acessibilidade e nao bloqueia o app por mais de 2s.
- [ ] Crash-free e ANR considerados.
- [ ] Offline/network slow tratado.
- [ ] WorkManager/background work usado de forma apropriada.
- [ ] Battery/network usage nao abusivo.
- [ ] Nenhum segredo real embutido no APK/AAB.

## Google Play

- [ ] Privacy policy publica e dentro do app quando necessario.
- [ ] Data safety section consistente com coleta real e SDKs terceiros.
- [ ] Permissions declaration coerente.
- [ ] Content rating completo.
- [ ] Store listing sem claims enganosos.
- [ ] Account deletion e data deletion quando aplicavel.
- [ ] Test track/review notes preparados.

## Build/release

- [ ] Application ID correto.
- [ ] Version code/name atualizados.
- [ ] Release signing configurado.
- [ ] Android App Bundle pronto.
- [ ] ProGuard/R8 rules revisadas.
- [ ] Smoke test em device/emulator.

## Screenshots

- [ ] Phone screenshots.
- [ ] Tablet/large screen screenshots se aplicavel.
- [ ] Sem dados sensiveis.
- [ ] UI legivel em light/dark mode.

## Referencias

- Android Core App Quality: https://developer.android.com/docs/quality-guidelines/core-app-quality
- Android technical quality: https://developer.android.com/quality/technical
- Google Play policies: https://support.google.com/googleplay/android-developer/answer/16933379

## Fonte verificada

- `2026-05-18`: Android Core App Quality consultado; pagina oficial indica ultimo update em `2026-04-08 UTC`.

## 04_Areas/Coding/Checklists/Security Checklist.md

---
type: checklist
area: security
tags:
  - checklist
  - security
---
# Security Checklist

## Baseline

- [ ] Nenhum segredo real em Markdown, commits, screenshots, logs ou issues.
- [ ] `.env`, private keys, certificates e service account files estao no `.gitignore`.
- [ ] `.env.example` existe quando util, sem valores reais.
- [ ] Dependencias novas foram revisadas.
- [ ] Input externo e validado no servidor.
- [ ] Output sensivel nao e exposto ao cliente.

## OWASP web

- [ ] Broken access control: checar autorizacao por recurso.
- [ ] Cryptographic failures: nao armazenar senha/token em claro.
- [ ] Injection: usar queries parametrizadas e sanitizacao apropriada.
- [ ] Insecure design: revisar abusos obvios do fluxo.
- [ ] Security misconfiguration: headers, CORS, debug e permissao.
- [ ] Vulnerable components: revisar dependencias.
- [ ] Auth failures: sessoes, reset, MFA quando aplicavel.
- [ ] Integrity failures: supply chain, builds, webhooks assinados.
- [ ] Logging/monitoring: eventos criticos sem secrets.
- [ ] SSRF: validar URLs externas e metadata endpoints.

## API

- [ ] BOLA/BFLA: usuario nao acessa objeto/funcoes de outro usuario.
- [ ] Rate limit por user/IP/token.
- [ ] Object properties sensiveis nao aceitam mass assignment.
- [ ] Excessive data exposure evitada.
- [ ] Webhooks e callbacks validam assinatura.
- [ ] Consumo de APIs externas tem timeout, retry e allowlist quando possivel.

## Mobile/client

- [ ] Nenhum segredo real embutido no app.
- [ ] Chaves publicas client-side sao tratadas como publicas.
- [ ] Deep links e callbacks validam destino.
- [ ] Storage local nao guarda token sensivel sem protecao adequada.

## IA

- [ ] Prompt injection e tool abuse foram considerados.
- [ ] Modelo nao recebe segredo real.
- [ ] Output de IA nao executa acao destrutiva sem validacao.
- [ ] Logs de IA redigem PII e secrets.

## Antes de finalizar

- [ ] Rodar busca por padroes de segredo antes de commit quando houver risco.
- [ ] Atualizar [[04_Areas/Coding/Checklists/Secrets And API Keys Register]] se env vars mudaram.
- [ ] Registrar risco residual na nota do projeto.

## 04_Areas/Coding/Checklists/Secrets And API Keys Register.md

---
type: secrets-register
tags:
  - checklist
  - secrets
  - api-keys
  - security
---
# Secrets And API Keys Register

Este arquivo e inventario. Ele **nao guarda valores reais**.

## Regra

Guardar aqui:

- nome da env var;
- fornecedor;
- projeto;
- ambiente;
- onde o valor real esta guardado;
- data de rotacao;
- dono/responsavel;
- risco e escopo.

Nao guardar aqui:

- API key real;
- token;
- senha;
- cookie;
- private key;
- refresh token;
- service account JSON;
- arquivo `.p8`, `.pem`, `.key`, `.p12`, `.mobileprovision` ou equivalente.

## Locais recomendados para valor real

- 1Password ou outro password manager com referencias seguras, por exemplo `op://Developer/OpenAI/api-key`.
- Apple Passwords / iCloud Keychain para senhas/passkeys humanas.
- Apple Keychain local como fallback local.
- GitHub Actions Secrets.
- Vercel/Railway/Netlify/Fly/Render environment variables.
- AWS/GCP/Azure secret manager.
- `.env.local` apenas local, sem commit.

## Modelo de uso

Ver [[99_System/Credential Vault Operating Model]].

- Valor real nunca entra neste arquivo.
- Referencia segura pode entrar, por exemplo `op://vault/item/field`.
- Provider env var pode entrar, por exemplo `Railway Variables -> project/service -> OPENAI_API_KEY`.
- Se `op`/secret manager nao existir no ambiente, deixar acao humana clara em vez de pedir key em chat.
- Intake local seguro disponivel em `/Users/paulopierrondi/.local/bin/brain-secret-intake`; ele pede o valor no prompt do Apple Keychain, sem passar segredo por argumento de shell.
- Intake por arquivo temporario disponivel em `/Users/paulopierrondi/.second-brain-secrets.env`; importar com `/Users/paulopierrondi/.local/bin/brain-secret-intake import /Users/paulopierrondi/.second-brain-secrets.env --delete`.

## Checklist para nova API key

- [ ] Existe env var com nome claro.
- [ ] Valor real esta em secret manager, nao no vault.
- [ ] `.env.example` foi atualizado sem valor real.
- [ ] Se usado arquivo temporario de intake, ele foi apagado apos importacao.
- [ ] Escopo/permissao minima.
- [ ] Ambiente separado: dev/staging/prod.
- [ ] Rotacao/revogacao planejada.
- [ ] Quem usa a key esta documentado.
- [ ] Logs nao imprimem a key.
- [ ] Client nao recebe segredo server-side.

## Incidente de exposicao - 2026-05-19

Valores reais de credenciais foram colados em chat em `2026-05-19`. Tratar como comprometidos. Nenhum valor real deve ser copiado para o vault.

Registro canonico: [[99_System/Secret Exposure Incident - 2026-05-19]].

| Area | Referencias afetadas | Onde o valor novo deve ficar | Status |
| --- | --- | --- | --- |
| Google Gemini | `GEMINI_API_KEY` | 1Password/Apple Keychain + provider env vars | **ROTATE_REQUIRED** - exposta em chat 2026-05-19 |
| ElevenLabs / Eventlabs | `ELEVENLABS_API_KEY`, `EVENTLABS_API_KEY` | 1Password/Apple Keychain + provider env vars | **ROTATE_REQUIRED** - exposta em chat 2026-05-19 |
| Pexels | `PEXELS_API_KEY` | 1Password/Apple Keychain + provider env vars | **ROTATE_REQUIRED** - exposta em chat 2026-05-19 |
| Creatomate | `CREATOMATE_API_KEY` | 1Password/Apple Keychain + provider env vars | **ROTATE_REQUIRED** - exposta em chat 2026-05-19 |
| YourVersion | `YOURVERSION_API_KEY` | 1Password/Apple Keychain + provider env vars | **ROTATE_REQUIRED** - exposta em chat 2026-05-19 |
| Linear | `LINEAR_API_KEY` | 1Password/Apple Keychain + local automation env | **ROTATE_REQUIRED** - exposta em chat 2026-05-19 |
| Railway | `RAILWAY_ACCOUNT_TOKEN`, `RAILWAY_PPT_TOKEN`, `RAILWAY_PIERRONDI_IA_TOKEN`, `RAILWAY_CSDM_TOKEN` | 1Password/Apple Keychain + Railway/GitHub Actions as needed | **ROTATE_REQUIRED** - exposta em chat 2026-05-19 |
| Cantus mobile | test user password | Apple Passwords/1Password; nao Markdown | **ROTATE_REQUIRED** - exposta em chat 2026-05-19 |
| Apple App Store Connect | API key metadata/private key file | Apple Developer Portal + local secure `.p8` path | **VERIFY_AND_ROTATE_IF_PRIVATE_KEY_EXPOSED** |

## Inventario

| Projeto | Env var | Fornecedor | Ambientes | Onde esta o valor real | Escopo | Rotacao | Dono | Status |
|---|---|---|---|---|---|---|---|---|
| _template_ | `OPENAI_API_KEY` | OpenAI | local/staging/prod | 1Password + provider env vars | server-side model calls | trimestral ou incidente | Paulo | planned |
| global-ios | `APP_STORE_CONNECT_ISSUER_ID` | Apple App Store Connect | local/CI/provider env | [[04_Areas/Coding/Checklists/Apple Developer And App Store Connect Inventory]] | identificador nao-secreto para ASC API/TestFlight/upload; private key `.p8` fica fora do vault | n/a salvo troca de conta Apple | Paulo | **ativo** — registrado 2026-05-15 |
| global-ios | `ASC_KEY_ID` / `APP_STORE_CONNECT_KEY_ID` | Apple App Store Connect | local/CI/provider env | [[04_Areas/Coding/Checklists/Apple Developer And App Store Connect Inventory]] | identificador nao-secreto da API key (`T5FXSV5H4W`); `.p8` fica fora do vault | n/a salvo rotacao da API key | Paulo | **ativo** — Admin key criada 2026-05-22 para substit
...[truncated]

## 04_Areas/Marketing/Marketing MOC.md

---
type: moc
area: marketing
tags:
  - marketing
  - creative-os
  - video
  - pierrondi-dev
---
# Marketing MOC

Este e o centro de operacao para criativos, videos curtos, campanhas, legendas, voz, distribuicao social e aprendizado de marketing.

## Pierrondi.dev

- [[04_Areas/Marketing/Pierrondi.dev Creative Video OS]]
- [[04_Areas/Marketing/Creative Forge UGC Video Production OS]]  ← local UGC ad pipeline, M5 Max, ~$0.02/peça
- [[04_Areas/Marketing/Social Video Ad Trends 2026]]  ← hook templates + formats que estão batendo · revalidar a cada 6 semanas
- [[04_Areas/Marketing/ElevenLabs Voice And Subtitle Workflow]]
- [[04_Areas/Marketing/Social Video Platform Specs 2026]]
- [[04_Areas/Marketing/Creative QA Checklist]]
- [[04_Areas/Marketing/Creative Prompt Starters]]
- [[04_Areas/Marketing/Creative Learning Loop]]
- [[04_Areas/Marketing/Marketing Growth Backlog]]
- [[04_Areas/Marketing/Creative Pipeline Secrets Inventory]]

## App Marketing / ASA

- [[04_Areas/Marketing/Soro SEO App Distribution OS]]
- [[04_Areas/Marketing/Soro SEO Automation - Claude Code Runbook]]
- [[04_Areas/Marketing/Soro SEO Automation - Kimi Runbook]]
- [[04_Areas/Marketing/Ready App Campaign Factory Procedure]]
- [[04_Areas/Marketing/Ready Apps Sales Effectiveness Scorecard]]
- [[04_Areas/Marketing/Apple Connect Ready Apps Campaign Matrix]]
- [[04_Areas/Marketing/App Marketing Intelligence OS]]
- [[04_Areas/Marketing/iOS App Paid Growth Execution OS]]
- [[04_Areas/Marketing/Apple Ads ASA Tuning Runbook]]
- [[04_Areas/Marketing/App Marketing Metrics Inventory]]
- [[04_Areas/Marketing/App Marketing Daily Tuning Report]]
- [[04_Areas/Marketing/App Marketing Tuning Backlog]]
- [[04_Areas/Marketing/TikTok Financial Ads Compliance Runbook]]

## Product / Revenue

- [[04_Areas/Product/Product Revenue MOC]]
- [[04_Areas/Product/Nightly Opportunity Engine]]
- [[04_Areas/Product/Nightly Opportunity Report]]

## Projeto

- [[02_Projects/pierrondi-ia]]
- Repo: `/Users/paulopierrondi/Projects/pierrondi-ia`
- Studio: `/studio/videos`, `/studio/creatives`, `/studio/creatives/factory`, `/studio/campaigns`, `/studio/topics`, `/studio/approvals`, `/studio/health`

## Regra

### Regra de ouro — LinkedIn

- **Ate Paulo dizer explicitamente o contrario, LinkedIn e canal exclusivo de ServiceNow.**
- Nao criar, agendar, aprovar, publicar ou sugerir LinkedIn sobre temas genericos de IA, n8n, WhatsApp, freelancing, automacao para PMEs, produto digital, apps consumer, lifestyle ou build-in-public.
- Temas permitidos para LinkedIn: ServiceNow, Now Assist, AI Agents na ServiceNow, CSDM, CMDB, ITSM/ITOM/SPM, Workflow Data Fabric, AI Control Tower, K26, arquitetura de plataforma ServiceNow, demos ServiceNow, Bradesco/FSI quando apropriado.
- Qualquer excecao precisa de confirmacao explicita do Paulo no momento da execucao. Silencio, ambiguidade ou backlog antigo nao autoriza excecao.
- Antes de agendar/publicar LinkedIn, verificar fila futura e bloquear conteudo fora de ServiceNow.

Todo pedido de criativo deve gerar um pacote, nao apenas uma peca:

- brief;
- roteiro;
- voz;
- legendas;
- visual/b-roll;
- versoes por canal;
- copy de publicacao;
- QA;
- aprendizado/metricas.

### Regra de ouro — Video ads para qualquer app

- Todo ad de app, UGC ou nao UGC, deve passar pelo fluxo nativo `Creative Video Factory` do Pierrondi IA Studio antes de geracao, upload ou publicacao.
- Tela canonica: `/studio/creatives/factory`.
- API canonica: `/api/marketing-os/content-factory/creative-video`.
- Engine canonica: `/Users/paulopierrondi/Projects/pierrondi-ia/lib/marketing-os/content-factory/creative-video-factory.ts`.
- O app standalone `creative-video-factory` e os artefatos do `investcoach_ai` sao biblioteca/prototipo historico, nao a fonte de verdade.
- Primeiro perguntar e registrar: canal principal (`TikTok`, `Instagram`, `LinkedIn`, `YouTube`), objetivo, pago/organico, tela real do app, hook dos 2 primeiros segundos e angulo de venda.
- Sempre que possivel, capturar demo real via Xcode/iOS Simulator antes de usar b-roll generico. A prova de produto deve vir antes de UGC, avatar, Veo ou Pexels.
- O pacote minimo por ad group pago e 4 videos: app real/problema, IA/interface, feature proof, trust/compliance.
- Stack premium preferida: demo real do produto + Veo/Gemini para b-roll + ElevenLabs para voz + Pexels como fallback/complemento.
- Para LinkedIn, manter a regra existente: canal exclusivo de ServiceNow salvo excecao explicita do Paulo.

### Regra de ouro — Paid marketing

- Apple Ads / ASA, Meta, TikTok, YouTube, LinkedIn Ads ou qualquer canal pago podem gerar diagnostico e recomendacao diaria.
- Nenhum agente pode pausar, aumentar budget, mudar bid, criar campanha, publicar criativo pago ou alterar target CPA sem aprovacao explicita do Paulo.
- O vault guarda metricas agregadas, decisoes e hipoteses; segredos de API/OAuth ficam fora do vault.
- Para apps financeiros ou IA financeira no TikTok, `TikTok Financial Ads Compliance Runbook` e preflight obrigatorio
...[truncated]

## 04_Areas/Marketing/Pierrondi.dev Creative Video OS.md

---
type: operating-system
area: marketing
project: pierrondi-ia
tags:
  - pierrondi-dev
  - creative-os
  - video
  - social
---
# Pierrondi.dev Creative Video OS

## Objetivo

Criar criativos e videos de marketing de alta qualidade para Pierrondi.dev e produtos do portfolio, com um workflow repetivel para LinkedIn, YouTube Shorts, TikTok, Instagram/Reels e campanhas pagas.

O output bom nao e "um video". E um pacote de campanha com roteiro, voz, legendas, assets, variacoes por canal, QA e aprendizado.

## Regra de ouro — LinkedIn

- **LinkedIn fica 100% restrito a ServiceNow ate Paulo dizer explicitamente o contrario.**
- Nao usar LinkedIn para campanhas genericas de IA, n8n, WhatsApp, automacao para PME, freelancing, produto digital, apps consumer ou build-in-public.
- LinkedIn pode usar apenas: ServiceNow, Now Assist, AI Agents na ServiceNow, CSDM, CMDB, ITSM/ITOM/SPM, Workflow Data Fabric, AI Control Tower, K26, arquitetura/demos ServiceNow e Bradesco/FSI quando fizer sentido.
- Se um roteiro/copy/video nao passa nesse filtro, gerar para outro canal ou deixar como rascunho nao agendado; nunca agendar/publicar em LinkedIn.

## Fonte de verdade no repo

- Repo: `/Users/paulopierrondi/Projects/pierrondi-ia`
- Creative Video Factory: `/Users/paulopierrondi/Projects/pierrondi-ia/docs/marketing-os/creative-video-factory.md`
- Studio: `/studio/creatives/factory`
- API: `/api/marketing-os/content-factory/creative-video`
- Engine: `/Users/paulopierrondi/Projects/pierrondi-ia/lib/marketing-os/content-factory/creative-video-factory.ts`
- Creative engine runbook: `/Users/paulopierrondi/Projects/pierrondi-ia/docs/marketing/creative-engine-test-runbook.md`
- Criativos curados: `/Users/paulopierrondi/Projects/pierrondi-ia/assets/creatives/post-images/`
- Background videos: `/Users/paulopierrondi/Projects/pierrondi-ia/assets/video-backgrounds/`
- API force video: `/api/marketing-os/force-video`
- Preflight: `/api/marketing-os/video/preflight`

## Regra de ouro — Creative Video Factory

- Todo pedido de video para TikTok, Instagram/Reels, YouTube Shorts, LinkedIn, UGC ou app ads deve passar por `/studio/creatives/factory`.
- A API canonica e `/api/marketing-os/content-factory/creative-video`; novos apps e coders devem chamar esse endpoint, nao criar pipelines standalone.
- O standalone `creative-video-factory` e os assets do InvestCoach ficam como biblioteca/prototipo historico.
- Perguntar sempre: canal, objetivo, pago/organico, tela real do app, hook dos 2 primeiros segundos e angulo de venda.
- Para ad group pago, planejar no minimo 4 videos: app real/problema, IA/interface, feature proof e trust/compliance.
- Sempre que possivel, usar Xcode/iOS Simulator para demo real antes de Veo, Pexels, avatar ou stock.
- Stack premium: demo real + Veo/Gemini para b-roll + ElevenLabs para voz + Pexels como fallback/complemento.
- Apps financeiros: vender organizacao, clareza, educacao e controle; nunca oportunidade financeira, lucro, renda extra, retorno, enriquecimento ou compra/venda de ativos.

## Pipeline atual

1. Brief do tema, publico, oferta e canal.
2. Script generator cria hook, corpo, CTA, b-roll keywords e UTMs.
3. Agent council revisa clareza, promessa, risco, canal e qualidade.
4. ElevenLabs gera voz com timestamps.
5. Captions convertem timestamps em palavras e ASS karaoke.
6. Visual usa criativos curados primeiro, background videos depois, Pexels como fallback.
7. Render FFmpeg local gera MP4 1080x1920.
8. Creatomate fica como backend premium opcional.
9. QA valida duracao, audio, legenda, safe zone, black frames, CTA, links e formato.
10. Publicacao fica em draft/review/approval antes de ir para canal externo.
11. Metricas entram no aprendizado para remix.

## Regra de qualidade

- Primeiro frame precisa explicar por que parar o scroll.
- Primeiros 2 segundos precisam ter tese, contraste ou prova.
- O roteiro precisa soar falado, nao escrito.
- Legenda precisa ser legivel sem audio e sem cobrir UI do canal.
- Voz precisa combinar com o canal: LinkedIn mais autoridade, TikTok/Reels mais ritmo, YouTube Shorts mais clareza e retenção.
- B-roll precisa reforcar a ideia; se for generico, melhor usar screen/product proof.
- Cada peca precisa ter um unico CTA.
- Nao publicar sem approval quando houver canal externo.

## Formatos canonicos

- Master vertical: MP4 H.264/AAC, 1080x1920, 30fps, 9:16.
- Feed vertical/crop: 1080x1350, 4:5.
- Square fallback: 1080x1080, 1:1.
- LinkedIn professional cut: 9:16 ou 4:5, com SRT sidecar quando possivel.
- Shorts/TikTok/Reels: 9:16, legendas burned-in, safe zones respeitadas.

## Duracao recomendada por intencao

- Prova rapida: 12-20s.
- Hook + tese + CTA: 20-35s.
- Mini tutorial: 35-60s.
- Story/problem-solution: 45-90s.
- YouTube Shorts longo: ate 3 min quando a historia realmente precisa, mas evitar se houver risco de musica/Content ID.

## Assets primeiro, IA depois

O pipeline deve consultar assets curados antes de gerar asset novo:

- imagem/post: `assets/creatives/post-ima
...[truncated]

## 04_Areas/Marketing/ElevenLabs Voice And Subtitle Workflow.md

---
type: workflow
area: marketing
tags:
  - elevenlabs
  - subtitles
  - captions
  - tts
  - video
---
# ElevenLabs Voice And Subtitle Workflow

## Objetivo

Gerar voz natural e legendas sincronizadas para videos de marketing, sem perder qualidade, acessibilidade ou controle de seguranca.

## Fluxo recomendado

1. Escrever roteiro falado, curto e com pausas naturais.
2. Escolher voz por objetivo: founder, autoridade tecnica, energia social, corporate ou analitica.
3. Gerar TTS no ElevenLabs usando endpoint com timestamps.
4. Salvar audio como asset do render, nunca em Markdown.
5. Converter timestamps por caractere para timings por palavra.
6. Gerar dois tipos de legenda:
   - ASS burned-in karaoke para Shorts/TikTok/Reels.
   - SRT sidecar para YouTube e LinkedIn.
7. Renderizar MP4 1080x1920 com FFmpeg local.
8. Rodar QA de sincronia, legibilidade e safe zone.
9. Registrar no projeto: voice slug, roteiro, caminhos de assets, render ID e aprendizados.

## ElevenLabs no repo

- Adapter: `/Users/paulopierrondi/Projects/pierrondi-ia/lib/marketing-os/voice/elevenlabs.ts`
- Captions: `/Users/paulopierrondi/Projects/pierrondi-ia/lib/marketing-os/video/captions.ts`
- Env vars:
  - `ELEVENLABS_API_KEY`
  - `ELEVENLABS_PAULO_VOICE_ID`
  - `JARVIS_ELEVENLABS_VOICE_ID`
  - `ELEVENLABS_DEFAULT_VOICE_ID`

## Regras de roteiro para voz

- Escrever como fala: frases curtas, sem paragrafo longo.
- Evitar siglas sem explicar na primeira vez.
- Colocar pausa onde o video precisa respirar.
- Nao pedir "voz viral"; pedir emocao operacional: calmo, urgente, professoral, provocativo, executivo, founder-led.
- Para PT-BR: revisar acentos, nomes proprios, pronuncia de siglas e palavras inglesas.
- Para EN: evitar literalismo do portugues; reescrever a ideia.

## Legendas

### Burned-in

Use em TikTok, Reels e Shorts quando a retencao depende de ler sem audio.

- 1 ou 2 linhas.
- Janela curta de 3 a 5 palavras.
- Contraste forte e outline.
- Nao ocupar topo com hooks longos.
- Evitar rodape baixo: UI do TikTok/Reels/Shorts cobre a area inferior.
- Usar highlights com parcimonia: uma palavra ativa por vez e suficiente.

### Sidecar

Use como arquivo separado quando a plataforma aceita closed captions.

- YouTube: SRT e VTT sao formatos aceitos; SRT UTF-8 e o default simples.
- LinkedIn: usar SRT simples; nao depender de cor, fonte ou markup.
- Manter o SRT master junto do render e registrar o path.

## Conversao de timing

ElevenLabs retorna `alignment` e `normalized_alignment` com timestamps por caractere. O pipeline deve:

1. preferir `normalized_alignment` quando texto foi normalizado;
2. agrupar caracteres nao-espaco em palavras;
3. usar inicio do primeiro caractere e fim do ultimo;
4. snapar cortes para limites de palavra;
5. validar que o ultimo timestamp fica perto da duracao real do audio.

## QA de voz

- [ ] Voz nao parece leitura monotona.
- [ ] Nomes proprios e termos tecnicos corretos.
- [ ] Pacing cabe no tempo alvo.
- [ ] Sem respiracao, riso ou tag textual renderizada por acidente.
- [ ] Audio sem clipping.
- [ ] Legenda bate com a fala.
- [ ] CTA falado e visivel.
- [ ] Sem uso de voz clonada sem consentimento.

## Referencias oficiais

- ElevenLabs timestamps API: https://elevenlabs.io/docs/api-reference/text-to-speech/convert-with-timestamps
- YouTube caption file formats: https://support.google.com/youtube/answer/2734698
- LinkedIn video captions specs: https://www.linkedin.com/help/linkedin/answer/a424737

## 04_Areas/Marketing/Social Video Platform Specs 2026.md

---
type: reference
area: marketing
tags:
  - platform-specs
  - video
  - linkedin
  - youtube
  - tiktok
  - instagram
---
# Social Video Platform Specs 2026

Verificado em 2026-05-15 com fontes oficiais. Specs mudam; revalidar antes de campanha paga grande.

## Master recomendado

Use este master sempre que possivel:

- MP4
- H.264 video
- AAC audio
- 1080x1920
- 9:16
- 30fps
- legendas burned-in para short-form
- SRT sidecar para canais que aceitam caption upload

## YouTube Shorts

- Square ou vertical ate 3 minutos e classificado como Shorts.
- Upload via YouTube app ou YouTube Studio.
- Se tiver Content ID claim e durar mais de 1 minuto, pode ser bloqueado globalmente.
- Recomendo: 15-60s para performance; usar 60-180s somente quando a historia precisa.
- Caption: SRT simples ou VTT; manter master SRT.

## TikTok

- Recomendado: vertical 9:16.
- Non-Spark ads suportam 9:16, 16:9 e 1:1; vertical recomendado.
- Minimo vertical oficial: >= 540x960.
- Formatos: MP4, MOV e outros aceitos para ads.
- Tamanho: ate 500 MB para in-feed ads.
- Duração de ads Non-Spark: ate 10 minutos; Spark Ads puxa specs do video organico.
- Direct Post API exige consentimento explicito e clients nao auditados ficam restritos a private mode.
- Recomendo criativo organico/pago: 15-45s, key message dentro de safe zone.

## Instagram / Reels / Meta

- Reels aceitam proporcao entre 1.91:1 e 9:16.
- Minimo oficial: 30 FPS e resolucao minima de 720px.
- Para Reels ads, Meta recomenda criativos 9:16 com audio e key elements em safe zone.
- Recomendo: 1080x1920, 9:16, audio claro, legendas burned-in, CTA visual acima da UI inferior.
- Cover Reels: referencia oficial 420x654.

## LinkedIn

- Video ads: MP4.
- File size: 75 KB a 500 MB.
- Codec: H.264 ou VP8.
- Audio: AAC ou MPEG4.
- Frame rate: menor que 30 FPS segundo spec oficial de ads.
- Captions: SRT, somente texto; nao contar com cor, fonte ou markup.
- Videos menores que 30s podem loopar ate completar 30s de playback.
- Video precisa ser upload direto no LinkedIn, nao link do YouTube/Vimeo.
- Recomendo: 20-45s para founder/proof, 45-90s para tutorial executivo.

## Export matrix

| Canal | Export principal | Legenda | Melhor uso |
|---|---|---|---|
| YouTube Shorts | 1080x1920 MP4 | Burned-in + SRT | prova, tutorial, narrativa |
| TikTok | 1080x1920 MP4 | Burned-in | hook agressivo, trend, discovery |
| Instagram Reels | 1080x1920 MP4 | Burned-in | visual proof, social proof, product story |
| LinkedIn | 1080x1920 ou 1080x1350 MP4 | SRT + opcional burned-in leve | autoridade, case, tese B2B |
| LinkedIn feed image/carousel | 1080x1350 PNG/JPG | texto no card | resumo, framework, prova |

## Safe-zone padrao

- Manter textos e rosto/produto entre y=220 e y=1500 no master 1080x1920.
- Evitar CTA no rodape.
- Nao colocar texto essencial perto de bordas laterais.
- Testar primeiro frame como thumbnail.

## Referencias oficiais

- YouTube Shorts 3 minutos: https://support.google.com/youtube/answer/15424877
- YouTube caption formats: https://support.google.com/youtube/answer/2734698
- TikTok In-Feed Ads specs: https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads
- TikTok Direct Post API: https://developers.tiktok.com/doc/content-posting-api-reference-direct-post
- Instagram Reels size/aspect ratio: https://www.facebook.com/help/1038071743007909
- Meta Reels ads guidance: https://www.facebook.com/business/ads/facebook-instagram-reels-ads
- LinkedIn video ad specs: https://www.linkedin.com/help/linkedin/answer/a424737

## 04_Areas/Marketing/Creative QA Checklist.md

---
type: checklist
area: marketing
tags:
  - qa
  - creative
  - video
  - social
---
# Creative QA Checklist

## Antes de gerar

- [ ] Objetivo claro: awareness, leads, prova, produto, retargeting, authority.
- [ ] Canal primario definido: TikTok, Instagram, LinkedIn ou YouTube.
- [ ] Perguntas obrigatorias respondidas: canal, objetivo, pago/organico, tela real do app, hook e angulo.
- [ ] Produto/oferta e CTA definidos.
- [ ] Publico e dor especificos.
- [ ] Prova ou demo real escolhida; para app iOS, preferir Xcode/iOS Simulator sempre que possivel.
- [ ] Assets obrigatorios listados.
- [ ] Riscos de marca/compliance revisados.
- [ ] Nenhum segredo ou PII em screenshots/assets.
- [ ] Se for app do portfolio, manifest criado no `Creative Video Factory` nativo do Pierrondi IA Studio (`/studio/creatives/factory` ou API `/api/marketing-os/content-factory/creative-video`).
- [ ] Para ad group pago, existem 4 videos planejados/ativos: app real/problema, IA/interface, feature proof e trust/compliance.
- [ ] Se usar Veo/Gemini, ElevenLabs ou Pexels, eles complementam uma prova de produto real; nao substituem demo real quando ela e possivel.

## Script

- [ ] Hook nos primeiros 2 segundos.
- [ ] Uma tese principal, nao tres.
- [ ] Linguagem falada.
- [ ] CTA unico.
- [ ] Duracao estimada bate com o canal.
- [ ] Sem promessa que produto nao entrega.
- [ ] Sem claims de resultado sem prova.
- [ ] Para finanças/TikTok, sem linguagem de oportunidade, lucro, renda extra, retorno, enriquecimento ou compra/venda de ativos.

## Voz

- [ ] Voice slug escolhido.
- [ ] Pacing escolhido: slow, normal ou fast.
- [ ] Pronuncia de nomes e siglas revisada.
- [ ] Audio sem clipping.
- [ ] Voz combina com canal.
- [ ] Voz clonada tem consentimento e uso permitido.

## Legendas

- [ ] Burned-in legivel no celular.
- [ ] SRT gerado quando canal aceita caption upload.
- [ ] Sincronia palavra/fala validada.
- [ ] Texto dentro de safe zone.
- [ ] Sem legenda cobrindo CTA, rosto, produto ou UI importante.

## Visual

- [ ] Usa produto real, screenshot, demo Xcode/iOS Simulator ou b-roll relevante.
- [ ] O primeiro frame prova o produto, o hook ou o problema sem parecer stock generico.
- [ ] Criativos curados foram verificados antes de gerar via IA.
- [ ] Background videos locais foram verificados antes de Pexels.
- [ ] Primeiro frame funciona como thumbnail.
- [ ] Nenhum frame todo preto/branco ou quebrado.
- [ ] Sem stock generico quando a peca precisa provar algo.

## Export

- [ ] MP4 H.264/AAC.
- [ ] 1080x1920 para short-form.
- [ ] 1080x1350 ou 1080x1080 gerado se feed precisar.
- [ ] Duracao dentro do alvo.
- [ ] File size dentro do canal.
- [ ] SRT/VTT salvo quando aplicavel.
- [ ] Caminhos de output registrados.

## Publicacao

- [ ] Approval gate criado quando externo.
- [ ] Copy por canal revisada.
- [ ] Copy digitada na plataforma revisada contra typos antes de submit.
- [ ] UTM correto.
- [ ] Thumbnail/capa validada.
- [ ] Canal/conector pronto.
- [ ] Se TikTok Direct Post ainda nao auditado, tratar como draft/private/native completion.
- [ ] Para TikTok financeiro, [[04_Areas/Marketing/TikTok Financial Ads Compliance Runbook]] concluido.
- [ ] Se conteudo tiver IA, checkbox/rotulo AI-generated marcado e assets correspondentes selecionados.

## Aprendizado

- [ ] Hipotese do criativo registrada.
- [ ] Canal e variacao registrados.
- [ ] Metricas de 24h, 72h e 7d planejadas.
- [ ] O que remixar definido.
- [ ] Aprendizado registrado em [[04_Areas/Marketing/Creative Learning Loop]].

## 04_Areas/Marketing/Creative Prompt Starters.md

---
type: prompt-library
area: marketing
tags:
  - prompts
  - creative
  - video
  - social
---
# Creative Prompt Starters

Use estes prompts com Codex, Claude Code, Kimi, Gemini ou dentro do Studio. Sempre peça pacote completo, nao peca "um post".

## Criativo completo

```text
Use o vault e o repo pierrondi-ia. Leia:
- 04_Areas/Marketing/Pierrondi.dev Creative Video OS.md
- 04_Areas/Marketing/ElevenLabs Voice And Subtitle Workflow.md
- 04_Areas/Marketing/Social Video Platform Specs 2026.md
- 04_Areas/Marketing/Creative QA Checklist.md
- 02_Projects/pierrondi-ia.md
- /Users/paulopierrondi/Projects/pierrondi-ia/docs/marketing-os/video-render-pipeline.md

Crie um pacote de criativo para:
Produto/oferta: <produto>
Canal primario: <linkedin | youtube_shorts | tiktok | instagram_reels>
Canais secundarios: <...>
Publico: <quem>
Dor: <dor>
Prova/demo: <prova>
CTA: <cta>
Idioma: <pt-BR | en>
Duracao alvo: <15s | 30s | 45s | 60s>
Tom: <founder-led, tecnico, provocativo, executivo, tutorial>

Entregue:
1. brief
2. 5 hooks
3. roteiro final falado
4. direcao de voz ElevenLabs
5. legenda/caption plan
6. b-roll/screenshot plan
7. export targets
8. copy por canal
9. checklist de QA
10. aprendizado esperado e metricas para acompanhar

Nao publique. Nao use segredos. Se precisar de API key, cite apenas o nome da env var.
```

## YouTube Shorts

```text
Crie um YouTube Shorts para <tema>. Target 35-60s, 1080x1920, hook em 2s, roteiro falado, CTA unico e SRT sidecar. Use voz founder se fizer sentido. Gere tambem titulo, descricao com UTM, 3 thumbnails textuais e plano de remix caso retenção caia antes de 5s.
```

## TikTok/Reels

```text
Crie uma versao TikTok/Reels para <tema>. Target 15-35s, visual proof antes de explicacao, captions burned-in, safe zone vertical, ritmo mais rapido e linguagem menos corporativa. Entregue 3 aberturas alternativas e uma versao "menos polida, mais nativa".
```

## LinkedIn

Regra obrigatoria: LinkedIn e exclusivo para ServiceNow ate Paulo dizer explicitamente o contrario. Prompts LinkedIn devem tratar de ServiceNow, Now Assist, AI Agents na ServiceNow, CSDM, CMDB, ITSM/ITOM/SPM, Workflow Data Fabric, AI Control Tower, K26, demos/arquitetura ServiceNow ou Bradesco/FSI. Nao gerar LinkedIn para IA generica, n8n, WhatsApp, freelancing, automacao PME, produto digital, apps consumer ou build-in-public.

```text
Crie uma versao LinkedIn para <tema>. Target 30-60s, tom founder/executivo, prova concreta, sem hype. Entregue video script, SRT simples, copy do post, headline, CTA e 3 comentarios de follow-up que Paulo pode postar depois.
```

## Creative remix

```text
Pegue o criativo abaixo e gere 5 remixes mudando apenas um eixo por vez:
1. hook
2. prova
3. visual
4. CTA
5. pacing/voz

Preserve a tese principal. Para cada remix, diga por que pode performar melhor e qual metrica validaria.

Criativo atual:
<colar resumo ou path>
```

## Pedir execucao no repo

```text
No repo /Users/paulopierrondi/Projects/pierrondi-ia, use o pipeline existente de video factory. Antes de mexer, rode/consulte o preflight do video. Gere apenas draft/review, sem publicar automaticamente. Use RENDER_BACKEND=ffmpeg como default e registre output paths, renderId, scriptId, custos, blockers e proximos passos no vault.
```

## Kimi Claw - radar diario de video ads

2026-05-18: prompt operacional criado para tarefa diaria no Kimi Claw as 22:40, com pesquisa avancada de video ads por plataforma, ranking de tendencias, matriz de IA por custo-beneficio, prompts por ferramenta e backlog de criativos. Arquivo: `/Users/paulopierrondi/Documents/Codex/2026-05-18/quero-um-prompt-para-o-kimi-2/kimi-claw-daily-video-ads-intelligence-prompt.md`.

2026-05-19: prompt ampliado para Kimi Claw / Kimi CLI como `Kimi Growth War Room`, cobrindo pesquisa ampla de marketing digital, comunidades, ferramentas/agentes, ASO/ASA, App Store, melhoria de apps por receita, pacotes de campanha, criativos, posts e escrita segura no vault. Arquivo: `/Users/paulopierrondi/Documents/Codex/2026-05-19/me-da-um-super-maximo-prompt/kimi-claw-marketing-growth-superprompt.md`.

## 04_Areas/Marketing/Creative Pipeline Secrets Inventory.md

---
type: secrets-inventory
area: marketing
tags:
  - secrets
  - marketing
  - no-secret-values
---
# Creative Pipeline Secrets Inventory

Esta nota registra apenas nomes e finalidade. Nao registrar valores reais.

## Regra

- Valor real fica em Railway env, GitHub Actions Secrets, provider OAuth ou secret manager.
- Vault registra nome, escopo, ambiente e rotacao.
- Nunca colar API key em prompt, Markdown, screenshot, log ou commit.

## Pierrondi.dev video/creative env vars

| Env var | Uso | Onde o valor real deve ficar | Observacao |
|---|---|---|---|
| `ELEVENLABS_API_KEY` | TTS/voice generation | Railway env + local `.env.local` | Necessaria para voz |
| `ELEVENLABS_PAULO_VOICE_ID` | Voz founder | Railway env + local `.env.local` | Nao e segredo forte, mas tratar como config sensivel |
| `JARVIS_ELEVENLABS_VOICE_ID` | Voz Jarvis | Railway env | Opcional |
| `ELEVENLABS_DEFAULT_VOICE_ID` | Fallback voice | Railway env | Opcional |
| `PEXELS_API_KEY` | B-roll fallback | Railway env | Pode ser dispensada com background local |
| `CREATOMATE_API_KEY` | Render premium opcional | Railway env | Opcional quando `RENDER_BACKEND=ffmpeg` |
| `CREATOMATE_TEMPLATE_DEFAULT_ID` | Template premium | Railway env | Config |
| `VIDEO_STORAGE_ROOT` | Storage de videos | Railway env/volume | Nao e segredo |
| `VIDEO_SIGNING_SECRET` | URLs assinadas de video | Railway env | Segredo |
| `YOUTUBE_CLIENT_ID` | YouTube OAuth | Railway env | Config/OAuth |
| `YOUTUBE_CLIENT_SECRET` | YouTube OAuth | Railway env | Segredo |
| `YOUTUBE_REFRESH_TOKEN` | YouTube upload | Railway env | Segredo critico |
| `TIKTOK_CLIENT_KEY` | TikTok API | Railway env | Config/OAuth |
| `TIKTOK_CLIENT_SECRET` | TikTok API | Railway env | Segredo |
| `TIKTOK_REFRESH_TOKEN` | TikTok API | Railway env | Segredo critico |
| `TIKTOK_ACCESS_TOKEN` | TikTok API | Railway env | Segredo curto |
| `LINKEDIN_CLIENT_ID` | LinkedIn OAuth | Railway env | Config/OAuth |
| `LINKEDIN_CLIENT_SECRET` | LinkedIn OAuth | Railway env | Segredo |
| `LINKEDIN_AUTHOR_URN` | Autor LinkedIn | Railway env | Config |
| `META_APP_ID` | Instagram/Meta OAuth | Railway env | Config/OAuth |
| `META_APP_SECRET` | Instagram/Meta OAuth | Railway env | Segredo |
| `INSTAGRAM_REDIRECT_URI` | Instagram OAuth | Railway env | Config |
| `MARKETING_OS_TOKEN_ENCRYPTION_KEY` | Criptografia de tokens conectados | Railway env | Segredo critico |
| `CRON_SECRET` | Cron/API gated calls | Railway env | Segredo |

## Rotacao

- Rotacionar tokens de OAuth quando houver erro de refresh, troca de app ou suspeita de vazamento.
- Rotacionar `VIDEO_SIGNING_SECRET`, `CRON_SECRET` e encryption key com plano de migracao.
- Sempre atualizar inventario sem escrever o valor real.

## Links

- [[99_System/Security And Secrets Policy]]
- [[04_Areas/Coding/Checklists/Secrets And API Keys Register]]
- [[04_Areas/Coding/Checklists/Railway Secrets Inventory]]

## 99_System/Security And Secrets Policy.md

---
type: policy
tags:
  - security
  - secrets
  - second-brain
---
# Security And Secrets Policy

## Regra principal

O vault e o lugar para memoria, inventario, decisoes e referencias de credenciais. O vault nao guarda segredo real em Markdown.

Modelo canonico: [[99_System/Credential Vault Operating Model]].

## Permitido no vault

- Nome de env var.
- Nome do fornecedor.
- Projeto que usa a chave.
- Ambiente: local, staging, prod.
- Local onde o valor real esta guardado.
- Data de criacao/rotacao.
- Dono/responsavel.
- Escopo/permissao da chave.
- Procedimento de revogacao.

## Proibido no vault

- Valores reais de API keys.
- Tokens de acesso ou refresh tokens.
- Senhas.
- Cookies.
- Private keys.
- Service account JSON.
- Certificados privados.
- Arquivos `.env` completos.
- Screenshots que mostrem credenciais.

## Padrao para projetos

- `.env.local` para desenvolvimento local e fora do Git.
- `.env.example` com nomes e valores falsos.
- Secret manager/provider env vars para producao.
- GitHub Actions Secrets para CI.
- Nunca passar segredo para LLM quando nao for estritamente necessario.

## Regra para coders

- Nao pedir Paulo para colar API key/token em chat quando houver alternativa.
- Consultar [[04_Areas/Coding/Checklists/Secrets And API Keys Register]] e usar a referencia/local de armazenamento.
- Preferir `op://...` + `op run` quando 1Password CLI estiver disponivel.
- Se o secret manager nao estiver configurado, registrar acao humana e bloquear a parte que depende do segredo.

## Quando uma key vaza

1. Revogar imediatamente no fornecedor.
2. Criar nova key com permissao minima.
3. Atualizar secret manager/provider.
4. Rodar testes/deploy necessario.
5. Registrar incidente na nota do projeto sem repetir a key.
6. Procurar e remover vazamento em logs/commits se aplicavel.

Incidente aberto: [[99_System/Secret Exposure Incident - 2026-05-19]].

## Intake local seguro

Quando 1Password CLI ainda nao estiver disponivel, usar `/Users/paulopierrondi/.local/bin/brain-secret-intake` para gravar valores novos/rotacionados no Apple Keychain. O script nao recebe segredo por argumento; ele deixa o proprio Keychain pedir o valor.

Runbook manual no vault: [[99_System/Manual Credential Intake]].

Para importacao em lote, usar arquivo temporario fora do vault:

```bash
/Users/paulopierrondi/.local/bin/brain-secret-intake import /Users/paulopierrondi/.second-brain-secrets.env --delete
```

O arquivo temporario nao deve entrar em Obsidian, Git, Linear, email ou screenshot.

## Links

- [[99_System/Credential Vault Operating Model]]
- [[99_System/Manual Credential Intake]]
- [[99_System/Secret Exposure Incident - 2026-05-19]]
- [[04_Areas/Coding/Checklists/Secrets And API Keys Register]]
- [[04_Areas/Coding/Checklists/Railway Secrets Inventory]]
- [[04_Areas/Coding/Checklists/Security Checklist]]
- [[04_Areas/Coding/Checklists/Project Checklist Hub]]

## Project Note Snapshot

<!-- PROJECT_LOCAL_COUNCIL_NOTE_START -->
## Project Local Council

This project has a local council overlay in `.brain/PROJECT_COUNCIL.md`.

| Local agent | Extends | Default coder |
| --- | --- | --- |
| `local-product-owner` | [[agente_business_owner]] | `kimi` |
| `local-technical-lead` | [[agente_technical_lead]] | `codex` |
| `local-qa-test-agent` | [[agente_test_lead]] | `gemini` |
| `local-release-guardian` | [[agente_release_lead]] | `claude` |
| `local-automation-steward` | [[agente_automation_lead]] | `codex` |
| `local-growth-operator` | [[agente_marketing_evolution]] | `kimi` |
| `local-servicenow-domain-agent` | [[agente_unknown_unknowns]] | `claude` |

Rules:
[REDACTED SECRET LINE]
- Use only the relevant local agents for the task; do not inflate small changes.
- Prompt caching: follow `Prompt Caching Workflow Policy`, use stable prefix plus dynamic suffix, and record `prompt_cache` telemetry when possible.
- Registry id: `csdm3d`.
<!-- PROJECT_LOCAL_COUNCIL_NOTE_END -->

---
type: project
repo_name: "csdm3d"
repo_path: "/Users/paulopierrondi/Projects/csdm3d"
repo_kind: "repo"
branch: "main"
dirty_files: 9
remote: "https://github.com/paulopierrondi/csdm3d.git"
generated_at: "2026-05-22 18:26:21"
tags:
  - project
  - git
---
# csdm3d

## Estado rapido

- Path: `/Users/paulopierrondi/Projects/csdm3d`
- Tipo: `node`
- Repo kind: `repo`
- Branch: `main`
- Arquivos alterados agora: `9`
- Ultimo commit: `9f0c21f 2026-04-26 feat: Vercel-style dashboard shell — bento grid, tabs, activity feed`
- Remote: `https://github.com/paulopierrondi/csdm3d.git`
- Marcadores encontrados: `package.json, README.md, CLAUDE.md, AGENTS.md, GEMINI.md`

## Links do vault

- Indice de projetos: [[02_Projects/Projects Index]]
- Mapa de projetos: [[07_MOCs/Projects MOC]]
- Historico AI deste projeto: [[03_AI-Chats/Projects/csdm3d - AI History]]
- Mapa de agentes: [[07_MOCs/AI Agents MOC]]
- Politica dos agentes: [[99_System/AI Agent Vault Policy]]
- Linear/Git tracking: [[04_Areas/Coding/Linear/Linear Git Development Tracking OS]]
- Linear project map: [[04_Areas/Coding/Linear/Linear Project Map]]

## Contexto importado do README

# CSDM3D

CSDM3D is a public ServiceNow CMDB/CSDM5 maturity demo application.

It helps architects, TAEs, consultants, and platform teams turn CSDM5 maturity into a visual conversation:

- Login-style protected workspace
- ServiceNow instance connection
- Lightweight CSDM5 domain analysis
- 3D-style maturity map
- AI-ready insights and dashboard
- JSON report export

![CSDM3D universe](public/csdm3d-assets/03-csdm3d-universe.png)

Launch media:

- [Demo video MP4](public/csdm3d-assets/csdm3d-demo.mp4)
- [Login screenshot](public/csdm3d-assets/01-login.png)
- [Workspace overview](public/csdm3d-assets/02-workspace-overview.png)
- [Dashboard screenshot](public/csdm3d-assets/03-dashboard-insights.png)

## Positioning

CSDM3D does not replace ServiceNow CMDB, Discovery, Service Mapping, Now Assist, or governance workflows.

It complements the platform by making maturity easier to see, explain
...[truncated]

## Decisoes e estado vivo

- Use esta nota para manter o estado atual do projeto, decisoes abertas, comandos canonicos e riscos.
- As sessoes locais de Codex, Claude Code, Kimi e Gemini foram indexadas no vault quando estavam disponiveis em disco.

<!-- PRODUCT_COUNCIL_PROJECT_START -->
## Product Council

Este projeto e coberto pelo Hub de Agentes e deve acionar o Product Council em todo trabalho de coder.

| Papel | Agente | Status |
| --- | --- | --- |
| Business Owner | [[agente_business_owner]] | ativo |
| Technical Lead | [[agente_technical_lead]] | ativo |
| Automation Lead | [[agente_automation_lead]] | ativo |
| Test Lead | [[agente_test_lead]] | ativo |
| Product User | [[agente_product_user]] | ativo |
| Release Lead | [[agente_release_lead]] | ativo |
| Delivery Lead | [[agente_delivery_lead]] | ativo |

**Start gate:** `/Users/paulopierrondi/agents-hub/scripts/project-council-touchpoint.py --project-id "csdm3d" --phase start`

**Finish gate:** `/Users/paulopierrondi/agents-hub/scripts/project-council-touchpoint.py --project-id "csdm3d" --phase finish --summary "<resumo>"`

**Reports:** [[Hub_Agentes/03_Outputs/council_reviews/2026-05-20-product-council-report]]
<!-- PRODUCT_COUNCIL_PROJECT_END -->

## AI History Snapshot

---
type: project-ai-history
project: "csdm3d"
status: generated
generated_at: "2026-05-22 18:26:21"
tags:
  - ai-history
  - project-history
  - generated
---
# csdm3d - AI History

Projeto: [[02_Projects/csdm3d|csdm3d]]

- Path: `/Users/paulopierrondi/Projects/csdm3d`
- Codex relacionado: `0`
- Claude Code relacionado: `1`
- Kimi relacionado: `0`
- Claude-Mem observations relacionadas: `11`
- Claude-Mem summaries relacionados: `1`

## Codex

_Nenhuma sessao Codex relacionada encontrada._

## Claude Code

| Atualizado | Titulo | Primeiro pedido | Fonte |
| --- | --- | --- | --- |
| 2026-05-04T12:12:56.979Z | me diz o ultimo post e video criados aqui para eu mandar para o pierrondi ia | me diz o ultimo post e video criados aqui para eu mandar para o pierrondi ia | /Users/paulopierrondi/.claude/projects/-Users-paulopierrondi-Downloads-csdm3d/a3d767ad-9fe5-48c2-bd31-c101065fb6e9.jsonl |

## Kimi

_Nenhuma sessao Kimi relacionada encontrada._

## Claude-Mem

| Criado | Tipo | Titulo | Resumo |
| --- | --- | --- | --- |
| 2026-05-16T01:40:42.761Z | change | csdm3d Demo Background Video Re-enabled After Brazil Campaign Render | ["File 01-csdm3d-demo.mp4 was renamed to 01-csdm3d-demo.mp4.disabled-for-muse-br during the Brazil TikTok campaign render to exclude it from Pexels background selection.","File restored to original name at ...[truncated] |
| 2026-05-15T16:34:09.938Z | feature | K26 Posts 2–4 Renders Triggered in Parallel — Post 2 (csdm3d) Completed | ["Post 2 (csdm3d) background task: bk0ov66dr — COMPLETED.","Post 3 (now_assist_ops) background task: bolscwb4s — in progress.","Post 4 (fluent) background task: b9kxjv1qa — in progress.","csdm3d scriptId: 6 ...[truncated] |
| 2026-05-15T16:32:30.939Z | change | K26 Video Assets Cleaned — Now Assist MP4s Removed, Single csdm3d Demo Kept | ["Deleted: assets/video-backgrounds/01-now-assist-demo-live-proof.mp4 (personal Mac UI leaking, low polish).","Deleted: assets/video-backgrounds/02-major-incident-walkthrough.mp4.","Renamed: 03-csdm3d-demo. ...[truncated] |
| 2026-05-04T12:53:06.838Z | decision | pierrondi-ia Content Ingestion API — Payload Generation Rules and Endpoint Routing | ["Two intake endpoints exist: POST /api/marketing-os/intake/posts (single post or X thread) and POST /api/marketing-os/intake/series (N independent posts).","Routing logic: \"1 post\" or \"post sobre X\" → ...[truncated] |
| 2026-05-04T12:19:14.179Z | feature | CSDM3D Pierrondi IA Launch Brief — Complete Copy-Paste Package Created | ["File created at /Users/paulopierrondi/Projects/csdm3d/docs/pierrondi-ia-brief.md as a single-file launch package.","Section 1 maps all asset paths: csdm3d-demo.mp4, csdm3d-demo.webm, 01-login.png, 02-wor ...[truncated] |
| 2026-05-04T12:18:29.627Z | discovery | CSDM3D Launch Plan — LinkedIn Content Package and Positioning Strategy | ["CSDM3D is positioned as a community-built visualization and maturity accelerator for ServiceNow professionals, not a replacement for ServiceNow tooling.","Approved language includes \"built with ServiceNo ...[truncated] |
| 2026-04-25T17:22:30.170Z | feature | csdm3d-public Upgrading to Full Three.js 3D Map (React Three Fiber) | ["Primary session read the full CSDMMap3DInteractive.tsx architecture from csdm-validator as reference for the upgrade","csdm-validator 3D map uses: @react-three/fiber@^9.5.0, @react-three/drei@^10.7.7, thr ...[truncated] |
| 2026-04-25T17:19:38.405Z | feature | csdm3d Public GitHub Repository Launched | ["GitHub repo paulopierrondi/csdm3d created as PUBLIC with commit 4a1ba55 \"feat: launch CSDM3D public demo\"","17 files changed, 1077 insertions — includes LICENSE, README.md, docs/, public/csdm3d-assets/, ...[truncated] |
| 2026-04-25T16:46:26.971Z | feature | Csdm3DVisualMap: pure CSS pseudo-3D maturity visualization added to csdm3d page | ["Dynamic import of CSDMMap3D (Three.js/WebGL) removed from csdm3d/page.tsx entirely","New inline function component Csdm3DVisualMap added — zero WebGL, no dynamic import, pure CSS + Tailwind","Visual uses ...[truncated] |
| 2026-04-25T16:45:52.547Z | refactor | csdm3d page.tsx: CSDMMap3DInteractive replaced with CSDMMap3D | ["Dynamic import in csdm3d/page.tsx changed from CSDMMap3DInteractive to CSDMMap3D component","buildTableStats function (50+ lines) removed from page.tsx, along with RULE_TABLE_MAP constant and TableStat im ...[truncated] |
[REDACTED SECRET LINE]
