'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');

gulp.task('less', function () {
  return gulp.src('./less/**/main.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./src/css'));
});

gulp.watch('./less/**/*.*', gulp.series('less'));