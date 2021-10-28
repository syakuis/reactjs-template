/**
 * @date 2017-02-03 11:46:07
 * @author Seok Kyun. Choi. 최석균 (Syaku)
 */
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = (env, args, options, config = {}) =>
  merge(
    common(env, args, options),
    {
      mode: 'development',
      devtool: 'inline-source-map',
      // devtool: 'cheap-module-source-map',
      output: {
        pathinfo: true,
      },
      plugins: [
        new webpack.LoaderOptionsPlugin({
          debug: true,
        }),
        new webpack.HotModuleReplacementPlugin(),
      ],
      module: {
        rules: [
          {
            test: /\.html$/i,
            use: {
              loader: 'html-loader',
            },
          },
        ],
      },
      devServer: {
        port: 9000,
        historyApiFallback: true,
        // contentBase: 'dist',
        static: {
          directory: path.join(__dirname, 'dist'),
        },
      },
    },
    config,
  );
