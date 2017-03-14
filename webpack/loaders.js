const path = require('path')
const sources = path.resolve('./src')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.tslint = {
  test: /\.tsx?$/,
  loader: 'tslint',
  include: [
    sources,
  ],
}

exports.tsx = {
  test: /\.tsx?$/,
  loaders: ['react-hot', 'awesome-typescript-loader'],
  include: [
    sources,
  ],
}

exports.html = {
  test: /\.html$/,
  loader: 'raw',
  include: [
    sources,
  ],
}

exports.css = {
  test: /\.css$/,
  loader: process.env.NODE_ENV === 'development' ?
    'style!css!postcss'
    : ExtractTextPlugin.extract('style', 'css!postcss'),
  exclude: /node_modules/,
}

function makeUrlLoader (pattern) {
  return {
    test: pattern,
    loader: 'url',
    exclude: /node_modules/,
  }
}
exports.image = makeUrlLoader(/\.(png|jpg)$/)
exports.svg = makeUrlLoader(/\.svg$/)
exports.eot = makeUrlLoader(/\.eot$/)
exports.woff = makeUrlLoader(/\.woff$/)
exports.woff2 = makeUrlLoader(/\.woff2$/)
exports.ttf = makeUrlLoader(/\.ttf$/)
