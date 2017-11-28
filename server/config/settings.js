const path = require('path')

let rootPath = path.normalize(path.join(__dirname, '/../../'))

module.exports = {
  development: {
    rootPath: rootPath, 
    db: 'mongodb://ivo:abvgde123@ds113936.mlab.com:13936/mebel',
    port: 1234
  },
  staging: {
  },
  production: {
    db: 'mongodb://ivo:abvgde123@ds113936.mlab.com:13936/mebel',  
    port: process.env.PORT
  }
}