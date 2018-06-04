// see https://webpack.js.org/guides/production/
// https://medium.com/paramsingh-66174/pugjs-primer-for-your-next-angular-4-project-409ee6696fad

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const angularWPConfig = require('./webpack.angular.js')

const VaadinIconsPath = path.join(__dirname, 'node_modules', 'vaadin-icons', 'assets', 'fonts')
const MaterialIconsPath = path.join(__dirname, 'node_modules', 'material-design-icons', 'iconfont')
const BootstrapPath = path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')


var config = {

// https://webpack.js.org/configuration/plugins/#plugins
  plugins: [
  ],
  resolve: {
    "extensions": [ '.ts', '.tsx', ".js", ".json", ".styl"],
    // "extensions": [".styl"],
    alias: {
      'models': path.join('src', 'app', 'models', 'index.js'),

      'Vaadin-Icons.eot': path.join(VaadinIconsPath, 'Vaadin-Icons.eot'),
      'Vaadin-Icons.woff': path.join(VaadinIconsPath, 'Vaadin-Icons.woff'),
      'Vaadin-Icons.ttf': path.join(VaadinIconsPath, 'Vaadin-Icons.ttf'),
      'Vaadin-Icons.svg': path.join(VaadinIconsPath, 'Vaadin-Icons.svg'),

      'MaterialIcons-Regular.eot': path.join(MaterialIconsPath, 'MaterialIcons-Regular.eot'),
      'MaterialIcons-Regular.woff2': path.join(MaterialIconsPath, 'MaterialIcons-Regular.woff2'),
      'MaterialIcons-Regular.woff': path.join(MaterialIconsPath, 'MaterialIcons-Regular.woff'),
      'MaterialIcons-Regular.ttf': path.join(MaterialIconsPath, 'MaterialIcons-Regular.ttf')

    }
  },

  module: {
    rules: [
      // https://medium.com/paramsingh-66174/pugjs-primer-for-your-next-angular-4-project-409ee6696fad
      {
        "test": /\.pug$/,
        "loader": ['raw-loader', 'pug-html-loader']
      },
      // https://github.com/shama/stylus-loader
      {
        test: /\.styl$/,
        use: [
          // 'style-loader',
          // 'css-loader',
          {
            loader: 'stylus-loader',
            // options: {
            //   use: [stylus_plugin()],
            // },
          },
        ]
      }

    ]
  }

  // https://github.com/shama/stylus-loader#prefer-webpack-resolving

};

module.exports = merge(angularWPConfig, config)
