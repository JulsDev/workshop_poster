const path = require('path');
const webpack = require('webpack');

const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const NODE_ENV = process.env.NODE_ENV;
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: NODE_ENV ? NODE_ENV : 'development',

  entry: path.resolve(__dirname, 'src/index.tsx'),

  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'build'),
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      public: path.resolve('./public/'),
      src: path.resolve('./src/'),
      assets: path.resolve('./src/assets/'),
      components: path.resolve('./src/components/'),
      pages: path.resolve('./src/pages/'),
      styles: path.resolve('./src/styles/'),
      utils: path.resolve('./src/utils/'),
    },
  },

  optimization: isProduction
    ? {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              // Use multi-process parallel running to improve the build speed
              parallel: true,
              cache: true, // Enable file caching
            },
          }),
        ],
      }
    : {
        splitChunks: {
          chunks: 'all',
        },
      },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      minify: isProduction
        ? {
            removeComments: true,
            collapseWhitespace: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          }
        : null,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public/manifest.json',
          to: path.resolve(__dirname, 'build'),
        },
        {
          from: 'src/assets',
          to: path.resolve(__dirname, 'build'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new webpack.DefinePlugin({
      NODE_ENV: process.env.NODE_ENV || 'development',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: [/node_modules/],
        use: ['ts-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-modules-typescript-loader?module',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]__[hash:base64:5]',
                auto: /\.module\.\w+$/i,
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: 'file-loader',
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: ['url-loader'],
      },
    ],
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    // host: '',
    port: 8080,
    open: true,
    hot: !isProduction,
  },
};
