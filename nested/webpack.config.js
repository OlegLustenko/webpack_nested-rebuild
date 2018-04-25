const path = require('path');
const webpack = require('webpack');

console.log(path.resolve(__dirname, '../core/dist'));
const coreConfig = {
  entry: {
    main: path.resolve('./src/main'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  mode: 'development',
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      store: path.resolve(__dirname, 'src/store'),
      core: path.resolve(__dirname, '../core/dist/bundle.js'),
    },
  },
  devServer: {
    hot: true,
    inline: true,
    publicPath: '/',
    historyApiFallback: true,
    compress: true,    
    contentBase: path.resolve(__dirname, './'),
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

module.exports = coreConfig;
