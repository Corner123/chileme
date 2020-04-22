/**   用户表
 * 字段	           描述          类型
 *      username    用户名      String
 *      password     密码         String
 *      mobile        手机号       String
 *      createDate  创建时间    Number (时间戳)
 *      lastUpdate  上次更新时间   Number     
*/ 
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = new Schema({
    username: String,
    password: String,
    mobile: String,
    createDate: Number,
    lastUpdate: Number
})

module.exports = mongoose.model('User', user)