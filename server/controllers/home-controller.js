 
module.exports = {
   index: (req, res) => { 
     if(req.user === undefined || req.user.username !='admin') {
     res.render('home') 
     }
     else{
       res.render('adminpanel')
     } 
   } 
 }