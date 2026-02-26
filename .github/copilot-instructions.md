---
applyTo: "**"
---
# CulvertCalc — Culvert Hydraulics (FHWA HDS-5)

## Domain
- Culvert sizing and analysis per FHWA Hydraulic Design Series No. 5 (public domain)
- Inlet control: unsubmerged and submerged flow regimes
- Outlet control: full flow friction + entrance/exit losses
- HW-Q rating curve generation
- Shapes: circular, rectangular, elliptical

## Key Equations (FHWA HDS-5 — public domain)
- Inlet control unsubmerged: `HW/D = Hc/D + K(Q/AD^0.5)^M + KsS`
- Inlet control submerged: `HW/D = c(Q/AD^0.5)^2 + Y + KsS`
- Outlet control: `HW = H + ho - LS` where `H = (Ke + 19.63n²L/R^1.33 + 1)V²/2g`
- Manning's: `V = (1.49/n) × R^(2/3) × S^(1/2)`

## Reference Data
- Inlet coefficients K, M, c, Y by shape × inlet type (HDS-5 charts)
- Manning's n by pipe material (concrete, CMP, HDPE, PVC)
- Entrance loss coefficients Ke by inlet configuration

## Validation Sources
- FHWA HDS-5 worked examples (public domain publication)
- HY-8 output comparison



# Code Implementation Flow

<important>Mandatory Development Loop (non-negotiable)</important>

## Git Workflow
- **Work directly on master** — solo developer, no branch overhead
- **Commit after every completed unit of work** — never leave working code uncommitted
- **Push after each work session** — remote backup is non-negotiable
- **Tag milestones**: `git tag v0.1.0-mvp` when deploying or reaching a checkpoint
- **Branch only for risky experiments** you might discard — delete after merge or abandon

## Preparation & Definitions
- Use Typescript as default language, unless told otherwise
- Work using TDD with red/green flow ALWAYS
- If its a webapp: Add always Playwright E2E tests
- Separate domain logic from CLI/UI/WebAPI, unless told otherwise
- Every UI/WebAPI feature should have parity with a CLI way of testing that feature

## Validation
After completing any feature:
- Run all new unit tests, validate coverage is over 90%
- Use cli to test new feature
- If its a UI impacting feature: run all e2e tests
- If its a UI impacting feature: do a visual validation using Playwright MCP, take screenshots as you tests and review the screenshots to verify visually all e2e flows and the new feature. <important>If Playwright MCP is not available stop and let the user know</important>

If any of the validations step fail, fix the underlying issue.

## Finishing
- Update documentation for the project based on changes
- <important>Always commit after you finish your work with a message that explain both what is done, the context and a trail of the though process you made </important>


# Deployment

- git push master branch will trigger CI/CD in Github
- CI/CD in Github will run tests, if they pass it will be deployed to Vercel https://culvertflow.vercel.app/
- Umami analytics and Feedback form with Supabase database