const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',  // best for dev debugging
   output: {
      filename: 'name.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      clean: true,
    },
  devServer: {
    static: './dist',
    hot: true,
    open: true,
    port: 3000,
    historyApiFallback: true,  // for react-router
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // inject styles into DOM in dev
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
});
