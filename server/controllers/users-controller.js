const encryption = require('../utilities/encryption')
const User = require('mongoose').model('User')
let deal = require('../data/deal') 
let detail = require('../data/detail')

module.exports = {
  registerGet: (req, res) => {
    res.render('register')
  },

  registerPost: (req, res) => {
    let reqUser = req.body 

    if(req.body.username === '' || req.body.firstName === '' || req.body.lastName === '' ||req.body.password === ''){
      res.locals.err = 'invalid data'
      res.render('register')
    } else{

    let salt = encryption.generateSalt()
    let hashedPassword = encryption.generateHashedPassword(salt, reqUser.password)

    User.create({
      username: reqUser.username,
      firstName: reqUser.firstName,
      lastName: reqUser.lastName,
      salt: salt,
      hashedPass: hashedPassword
    }).then(user => {
      req.logIn(user, (err, user) => {
        if (err) {
         res.locals.globalError = err
          res.render('/register', user)
        }

        res.redirect('/')
      })
    })
  }
  },
  loginGet: (req, res) => {
    res.render('login')
  },
  loginPost: (req, res) => {
    let reqUser = req.body
    User
      .findOne({ username: reqUser.username }).then(user => {
        if (!user) {
          res.locals.globalError = 'Invalid user data'
          res.render('login')
          return
        } 

        if (!user.authenticate(reqUser.password)) {
          res.locals.globalError = 'Invalid user data'
          res.render('login')
          return
        }

        req.logIn(user, (err, user) => {
          if (err) {
            res.locals.globalError = err
            res.render('login')
          
          } 

          res.redirect('/')
        })
      })
  },
  logout: (req, res) => {
    req.logout()
    res.redirect('/')
  },
   profil:(req, res)=>{
     let person = req.user._id
     deal.find({user:person}) 
     .populate('detail')
     .then((bag)=>{
       res.render('profil', {purchases:bag})
     })
       
   }
}