const { createWebpackAliases } = require('./webpack.helpers');

// Export aliases
module.exports = createWebpackAliases({
  '@assets': 'assets',
  '@components': 'src/renderer/app/components',
  '@layouts': 'src/renderer/app/layouts',
  '@icons': 'src/renderer/app/icons',
  '@pages': 'src/renderer/app/pages',
  '@router': 'src/renderer/app/router',
  '@common': 'src/common',
  '@main': 'src/main',
  '@renderer': 'src/renderer',
  '@src': 'src',
});
