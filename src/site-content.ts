import type { Locale } from "./i18n/locales";

export const siteContent = {
  en: {
    layout: {
      skipLink: "Skip to content",
      home: "Home",
      docs: "Docs",
      addPackage: "Add Package",
      install: "Install",
      github: "GitHub",
      footerDescription: "Package manager for repo-scoped agent tooling.",
      theme: "Theme",
      language: "Language",
      themeOptions: {
        system: "System",
        light: "Light",
        dark: "Dark"
      }
    },
    docsNav: {
      overview: "Overview",
      gettingStarted: "Getting started",
      install: "Install",
      packageDiscovery: "Add package from link"
    },
    home: {
      title: "Nodus | Add agent packages to your repo with one command",
      description:
        "Nodus pins repo-scoped agent packages and writes only the runtime files your enabled adapters actually use.",
      heroTitle: "Blazing-fast installs. Exact repo output.",
      heroDescription:
        "Nodus pins package revisions and writes only the runtime files your adapters actually read.",
      installPlatformLabel: "Install command platform",
      installTabs: {
        unix: "macOS / Linux",
        windows: "PowerShell",
        cargo: "Cargo",
        homebrew: "Homebrew"
      },
      latestVersionLabel: "Latest",
      installCommandAria: "Copy install command",
      installCopyLabels: {
        default: "Copy",
        copied: "Copied",
        failed: "Copy failed"
      },
      featuresTitle: "Discover packages fast. Keep repo output exact.",
      featuresIntro:
        "Built for teams that want a clean install path and predictable repo state.",
      featureCards: [
        {
          title: "Start from a Git repo",
          description: "Discover packages from GitHub shorthand, repo URLs, or full Git remotes."
        },
        {
          title: "Use one stable install command",
          description: "Share a public install URL for shell and PowerShell without rewriting docs."
        },
        {
          title: "Write only what tools read",
          description:
            "Generate adapter-specific runtime files instead of scattering config across the repo."
        }
      ],
      workflowTitle: "Turn a package source into a runnable command.",
      workflowIntro: "Paste a source, copy the command, and keep moving.",
      commandCardTitle: "Paste a repo link. Get the command.",
      commandCardDescription:
        "Turn a package URL into the exact `nodus add` command.",
      exampleCommandLabel: "Example command",
      howItWorks: "How it works",
      generateCommand: "Generate command",
      docsCardTitle: "Install details and docs stay one click away.",
      docsCardDescription:
        "Use the install page for pinned versions and the docs for the full workflow.",
      docsLinks: [
        { path: "/docs/", code: "/docs/", label: "Overview and command flow" },
        { path: "/install/", code: "/install/", label: "Stable install URLs and pinning" },
        {
          path: "/packages/",
          code: "/packages/",
          label: "Normalize a source into a runnable command"
        }
      ]
    },
    installPage: {
      title: "Install Nodus",
      description: "Install Nodus from a stable public URL, Cargo, or Homebrew.",
      heroTitle: "Install Nodus from a stable public URL.",
      heroDescription:
        "Use the public installer URLs on this domain, or install with Cargo or Homebrew. Release assets still come from GitHub Releases, but the command you paste into docs stays stable.",
      routesTitle: "Choose the install route that matches your workflow.",
      routesIntro:
        "The public installer is the default. Cargo and Homebrew are there when teams already standardize on them.",
      cards: {
        unix: {
          title: "macOS and Linux",
          description: "Fetches the right release for the current OS and architecture."
        },
        windows: {
          title: "Windows PowerShell",
          description: "PowerShell 7+ is the cleanest path, but Windows PowerShell also works."
        },
        cargo: {
          title: "crates.io",
          description: "Install from crates.io if you want Cargo to manage the binary."
        },
        homebrew: {
          title: "Homebrew",
          description: "Installs the published release build through Homebrew."
        }
      },
      pinningTitle: "Lock the release when you need exact reproducibility.",
      pinningIntro:
        "Use a version pin for CI, release validation, or any environment that should not move implicitly.",
      pinVersionTitle: "Pin a version",
      pinVersionDescription:
        "The installer supports a pinned version through `NODUS_VERSION` on Unix and PowerShell.",
      checksumTitle: "Checksum verification",
      checksumDescription:
        "The Unix installer supports inline verification. On Windows, download the script to a temporary path and invoke it with `-Verify`.",
      inspectTitle: "Inspect the endpoint before you hand it to a team.",
      inspectIntro:
        "The installer stays curl- and PowerShell-friendly while still exposing the raw routes and the install behavior.",
      installerBehaviorTitle: "What the public installer does",
      installerBehaviorDescription:
        "It detects the host platform, resolves the release tag, downloads the matching archive, optionally verifies the checksum, and installs the binary into a standard user-scoped path.",
      rawEndpointsTitle: "Raw installer endpoints",
      rawEndpointsDescription:
        "These routes are published as plain text and are intended to be curl- and PowerShell-friendly."
    },
    packagesPage: {
      title: "Add a package with Nodus",
      description: "Normalize a package source into the exact nodus add command you should run.",
      heroTitle: "Paste a package source. Get the command.",
      heroDescription:
        "Use GitHub shorthand, a repo URL, a full Git URL, or a local path. Nodus can also pin a tag, branch, version, or revision and narrow the install to specific components.",
      builderTitle: "Generate a real `nodus add` command.",
      builderDescription:
        "Start with the package source, then add pinning, adapters, components, or install behavior only when you need them.",
      packageSourceLabel: "Package source",
      packageSourcePlaceholder:
        "nodus-rs/nodus, ./vendor/playbook, or https://github.com/nodus-rs/nodus",
      packageSourceNote:
        "GitHub links normalize to `owner/repo`. Local paths and generic Git URLs stay unchanged.",
      pinningTitle: "Pinning",
      pinningDescription: "Leave this empty to use the latest tag or the default branch fallback.",
      gitRefLabel: "Git ref (optional)",
      gitRefOptions: {
        default: "Latest tag / default branch",
        tag: "Tag",
        branch: "Branch",
        version: "Version range",
        revision: "Revision"
      },
      refValueLabel: "Ref value",
      refValuePlaceholder: "v1.2.3, main, ^1.2.0, or a commit SHA",
      adaptersTitle: "Adapters",
      adaptersDescription: "Add one or more adapters only when repo auto-detection is not enough.",
      adaptersLegend: "Adapters (optional)",
      componentsTitle: "Components",
      componentsDescription:
        "Narrow the install only if you want part of a package instead of the whole package.",
      componentsLegend: "Components (optional)",
      scopeTitle: "Scope and behavior",
      scopeDescription:
        "Switch between project and global installs, record dev-only dependencies, or preview changes first.",
      installOptionsLegend: "Install options",
      installOptions: {
        global: "global",
        dev: "dev dependency",
        syncOnLaunch: "sync on launch",
        dryRun: "dry run"
      },
      previewTitle: "Command preview",
      previewIdle: "Enter a package source to build a command.",
      copyLabels: {
        default: "Copy",
        copied: "Copied",
        failed: "Copy failed"
      },
      supportedSourcesTitle: "Supported source shapes",
      supportedSources: [
        { code: "nodus-rs/nodus", label: "GitHub shorthand" },
        { code: "https://github.com/nodus-rs/nodus", label: "GitHub repo URL" },
        { code: "git@github.com:nodus-rs/nodus.git", label: "GitHub SSH URL" },
        { code: "https://git.example.com/team/playbook.git", label: "Generic Git URL" },
        { code: "./vendor/playbook", label: "Local package path" }
      ],
      pinningFlagsTitle: "Common pinning flags",
      pinningFlags: [
        { code: "--tag v1.2.3", label: "Pin a specific release tag" },
        { code: "--branch main", label: "Track a branch head" },
        { code: "--version ^1.2.0", label: "Select the highest matching semver tag" },
        { code: "--revision 0123456789abcdef", label: "Lock to an exact commit" }
      ],
      exactShapeTitle: "Build the exact install shape you need.",
      exactShapeIntro:
        "The CLI supports more than a bare source. The page should expose the options people actually use without collapsing everything into dense controls.",
      shapeCards: [
        {
          title: "Pin a release or development ref",
          description:
            "Use `--tag`, `--branch`, `--version`, or `--revision` when the default latest-tag behavior is not what you want."
        },
        {
          title: "Narrow to specific package components",
          description:
            "Repeat `--component` to install only `skills`, `agents`, `rules`, or `commands`."
        },
        {
          title: "Switch scope or preview the result",
          description:
            "Use `--global`, `--dev`, `--sync-on-launch`, and `--dry-run` to match the exact install workflow you need."
        }
      ],
      messages: {
        invalidSource:
          "Enter a local path, GitHub repo URL, owner/repo shorthand, or a full Git URL.",
        refValuePrefix: "Enter a value for",
        refValueSuffix: ".",
        invalidFlagCombo:
          "`nodus add --global` does not support `--sync-on-launch`.",
        completeRef:
          "Complete the selected Git ref to generate a valid command.",
        adjustOptions:
          "Adjust the install options to remove the invalid flag combination.",
        supportedSourcePrompt:
          "Use a supported package source to generate a command.",
        copyPrompt:
          "Copy this command and run it from the repo where you want Nodus to manage the package."
      }
    },
    docs: {
      titleSuffix: "Nodus docs",
      index: {
        title: "Nodus docs",
        description: "Install Nodus, add a package, and sync deterministic repo output.",
        intro:
          "Nodus is a package manager for repo-scoped agent tooling. It pulls packages from GitHub, Git URLs, or local paths, pins them, and writes the runtime files your enabled adapters actually use.",
        readFirst: "Read this first",
        cards: [
          {
            path: "/docs/getting-started/",
            title: "Getting started",
            description: "Learn the basic flow and the terms used across the docs."
          },
          {
            path: "/docs/install/",
            title: "Install",
            description: "Pick the install path that fits your environment and release policy."
          },
          {
            path: "/docs/package-discovery/",
            title: "Add package from link",
            description: "See how sources normalize before they become a `nodus add` command."
          }
        ],
        coreWorkflow: "Core workflow",
        teamsNeed: "Most teams only need a few commands",
        commandList: [
          { code: "nodus add", label: "Declare a dependency" },
          { code: "nodus sync", label: "Rebuild managed output" },
          { code: "nodus update", label: "Move dependencies forward" },
          {
            code: "nodus doctor",
            label: "Validate manifest, lockfile, store, and generated files"
          }
        ],
        whatNext: "What to read next",
        nextDescription:
          "The docs are organized around the flow most users follow, not around the implementation details."
      },
      gettingStarted: {
        title: "Getting started",
        description:
          "Install Nodus, add your first package, and validate the resulting runtime files.",
        installLabel: "Install Nodus:",
        firstPackageLabel: "Add your first package:",
        thatCommandLabel: "That command:",
        bulletPoints: [
          "creates `nodus.toml` if needed",
          "records the dependency you asked for",
          "resolves and locks the exact revision",
          "writes the adapter runtime files for the enabled tool"
        ],
        validateLabel: "Validate the result:",
        nextStepsLabel: "Common next steps:"
      },
      install: {
        title: "Install",
        description: "Public install endpoints, alternative install methods, and version pinning.",
        publicUrls: "Public installer URLs",
        unix: "Unix:",
        windows: "Windows PowerShell:",
        alternativeMethods: "Alternative methods",
        cargo: "Cargo:",
        homebrew: "Homebrew:",
        pinVersion: "Pin a version",
        verify: "Verify checksums"
      },
      packageDiscovery: {
        title: "Add package from link",
        description:
          "Paste a GitHub or Git URL, generate the right nodus add command, then run it locally.",
        intro:
          "Nodus does not need a registry to install packages. If you have a GitHub repo link, Git URL, or `owner/repo` reference, you can turn it directly into the right `nodus add` command.",
        usePage: "Use the package page to:",
        bullets: [
          "paste a package reference and normalize it into the right source",
          "optionally append `--adapter` for the target tool",
          "copy the exact command you should run in your repo"
        ],
        liveGenerator: "Use the live generator at"
      }
    },
    notFound: {
      title: "Page not found",
      description: "The page you requested does not exist.",
      heroTitle: "Page not found.",
      heroDescription:
        "The URL does not match a public Nodus route. Jump back to the docs, install page, or package command generator instead."
    }
  },
  "zh-cn": {
    layout: {
      skipLink: "跳转到内容",
      home: "首页",
      docs: "文档",
      addPackage: "添加包",
      install: "安装",
      github: "GitHub",
      footerDescription: "面向仓库级代理工具的包管理器。",
      theme: "主题",
      language: "语言",
      themeOptions: {
        system: "跟随系统",
        light: "浅色",
        dark: "深色"
      }
    },
    docsNav: {
      overview: "概览",
      gettingStarted: "快速开始",
      install: "安装",
      packageDiscovery: "从链接添加包"
    },
    home: {
      title: "Nodus | 用一条命令把代理包加入仓库",
      description:
        "Nodus 会固定仓库级代理包的版本，只写入已启用适配器真正需要的运行时文件。",
      heroTitle: "安装够快，仓库输出够准。",
      heroDescription:
        "Nodus 会固定包版本，只生成你的适配器实际读取的运行时文件。",
      installPlatformLabel: "安装命令平台",
      installTabs: {
        unix: "macOS / Linux",
        windows: "PowerShell",
        cargo: "Cargo",
        homebrew: "Homebrew"
      },
      latestVersionLabel: "最新版本",
      installCommandAria: "复制安装命令",
      installCopyLabels: {
        default: "复制",
        copied: "已复制",
        failed: "复制失败"
      },
      featuresTitle: "更快发现包，更稳生成仓库输出。",
      featuresIntro: "适合需要清晰安装路径和可预测仓库状态的团队。",
      featureCards: [
        {
          title: "从 Git 仓库开始",
          description: "支持 GitHub 简写、仓库 URL 和完整 Git remote。"
        },
        {
          title: "统一公开安装命令",
          description: "给 Shell 和 PowerShell 提供稳定安装地址，不用反复改文档。"
        },
        {
          title: "只写工具真正会读取的文件",
          description: "按适配器生成运行时文件，而不是把配置散落到整个仓库。"
        }
      ],
      workflowTitle: "把包来源直接变成可运行命令。",
      workflowIntro: "粘贴来源，复制命令，继续推进工作。",
      commandCardTitle: "贴一个仓库链接，拿到命令。",
      commandCardDescription: "把包 URL 转成准确的 `nodus add` 命令。",
      exampleCommandLabel: "示例命令",
      howItWorks: "工作方式",
      generateCommand: "生成命令",
      docsCardTitle: "安装细节和文档始终只差一跳。",
      docsCardDescription: "安装页提供版本固定方式，文档页说明完整工作流。",
      docsLinks: [
        { path: "/docs/", code: "/docs/", label: "概览与命令流程" },
        { path: "/install/", code: "/install/", label: "稳定安装地址与版本固定" },
        {
          path: "/packages/",
          code: "/packages/",
          label: "把来源规范化成可运行命令"
        }
      ]
    },
    installPage: {
      title: "安装 Nodus",
      description: "通过稳定公开地址、Cargo 或 Homebrew 安装 Nodus。",
      heroTitle: "通过稳定公开地址安装 Nodus。",
      heroDescription:
        "你可以使用本站公开安装地址，也可以通过 Cargo 或 Homebrew 安装。发布资产仍来自 GitHub Releases，但你粘贴到文档里的命令会保持稳定。",
      routesTitle: "选择最适合你工作流的安装方式。",
      routesIntro: "公开安装器是默认方案。如果团队已统一用 Cargo 或 Homebrew，也可以直接走这些路径。",
      cards: {
        unix: {
          title: "macOS 和 Linux",
          description: "根据当前系统与架构抓取正确的发布产物。"
        },
        windows: {
          title: "Windows PowerShell",
          description: "优先推荐 PowerShell 7+，但 Windows PowerShell 也可用。"
        },
        cargo: {
          title: "crates.io",
          description: "如果你希望由 Cargo 管理二进制，可以直接从 crates.io 安装。"
        },
        homebrew: {
          title: "Homebrew",
          description: "通过 Homebrew 安装已发布的构建版本。"
        }
      },
      pinningTitle: "需要精确复现时，固定发布版本。",
      pinningIntro: "适用于 CI、发布验证或任何不应隐式变动的环境。",
      pinVersionTitle: "固定版本",
      pinVersionDescription:
        "Unix 和 PowerShell 安装器都支持通过 `NODUS_VERSION` 固定版本。",
      checksumTitle: "校验和验证",
      checksumDescription:
        "Unix 安装器支持内联校验。Windows 上建议先把脚本下载到临时路径，再用 `-Verify` 调用。",
      inspectTitle: "在交给团队之前，先看清安装端点。",
      inspectIntro:
        "安装器保持对 curl 和 PowerShell 友好，同时公开原始路由和安装行为。",
      installerBehaviorTitle: "公开安装器会做什么",
      installerBehaviorDescription:
        "它会识别主机平台、解析发布标签、下载匹配归档、按需校验校验和，并把二进制安装到标准的用户级路径。",
      rawEndpointsTitle: "原始安装端点",
      rawEndpointsDescription:
        "这些路由以纯文本发布，目标就是让 curl 和 PowerShell 直接消费。"
    },
    packagesPage: {
      title: "用 Nodus 添加包",
      description: "把包来源规范化成你应该执行的 nodus add 命令。",
      heroTitle: "粘贴包来源，直接拿命令。",
      heroDescription:
        "支持 GitHub 简写、仓库 URL、完整 Git URL 或本地路径。Nodus 还可以固定 tag、branch、version、revision，并限制只安装指定组件。",
      builderTitle: "生成真实可用的 `nodus add` 命令。",
      builderDescription:
        "先输入包来源，再按需补充固定版本、适配器、组件或安装行为。",
      packageSourceLabel: "包来源",
      packageSourcePlaceholder:
        "nodus-rs/nodus、./vendor/playbook 或 https://github.com/nodus-rs/nodus",
      packageSourceNote:
        "GitHub 链接会规范成 `owner/repo`。本地路径和通用 Git URL 会保持原样。",
      pinningTitle: "版本固定",
      pinningDescription: "留空时会使用最新 tag，如果没有则回退到默认分支。",
      gitRefLabel: "Git 引用（可选）",
      gitRefOptions: {
        default: "最新 tag / 默认分支",
        tag: "Tag",
        branch: "分支",
        version: "版本范围",
        revision: "修订版本"
      },
      refValueLabel: "引用值",
      refValuePlaceholder: "v1.2.3、main、^1.2.0 或 commit SHA",
      adaptersTitle: "适配器",
      adaptersDescription: "只有在仓库自动检测不够时，才需要手动添加一个或多个适配器。",
      adaptersLegend: "适配器（可选）",
      componentsTitle: "组件",
      componentsDescription: "如果你只想装包的一部分，而不是整个包，就在这里收窄范围。",
      componentsLegend: "组件（可选）",
      scopeTitle: "范围与行为",
      scopeDescription: "可以切换项目级或全局安装，记录 dev 依赖，或者先预览结果。",
      installOptionsLegend: "安装选项",
      installOptions: {
        global: "global",
        dev: "dev 依赖",
        syncOnLaunch: "启动时同步",
        dryRun: "dry run"
      },
      previewTitle: "命令预览",
      previewIdle: "输入包来源后即可生成命令。",
      copyLabels: {
        default: "复制",
        copied: "已复制",
        failed: "复制失败"
      },
      supportedSourcesTitle: "支持的来源形式",
      supportedSources: [
        { code: "nodus-rs/nodus", label: "GitHub 简写" },
        { code: "https://github.com/nodus-rs/nodus", label: "GitHub 仓库 URL" },
        { code: "git@github.com:nodus-rs/nodus.git", label: "GitHub SSH URL" },
        { code: "https://git.example.com/team/playbook.git", label: "通用 Git URL" },
        { code: "./vendor/playbook", label: "本地包路径" }
      ],
      pinningFlagsTitle: "常用固定参数",
      pinningFlags: [
        { code: "--tag v1.2.3", label: "固定到指定发布 tag" },
        { code: "--branch main", label: "跟踪某个分支头部" },
        { code: "--version ^1.2.0", label: "选择满足条件的最高 semver tag" },
        { code: "--revision 0123456789abcdef", label: "锁定到精确 commit" }
      ],
      exactShapeTitle: "把安装形态精确到你需要的程度。",
      exactShapeIntro:
        "CLI 能做的不只是给一个来源。这个页面应该暴露真实常用选项，而不是把所有东西都挤成一团。",
      shapeCards: [
        {
          title: "固定发布版或开发引用",
          description:
            "当默认的“最新 tag”行为不符合预期时，可以使用 `--tag`、`--branch`、`--version` 或 `--revision`。"
        },
        {
          title: "收窄到指定包组件",
          description:
            "重复使用 `--component`，只安装 `skills`、`agents`、`rules` 或 `commands`。"
        },
        {
          title: "切换安装范围或先预览",
          description:
            "使用 `--global`、`--dev`、`--sync-on-launch` 和 `--dry-run` 来贴合你的实际安装流程。"
        }
      ],
      messages: {
        invalidSource:
          "请输入本地路径、GitHub 仓库 URL、owner/repo 简写或完整 Git URL。",
        refValuePrefix: "请为",
        refValueSuffix: "输入一个值。",
        invalidFlagCombo:
          "`nodus add --global` 不支持 `--sync-on-launch`。",
        completeRef:
          "请补全所选 Git 引用后再生成有效命令。",
        adjustOptions:
          "请调整安装选项，移除无效的参数组合。",
        supportedSourcePrompt:
          "请使用受支持的包来源来生成命令。",
        copyPrompt:
          "复制这条命令，并在你希望由 Nodus 管理该包的仓库中执行。"
      }
    },
    docs: {
      titleSuffix: "Nodus 文档",
      index: {
        title: "Nodus 文档",
        description: "安装 Nodus、添加包，并同步确定性的仓库输出。",
        intro:
          "Nodus 是一个面向仓库级代理工具的包管理器。它可以从 GitHub、Git URL 或本地路径拉取包，固定版本，并只生成已启用适配器真正会读取的运行时文件。",
        readFirst: "先读这些",
        cards: [
          {
            path: "/docs/getting-started/",
            title: "快速开始",
            description: "先理解基础流程和文档中的关键术语。"
          },
          {
            path: "/docs/install/",
            title: "安装",
            description: "选择适合你环境和发布策略的安装方式。"
          },
          {
            path: "/docs/package-discovery/",
            title: "从链接添加包",
            description: "了解来源如何在变成 `nodus add` 命令前被规范化。"
          }
        ],
        coreWorkflow: "核心流程",
        teamsNeed: "大多数团队只需要少数几个命令",
        commandList: [
          { code: "nodus add", label: "声明一个依赖" },
          { code: "nodus sync", label: "重新生成受管理输出" },
          { code: "nodus update", label: "把依赖向前升级" },
          {
            code: "nodus doctor",
            label: "校验 manifest、lockfile、store 和生成文件"
          }
        ],
        whatNext: "接下来读什么",
        nextDescription:
          "文档按多数用户的实际使用流程组织，而不是按实现细节铺陈。"
      },
      gettingStarted: {
        title: "快速开始",
        description: "安装 Nodus，添加第一个包，并验证生成出的运行时文件。",
        installLabel: "安装 Nodus：",
        firstPackageLabel: "添加第一个包：",
        thatCommandLabel: "这条命令会：",
        bulletPoints: [
          "在需要时创建 `nodus.toml`",
          "记录你声明的依赖",
          "解析并锁定精确修订版本",
          "为已启用工具写入适配器运行时文件"
        ],
        validateLabel: "验证结果：",
        nextStepsLabel: "常见后续步骤："
      },
      install: {
        title: "安装",
        description: "公开安装端点、替代安装方式与版本固定。",
        publicUrls: "公开安装器地址",
        unix: "Unix：",
        windows: "Windows PowerShell：",
        alternativeMethods: "替代方式",
        cargo: "Cargo：",
        homebrew: "Homebrew：",
        pinVersion: "固定版本",
        verify: "校验校验和"
      },
      packageDiscovery: {
        title: "从链接添加包",
        description:
          "粘贴 GitHub 或 Git URL，生成正确的 nodus add 命令，然后在本地执行。",
        intro:
          "Nodus 不需要 registry 也能安装包。只要你有 GitHub 仓库链接、Git URL，或者 `owner/repo` 形式的引用，就能直接转换成正确的 `nodus add` 命令。",
        usePage: "这个包页面可以帮助你：",
        bullets: [
          "粘贴包引用并规范成正确来源",
          "按需追加目标工具的 `--adapter`",
          "复制应在仓库中执行的精确命令"
        ],
        liveGenerator: "在线生成器地址："
      }
    },
    notFound: {
      title: "页面未找到",
      description: "你请求的页面不存在。",
      heroTitle: "页面未找到。",
      heroDescription:
        "这个 URL 不匹配任何公开的 Nodus 路由。可以回到文档、安装页或包命令生成器。"
    }
  }
} satisfies Record<Locale, unknown>;

export const getSiteCopy = (locale: Locale) => siteContent[locale];
