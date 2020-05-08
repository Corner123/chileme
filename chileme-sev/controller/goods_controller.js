const Goods=require('../model/goods_schema')

//添加商品
const addGoods=async ctx=>{
    console.log(ctx.require.body)
    ctx.body='add'
}
//查询商品
const getGoodsList=async ctx=>{
    ctx.body='goodsList'
}
//查询商品详情
const getGoodsItem=async ctx=>{
    ctx.body='goodstem'
}

module.exports={
    addGoods,
    getGoodsList,
    getGoodsItem
}