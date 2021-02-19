

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: { main: path.resolve(__dirname, './src/main.js')},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\\.(png|jpe?g|gif|mp3)$/i,
        use: 'file-loader'
      },
      {
        test: /\\.css$/,
        use:
          [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }

    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}),
    // new BundleAnalyzerPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      generateStatsFile: true,
      statsOptions: { source: false }
    }),
  ],
  devServer: {
    port: 9000
  }
};