/**
 * @date 2017-02-03 11:46:07
 * @author Seok Kyun. Choi. 최석균 (Syaku)
 */
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const api = 'http://localhost:8080';

module.exports = (env, args, config = {}) =>
  merge(
    common(env, args),
    {
      mode: 'development',
      // devtool: 'inline-source-map',
      devtool: 'cheap-module-source-map',
      entry: './src/index',
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
        contentBase: 'dist',
        proxy: {
          '/api': {
            target: api,
            // pathRewrite: { [`^${apiPath}`]: '' },
            secure: false,
            prependPath: true, // target 에 경로를 사용한다.
          },
        },
      },
    },
    config,
  );
