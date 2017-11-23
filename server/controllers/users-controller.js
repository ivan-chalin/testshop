const encryption = require('../utilities/encryption')
const User = require('mongoose').model('User')
let renting = require('../data/renting')

module.exports = {
  registerGet: (req, res) => {
    res.render('register')
  },

  registerPost: (req, res) => {
    let reqUser = req.body
    // Add validations!

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
     let userid = req.user._id
     renting.find({user:userid})
          .populate('car') 
          .then((rentings)=>{ 
            if(rentings = []){
              console.log('nqma')
              res.render('profil',{obj:'nqmate naeti koli'});
              return
            }
            let rez = []
            let totcena = []
            for(let i of rentings){rez.push(i.days), totcena.push(i.totalprice)} 
            res.render('profil',{ userdata:rentings, countday:rez.reduce((a,b)=>a + b), tot:totcena.reduce((a,b)=>a + b)})
             
          })
   }
}