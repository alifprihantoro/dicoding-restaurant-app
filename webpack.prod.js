const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const { InjectManifest } = require('workbox-webpack-plugin')
const path = require('path')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    swRegister: path.resolve(__dirname, 'src/scripts/service/swRegister.js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new InjectManifest({
      swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
      swDest: './sw.bundle.js',
    }),
  ],
})
