const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"
          })
        }
      ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: 'jquery',
      "window.jQuery": 'jquery',
      tether: 'tether',
      Tether: 'tether',
      'window.Tether': 'tether',
    })
  ]
};
