/* eslint-disable strict, import/no-extraneous-dependencies */
'use strict';

const webpack = require('webpack');
const path = require('path');

const nodeEnv = process.env.NODE_ENV || 'development';

let plugins = [
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.$': 'jquery',
    'window.jQuery': 'jquery',
    Hammer: 'hammerjs',
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv),
    },
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins = plugins.concat(
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      comments: false,
      sourceMap: false,
      mangle: true,
      minimize: true,
    })
  );
} else {
  plugins = plugins.concat([
    function watchTimestamp() {
      this.plugin('watch-run', (watching, callback) => {
        /* eslint-disable no-console */
        console.log(`Begin compile at ${new Date()}`);
        callback();
      });
    },
  ]);
}

module.exports = {
  devtool: 'source-map',
  entry: {
    index: ['./src/index.jsx'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'js/[name].bundle.js',
  },
  contentBase: '.',
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=font/[name].[hash].[ext]',
      },
    ],
  },
  plugins,
};
