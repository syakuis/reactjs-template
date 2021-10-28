const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const dev = require('./webpack.dev.js');
const prod = require('./webpack.prod.js');

module.exports = (env, args) => {
  const { analyzed } = env;
  const { mode, publicPath: aPublicPath, __dirbase } = args;
  const dirbase = __dirbase || __dirname;

  // url 로 접근할때 경로를 의미한다.
  // 모든 publicPath 는 통일한다.
  const publicPath = process.env.ASSET_PATH || aPublicPath || '/';

  const envPath = `./environments/.env${mode ? `.${mode}` : ''}`;

  const options = { publicPath, envPath, dirbase };

  let config = {};
  if (analyzed === true) {
    config = {
      plugins: [new BundleAnalyzerPlugin()],
    };
  }

  if (mode === 'development') {
    return dev(env, args, options, config);
  }

  if (mode === 'production') {
    return prod(env, args, options, config);
  }
};
