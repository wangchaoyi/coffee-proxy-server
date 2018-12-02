# coffee-proxy-server README.md
一个快速创建反向代理的小工具。

### 为什么需要它？ 
因为可能存在后端接口没有做CROS，导致前端这边只能采用反向代理来解决跨域问题。 

### 为什么不用vue-cli或者creact-react-app里面内置的反向代理？
因为有些旧版本的vue-cli无法生效。 或者有些非vue或者react的项目也想要在开发过程中使用反向代理。

### 如何使用？
#### 使用npm
`npm install -g coffee-proxy-server`
#### 使用yarn
`yarn global add coffee-proxy-server`

安装完成之后， 系统命令会多一个`coffeeProxy`

### 项目配置
目前暂只支持在项目下加入**coffee-proxy-config.js**，后续会考虑自定义路径

**coffee-proxy-config.js** 示例：
``` javascript
module.exports = {
  "port": 9000,
	"options": {
    "/v2/api": {
       "target": "http://api-server-example.xxx",
		 "changeOrigin": true
    }, // 匹配api路径以及转发域名
	   "/": {
       "target": "http://localhost:8080",
		 "changeOrigin": false
    } // 本地前端开发服务器
  }
};
```

然后在项目中执行coffeeProxy， 如果存在该文件， 则会成功创建一个反向代理服务器。

### 项目源代码
[https://github.com/wangchaoyi/coffee-proxy-server.git](**)


#Studying/小工具