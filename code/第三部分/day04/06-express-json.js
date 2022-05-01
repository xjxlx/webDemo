const express = require("express")

const app = express()

// 添加支持json传参的全局中间件
app.use(express.json())

app.post("/api/user", function(request, response) {
	console.log("body:" + request.body)
	response.send(request.body)
})

app.listen(80, function() {
	console.log("服务器启动了！")
})