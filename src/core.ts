import * as express from "express";
import * as HttpProxyMiddleware from "http-proxy-middleware";

function main() {

  try {
    const config = require(`${process.cwd()}/coffee-proxy-config`);
    if (!config) {
      console.warn("未找到配置， 反向代理不生效。");
      return;
    }
    const app = express();
    for (let path of Object.keys(config.options)) {
      app.use(path, HttpProxyMiddleware(config.options[path]));
    }
    app.listen(config.port);
    console.log(`proxy server is running: http://localhost:${config.port}`)
  } catch (e) {
    console.error(e);
  }

}

main();
