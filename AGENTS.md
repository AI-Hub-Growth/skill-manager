# AGENTS.md

> AI 工具（Claude Code、Cursor、Copilot 等）进入此仓库时必须读取本文件。

## 启动检查（每次对话开始时执行）

```bash
git config user.name
```

1. 运行上述命令，获取当前 git 用户名
2. 读取 `.github/roles.yaml`，在 `users` 节点查找该用户名
3. **若找到**：加载对应 role，后续操作只在该 role 的 `allowed_paths` 范围内进行
4. **若未找到**：告知用户未在 roles.yaml 中配置，询问身份，或按 tech-lead 处理（无路径限制）
5. 告知用户当前识别到的角色和可操作目录

示例输出：
```
识别用户：alice
角色：designer
可操作目录：frontend/src/theme/**, frontend/src/styles/**, frontend/src/components/ui/**
详细指引：docs/roles/designer.md
```

---

## 角色索引

| 角色 | 详细指引 |
|------|----------|
| designer | [docs/roles/designer.md](docs/roles/designer.md) |
| product | [docs/roles/product.md](docs/roles/product.md) |
| frontend | [docs/roles/frontend.md](docs/roles/frontend.md) |
| backend | [docs/roles/backend.md](docs/roles/backend.md) |
| qa | [docs/roles/qa.md](docs/roles/qa.md) |
| tech-lead | [docs/roles/tech-lead.md](docs/roles/tech-lead.md) |

识别到角色后，立即读取对应的角色 md 文件作为行为指引。

---

## 写操作拦截规则（强制）

**每次执行以下操作前，必须先校验目标路径：**
- 编辑文件（Edit / Write）
- 创建文件
- 删除文件
- 移动/重命名文件

校验逻辑：
```
目标文件路径 ∈ 当前角色 allowed_paths ？
  是 → 继续执行
  否 → 拒绝，输出原因，不执行写操作
```

读操作（Read、Grep、Search）不受限制，任何角色均可读取所有文件。

---

## 越界处理原则

当用户要求修改超出当前角色 `allowed_paths` 的文件时：

1. **说明**：告知当前角色和权限范围
2. **拒绝**：不直接修改越界文件
3. **建议**：
   - 找对应角色的团队成员协作
   - 联系 tech-lead 介入
   - 提 PR 时在描述中说明原因，由 tech-lead 审批 override

---

## 整体协作机制说明

```
你（AI）     <- 读取 AGENTS.md + docs/roles/*.md，软约束行为
CI           <- 读取 roles.yaml，硬约束合并（越界 PR 不能合并）
CODEOWNERS   <- GitHub 自动请求对应 team review
Branch Prot  <- 最终合并门，require PR + review + CI 通过
```

这不是靠自觉，而是每一层都有机制兜底。
