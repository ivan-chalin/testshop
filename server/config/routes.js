const controllers = require('../controllers')
const auth = require('./auth')

module.exports = (app) => {
  app.get('/', controllers.home.index)  
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

  app.get('/new/buy/:id',auth.isAuthenticated, controllers.detail.show)

  app.post('/shopping/:id', controllers.detail.shopping)




  app.get('/new/home', controllers.home.home)
  app.get('/new/kitchen', controllers.detail.kitchen)
  app.get('/new/bedroom', controllers.detail.bedroom)

}