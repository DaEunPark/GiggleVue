const path = require('path')

module.exports = {
  devServer: {
    host: '127.0.0.1',
    contentBase: path.join(__dirname, './'),
    compress: true,
    hot: true,
    inline: true,
    port: 9000,
    open: true
  }
}
