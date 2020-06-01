<template lang="pug">
    div.goods
        el-row
            el-col(:span='8') 
                div.cortsAndOrder
                    el-tabs(v-model="activeName")
                        el-tab-pane(label="点餐",name="first")
                            Carts(:cartsList="cartsList" v-on:dianji="receiveHandle",v-on:shanchu="getCartsData")
                        el-tab-pane(label="订单",name="second")
                            Order(:ordersList="ordersList")   
            el-col(:span='16')
                div.menu
                    //- 常用商品
                    div.usuallyGoods
                        h1.goodsTitle 常用商品
                        div.goodsContent
                            div.uItems(v-for='o in uGoods',:key='o.goodsId',@click='addToCarts(o)')
                                span.uItemsName {{o.goodname}}
                                span.uItemsPrice  {{`￥${o.price}元`}}
                    //- 商品分类
                    div.splitGoods
                        el-tabs
                            el-tab-pane(label="热菜" )
                                div
                                    div.sGoodsContent
                                        div.goodsItem(v-for='item in hotFoods',:key='item.goodsId',@click='addToCarts(item)')
                                            div.goodsPic 
                                            div.goodsDes 
                                                div.goodsDesName {{item.goodname}}
                                                el-rate(v-model="item.rate",disabled)
                                                div.goodsDesPrice {{`价格: ${item.price}`}}
                            el-tab-pane(label="凉菜" )
                                div
                                    div.sGoodsContent
                                        div.goodsItem(v-for='item in coldFoods',:key='item.goodsId',@click='addToCarts(item)')
                                            div.goodsPic 
                                            div.goodsDes 
                                                div.goodsDesName {{item.goodname}}
                                                el-rate(v-model="item.rate",disabled)
                                                div.goodsDesPrice {{`价格: ${item.price}`}}
                            el-tab-pane(label="主食" )
                                div
                                    div.sGoodsContent
                                        div.goodsItem(v-for='item in stampFood',:key='item.goodsId',@click='addToCarts(item)')
                                            div.goodsPic 
                                            div.goodsDes 
                                                div.goodsDesName {{item.goodname}}
                                                el-rate(v-model="item.rate",disabled)
                                                div.goodsDesPrice {{`价格: ${item.price}`}}
                            el-tab-pane(label="饮料" )
                                div
                                    div.sGoodsContent
                                        div.goodsItem(v-for='item in drinks',:key='item.goodsId',@click='addToCarts(item)')
                                            div.goodsPic 
                                            div.goodsDes 
                                                div.goodsDesName {{item.goodname}}
                                                el-rate(v-model="item.rate",disabled)
                                                div.goodsDesPrice {{`价格: ${item.price}`}}
</template>
<script>
import Carts from '@/components/Carts.vue'  //import 组件名 from 组件存放位置
import Order from '@/components/Order.vue'
export default {//将组件暴露给其它组件
    data(){
        return{
            activeName:'', // 购物车和订单的切换
            menuActiveName:'', //商品分类的切换
            // 常用商品
            uGoods:[],
            // 分类页签中的商品数据
            hotFoods:[],
            coldFoods:[],
            stampFood:[],
            drinks:[],
            cartsList:[],//购物车数据
            ordersList:[
                {orderNo:'ODR00001',data:'2020-05-20 15:18',price:100,id:'ord01'},
                {orderNo:'ODR00002',data:'2020-05-20 15:18',price:200,id:'ord02'},
                {orderNo:'ODR00003',data:'2020-05-20 15:18',price:400,id:'ord03'}
            ]
        }
    },
    components:{//将列入的组件配置到当前的组件中
        Carts,Order
    },
    mounted(){
        //组件渲染完成之后自动触发
        this.getFoodsData()//获取菜品数据
        this.getCartsData()//获取购物车数据
        this.getOrderData()//获取订单数据
    },
    methods:{
        //用来接收从子组件传递过来的数据
        receiveHandle(arg){
            console.log(arg)//子组件传递过来的实参
            console.log('--------')
            this.deleGoods(arg)

        },
        addToCarts(item){
            // this.receiveHandle('a')
            this.Axios({
                method:'POST',
                url:'/api/carts/addGoods',
                data:{
                    goodsId:item.goodsId
                }
            })
            .then(res=>{//对请求成功的结果进行处理   res成功的结果
                this.getCartsData()
            })
            .catch(function(err){//对请求失败的结果进行处理   err成功的结果
                console.log(err)
            })
            
        },
        //获取菜品数据
        getFoodsData(){
            //axios的请求
            this.Axios({
                method:'GET',//请求方式
                url:'/api/user/getGoodsList',//请求地址
                // params:{},//请求携带的参数，若该请求不需要携带参数，则忽略
            }).then(res=>{//请求成功的回调函数  res请求返回的结果
                console.log(res)
                //遍历数据
                for(let i=0;i<res.data.data.length;i++){
                    //uGoods  常用商品 isRecommend:true
                    if(res.data.data[i].isRecommend) this.uGoods.push(res.data.data[i])
                    // hotFoods 热菜  type:heat
                    if(res.data.data[i].type==='heat') this.hotFoods.push(res.data.data[i])
                    // coldFoods 凉菜 type:cool
                    if(res.data.data[i].type==='cool') this.coldFoods.push(res.data.data[i])
                    // stampFood 主食 type:staple
                    if(res.data.data[i].type==='staple') this.stampFood.push(res.data.data[i])
                    // drinks 饮料 type:soup
                    if(res.data.data[i].type==='soup') this.drinks.push(res.data.data[i])
                }
            }).catch(err=>{//请求失败的回调函数  err请求失败的返回结果
                console.log(err)
            })
        },
        //查询购物车中商品数据
        getCartsData(){
             //axios的请求
            this.Axios({
                method:'GET',//请求方式
                url:'/api/carts/queryCartsData',//请求地址
                // params:{},//请求携带的参数，若该请求不需要携带参数，则忽略
            }).then(res=>{//请求成功的回调函数  res请求返回的结果  res是从carts_controller.js里面的ctx.body来的
                console.log(res.data.list)
                this.cartsList=res.data.list
            }).catch(err=>{//请求失败的回调函数  err请求失败的返回结果
                console.log(err)
            })
        },
        //删除购物车中的商品数据
        deleGoods(item){
             //axios的请求
            this.Axios({
                method:'POST',//请求方式
                url:'/api/carts/deleGoods',//请求地址
                data:{
                     goodsId:item.goodsId
                },//请求携带的参数，若该请求不需要携带参数，则忽略
            }).then(res=>{//请求成功的回调函数  res请求返回的结果
                // console.log(res)
                //删除操作成功之后进行页面数据更新
                this.getCartsData()//删除操作完成之后，调用查询购物车数据的方法进行数据的更新
            }).catch(err=>{//请求失败的回调函数  err请求失败的返回结果
                console.log(err)
            })
        },
        //创建订单
        addOrder(){
             //axios的请求
            this.Axios({
                method:'GET',//请求方式
                url:'',//请求地址
                data:{},//请求携带的参数，若该请求不需要携带参数，则忽略
            }).then(res=>{//请求成功的回调函数  res请求返回的结果
                console.log(res)
            }).catch(err=>{//请求失败的回调函数  err请求失败的返回结果
                console.log(err)
            })
        },
        //查询订单
        getOrderData(){
             //axios的请求
            this.Axios({
                method:'GET',//请求方式
                url:'',//请求地址
                data:{},//请求携带的参数，若该请求不需要携带参数，则忽略
            }).then(res=>{//请求成功的回调函数  res请求返回的结果
                console.log(res)
            }).catch(err=>{//请求失败的回调函数  err请求失败的返回结果
                console.log(err)
            })
        },
        //删除订单
        deleOrder(){
             //axios的请求
            this.Axios({
                method:'GET',//请求方式
                url:'',//请求地址
                data:{},//请求携带的参数，若该请求不需要携带参数，则忽略
            }).then(res=>{//请求成功的回调函数  res请求返回的结果
                console.log(res)
            }).catch(err=>{//请求失败的回调函数  err请求失败的返回结果
                console.log(err)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
$h:100%;
@mixin flx($des:column){
    display:flex;
    flex-direction:$des ; //row 横向排列 column 纵向排列
}
.goods{
    height: $h;
    .el-row,.el-col{
        height: $h;
    }
    .cortsAndOrder{
        height: $h;
        background: #f1f1f1;
        border-right: 1px solid #000;
    }
    .menu{
        @include flx;
        height: $h;
        background: lightskyblue;
        .usuallyGoods{
            .goodsTitle{
                height: 40px;
                line-height: 40px;
                text-align: left;
                background: white;
                text-indent: 10px;
                font-weight: 600;
                color:rgb(54, 54, 54);
            }
            .goodsContent{
                height: 200px;
                display:flex;
                padding:15px 40px;
                align-items: center;
                flex-wrap: wrap;
                margin-bottom: 15px;
                .uItems{
                    padding:8px 14px;
                    background: #fff;
                    border:1px solid rgb(54, 54, 54);
                    margin:20px 12px;
                    border-radius: 2px;
                    .uItemsPrice{
                        color:dodgerblue;
                        margin-left: 4px;
                    }
                }
            }
        }
        .splitGoods{
            flex:1;
            .el-tabs{
                @include flx;
                height: $h;
                .el-tabs__content{
                    flex:1;
                }
            }
        }
        .sGoodsContent{
            @include flx(row);
        }
        .goodsItem{
            width:200px;
            height: 100px;
            padding:3px;
            box-sizing: border-box;
            background: #fff;
            margin: 10px 20px;
            @include flx(row);
            .goodsPic{
                width:74px;
                background: red;
            }
            .goodsDes{
                flex:1;
                .goodsDesName{
                    height: 30px;
                    line-height: 30px;
                    text-align: left;
                    text-indent: 5px;
                    color: red;
                }
                .goodsDesPrice{
                    line-height: 40px;
                    text-align: left;
                    text-indent: 5px;
                    color:gray;
                }
            }
        }
    }
}
    
</style>