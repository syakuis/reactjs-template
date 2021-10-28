const path = require('path');
// const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env, args, options) => {
  const { publicPath, envPath, dirbase } = options;

  return {
    entry: './src/index',
    output: {
      filename: '[name].js?hash=[hash]',
      path: path.join(dirbase, 'dist'),
      publicPath,
    },

    plugins: [
      new ESLintPlugin(),
      new Dotenv({
        path: envPath,
      }),
      new FileManagerPlugin({
        events: {
          onStart: {
            delete: [path.join(dirbase, 'dist')],
            mkdir: [path.join(dirbase, 'dist')],
            copy: [
              {
                source: path.join(dirbase, 'src/images'),
                destination: path.join(dirbase, 'dist/images'),
              },
            ],
          },
        },
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css?hash=[hash]',
        chunkFilename: '[id].css',
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(__dirname, '/src/index.html'),
      }),
    ],

    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          include: path.join(dirbase, 'src'),
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                publicPath,
              },
            },
            {
              loader: 'css-loader',
            },
          ],
        },
        {
          test: /.(png|jpg|gif)(\?[a-z0-9]+)?$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath:
                publicPath === '' ? 'images/' : `${publicPath}/images/`,
            },
          },
        },

        {
          test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/',
                publicPath:
                  publicPath === '' ? 'fonts/' : `${publicPath}/fonts/`,
              },
            },
          ],
        },
      ],
    },

    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@': path.resolve(dirbase, 'src'),
      },
    },
  };
};
