 const dateFormat = require("./03-传统封装事件格式化.js");

 let date = new Date();
 console.log(date)

 let time = dateFormat.dateFormat(date)
 console.log(time)