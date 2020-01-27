var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //...
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000
  },
  plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        }),
    ],
};