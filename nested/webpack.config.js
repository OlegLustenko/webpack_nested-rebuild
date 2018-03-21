const path = require('path');

console.log(path.resolve(__dirname, '../core/dist'));
const coreConfig = {
  entry: {
    main: path.resolve('./src/main'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  mode: 'development',
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      store: path.resolve(__dirname, 'src/store'),
      core: path.resolve(__dirname, '../core/dist/bundle.js')
    },
  },
};

module.exports = coreConfig;
