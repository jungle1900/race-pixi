const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/race-pixi.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'race-pixi.js'
  },
  devtool: "source-map",
  devServer: {
    overlay: true,
    compress: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new CopyWebpackPlugin([
      { from: 'assets', to: '' },
    ], {
      ignore: ['.DS_Store']
    }),
  ]
}
