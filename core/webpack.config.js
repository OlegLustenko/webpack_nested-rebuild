const path = require('path');

console.log(path.resolve(__dirname, 'src/app-store/store'));

const coreConfig = {
  entry: {
    main: path.resolve('./src/main'),
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    publicPath: '/',
    library: require('./package.json').name,
    libraryTarget: 'umd',
  },
  mode: 'development',
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      store: path.resolve(__dirname, 'src/app-store/store'),
    },
  },
};

module.exports = coreConfig;
