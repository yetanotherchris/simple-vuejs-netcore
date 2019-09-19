'use strict'

const { VueLoaderPlugin } = require('vue-loader')
const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    './AppClient/app.js'
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'wwwroot/dist/'),
    publicPath: '/dist/'
},
  plugins: [
    new VueLoaderPlugin()
  ]
}