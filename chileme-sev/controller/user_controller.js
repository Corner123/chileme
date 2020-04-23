//引入model文件夹中定义好的Schema
//构造中间件


//注册
const register=async ctx=>{
    let data=ctx.request.body
    //1.验证数据是否合法   账号，密码，手机号（格式、手机号唯一性）
    ctx.body='register！'
}


//登录
const login=async ctx=>{
    let data=ctx.request.body
    ctx.body='login!'
}