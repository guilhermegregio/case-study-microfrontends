const {
  webpackConfigModuleApp,
} = require('@creditas/microfrontend-webpack-config');

module.exports = webpackConfigModuleApp('inspection-app', {
  output: {
    publicPath: '/inspection',
  },
});
