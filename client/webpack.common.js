// see https://webpack.js.org/guides/production/

var path = require('path')
var webpack = require('webpack')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

var VaadinIconsPath = path.join(__dirname, 'node_modules', 'vaadin-icons', 'assets', 'fonts')
var BootstrapPath = path.join(__dirname, 'node_modules', 'bootstrap', 'dist', 'css')
var mainPath = path.join(__dirname, 'vue', 'main.js')

var outputDirectories = ['public', 'electron', path.join('../', 'src', 'main', 'webapp')]
var entries = {}
var fileLoaderUseOption = []
Array.from(outputDirectories).forEach((outputDirectory) => {
  entries[outputDirectory] = mainPath

//TODO:fileLoaderUseOption
  // fileLoaderUseOption.push({
  //   loader: 'file-loader',
  //   options: {
  //     outputPath: outputDirectory + path.sep,
  //     context: outputDirectory + path.sep,
  //     name: '../[name].[ext]'
  //   }
  // })
})

var config = {
  entry: entries,
  context: path.join(__dirname, 'vue'),
  // context: path.join(__dirname, 'vue'),
  output: {
    path: __dirname,
    filename: path.join('[name]','app.js')
  },

// // https://webpack.js.org/configuration/plugins/#plugins
//   plugins: [
//     new MiniCssExtractPlugin({
//       // Options similar to the same options in webpackOptions.output
//       // both options are optional
//       filename: '[name].css',
//       chunkFilename: '[id].css',
//     }),
//   ],
  resolve: {
    alias: {
      'configuration': path.join(__dirname, 'configuration.js'),
      
      // https://vuejs.org/v2/guide/installation.html
      'vue$': 'vue/dist/vue.esm.js',

      './Vaadin-Icons.eot': path.join(VaadinIconsPath, 'Vaadin-Icons.eot'),
      './Vaadin-Icons.woff': path.join(VaadinIconsPath, 'Vaadin-Icons.woff'),
      './Vaadin-Icons.ttf': path.join(VaadinIconsPath, 'Vaadin-Icons.ttf'),
      './Vaadin-Icons.svg': path.join(VaadinIconsPath, 'Vaadin-Icons.svg'),

      'bootstrap.css': path.join(BootstrapPath, 'bootstrap.min.css'),
      'bootstrap.min.css.map': path.join(BootstrapPath, 'bootstrap.min.css.map'),
      'animate.css' : path.join(__dirname, 'node_modules', 'animate.css', 'animate.min.css'),

      'services': path.join(__dirname, 'services')
      // 'configuration': path.join()
    }
  },

  module: {
    rules: [
      //https://github.com/babel/babel-loader
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'env']
          }
        }
      },

      // copy fonts to output dir (after resolving their "alias")
      {
          test: /\.(eot|svg|ttf|woff|woff2|map)$/,
          use: [{
            loader: 'file-loader',
            options: {
              // context: 'public',
              name: '[name].[ext]',
              // relative to webpack's output.path
              outputPath: (url) => (path.join(url))
            }
          }]
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              // minimize: true
            }
          }]
      },

      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            presets: ['es2015', 'env']
          }
        }
      }
      // 1 more thing, .babelrc for ES6 support
      // see https://vue-loader.vuejs.org/en/features/es2015.html#configuring-babel-with-babelrc

    ]
  }

};

module.exports = config
