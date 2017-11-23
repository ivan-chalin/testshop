const controllers = require('../controllers')
const auth = require('./auth')

module.exports = (app) => {
  app.get('/', controllers.home.index)  
  app.get('/home', controllers.home.index)

  app.get('/register', controllers.users.registerGet)
  app.post('/register', controllers.users.registerPost)
  app.get('/login', controllers.users.loginGet)
  app.post('/login', controllers.users.loginPost)
  app.post('logout', controllers.users.logout) 
}