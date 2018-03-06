const controllers = require('../controllers')
const auth = require('./auth')

module.exports = (app) => {
  app.get('/', controllers.home.home)  
  app.get('/home', controllers.home.index)

  app.get('/register', controllers.users.registerGet)
  app.post('/register', controllers.users.registerPost)
  app.get('/login', controllers.users.loginGet)
  app.post('/login', controllers.users.loginPost)
  app.get('/logout', controllers.users.logout) 
  app.get('/profil', controllers.users.profil)

  app.get('/list', controllers.detail.listing)
  app.get('/adddetail',auth.isInRole('Admin'), controllers.detail.adddetail)
  app.post('/adddetail',auth.isInRole('Admin'), controllers.detail.postdetail) 
  app.get('/edit',auth.isInRole('Admin'), controllers.detail.edit)
  app.post('/edit/:id', controllers.detail.remove)
  app.get('/editProduct/:id', controllers.detail.editproduct)
  app.post('/postEdit', controllers.detail.postEdit)

  app.get('/new/buy/:id',auth.isAuthenticated, controllers.detail.show)

  app.post('/shopping/:id', controllers.detail.sales)




  app.get('/new/home', controllers.home.home)
  app.get('/new/kitchen', controllers.detail.kitchen)
  app.get('/new/bedroom', controllers.detail.bedroom)
  app.get('/new/livingroom', controllers.detail.livingroom)
  app.get('/new/listing', controllers.detail.listed)
  app.get('/listing', controllers.detail.listed)

  app.get('/new/discount', controllers.discount.all)
  app.get('/new/beddiscount', controllers.discount.bedroom)
  app.get('/new/kitdiscount', controllers.discount.kitchen)
  app.get('/new/livdiscount', controllers.discount.livingroom)

  
}