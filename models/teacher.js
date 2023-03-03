const mongoose = require('mongoose')
const teachSchema = new mongoose.Schema({
    name : "String",
    email : "String",
    password : "String",
    course : "String"
})
module.exports = mongoose.model('teacher',teachSchema)