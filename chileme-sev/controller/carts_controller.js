const Carts=require('../model/carts_schema')
const Goods=require('../model/goods_schema')
//查询购物车
const queryCartsData=async ctx=>{
    // ctx.body='查询购物车数据成功'
    let req=ctx.request.query//获取方式 get
    console.log(req)
    await Carts.find().then(data=>{//等待数据库查询完成执行对应操作
        //查询成功对应的操作
        console.log(data)
        ctx.body={
            code:200,
            success:true,
            msg:'查询成功',
            list:data
        }
    }).catch(err=>{
        //查询失败对应的操作
        console.log(err)
        ctx.body={
            code:200,
            success:false,
            msg:'查询失败'
        }
    })
}
//向购物车中增加商品
const addGoods=async function(ctx){
    let req=ctx.request.body//获取方式 post
    console.log(req)
    await Goods.findOne({goodsId:req.goodsId})//去商品数据集合中查询商品数据
    .then(res=>{//查询成功后对查询结果  res进行操作
        console.log(res)//未查询到结果返回null
        if(!!res){//!!res 将res转换为res对应的boolean类型的值
            //数据库中查询到了对应数据
        }else{// !!null==false
            //数据库中未查询到对应数据
            ctx.body={
                success:false,
                msg:'该商品未在数据库中查询到'
            }
        }
    }).catch(err=>{//查询失败后对查询结果  err进行操作
        console.log(err)
        //告诉请求方，本次数据库操作出现异常
        ctx.body={
            success:false,
            msg:'数据库异常'
        }
    })
    ctx.body='新增商品成功'
}
//从购物车中删除商品
const deleGoods=async ctx=>{
    ctx.body='删除商品成功'
}
module.exports={
    queryCartsData,
    addGoods,
    deleGoods
}