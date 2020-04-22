const Router=require('koa-router')
const router=new Router()
// 接口
router.get('/',async ctx=>{
    ctx.body='hello'
})
router.get('/test',async ctx=>{
    ctx.body='test'
})
// 用户接口


// 商品接口


// 订单接口


module.exports=router