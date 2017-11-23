const mongoose = require('mongoose')
let objectid = mongoose.Schema.Types.ObjectId


let rentSchema = new mongoose.Schema({
    user:{type:objectid, ref:'User', required:true},
    car:{type:objectid, ref:'car', required:true},
    days:{type:Number, required:true},
    totalprice:{type:Number, required:true}
})

let rent = mongoose.model('rent', rentSchema)

module.exports = rent