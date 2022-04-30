## 安装
```
npm install webapphelper
 ```
## 导入
```js
const webapphelper = require('webapphelper')
```
## 开源协议
ISC

## 日期工具类
```js
```
### 根据当前的日期，获取规则YYYY-MM-DD HH:mm:ss的格式返回过去
```js
// 调用 dateFormat 对时间进行格式化
const dtStr = webapphelper.getNowTime()
// 结果  2020-04-03 17:20:58
console.log(dtStr)
