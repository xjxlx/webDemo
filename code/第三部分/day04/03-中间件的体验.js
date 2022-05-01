const express = require("express")

const app = express()
// 定义中间件
const zhj = function(request, response, next) {
	console.log("定义了中间件功能！")
	// 此处必须调用next函数，表示把中间件流转到下一个中间件或者路由
	next()
}

// 注册中间件
app.use(zhj)

app.get("/api/v1/user", function(request, response) {
	console.log("我是get请求方法！")
	response.send(request.method + " --- " + request.url)
})

app.listen(80, function() {
	console.log("服务器启动了！")
})