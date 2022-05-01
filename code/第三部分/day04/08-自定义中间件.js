// 导包
const express = require("express")
// 构建对象
const app = express()

// 自定义的中间件
app.use(function(req, res, next) {
	console.log("中间件！")

	let content = ""
	req.on("data", function(data) {
		content += data
	})

	req.on("end", function() {
		req.body = content

		console.log(req.body)
		next()
	})
})

app.post("/user", function(request, response) {
	response.send(request.body)
})

app.listen(80, function() {
	console.log("服务启动了！！！！")
})