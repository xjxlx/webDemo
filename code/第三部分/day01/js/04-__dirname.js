const fs = require("fs");

// 使用双下划线的name 去处理路径的问题
console.log(__dirname)
fs.readFile(__dirname + "../files/3.txt", "utf8", function(err, data) {
	console.log("error: " + err)
	console.log("data: " + data)
})