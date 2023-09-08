const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mf-app',

  exposes: {
    './Component': './src/app/app.component.ts',
    './Module': './src/app/app.module.ts',
    './MainModule': './src/app/pages/main/main.module.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
