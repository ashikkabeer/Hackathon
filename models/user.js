const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name : "String",
    email : "String",
    password : "String",
    DOB : "Date",
    Points : {
        type : Number,
        default : 0
    }
})
module.exports = mongoose.model('user',userSchema)