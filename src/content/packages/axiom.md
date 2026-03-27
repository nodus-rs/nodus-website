---
name: Axiom
repo: CharlesWiltgen/Axiom
summary: Example third-party package consumed from GitHub and pinned with a semver range.
featured: true
tags:
  - third-party
  - example
  - semver
adapters:
  - codex
  - claude
components:
  - skills
  - rules
maintainer: CharlesWiltgen
latestVersion: ^2.34.0
homepage: https://github.com/CharlesWiltgen/Axiom
---

Axiom is shown throughout the Nodus examples as a realistic external dependency that can be
declared with a semver range instead of one fixed tag.

```toml
[dependencies]
axiom = { github = "CharlesWiltgen/Axiom", version = "^2.34.0" }
```
