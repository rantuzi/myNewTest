const Vue = require('vue');
const express = require('express')();
const renderer = require('vue-server-renderer').createRenderer();

const app = new Vue({
    template: '<div>hello world</div>'
})
const end = new Vue({
    template: '<div>end</div>'
})

express.get('/',(req,res) => {
    renderer.renderToString(app, (err, html) => {
        if (err) {
            return res.statusMessage(500).end('运行错误')
        }
        res.send(`
            <!DOCTYPE html>
            <html lang='en'>
                <head>
                    <meat charset='UTF-8'>
                    <title>Vue2.0 ssr渲染页面</title>
                </head>
                <body>
                    ${html}
                </body>
            </html>
        `)
    })
})

express.get('/end',(req,res) => {
    renderer.renderToString(end, (err, html) => {
        if (err) {
            return res.statusMessage(500).end('运行错误')
        }
        res.send(`
            <!DOCTYPE html>
            <html lang='en'>
                <head>
                    <meat charset='UTF-8'>
                    <title>Vue2.0 ssr渲染页面</title>
                </head>
                <body>
                    ${html}
                </body>
            </html>
        `)
    })
})

express.listen(8080,() => {
    console.log('服务器已经启动')
})