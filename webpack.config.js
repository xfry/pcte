const webpack   = require('webpack');
const path      = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'app', 'app-client.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: path.join(__dirname, 'src'),
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: 'babel_cache',
        presets: ['react', 'es2015']
      }
    }]
  },
  
  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    inline: true,
    port: 3333,
  }
};