const home = require('./home-controller')
const users = require('./users-controller')
let detail = require('./detail-controller')
let discount = require('./discount-controller')

module.exports = {
  home: home,
  users: users,
  detail: detail,
  discount:discount
}