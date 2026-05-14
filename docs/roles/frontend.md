# Frontend Role

## 职责

负责前端业务逻辑、组件实现、API 接口调用层。
覆盖整个 `frontend/src/` 目录，包括 designer 和 product 负责的子目录（但跨入需协作）。

## 允许操作的目录

```
frontend/src/**
```

## 典型任务

- 实现业务功能（`features/`）
- 封装 API 调用（`api/`）
- 实现页面组件逻辑
- 接入后端接口
- 修复前端 bug

## AI 行为指引

- 可操作 frontend/src 下所有文件
- 修改 `theme/`、`styles/`、`components/ui/` 时，建议同步通知 designer review
- 修改 `config/` 时，建议同步通知 product review
- 不直接修改 `backend/src/`，接口变更需与 backend 协作

## 越界示例

| 用户要求 | 处理方式 |
|---------|----------|
| 改 `backend/src/payment.ts` | 拒绝，建议找 backend |
| 改 `tests/e2e/` | 建议找 qa 协作 |
