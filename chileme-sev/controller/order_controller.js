const Order=require('../model/order_schema')
//新增订单
const addOrder=async ctx=>{
    ctx.body='新增成功'
}
//查看订单
const findOrder=async ctx=>{
    ctx.body='查看订单'
}
//删除订单
const deopOrder=async ctx=>{
    ctx.body='删除成功'
}
module.exports={
    addOrder,
    findOrder,
    deopOrder
}