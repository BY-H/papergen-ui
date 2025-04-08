# papergen-ui

## 项目简介
papergen-ui 是一个用于创建和管理试题的用户界面。该项目使用 Vue.js 框架构建，旨在提供一个直观的界面来添加、编辑和查看试题。

## 文件结构
```
papergen-ui
├── src
│   ├── views
│   │   └── Question
│   │       ├── AddQuestion.vue  # 添加试题页面的 Vue 组件
│   └── components                # 其他可复用组件
├── package.json                  # npm 配置文件，列出项目依赖项和脚本
├── tsconfig.json                 # TypeScript 配置文件，指定编译选项
└── README.md                     # 项目文档说明
```

## 主要功能
- **添加试题**: 使用 `AddQuestion.vue` 组件，通过 `el-drawer` 组件提供一个抽屉式界面，允许用户输入试题信息。
- **可见性控制**: 组件通过 `visible` 属性控制显示状态，并通过 `update:visible` 事件与父组件进行通信。

## 安装与使用
1. 克隆项目到本地:
   ```
   git clone <repository-url>
   ```
2. 进入项目目录:
   ```
   cd papergen-ui
   ```
3. 安装依赖:
   ```
   npm install
   ```
4. 启动开发服务器:
   ```
   npm run serve
   ```

## 贡献
欢迎任何形式的贡献！请提交问题或拉取请求。

## 许可证
该项目使用 MIT 许可证。