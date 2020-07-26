const path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  watch: true,
  watchOptions: {
    poll: 1000
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        include: SRC_DIR,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["babel-plugin-styled-components"]
          }
        }
      }
    ]
  }
}