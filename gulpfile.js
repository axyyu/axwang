var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var minify = require('gulp-minifier');

gulp.task('default', function() {
	gulp.watch('./dev/sass/*.scss', ['sass']);
	gulp.watch('./dev/templates/*.pug', ['pug']);
});

gulp.task('sass', function () {
  return gulp.src('./dev/sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./w4v3s.github.io/css'));
});

gulp.task('pug', function () {
  return gulp.src('./dev/templates/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./w4v3s.github.io/'));
});
