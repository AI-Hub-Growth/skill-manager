# skill-manager

多角色团队协作机制验证项目。测试 GitHub Team + CODEOWNERS + Branch Protection + CI 角色越界检查是否可行。

## 目录结构与责任边界

```
frontend/src/theme/          -> designers + frontend
frontend/src/styles/         -> designers + frontend
frontend/src/components/ui/  -> designers + frontend
frontend/src/config/         -> products + frontend
frontend/src/features/       -> frontend
frontend/src/api/            -> frontend
backend/src/                 -> backend
tests/                       -> qa + tech-leads
.github/                     -> tech-leads
```

## 如何验证

### 验证 1：角色内修改 → CI 绿

```bash
git checkout -b design/test-colors
# 修改 frontend/src/theme/colors.ts
git commit -m "test: designer modifies theme"
git push origin design/test-colors
# 提 PR，将 PR_AUTHOR 设为 alice（roles.yaml 中 role=designer）
# 预期： CI 绿，自动请求 designers + frontend review
```

### 验证 2：越界修改 → CI 红

```bash
git checkout -b design/test-boundary
# 修改 backend/src/payment.ts
git commit -m "test: designer tries to modify backend"
git push origin design/test-boundary
# 提 PR，将 PR_AUTHOR 设为 alice（role=designer）
# 预期： CI 红，输出越界警告
```

## 需要手动配置

1. `roles.yaml`：将 alice/bob/cindy 等占位符替换为真实 GitHub 用户名
2. GitHub 仓库设置：
   - Settings → Branches → Add rule for `main`
   - 勾选：Require PR, Require approvals, Require review from Code Owners
   - 勾选：Require status checks → 选择 `role-check`
3. GitHub Organization: `AI-Hub-Growth`下建好 teams：`designers / products / frontend / backend / qa / tech-leads`

详细规则見 [docs/collaboration.md](docs/collaboration.md)
