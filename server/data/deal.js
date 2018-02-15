const mongoose = require('mongoose')
let objectid = mongoose.Schema.Types.ObjectId


let dealSchema = new mongoose.Schema({
    user:{type:objectid, ref:'User', required:true},
    detail:{type:objectid, ref:'detail', required:true},
    date:{type:String, required:true},
    totalprice:{type:Number, required:true}, 

})

let deal = mongoose.model('deal', dealSchema)

module.exports = deal