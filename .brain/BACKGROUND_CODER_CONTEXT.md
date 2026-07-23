# Background Coder Context — csdm3d

Registry generated at: `2026-07-22T17:20:00+00:00`

## Project

- Registry id: `csdm3d`
- Name: `csdm3d`
- Path: `/Users/paulopierrondi/Projects/csdm3d`
- Obsidian note: `02_Projects/csdm3d`
- Linear hint: `Needs Linear project mapping`
- Branch at registry snapshot: `main`
- Dirty at registry snapshot: `16`
- Ahead/behind at registry snapshot: `+0/-0`
- Last commit: `8bf66b1 2026-06-03 wip: auto-commit 2026-06-03`

## Current Operating Model

Cursor Background Agent is dormant. Do not route work to Cursor unless Paulo explicitly asks.

Canonical runtime enforcement:
`/Users/paulopierrondi/agents-hub/configs/CODER_RUNTIME_ENFORCEMENT.md`

Use current coders:

| Need | Coder | Rule |
| --- | --- | --- |
| Broad scan, triage, report, backlog | Kimi CLI | cheap/read-only/report-first |
| Prototype, scaffold, dashboard/static tool, isolated code draft | Grok | paid second opinion and isolated draft; Codex review/integration required before important repo changes |
| Patch, test, integration, local verification | Codex | default executor |
| Architecture, hard bug, compliance, App Store/release risk | Claude Code | senior specialist |
| Independent validation, MCP checks, terminal utility work, browser/artifact review | Google Antigravity / AGY | default validation surface; read `AGENTS.md` and `GEMINI.md`; use explicit project folder access for vault or rely on `.brain` snapshots |
| Visible in-page browser action execution | PageAgent MCP local | optional task-scoped browser action layer; run `/Users/paulopierrondi/.local/bin/page-agent-mcp-local`; requires Chrome extension/session; local Ollama default; n8n queue-only; never for secrets/login bypass/production mutation without explicit gate |
| Gemini-specific validation fallback | Gemini CLI | explicit fallback only when Paulo or the task requires Gemini |
| ZCode desktop/mobile/SSH | ZCode Agent | reads global + workspace-root `AGENTS.md`; must run the universal bootstrap; mobile inherits desktop runtime; prompt-only enforcement remains advisory |

## Cost Control

- Do not start extra agents without clear owner, task, artifact and stop condition.
- Do not duplicate the same scope across Codex, Claude, Kimi, Grok, GLM, Antigravity and explicit Gemini fallback.
- Complex independent work should run in parallel with one coordinator and one final consolidated output.
- Canonical caps: global 6 soft / 16 hard; writers 2 soft / 3 hard; 1 writer per repo; premium 2 hard; Kimi Swarm research 8 soft / 16 hard.
- Use Kimi for broad research volume, Grok for paid second opinion and isolated drafts, GLM for bounded advisory, Codex for implementation, Claude for complex/high-risk work, Antigravity/AGY for browser/artifact review, and Gemini only as explicit fallback.
- Stop before secrets, deploy, App Store/TestFlight, paid ads, production migrations, social publishing, force push or multi-repo mutation.

## Autonomous Intake

- Treat broad Paulo requests ("olha tudo", "melhore", "resolva", "evolua diariamente", "nao me pergunte o obvio") as a bounded safe improvement loop.
- Resolve project/surface from `cwd`, registry, Linear, Vault, Slack mission, handoffs and AI history before asking.
- Apply the smallest reversible improvement that is inside scope; separate gated actions as proposals.
- `accepted`, `started`, heartbeat and empty handoff are visibility only. Done requires artifact, validation, patch, Linear ref, cited live source or blocker with next action.
- For `project-id=unknown` or `report_only`, avoid generic rosters. Use a minimal coordinator and only task-fit agents with artifact and stop condition.

## Prompt Caching

- Follow `/Users/paulopierrondi/Documents/Obsidian Vault/99_System/Prompt Caching Workflow Policy.md`.
- Stable prefix first: Hub enforcement, project context, gates, checklists, output schema.
- Dynamic delta last: current task, date, live status, diffs, logs, search results.
- Never cache secrets, `.env`, private keys, cookies or `ROTATE_REQUIRED` values.
- Report strategy, prefix version, nonsecret key/tag and cached token telemetry when available.

## Slack Agent Comms

- Every coder/agent must register a Slack/outbox event when starting, accepting, working, speaking, creating output, delegating, blocking, failing, requesting Paulo approval or finishing work.
- Canonical command: `brain-env-run -- agent-slack-bridge event --agent-id "<agent_id>" --event-type "<started|accepted|in_progress|said|created_output|handoff_created|blocked|failed|finished|needs_paulo_approval>" --project-id "csdm3d" --summary "<redacted summary>"`
- If Slack transport is not configured, `/Users/paulopierrondi/.brain/slack-queue/` satisfies the rule until the real webhook/bot is available.
- Slack is visibility only; handoff/session journal/Obsidian/Linear remain canonical.

## Runtime Enforcement

- Coders/subagents that can edit or run mutating commands use Agent Hub
  preflight with `workspace_write`.
- Report-only research may use `report_only`.
- Kimi Desktop / Kimi Code `coder` subagents must receive this context
  explicitly in their worker prompts; subagents do not inherit main-agent
  instructions.
- Grok and GLM receive the canonical `AGENTS.md` context and remain report-only unless a scoped writer assignment is explicit.

## Handoff Contract

Every background coder must report:

- What changed or found.
- Files touched or reviewed.
- Commands/tests run.
- Confidence and residual risk.
- Exact next action.
- Whether Obsidian/Linear needs updating.
- Prompt cache strategy and telemetry or reason unavailable.
