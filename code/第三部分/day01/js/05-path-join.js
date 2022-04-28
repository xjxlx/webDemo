// 导包
const fs = require("fs");
const path = require("path")

// 拼接路径
// 参数说明:
// 1:__dirname:当前类所处的文件目录
// 2：../ 抵消路径的功能,也就是回到上一级
// 3：path.join(...paths: string[]) 可变参数,可以把多个文件拼接到一起
let pathValue = path.join(__dirname, "../", "files/3.txt")

console.log("paths:" + pathValue)
fs.readFile(pathValue, "utf8", function(err, data) {
	console.log("err: " + err)
	console.log("data:" + data)
})