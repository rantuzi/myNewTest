var http = require('http');
console.log(process)
// 创建服务器 creatServer()
http.createServer(function(request, response) {
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    // 发送响应内容
    response.end('what');
}).listen(8000);

// 终端中打印
console.log('end') 