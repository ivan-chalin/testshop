let detail = require('../data/detail') 
let deal = require('../data/deal') 

module.exports = {
   index: (req, res) => { 
     if(req.user === undefined || req.user.username !='admin') {
     res.render('home') 
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