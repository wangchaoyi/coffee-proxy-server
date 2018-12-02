"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var HttpProxyMiddleware = require("http-proxy-middleware");
function main() {
    try {
        var config = require(process.cwd() + "/coffee-proxy-config");
        if (!config) {
            console.warn("未找到配置， 反向代理不生效。");
            return;
        }
        var app = express();
        for (var _i = 0, _a = Object.keys(config.options); _i < _a.length; _i++) {
            var path = _a[_i];
            app.use(path, HttpProxyMiddleware(config.options[path]));
        }
        app.listen(config.port);
        console.log("proxy server is running: http://localhost:" + config.port);
    }
    catch (e) {
        console.error(e);
    }
}
main();
//# sourceMappingURL=core.js.map