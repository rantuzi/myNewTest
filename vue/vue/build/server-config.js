//引入ws模块
var webSocket = require('ws')

var wss = new webSocket.Server({port:3000})
//监听客户端的连接事件
wss.on("connection",function(ws){
    console.log("新用户连接") 
    //接收前端的信息
    ws.on("message",function(data){
        wss.clients.forEach(function(client){
            //将信息广播
            client.send(data)
        })
    })  
})

console.log("websocket server is running")