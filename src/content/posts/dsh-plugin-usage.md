---
title: 我的 DSH 使用记录：11 个插件、三类收益和六个坑
published: 2026-11-26T01:30:00
description: '把 DeepSeek Harness 用成日常主力之后：11 个第三方插件各自补了什么、Windows 上踩过的六个坑，以及一套能验证、能回滚的升级流程。'
image: '/images/covers/dsh-plugin-usage.webp'
tags: [DeepSeek, DSH, 插件, 效率工具]
draft: false
lang: ''
---
# 我的 DSH 使用记录：11 个插件、三类收益和六个坑

从 9 月底装下第一个第三方插件，到把这台 Windows 机器上的 DSH 升到 `0.2.2-rc.5`，我的 `desktop` profile 里现在挂着 **13 层 bundle**：两层框架，加 11 个第三方插件——其中 3 个是我自己写的。

这不是一份「必装插件榜」。插件生态更新太快，今天的第一名下个月可能就停更；比名单更有用的，是每个插件到底补上了哪块能力，以及装错时该怎么退回来。下面按「体验」「上下文」「系统能力」三类讲收益，最后把这一路踩过的六个坑摊开。

## 🧰 先交代：我装了什么、为什么留下

我的筛选标准只有三条：按缺口装，不按新鲜装；每个插件必须有一个「探针」，也就是一次不依赖 UI 的工具调用，能证明它真的加载了；任何改动都要能回滚。

| 插件 | 版本 | 一句话职责 |
| --- | --- | --- |
| `dshmarket` | 1.73.23 | 可视化插件市场 |
| `@linxin666/dsh-web-all` | 0.4.19 | Web UI 全家桶：任务板、皮肤、浏览器侧栏等 |
| `dsh-codex-effort-slider` | 1.1.9 | 连续推理等级滑条 |
| `dsh-cost-meter` | 1.9.77 | 会话成本、订阅额度与峰谷提醒 |
| `@having5548/dsh-notify` | 0.6.1 | 应用内与系统通知 |
| `billion-context` | 0.1.216 | 上下文压缩 |
| `dsh-mnemon` | 0.5.48 | 分层记忆与项目文档 |
| `@having5548/dsh-backup` | 0.5.0 | 全量备份与恢复 |
| `dsh-ops` | 0.5.5 | Windows 原生文件工具与 Bash |
| `dsh-windows-mcp` | 0.2.11 | 桌面自动化 MCP 桥 |
| `@having5548/dsh-downloader` | 0.7.7 | 下载代理与分段下载 |

版本号是写这篇时的快照。它们只说明「这套组合能跑」，不代表必须锁死这些版本——DSH 本身还在快速迭代，插件跟着升级是常态。

## 🖥️ 体验层：把 Web UI 变成工作台

**`dshmarket`** 解决的是「发现插件」这一步。它把找插件从翻 npm 和翻 README 变成一个可视化列表，能搜关键词、看简介和版本，点一下就装。对不熟悉 `dsh plugin add` 的人，价值不在省一条命令，而在降低试错成本。但它只负责「装」，不负责「装对」——依赖解析仍然是 pnpm 的事，装完还是得回到 bundle 列表和探针上确认，原因见坑 1 和坑 2。

**`@linxin666/dsh-web-all`** 是一整套 Web UI 扩展，我常用的有四块：任务板、浏览器侧栏、会话归档和皮肤中心。任务板把「跑一次就不管」的活变成卡片，还能挂定时；浏览器侧栏省掉在编辑器和浏览器之间来回切；会话归档让「上周那个会话」真的能翻出来；皮肤中心纯粹是长时间盯屏幕时的舒适度。它装的是全家桶，但子插件可以单独关——我的 SSH 和技能浏览器就一直关着，用不到的能力不必都开着。

**`dsh-codex-effort-slider`** 把输入框那一行的推理档位换成了连续滑条。它的好处是「微调」：改错别字往左拉，重构模块往右拉，不必进设置里翻档位。要注意滑条只是把请求发出去，具体怎么映射、模型支不支持，仍由模型和供应商决定，别把它当成一个跨模型通用的旋钮。

**`dsh-cost-meter`** 解决的是「花得不明不白」。它会显示当前会话成本、当日累计、历史记录，内置 170 多个模型的价格目录，还支持 16 家 Coding Plan 的额度查询和峰谷时段提醒。我的用法很朴素：长任务开跑前扫一眼单价，快到峰谷切换时让它弹个窗。它的数字是估算，不是账单；价格目录也可能滞后，别拿它跟供应商对账。

**`@having5548/dsh-notify`** 是我自己写的，但确实离不开：新会话、待审批、任务完成、任务中断都会弹 Telegram 风格的应用内通知，前台有提示音，后台走系统通知。跑构建或长任务时敢离开工位，就是因为审批弹窗会把我叫回来。它只通知、不回调，别指望点一下就能替你点「同意」。

## 🧠 底盘：上下文、记忆与后悔药

**`billion-context`** 处理的是长会话。它给自己的目标是「100K 上下文也够用、token 少 5 倍、一个会话能跑一个月」；我实际感受到的收益更朴素：同一个任务可以连续跑很久，不必每隔一段时间就新开一个会话重新交代背景。代价是摘要必然有损，所以我会给它立几条规矩：按主题分段压缩，不要把整个下午的对话一次性塞进去；压缩前确认「当前目标、硬约束、未完成项、关键报错原文」都在摘要里；需要精确细节时再解压原文，而不是凭印象继续。

> 项目开源地址(欢迎 Star ⭐):

::github{repo="ranxianglei/billion-context"}

**`dsh-mnemon`** 是分层记忆：运行时快照、记忆空间、项目文档、技能。写这篇时，本机是 101 条记忆、1730 条边，记录的多是「这台机器上的约定」和「上次为什么失败」——比如某个插件装完为什么不生效、某条命令为什么必须换源。它最有价值的地方不是「记得多」，而是让下一次遇到同一个报错时，能先搜到上次的结论。两个边界要记住：运行时快照是预算内的投影，没显示不等于被删；记忆是历史参考，不是当前指令，冲突时以你现在说的话为准。密钥、一次性进度、原始转储不要往里塞。

> 项目开源地址(欢迎 Star ⭐):

::github{repo="omdsh-dev/dsh-mnemon"}

**`@having5548/dsh-backup`** 是保险。它把工作区、完整会话（字节级复制）、附件、设置和 Mnemon 数据打成一个 ZIP，导入前有预检，支持合并或覆盖。我的习惯是每次大版本升级前手动备一次，尤其是动 profile 之前。两个提醒：备份包会越来越大；恢复后要抽查，重点看会话是否完整、记忆注入是否和原来一致。

> 项目开源地址(欢迎 Star ⭐):

::github{repo="having5548/dsh-backup"}

## 🛠️ 系统层：命令、桌面与网络

**`dsh-ops`** 让 Windows 上也有真正的 Bash 和一套原生文件工具。`ops_bash`、`ops_glob`、`ops_grep` 这些工具的好处是「有界」：读文件按行给范围，搜索按页返回，不会因为一个目录太大就把上下文撑爆。装它有个小前提：走华为云源，上游 README 明确说 npmmirror 上的包有问题。启用瞬间 `pwsh` 会短暂报 `unknown tool`，因为宿主正在逐段切换工具集合，等 `ops_bash` 可用就好，不是装坏了。

还有一个 Windows 特有的路径坑：在 Git Bash 里把 `/c/Users/...` 传给 `node`，它会被当成相对路径拼到当前盘符下，变成 `H:\c\Users\...`。用 `C:/Users/...` 这种带盘符的写法就好。另外一次整目录「能列不能写」，查下来不是沙箱策略，而是 NTFS ACL 加完整性级别；只补 ACE 不调 `Mandatory Label`，症状会一模一样。这个坑跟插件无关，但只要你让 AI 在 Windows 上写文件，迟早会遇到。

**`dsh-windows-mcp`** 通过官方 MCP 桥接 CursorTouch/Windows-MCP：截图、UI 自动化、键鼠输入、剪贴板、进程、注册表。CLI 做不了的事——点一个只有 GUI 的按钮、读一个窗口里的状态——才轮到它。出问题先跑 `windows_mcp_doctor`，它会检查 uv/uvx、`~/.windows-mcp` 的安装、实际生效的桥接配置和桌面探针。它最容易让人误判的是「等待时间」，单独放在坑 6。

**`@having5548/dsh-downloader`** 是我日常下载的主力：境内直连，境外走插件自带的代理内核，6 个工具覆盖下载、状态、归属地判断、会话守卫、配置管理和「让某条命令走代理」。4 线程分段加工作窃取，小于 1 MiB 或服务端不支持 Range 时自动退回单连接；每个文件回 sha256；直连失败自动回退。内核只绑 `127.0.0.1` 并带每进程随机令牌，国内 AI 平台域名强制直连——这一条对「代理一抖，会话就断」特别有用。

> 项目开源地址(欢迎 Star ⭐):

::github{repo="having5548/dsh-downloader"}

## 🕳️ 六个坑：从「装上了」到「真的能用」

### 1. 装了，但没启用

最隐蔽的一种：插件在 `dependencies` 里，UI 里就是没有它的工具，启动日志也未必有红字。判断「启用」不是看依赖列表，而是看 `dsh.profile.bundles`。

```bash
node -e "const p=require(process.env.DSH_HOME+'/profiles/desktop/package.json');console.log('deps',Object.keys(p.dependencies).length,'bundles',p.dsh.profile.bundles.length)"
```

我的 profile 至少被重置过四次（10-17、10-24、10-25、11-14），每次 `dependencies` 一个不少，`bundles` 却掉回两层框架。根因到现在也没完全钉死：曾怀疑是 webserver 监听 `0.0.0.0` 启动失败后触发了自动修复，但后来没再复现也照样复发。现在的做法是升级前后各跑一次上面的命令，写回 `bundles` 后热重载即可，不用重启；真正的验收是插件自己的工具能返回，而不是命令退出码为 0。

### 2. 一次装插件，十个一起挂

```text
failed to import: ENOENT .../<包>/node_modules/<依赖>/<main>
```

DSH 的加载器按每个包自己声明的 `dependencies` 构造路径并直接打开，不向上回退。pnpm 的扁平布局又经常只建出 `<包>/node_modules/@scope` 空目录，不填内容；空目录不会让 Node 回退到顶层同名包。于是所有依赖同一个包（比如 `@deepseek-ai/schemastery`）的插件会报同一条路径——我那次一次坏了 10 个，看起来像插件集体坏了，其实只是链接没建出来。

修法是把缺的嵌套依赖做成指向顶层同名包的链接：

```bat
mklink /J "node_modules\@scope\pkg\node_modules\dep" "node_modules\dep"
```

PowerShell 可以用 `New-Item -ItemType Junction`；Git Bash 里 `cmd //c mklink` 会被 MSYS 改写，别用。修完重新启用即可，不要重装整个 profile。

### 3. 改名漏一处，启动就 ERR_MODULE_NOT_FOUND

把插件从裸名改成带 scope 的名字时，有三处不同的解析路径，漏任何一处都会坏：

| 位置 | 字段 | 漏改后果 |
| --- | --- | --- |
| `package.json` | `name` | pnpm 安装键对不上 |
| `cordis.patch.yml` | `insert[].name` | 启动时 `ERR_MODULE_NOT_FOUND` |
| `lib/client.js` | `__ModuleLoader__.load({ id })` | 客户端 UI 不出现 |

最坑的是前两步都不会报错：`dsh plugin add` 退出码 0，`--dump-config` 也退出码 0，但 dump-config 只做文本层面的合成，不会真的解析 patch 行里的模块名。判据应该是从 profile 目录分别 `import` 新名和旧名：新名成功、旧名失败，才算改全。

### 4. 同版本 tgz 不会重新解包

重新打了本地包、版本号没变，装完发现功能还是旧的——pnpm 对同版本的 `file:` tgz 有缓存，不会重新解包。必须 `pnpm remove` 再 `pnpm add`。

```bash
pnpm remove @having5548/dsh-notify
pnpm add file:<path>/having5548-dsh-notify-0.6.1.tgz
```

另一类「版本不对」不是缓存：registry 有发布冷静期。当时 `dsh-cost-meter` 远端 latest 已经到 1.9.65，实际只能装到 1.9.64。报告版本时我宁可如实写「差一个补丁版」，也不写成「已最新」。

### 5. Node 和 git 的证书是两套

如果你也用 Steam++ 之类的工具改过 hosts，把 `github.com` 指到 `127.0.0.1`，就会遇到同一个站、不同客户端报不同的证书错。git 走它自己的 schannel/OpenSSL 配置，Node 默认用自带 CA 链，两边要分别处理。

```bash
# 只对 github.com 放行，不动全局 http.sslVerify
git config --global 'http.https://github.com/.sslVerify' false
```

```powershell
# 让 Node 用系统证书库；用户级变量，无需管理员
setx NODE_USE_SYSTEM_CA 1
```

第二条的关键是：Node 只在**启动时**读取它，运行中设 `process.env` 或写 `$DSH_HOME/.env` 都无效，必须完全退出再重开。安全边界也要自己验一下：放行后访问 `self-signed.badssl.com` 仍应报 `SEC_E_UNTRUSTED_ROOT`，说明只放行了目标域。还有一句：`schannel: failed to receive handshake` 是 TLS 在传输层就断了，跟证书是否被接受无关，不要在证书设置上打转。

### 6. Windows MCP 的三个「等待时间」

「AI 操作桌面时卡住」通常不是坏了，而是三个同名不同义的超时：

| 配置 | 默认 | 管什么 |
| --- | --- | --- |
| `control.idle_timeout_seconds` | 10 秒 | 用户接管后多久把控制权交还 AI |
| `toolCallTimeoutMs` | 60000 ms | DSH 等单次 MCP 工具响应的上限 |
| `Wait.duration` | 调用参数 | 单次等待时长 |

改第一项要写 `~/.windows-mcp/config.toml`，然后重启 MCP 子进程：

```toml
[control]
enabled = true
policy = "relaxed"
idle_timeout_seconds = 5.0
```

`0` 不会关闭控制，要关得用 `enabled = false`；缩短空闲时间也不会让 AI 更容易插进你的操作，因为计时器会随物理输入重置。它真正决定的是「你停手后多久交出控制权」，不是「AI 多久能抢一次」。

## ✅ 现在的工作流

被坑过几轮之后，我把升级流程固定成了五步：

1. 升级前用 `dsh-backup` 备一次，记录 `dependencies` 数量与 `bundles` 列表；
2. 一次只动一组插件，升完立刻用探针验收，不靠「看起来没报错」；
3. 新插件先单独装、单独观察一两天，确认稳定再写进 `bundles`；
4. 出问题先查 import 和配置，再查版本，最后才怀疑 DSH 本体；
5. 记忆和摘要都当辅助，关键事实回到原文和会话记录里核对。

如果你刚开始用，我的最小组合是 `dshmarket` + `dsh-backup` + `dsh-mnemon`：先能发现、能恢复、能记住。国内网络环境下再加 `dsh-downloader`；需要 AI 操作桌面时再加 `dsh-windows-mcp`；上下文开始吃紧，再上 `billion-context`。剩下的按缺口补，不必一次装齐。

插件不是收藏品。这套组合几个月后大概率会变，但方法不会：装前能验证，装后能回滚，出事能定位。等这套流程跑顺了，插件数量反而是最不重要的指标。
