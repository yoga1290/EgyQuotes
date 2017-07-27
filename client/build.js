var fs = require("fs")
// var browserify = require('browserify')
// var vueify = require('vueify')
// var envify = require('envify/custom')
// var babelify = require("babelify")

var PROD = process.env.NODE_ENV === 'production'


fs.createReadStream('./node_modules/vaadin-icons/assets/fonts/Vaadin-Icons.eot').pipe(fs.createWriteStream('./public/Vaadin-Icons.eot'));
fs.createReadStream('./node_modules/vaadin-icons/assets/fonts/Vaadin-Icons.woff').pipe(fs.createWriteStream('./public/Vaadin-Icons.woff'));
fs.createReadStream('./node_modules/vaadin-icons/assets/fonts/Vaadin-Icons.ttf').pipe(fs.createWriteStream('./public/Vaadin-Icons.ttf'));
fs.createReadStream('./node_modules/vaadin-icons/assets/fonts/Vaadin-Icons.svg').pipe(fs.createWriteStream('./public/Vaadin-Icons.svg'));

fs.createReadStream('./node_modules/bootstrap/dist/css/bootstrap.min.css').pipe(fs.createWriteStream('./public/bootstrap.min.css'));
fs.createReadStream('./node_modules/bootstrap/dist/css/bootstrap.min.css.map').pipe(fs.createWriteStream('./public/bootstrap.min.css.map'));

fs.createReadStream('./node_modules/animate.css/animate.min.css').pipe(fs.createWriteStream('./public/animate.min.css'));

if (PROD) {
  fs.createReadStream('./config/prod.js').pipe(fs.createWriteStream('./vue/config.js'));
} else {
  fs.createReadStream('./config/dev.js').pipe(fs.createWriteStream('./vue/config.js'));
}

// process.env.NODE_ENV = "production"

// browserify({
//     debug: true,
//     entries: ['./vue/main.js']
//   })
//   .transform(babelify.configure({
//     presets: ["es2015"]
//   }))
//   .transform(envify({
//     _: 'purge',
//     NODE_ENV: 'production' //'development'
//   }))
//   .transform(vueify)
//   .bundle()
//   // .pipe(fs.createWriteStream("public/tmp.js"))
//   .pipe(process.stdout)
