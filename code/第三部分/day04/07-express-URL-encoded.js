const express = require("express")

const app = express()

// 添加支持json传参的全局中间件
app.use(express.json())

// 添加支持url-encoded 的全局中间件
app.use(express.urlencoded({
	extended: false
}))

app.post("/api/user", function(request, response) {
	if (request.body != null) {
		console.log(request.body)
	}
	response.send(request.body)
})

app.listen(80, function() {
	console.log("服务器启动了！")
})