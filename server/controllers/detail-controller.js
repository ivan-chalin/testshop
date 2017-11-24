let detail = require('../data/detail')
let usar = require('../data/User')

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
           image:obj.image  
        }).then(()=>{
            res.redirect('/') 
        }) 
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
        car.findById({_id:id})
        .then((data)=> {res.render('car/rent', {data:data})})
    },
    rentvane:(req, res)=>{
        let carid = req.params.id
        let userid = req.user._id
        let days = parseInt(req.body.day) 

        car.findById(carid)
        .then((car)=>{ 
            if(car.isrented){
                res.render('home')
                return
            }
            rent.create({
                user:userid,
                car:carid,
                days:days,
                totalprice:car.priceperday * days   
            }).then(()=>{
                car.isrented = true
                car.save()
                res.redirect('/car/list')
            })
        })
         
    },
    unrent:(req, res)=>{
        let carid = req.params.id
        car.findById(carid)
           .then((kola)=>{
               kola.isrented = false
               kola.save()
               res.redirect('/car/list')
           })
    }
}