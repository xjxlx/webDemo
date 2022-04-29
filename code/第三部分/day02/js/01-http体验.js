// 1：导包
const http = require("http");
// 2:创建服务器对象
const server = http.createServer()

// 3：绑定实例
server.on("request", function(request, response) {
	console.log("客户端开始访问服务器了！")
	// 请求的路径
	let ur = request.url
	// 请求的方法类型
	const method = request.method
	console.log("url: " + ur + " method: " + method)

	// 响应结果
	let result = "404 Not Found"
	// 防止中文乱码
	response.setHeader("content-type", "text/html:charset=utf-8")
	// 返回数据
	response.end(result)
})

// 4：启动服务器
server.listen(80, function() {
	console.log("服务器启动了！")
})