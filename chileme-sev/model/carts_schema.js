//定义数据
const mongoose=require('mongoose')
const schema=mongoose.Schema
const Carts=new schema({
    id:String,//当前商品在数据库的唯一标识
    name:String,//商品名
    Price:Number,//商品价格
    count:Number,//商品数量
    
})
module.exports=mongoose.model('Carts',Carts)