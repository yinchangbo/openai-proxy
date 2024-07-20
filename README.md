# OpenAI API Proxy

This project provides a simple proxy server for the OpenAI API using Node.js and Express. It's designed to be deployed on Vercel but can also be run locally for testing purposes.

## Features

- Proxies requests to the OpenAI API
- Supports all OpenAI API endpoints
- Can be deployed to Vercel or run locally

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/yinchangbo/openai-proxy.git
   cd openai-proxy
   ```

2. Install dependencies:
   ```
   npm install express http-proxy-middleware
   ```

## Usage

### Local Development

1. Start the server:
   ```
   node index.js
   ```

2. The server will be running at `http://localhost:3000`

3. To use the proxy, send your OpenAI API requests to `http://localhost:3000/api/` instead of `https://api.openai.com/`

### Deployment on Vercel

1. Push your code to a GitHub repository

2. Connect your GitHub repository to Vercel

3. Deploy your application on Vercel

4. Your proxy will be available at your Vercel deployment URL

### Vercel CLI Deployment on Vercel
确保你已经安装了 Vercel CLI 并登录。如果没有，可以通过以下命令安装和登录：
```BASH
npm install -g vercel
vercel login
```
然后，在项目根目录运行以下命令来部署：
```BASH
vercel
```
按照提示操作，Vercel 将会部署你的应用并提供一个 URL。

## USE PROXY
部署完成后，你可以通过以下方式使用代理：
原本发送到 https://api.openai.com/v1/chat/completions 的请求，现在应该发送到 https://your-vercel-url.vercel.app/api/v1/chat/completions


## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.