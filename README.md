# simple api to test request in FE

首先启动接口服务：

```bash
npm run server
```

此时可以通过 http://localhost:9999/ 来访问接口，接口已经做了跨域处理

然后启动前端服务：

```bash
npm start
```

打开页面进行调试（仅 html 页面调试）

---

如果需要复杂前端调试（涉及 npm 包）

```bash
cd webpack-fe
npm run dev
```