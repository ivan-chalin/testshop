let detail = require('../data/detail')
let usar = require('../data/User')
let deal = require('../data/deal')

module.exports = {
    all:(req, res)=>{
        let page = parseInt(req.query.page) || 1
        let size = 2

        detail.find({discount:{$gt:0}})
        .skip((page - 1)*size)
        .limit(size) 
        .then((data)=>{ 
            res.render('new/discount', {data:data, kind:"all",
            prevpage: page -1,
            nextpage: page +1
        })

        })
    },

    bedroom:(req, res)=>{
        let page = parseInt(req.query.page) || 1
        let size = 2
        detail.find({ kind:"bedroom", discount:{$gt:0}})
        .skip((page - 1)*size)
        .limit(size)  
        .then((data)=>{ 
            res.render('new/discount', {data:data,
                prevpage: page -1,
                nextpage: page +1
            })

    })
 },

   kitchen:(req, res)=>{
    let page = parseInt(req.query.page) || 1
    let size = 2

    detail.find({ kind:"kitchen", discount:{$gt:0}})
    .skip((page - 1)*size)
    .limit(size)  
    .then((data)=>{ 
        res.render('new/discount', {data:data,
            prevpage: page -1,
            nextpage: page +1
        })

      })
    },
    
    livingroom:(req, res)=>{ 
        let page = parseInt(req.query.page) || 1
        let size = 2

        detail.find({ kind:"livingroom", discount:{$gt:0}})
        .skip((page - 1)*size)
        .limit(size)  
        .then((data)=>{ 
            res.render('new/discount', {data:data,
                prevpage: page -1,
                nextpage: page +1
            })

    })
 },

 discounter:(req, res)=>{ 
     let param = req.params.data
    let page = parseInt(req.query.page) || 1
    let size = 2

    detail.find({ kind:param, discount:{$gt:0}})
    .skip((page - 1)*size)
    .limit(size)  
    .then((data)=>{ 
        res.render('new/discount', {data:data,
            prevpage: page -1,
            nextpage: page +1
        })

})
},

}