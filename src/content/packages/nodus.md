---
name: Nodus
repo: nodus-rs/nodus
summary: The core Nodus package itself, useful for bootstrapping Nodus usage inside a repo.
featured: true
tags:
  - starter
  - package-manager
  - bootstrap
adapters:
  - codex
  - claude
  - opencode
components:
  - skills
  - rules
maintainer: nodus-rs
latestVersion: v0.5.2
homepage: https://github.com/nodus-rs/nodus
---

`nodus-rs/nodus` is the default starting point when you want the agent inside a repository
to learn how to use Nodus itself.

```bash
nodus add nodus-rs/nodus --adapter codex
```

Good fit for:

- new repos adopting Nodus for the first time
- teams that want built-in instructions and rules around Nodus usage
- bootstrapping docs, package authoring, and troubleshooting guidance
