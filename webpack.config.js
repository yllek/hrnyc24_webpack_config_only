const path = require('path');
const webpack = require('webpack');

module.exports = {
  // TODO: Fill out where your entry point is (i.e. your client/index.js or dist/index.js whatever you want)
  entry: '',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    // TODO: change ./dist to a directory where your index.html file is. This can be done in client or dist as a "best practice"
    path: path.resolve(__dirname, './dist')
  }
};
