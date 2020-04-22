const Koa = require('koa')
const app = new Koa()
const cfg=require('./config')
const mongoose = require('mongoose')
const KoaBody = require('koa-body')

mongoose.connect(cfg.port)
mongoose.connection.on('error',()=>{
    console.listen('数据库错误')
})
mongoose.connection.once('open',()=>{
    console.log('数据库已连接')
})
app.use(async ctx=>{
    ctx.body = 'hellooooooooooo'
})
app.use(KoaBody())

// const Router = require('koa-router')
// const router = new Router()
// app
//   .use(router.routes())
//   .use(router.allowedMethods())

app.listen(cfg.port)
console.log(`server is running at http://127.0.0.1:${cfg.port}`)