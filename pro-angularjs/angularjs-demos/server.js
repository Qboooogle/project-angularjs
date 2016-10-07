/*
* @Author: QBoooogle
* @Date:   2016-10-04 19:16:18
* @Last Modified by:   QBoooogle
* @Last Modified time: 2016-10-07 13:17:46
*/

var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();
app.use(serveStatic("./demo-12"));
app.listen(8000);
console.log("服务器已经在8000端口运行。通过http://127.0.0.1:8000/test.html访问");


//简洁版服务器（其中./angularjs表示angularjs文件夹下的内容作为服务对象）。
//var connect = require('connect');
// connect.createServer(
//     connect.static("./angularjs")

// ).listen(8000);
// console.log("服务器已经在8000端口运行。通过http://127.0.0.1:8000/test.html访问");
