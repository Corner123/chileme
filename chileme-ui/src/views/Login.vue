<template lang="pug">
    div.login
       div.loginBox
            div.icon.el-icon-food 
            el-form(:model="form",:rules="rules",ref="Form",label-width="100px")
                el-form-item(label="用户名" prop="username")
                    el-input(v-model="form.username")
                el-form-item(label="密码" prop="password")
                    el-input(type='password' v-model="form.password")          
                el-form-item
                    el-button(type="primary" @click="loginHandle('Form')") 登录
                    el-button(@click="resetHandle('Form')") 重置
            el-link(@click='jumpRegister') 点击登录
</template>
<script>
export default {
    data(){
        return{
            form:{
                username:'',
                password:'',
            }
        }
    },
    methods:{
        loginHandle(){
            alert('登录')
        },
        resetHandle(formName){
             this.$refs[formName].resetFields()
        },
        jumpRegister(){
            this.$router.push('/register')
        }
    }
}
</script>
<style lang="scss" scoped>
.login{
    height: 100%;
    background: rgb(245, 245, 245);
    display:flex;
    justify-content: center;
    align-items: center;
    .loginBox{
        width:800px;
        height: 450px;
        .icon{
            width: 120px;
            height: 120px;
            line-height: 120px;
            font-size: 100px;
            background: yellow;
            color: #fff;
            border-radius: 50%;
            margin-top: 20px;
        }
        .el-form{
            width:450px;
            margin:30px auto 10px;
        }
    }
}
</style>