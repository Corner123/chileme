const Koa = require('koa')
const app = new Koa()
const cfg = require('./config')
const mongoose = require('mongoose')
const KoaBody = require('koa-body')
const router = require('./router/router')

// mongoose.connect(cfg.port)
// mongoose.connection.on('error',()=>{
//     console.listen('数据库错误')
// })
// mongoose.connection.once('open',()=>{
//     console.log('数据库已连接')
// })
app.use(KoaBody())
app.use(router.routes()).use(router.allowedMethods())
app.listen(cfg.port)
// app.use(router.router()).use(router.allowedMe)
console.log(`server is running at http://127.0.0.1:${cfg.port}`)