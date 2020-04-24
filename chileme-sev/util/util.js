//工具文件

//验证账号的正则
const regUsername=/^[a-zA-Z]\w{3,15}$/
//验证密码的正则
const regPassword=/[0-9][a-zA-Z]{6,12}/
//验证手机号的正则
const regMobile=/^13(\d{9})$|^15(\d{9})$|^189(\d{8})$/


module.exports={
    regUsername,
    regPassword,
    regMobile,
}