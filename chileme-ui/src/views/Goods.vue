<template lang="pug">
    div.goods
        el-row
            el-col(:span='8') 
                div.cortsAndOrder
                    el-tabs(v-model="activeName")
                        el-tab-pane(label="点餐",name="first")
                            Carts(:cartsList="cartsList")
                        el-tab-pane(label="订单",name="second")
                            Order(:ordersList="ordersList")   
            el-col(:span='16')
                div.menu
                    //- 常用商品
                    div.usuallyGoods
                        h1.goodsTitle 常用商品
                        div.goodsContent
                            div.uItems(v-for='o in uGoods',:key='o.id',@click='addToCarts(o)')
                                span.uItemsName {{o.goodname}}
                                span.uItemsPrice  {{`￥${o.price}元`}}
                    //- 商品分类
                    div.splitGoods
                        el-tabs
                            el-tab-pane(label="热菜" )
                                div
                                    div.sGoodsContent
                                        div.goodsItem(v-for='item in hotFoods',:key='item.id',@click='addToCarts(item)')
                                            div.goodsPic 
                                            div.goodsDes 
                                                div.goodsDesName {{item.goodname}}
                                                el-rate(v-model="item.rate",disabled)
                                                div.goodsDesPrice {{`价格: ${item.price}`}}
                            el-tab-pane(label="凉菜" )
                                div
                                    div.sGoodsContent
                                        div.goodsItem(v-for='item in coldFoods',:key='item.id',@click='addToCarts(item)')
                                            div.goodsPic 
                                            div.goodsDes 
                                                div.goodsDesName {{item.goodname}}
                                                el-rate(v-model="item.rate",disabled)
                                                div.goodsDesPrice {{`价格: ${item.price}`}}
                            el-tab-pane(label="主食" )
                                div
                                    div.sGoodsContent
                                        div.goodsItem(v-for='item in stampFood',:key='item.id',@click='addToCarts(item)')
                                            div.goodsPic 
                                            div.goodsDes 
                                                div.goodsDesName {{item.goodname}}
                                                el-rate(v-model="item.rate",disabled)
                                                div.goodsDesPrice {{`价格: ${item.price}`}}
                            el-tab-pane(label="饮料" )
                                div
                                    div.sGoodsContent
                                        div.goodsItem(v-for='item in drinks',:key='item.id',@click='addToCarts(item)')
                                            div.goodsPic 
                                            div.goodsDes 
                                                div.goodsDesName {{item.goodname}}
                                                el-rate(v-model="item.rate",disabled)
                                                div.goodsDesPrice {{`价格: ${item.price}`}}
</template>
<script>
import Carts from '@/components/Carts.vue'
import Order from '@/components/Order.vue'
export default {
    data(){
        return{
            activeName:'', // 购物车和订单的切换
            menuActiveName:'', //商品分类的切换
            // 常用商品
            uGoods:[
                {id:1,goodname:'第一道菜',price:'10'},
                {id:2,goodname:'第二道菜',price:'11'},
                {id:3,goodname:'第三道菜',price:'12'},
                {id:4,goodname:'第四道菜',price:'13'},
                {id:5,goodname:'第五道菜',price:'14'},
                {id:6,goodname:'第六道菜',price:'15'},
                {id:7,goodname:'第七道菜',price:'16'},
                {id:8,goodname:'第八道菜',price:'21'},
                {id:9,goodname:'第九道菜',price:'25'},
                {id:10,goodname:'第十道菜',price:'35'},
            ],
            // 商品分类
            sGoods:[
                {id:1,name:'汉堡',code:'berger'},
                {id:2,name:'主食',code:'staple'},
                {id:3,name:'饮料',code:'drink'}
            ],
            // 分类页签中的商品数据
            hotFoods:[
                {id:'ht001',goodname:'hot1',price:11,rate:3},
                {id:'ht002',goodname:'hot2',price:11,rate:3},
                {id:'ht003',goodname:'hot3',price:16,rate:3},
            ],
            coldFoods:[
               {id:'cd001',goodname:'cold1',price:7,rate:3},
               {id:'cd002',goodname:'clod2',price:8,rate:3},
               {id:'cd003',goodname:'clod1',price:9,rate:3}
            ],
            stampFood:[
                {id:'st001',goodname:'rice',price:3,rate:3},
                {id:'st002',goodname:'noodles',price:6,rate:3}
            ],
            drinks:[
                {id:'dk001',goodname:'beer',price:5,rate:3},
                {id:'dk002',goodname:'soft',price:3.5,rate:3},
                {id:'dk003',goodname:'juice',price:10,rate:3}
            ],
            cartsList:[],
            ordersList:[
                {orderNo:'ODR00001',data:'2020-05-20 15:18',price:100,id:'ord01'},
                {orderNo:'ODR00002',data:'2020-05-20 15:18',price:100,id:'ord02'},
                {orderNo:'ODR00003s',data:'2020-05-20 15:18',price:100,id:'ord03'}
            ]
        }
    },
    components:{
        Carts,Order
    },
    mounted(){
        //组件渲染完成之后自动触发
        this.getFoodsData()//获取菜品数据
        this.addGoods()//获取购物车数据
        this.getCartsData()//获取订单数据
    },
    methods:{
        addToCarts(item){
            let flag=false
            for(let i=0;i<this.cartsList.length;i++){
                if(this.cartsList[i].id===item.id){
                    flag=true
                    break
                }
            }
            if(!flag) this.cartsList.push(item)
            console.log(this.cartsList)
        },
        //获取菜品数据
        getFoodsData(){
            //axios的请求
            this.Axios({
                method:GET,//请求方式
                url:'',//请求地址
                data:{},//请求携带的参数，若该请求不需要携带参数，则忽略
            }).then(res=>{//请求成功的回调函数  res请求返回的结果
                console.log(res)
            }).catch(err=>{//请求失败的回调函数  err请求失败的返回结果
                console.log(err)
            })
        },
        //向购物车中添加商品
        addGoods(){
             //axios的请求
            this.Axios({
                method:GET,//请求方式
                url:'',//请求地址
                data:{},//请求携带的参数，若该请求不需要携带参数，则忽略
            }).then(res=>{//请求成功的回调函数  res请求返回的结果
                console.log(res)
            }).catch(err=>{//请求失败的回调函数  err请求失败的返回结果
                console.log(err)
            })
        },
        //查询购物车中商品数据
        getCartsData(){
             //axios的请求
            this.Axios({
                method:GET,//请求方式
                url:'',//请求地址
                data:{},//请求携带的参数，若该请求不需要携带参数，则忽略
            }).then(res=>{//请求成功的回调函数  res请求返回的结果
                console.log(res)
            }).catch(err=>{//请求失败的回调函数  err请求失败的返回结果
                console.log(err)
            })
        },
        //删除购物车中的商品数据
        deleGoods(){
             //axios的请求
            this.Axios({
                method:GET,//请求方式
                url:'',//请求地址
                data:{},//请求携带的参数，若该请求不需要携带参数，则忽略
            }).then(res=>{//请求成功的回调函数  res请求返回的结果
                console.log(res)
            }).catch(err=>{//请求失败的回调函数  err请求失败的返回结果
                console.log(err)
            })
        },
        //创建订单
        addOrder(){
             //axios的请求
            this.Axios({
                method:GET,//请求方式
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
                method:GET,//请求方式
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
                method:GET,//请求方式
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