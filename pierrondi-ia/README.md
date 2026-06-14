# Pierrondi-IA — Campaign Brief

This directory is the **execution contract** for the Pierrondi-IA publisher
agent. Read it once, then iterate `queue.json`.

## What you are doing

Publishing the CSDM3D launch campaign — 6 posts on X plus 1 LinkedIn mirror,
spanning 7 days, in the voice of Paulo Pierrondi. You are not writing
copy. The copy is final. Your job is **scheduling, posting, monitoring and
replying**.

## Files

- `queue.json` — the schedule. Authoritative. Iterate `posts[]`.
- `README.md` — this file.

## Before you start (one-time setup)

1. **Resolve `${DEMO_URL}`.** The queue uses `${DEMO_URL}` as a placeholder.
   Replace it with the deployed demo URL of the CSDM3D Next.js app
   (e.g. `https://csdm3d.vercel.app`) before publishing any post that
   references it. Do this in memory; do not commit a hardcoded URL.

2. **Confirm asset access.** All `media[].url` entries point at
   `github.com/paulopierrondi/csdm3d/raw/main/...`. Fetch each one once
   to confirm 200 OK before scheduling. If any 404s, fall back to the
   local `media[].path` mounted from a clone of the repo.

3. **Verify timezone.** `scheduled_at_local` is in `America/Sao_Paulo`
   (UTC-3, no DST in 2026). Convert to whatever your scheduling backend
   wants.

## Execution loop

For each post in `posts[]` ordered by `scheduled_at_local`:

1. **Wait** until `scheduled_at_local` in `timezone`.
2. **Build the payload** for `channel`:
   - `x` + `type: single` → standard tweet with `body` + `media[]`.
   - `x` + `type: quote_tweet` → quote of `quotes_post_id` + `body`.
   - `x` + `type: thread` → publish `tweets[0]` as the root, then post
     each subsequent tweet as a reply to the previous one. Attach `media[]`
     only to the tweets that declare it.
   - `linkedin` + `type: single` → standard LinkedIn post with `body` +
     attached `media[0]`.
3. **Substitute** `${DEMO_URL}` in `body` if present.
4. **Post**. Use the platform-native scheduler if delivering ahead of
   time; do not reorder posts.
5. **Run** any `post_actions[]` entries:
   - `pin_to_profile_until_campaign_ends` → pin the post on the
     publisher profile, schedule unpin for 2026-05-10T23:59 BRT.
   - `enable_reply_monitoring_for_screenshots` → from this post forward,
     watch for replies that include an image and apply the
     `user_shares_screenshot_of_their_result` reply policy.

## Voice rules (non-negotiable)

`voice.forbidden_words` are banned in **all** posts and replies. If a
suggested reply contains any of them, regenerate.

Do not paraphrase the bodies. Do not add hashtags to X posts (LinkedIn
mirror has its own). Do not add emoji beyond what is already in the body.

## Kill switch

Four hours after `post-1-hero` goes live, check its impressions:

- If impressions ≥ `kill_switch.threshold` (1000) → continue normal flow.
- If impressions < threshold → **republish** post-1-hero the next day at
  09:00 BRT, **but** rewrite the first line of the body to
  `kill_switch.alt_hook_first_line`. Keep the rest of the body identical.
  Do not re-pin the new post; pinning stays on the original.

Apply this only once per campaign.

## Reply policy

Watch replies and DMs on every published post for 7 days. Use
`reply_policy[]` to decide when to engage:

- **technical_question** → diagnostic reply ≤ 280 chars using a
  ServiceNow table name as the anchor term.
- **commercial_question** → polite redirect to `${DEMO_URL}`.
- **user_shares_screenshot_of_their_result** → up to 4 lines of
  diagnosis. Use only what is visible in the screenshot. Required
  vocabulary: stage, blocker, missing anchor table.
- **request_for_credit_or_attribution** → use the boilerplate.

Skip replies that are spam, off-topic, or hostile. Do not engage with
trolls.

## Metrics

`metrics_targets` lists the goals per post. Report progress to the
human operator at:

- 4 hours after post-1-hero (kill switch decision)
- 24 hours after post-1-hero (impressions, reposts)
- 24 hours after post-3-thread (link CTR, completion)
- End of campaign (post-6-cta replies)

## When to escalate to the human

Escalate (do not auto-act) if:

- Asset URL returns non-200.
- A scheduled post is rejected by the platform.
- A reply requires a number, claim, or KPI that is **not** visible in
  the user's screenshot.
- Anyone alleges security issues with the demo.

Otherwise, run the loop.

## Demo data context

The demo shown in the video is **Northwind Bank** — a fictitious
mid-size retail bank, ~5k employees. The CMDB story it tells:

- Foundational baseline solid (47k CIs, 142k cmdb_rel_ci, 3:1 ratio).
- APM never deployed (cmdb_application_product_model unreachable).
- Service Mapping ran lightly (cmdb_ci_service_auto = 14 records).
- Business service portfolio thin (12 entries) and sn_consumer missing.

If you have to discuss specifics in a reply, refer to *that* shape —
not invented numbers.
