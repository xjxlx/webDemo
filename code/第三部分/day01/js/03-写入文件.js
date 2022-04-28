// 1：导包
const fs = require("fs");

// 2:写入
// 参数解读：
// 参数1：必选参数，需要指定一个文件路径的字符串，表示文件的存放路径。
// 参数2：必选参数，表示要写入的内容。
// 参数3：可选参数，表示以什么格式写入文件内容，默认值是 utf8。
// 参数4：必选参数，文件写入完成后的回调函数
fs.writeFile("../files/02.txt", "我帝释天不死不灭", "utf-8", function(err, data) {
	console.log("error", err)
	console.log("data", data)
})