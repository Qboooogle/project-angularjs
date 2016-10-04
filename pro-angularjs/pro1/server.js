var connect = require('connect'),
    serveStatic = require('serve-static');

var app = connect();
app.use(serveStatic("./angularjs"));
app.listen(8000);

// connect.createServer(
//     connect.static("./angularjs")

// ).listen(5000);
console.log("服务器已经在8000端口运行。。。")
