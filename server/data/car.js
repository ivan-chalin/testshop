const mongoose = require('mongoose')


let carSchema = new mongoose.Schema({
   model:{type:String, required:true},
   year:{type:Number, required:true},
   priceperday:{type:Number, required:true},
   image:{type:String, required:true},
   isrented:{type:Boolean, default:false}
})

let car = mongoose.model('car', carSchema)

module.exports = car