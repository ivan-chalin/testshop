const mongoose = require('mongoose')


let detailSchema = new mongoose.Schema({
   name:{type:String, required:true}, 
   price:{type:Number, required:true},
   image:{type:String, required:true},
   count:{type:Number,required:true},
   kind:{type:String}
})

let detail = mongoose.model('detail', detailSchema)

module.exports = detail