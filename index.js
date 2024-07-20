// index.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const OPENAI_API_URL = 'https://api.openai.com';

// 创建代理中间件
const openaiProxy = createProxyMiddleware({
  target: OPENAI_API_URL,
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // 重写路径，移除 /api 前缀
  },
  onProxyRes: function (proxyRes, req, res) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  },
});

// 使用代理中间件处理所有以 /api 开头的请求
app.use('/api', openaiProxy);

// 处理根路径请求
app.get('/', (req, res) => {
  res.send('OpenAI API Proxy');
});

// 为本地测试添加的代码
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// 处理 Vercel 无服务器函数的默认导出
module.exports = app;