# Movie Website In Java

<div align="center">
  <h3>一个基于 Spring Boot + Vue 3 的在线电影网站项目</h3>
  <p>包含首页推荐、电影播放、榜单排行、主创列表、热播排行等核心页面。</p>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Backend-Spring%20Boot%203.4.5-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot" />
  <img src="https://img.shields.io/badge/Frontend-Vue%203-42B883?style=for-the-badge&logo=vue.js&logoColor=white" alt="Vue 3" />
  <img src="https://img.shields.io/badge/Build-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Database-MySQL%20%2B%20Redis-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL Redis" />
</div>

## 项目简介

本项目是一个前后端分离的影视网站示例，后端使用 Spring Boot 提供 API 服务，前端使用 Vue 3 + Vite 构建交互页面。项目支持电影展示、播放、排行榜、主创信息展示等功能，适合作为 Java Web 全栈练习项目或课程设计项目。

## 功能预览

<div align="center">
  <img src="https://github.com/user-attachments/assets/fc26e001-4213-4491-8310-d89dd656a390" alt="首页" width="48%" />
  <img src="https://github.com/user-attachments/assets/eaaeffaf-9148-4ed1-b04c-9bd4a9979ee8" alt="电影播放" width="48%" />
</div>

<div align="center">
  <img src="https://github.com/user-attachments/assets/fe5f77f8-47da-4a4d-8472-d56bdff38360" alt="榜单" width="48%" />
  <img src="https://github.com/user-attachments/assets/abb01534-b40a-4e37-887b-bf71102cd2da" alt="主创列表" width="48%" />
</div>

<div align="center">
  <img src="https://github.com/user-attachments/assets/0375b8d8-b682-49d2-9030-2781b3fbbcaf" alt="热播排行" width="48%" />
</div>

## 技术栈

- 后端：Spring Boot 3、MyBatis、MyBatis-Plus、JWT、Redis、Druid
- 前端：Vue 3、Vue Router、Pinia、Axios、Element Plus、ECharts
- 构建工具：Maven、Vite
- 数据库：MySQL
- 其他：Alipay SDK、Apache POI

## 项目结构

```text
Movie/
├─ Movie/      # Spring Boot 后端
└─ client/     # Vue 3 前端
```

## 本地启动

### 1. 启动后端

进入后端目录：

```bash
cd Movie
mvn spring-boot:run
```

默认后端端口：

```text
http://localhost:8090
```

### 2. 启动前端

进入前端目录：

```bash
cd client
npm install
npm run dev
```

默认前端地址：

```text
http://localhost:5173
```

当前前端通过 Vite 代理将 `/api` 请求转发到本地后端 `8090`。

## 环境说明

后端默认使用以下本地依赖：

- MySQL：`localhost:3306/movie`
- Redis：`localhost:6379`

相关配置位于：

- `Movie/src/main/resources/application.yml`
- `client/src/axios/request.js`
- `client/vite.config.js`

