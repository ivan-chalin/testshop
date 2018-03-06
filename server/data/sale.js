const mongoose = require('mongoose')
let objectid = mongoose.Schema.Types.ObjectId


let saleSchema = new mongoose.Schema({
    user:{type:objectid, ref:'User', required:true},
    detail:{type:String, required:true},
    date:{type:String, required:true},
    totalprice:{type:Number, required:true}, 

})

let sale = mongoose.model('sale', saleSchema)

module.exports = sale