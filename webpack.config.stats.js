const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const prod = require('./webpack.prod.js');

module.exports = env =>
  prod(
    env,
    {},
    {
      plugins: [new BundleAnalyzerPlugin()],
    },
  );
