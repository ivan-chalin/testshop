let detail = require('../data/detail')
let usar = require('../data/User')
let deal = require('../data/deal')

module.exports = {
    adddetail:(req, res)=>{
        res.render('adddetail')
    },
    postdetail:(req, res)=>{
        let obj = req.body
        detail.create({
           name:obj.name,
           price:obj.price,
           count:obj.count,
           image:obj.image,
           kind: obj.kind,
           discount:obj.discount
        }).then(()=>{
            res.redirect('/') 
        }) 
},

    edit:(req,res)=>{
        detail.find({})
        .then((data)=>{
            res.render('edit', {data:data})
        })
      },

    remove:(req,res)=>{
      let ID = req.params.id

     detail.findById({_id:ID})
      .then((data)=>{ 
          data.remove()
           res.redirect('/edit')
      })  
    },

    editproduct:(req, res)=>{
       let ID = req.params.id

       detail.findById({_id:ID})
       .then((data)=>{
           res.render('editProduct',{data:data})
       })
    },

    postEdit:(req, res)=>{
       var obj = req.body

       detail.update({_id:obj.id}, {$set:{
        name:obj.name,
        price:obj.price,
        count:obj.count,
        image:obj.image,
        kind: obj.kind,
        discount:obj.discount
       }})
       .then(()=>{res.redirect('/')})
    },
    listing:(req, res) =>{
        let page = parseInt(req.query.page) || 1
        let size = 2

        detail.find({})
        .sort('price') 
        .then((data)=>{ 
            let count = []
            for(let i = 0; i <= data.length / 2;i++){count.push(i + 1)}
            res.render('list', {produkt:data.slice((page -1)*size, size * page),
                 prevpage: page - 1, 
                 nextpage:page + 1,
                 pg: count
                }   
        )})
    },

    show:(req, res)=>{
        let id = req.params.id
        detail.findById({_id:id})
        .then((data)=> {res.render('new/buy', {data:data})})
    },
    shopping:(req, res)=>{
       let detailid = req.params.id
       let userid = req.user._id 
       detail.findOne({_id:detailid}) 
       .then((produkt)=>{
           deal.create({
            user:userid,
            detail:detailid,
            date:new Date().toDateString(),
            totalprice:produkt.price  
           })
        let count = produkt.count 
         produkt.count = count -1
         produkt.save()
           res.render('home', {tanks:'thank you for your purchase'})
       }) 
     
    },

    kitchen:(req, res)=>{
        let page = parseInt(req.query.page) || 1
        let size = 2

        detail.find({kind:"kitchen"})
        .skip((page - 1)*size)
        .limit(size)
        .then((data)=>{
            res.render('new/kitchen', {data:data,
                 prevpage: page -1,
                 nextpage: page +1
            })
        })
    },

    bedroom:(req, res)=>{
        let page = parseInt(req.query.page) || 1
        let size = 2

        detail.find({kind:"bedroom"})
        .skip((page - 1)*size)
        .limit(size)
        .then((data)=>{ 
            res.render('new/bedroom', {data:data,
                prevpage: page -1,
                nextpage: page +1
            })
        })
    },

    livingroom:(req, res)=>{
        let page = parseInt(req.query.page) || 1
        let size = 2

        detail.find({kind:"livingroom"})
        .skip((page - 1)*size)
        .limit(size)
        .then((data)=>{
            res.render('new/livingroom', {data:data,
                prevpage: page -1,
                nextpage: page +1
            })
        })
    },

    listed:(req, res)=>{
        let page = parseInt(req.query.page) || 1
        let size = 2

        detail.find({})
        .sort('price') 
        .then((data)=>{ 
            let count = []
            for(let i = 0; i <= data.length / 2;i++){count.push(i + 1)}
            res.render('new/listing', {produkt:data.slice((page -1)*size, size * page),
                 prevpage: page - 1, 
                 nextpage:page + 1,
                 pg: count
                }   
        )})
    }
 }