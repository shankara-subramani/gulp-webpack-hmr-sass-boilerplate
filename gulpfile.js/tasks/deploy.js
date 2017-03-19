var config  = require('../config')
var ghPages = require('gulp-gh-pages')
var gulp    = require('gulp')
var open    = require('open')
var os      = require('os')
var package = require('../../package.json')
var path    = require('path')
var surge = require('gulp-surge')


var deployTask = function() {
  return surge({
    project: './public',         // Path to your static build directory
    domain: '<yourdomain>.surge.sh'  // Your domain or Surge subdomain
  })
}

gulp.task('deploy', ['production'], deployTask)
module.exports = deployTask
