let detail = require('../data/detail') 
let deal = require('../data/deal') 

module.exports = {
   index: (req, res) => { 
     if(req.user === undefined || req.user.username !='Admin') {
     res.render('home') 
     }
     else{ 
       deal.find({}) 
       .populate('detail')
       .then((data)=>{ 
         res.render('adminpanel', {stock:data})
       })
       
     } 
   },
   
   home:(req, res) => { 
    if(req.user === undefined || req.user.username !='Admin') {
    res.render('new/home') 
    }
    else{ 
      deal.find({}) 
      .populate('detail')
      .then((data)=>{ 
        res.render('adminpanel', {stock:data})
      })
      
    } 
  }
 }