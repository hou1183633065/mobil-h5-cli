# mobil-h5-cli

## [目录结构](./markdown/tree.md)


## 命令说明

> npm run serve 本地开发（development环境）

> npm run build:test 测试/仿真等development环境）

> npm run build 生产（production环境）

## 环境设置

- development环境（serve/build:test）

> 开发/测试环境默认开启控制台打印任务

- production环境（build）

> 生产试环境默认开启CDN服务（三方依赖库使用cdn方式）

> CDN文件放入修改[.env](./.env)（所有环境时配置为空）及[.env.production](.env.production)（生产时配置CDN）

## UI组件库使用[vant](https://youzan.github.io/vant/#/zh-CN/)

- 组件库除toast使用全局引入，其他组件按需引入，减少包体积

- UI风格统一时，统一在[ResetVant.scss](./src/assets/style/ResetVant.scss)中修改

> 统一修改时按需修改）

- UI风格不统一时

> 在每个组件功能下修改样式（使用/deep/深层选择修改）


## 代码分层

- 每个组件.vue文件应拆分如下（混入文件可按情况拆分）例：src/view/.example

> index.vue组件主入口

> index.js组件脚本入口

> index.network.js组件网络请求方法，mixins混入index.js

> index.callback.js组件网络请求回调，mixins混入index.js

> index.data.js组件data初始化，mixins混入index.js

> index.methods.js组件事件/方法，mixins混入index.js

> index.scss组件私有样式，需开启scoped

> components主要放置改组件下不可复用的业务组件

> .vue文件使用外链形式引入样式及执行脚本

## 默认开启iOS倍图模式（代码统一使用px）

> 设计图为750px（设计图2px = 代码1px）

> 设计图为375pt（设计图1pt = 代码1px）

## [网络请求（基于axios封装）](./markdown/axios.md)

## 路由配置

- 一级路由：在src/router/routes.js中配置

- 二级路由：在src/views/pages中新建routes.js，进行配置二级路由

## 默认开启Eslint任务，解决错误或警告后再提交代码（可根据项目实际需求配置）
