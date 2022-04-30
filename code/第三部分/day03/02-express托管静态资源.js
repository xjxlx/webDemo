const expect = require("express")

// 创建实力
const app = expect()

// 托管资源
app.use(expect.static("./clock"))
app.use("/clock2", expect.static("./clock2"))

app.listen(80, function() {
	console.log("服务器启动了！")
})