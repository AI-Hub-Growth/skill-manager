# 协作规则

## 角色与目录对应关系

| 角色 | 负责目录 |
|------|----------|
| designer | frontend/src/theme/, frontend/src/styles/, frontend/src/components/ui/ |
| product | frontend/src/config/ |
| frontend | frontend/src/features/, frontend/src/api/ |
| backend | backend/src/ |
| qa | tests/ |
| tech-lead | 所有目录（兜底） |

## 工作流程

1. 从 main 创建分支（例：`design/homepage-colors`）
2. 只修改自己角色范围内的文件
3. 提 PR → CI 自动检查是否越界
4. CODEOWNERS 自动请求对应 team review
5. review 通过 + CI 绿 → 合并

## 越界处理

如需修改其他角色的文件，需在 PR 描述中说明原因，并由 `tech-leads` team 批准。
