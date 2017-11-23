const home = require('./home-controller')
const users = require('./users-controller')
let cars = require('./cars-controller')

module.exports = {
  home: home,
  users: users,
  cars: cars
}