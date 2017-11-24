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

  app.get('/list', controllers.detail.listing)
  app.get('/adddetail', controllers.detail.adddetail)
  app.post('/adddetail', controllers.detail.postdetail)
}