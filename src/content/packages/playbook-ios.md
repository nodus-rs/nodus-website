---
name: Playbook iOS
repo: wenext-limited/playbook-ios
summary: Example package for teams shipping iOS-focused agent tooling and playbooks.
featured: true
tags:
  - mobile
  - ios
  - playbook
adapters:
  - codex
  - claude
  - copilot
components:
  - skills
  - agents
maintainer: wenext-limited
latestVersion: v0.6.0
homepage: https://github.com/wenext-limited/playbook-ios
---

Playbook iOS appears in the example manifest as a tag-pinned GitHub dependency.

```toml
[dependencies]
playbook_ios = { github = "wenext-limited/playbook-ios", tag = "v0.6.0" }
```

This is the kind of package the discovery site should make easier to find before a user has
to inspect raw repositories manually.
