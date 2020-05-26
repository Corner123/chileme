<template>
    <div>
        <h1>这是一个vue组件</h1>
        <div @click="fu1">{{ val1 }}</div>
        <div @click="fu2(val1,val2,val3)">{{ val2 }}</div>
        <div @click="fu3">{{ val3 }}</div>
        <div>{{ val4 }}</div>
        <div>{{ val5 }}</div>
        <div @click="sendRequest">{{ val6[0] }}</div>
        <div v-for="i in val7" :key="i">{{i}}</div>
        <div v-for="i in val6" :key="i">{{i}}</div>
        <button @click="back">按钮</button>

        <h1 @click="sendGetRequest">我们</h1>
        <h1 @click="sendPostRequest">哈哈</h1>
    </div>
</template>
<script>
export default {
    data(){
        //绑定数据
        return{
            val1:'字好丑',
            val2:1,
            val3:true,
            val4:undefined,
            val5:null,
            val6:['ww','f','d'],
            val7:{
                name:'完美',
                age:2,
                jod:'sdsds'
            }
        }
    },
    //绑定方法
    methods:{
        back(){
            this.$router.push('/')
        },
        fu1(){
            // alert('fu1')
            // alert(this.val7.name)
            // this.fu2()
        },
        fu2(aga,aga1,aga2){
            alert(`aga:${aga}
                aga1:${aga1}
                aga2:${aga2}
            `)
        },
        fu3(){

        },
        sendRequest(){
                this.Axios({
                    method:'GET',//请求方式
                    url:'',//请求的接口地址
                    data:{//请求携带的参数
                        name:'a',
                        age:10
                    },
                }).then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log(err)
                })
            },
        sendGetRequest(){
                this.Axios({
                    method:'GET',
                    url:'/api/carts/queryCartsData',
                    params:{
                        name:'a',
                        age:10
                    }
                }).then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log(err)
                })
            },
        sendPostRequest(){
                this.Axios({
                    method:'POST',
                    url:'/api/carts/addGoods',
                    data:{
                        name:"a",
                        age:10
                    }
                }).then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log(err)
                })
            }
    }
}
</script>
<style lang="scss" scoped>

</style>