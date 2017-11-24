const home = require('./home-controller')
const users = require('./users-controller')
let detail = require('./detail-controller')

module.exports = {
  home: home,
  users: users,
  detail: detail
}