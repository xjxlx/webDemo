const fs = require("fs");
const path = require("path");

let pathValue = path.join(__dirname, "../", "files/2.txt");

// 参数解读：
// 1:pathValue 完整的路径
// 2：文件的名字
let name = path.basename(pathValue)
console.log(name) // 2.txt

let name2 = path.basename(pathValue, "txt")
console.log(name2) // 2

// 获取文件的类型
let name3 = path.extname(pathValue)
console.log("name3:" + name3) // txt