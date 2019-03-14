var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  CONFIG_DATA:{
    httpUrl:'"https://www.apiopen.top"',
    imgUrl:'"www.img.cn"',
    otherData:{}
  }
})
