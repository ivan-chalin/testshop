let detail = require('../data/detail')
let usar = require('../data/User')
let deal = require('../data/deal')

module.exports = {
    all:(req, res)=>{
        detail.find({discount:{$gt:0}}) 
        .then((data)=>{ 
            res.render('new/discount', {data:data, kind:"all"})

        })
    },

    bedroom:(req, res)=>{
        detail.find({ kind:"bedroom", discount:{$gt:0}}) 
        .then((data)=>{ 
            res.render('new/discount', {data:data})

    })
 },

   kitchen:(req, res)=>{
    detail.find({ kind:"kitchen", discount:{$gt:0}}) 
    .then((data)=>{ 
        res.render('new/discount', {data:data})

      })
    },
    
    livingroom:(req, res)=>{
        detail.find({ kind:"livingroom", discount:{$gt:0}}) 
        .then((data)=>{ 
            res.render('new/discount', {data:data})

    })
 },

}