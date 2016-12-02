'use strict'

// Load global config and gulp
import config from './config.json'
import gulp from 'gulp'

// Load modules to run tasks from files
import requireDir from 'require-dir'
import runSequence from 'run-sequence'
const tasks = requireDir(__dirname + '/tasks') // eslint-disable-line

// jsdev Watch task
gulp.task('jsdevwatch', () => {
  gulp.watch(config.paths.spec + '**/*[Ss]pec.js', ['jasmine', 'specsjslint'])
  gulp.watch(config.paths.js + '**/*.js', ['jasmine', 'jslint'])
})

// Run tests and watch js/spec files
gulp.task('default', callback => {
  runSequence(
    'jasmine',
    'specsjslint',
    'jslint',
    'jsdevwatch',
    callback
  )
})
