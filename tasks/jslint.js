// Load global config and gulp
import config from '../config.json'
import gulp from 'gulp'

import standard from 'gulp-standard'

// Linting task
gulp.task('jslint', () => {
  return gulp.src(config.paths.js + '**/*.js')
  .pipe(standard())
  .pipe(standard.reporter('default', {
    breakOnError: false
  }))
})

// Linting task
gulp.task('specsjslint', () => {
  return gulp.src(config.paths.spec + '**/*.js')
  .pipe(standard())
  .pipe(standard.reporter('default', {
    breakOnError: false
  }))
})
