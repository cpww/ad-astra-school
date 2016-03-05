'use strict';

var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    sourcemaps    = require('gulp-sourcemaps'),
    autoprefixer  = require('gulp-autoprefixer');

var sources = {
  sass: './custom/styles/{,*/}*.{scss,sass}'
};

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

// Gulp Sass Task
gulp.task('sass', function() {
  gulp.src(sources.sass)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./styles/'));
});

gulp.task('watch', function () {
  gulp.watch(sources.sass, ['sass']);
});

gulp.task('default', ['sass', 'watch']);
