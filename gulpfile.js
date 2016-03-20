'use strict';

var gulp          = require('gulp'),
    shell 			  = require('gulp-shell'),
    replace       = require('gulp-replace-task'),
    envVars       = require('./.env'),
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
gulp.task('sass', function  () {
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

gulp.task('localTemplateConf', function() {
	gulp.src('template.conf')
		.pipe(replace({
			patterns: [
				{
					match: /SITEURL/g,
					replacement: function () {
						return envVars.url;
					}
				},
				{
					match: /PASSWORD/g,
					replacement: function () {
						return envVars.password;
					}
				}
			]
		}))
		.pipe(gulp.dest("./"));
});

gulp.task('templateConfPushPrep', function() {
gulp.src('template.conf')
    .pipe(replace({
			patterns: [
				{
					match: /http[^"]+/g,
					replacement: function () {
						return 'SITEURL';
					}
				},
				{
					match: /"password".*/g,
					replacement: function () {
						return '"password": "PASSWORD"';
					}
				}
			]
    }))
		.pipe(gulp.dest("./"));
});

gulp.task('disablePushProd', function () {
  return gulp.src('*.js', {read: false})
    .pipe(shell([
      'echo hello world'
			// write git command to break push to origin
      //'echo <%= f(file.path) %>',
      //'ls -l <%= file.path %>'
    ], {
      templateData: {
        f: function (s) {
          return s.replace(/$/, '.bak')
        }
      }
    }))
})
gulp.task('disablePushDev', function () {
  return gulp.src('*.js', {read: false})
    .pipe(shell([
      'echo hello world'
			// write git command to break push to origin
      //'echo <%= f(file.path) %>',
      //'ls -l <%= file.path %>'
    ], {
      templateData: {
        f: function (s) {
          return s.replace(/$/, '.bak')
        }
      }
    }))
})
gulp.task('enablePushProd', function () {
  return gulp.src('*.js', {read: false})
    .pipe(shell([
      'echo hello world'
			// write git command to break push to origin
      //'echo <%= f(file.path) %>',
      //'ls -l <%= file.path %>'
    ], {
      templateData: {
        f: function (s) {
          return s.replace(/$/, '.bak')
        }
      }
    }))
})
gulp.task('enablePushDev', function () {
  return gulp.src('*.js', {read: false})
    .pipe(shell([
      'echo hello world'
			// write git command to break push to origin
      //'echo <%= f(file.path) %>',
      //'ls -l <%= file.path %>'
    ], {
      templateData: {
        f: function (s) {
          return s.replace(/$/, '.bak')
        }
      }
    }))
})
gulp.task('pushDev', function () {
  return gulp.src('*.js', {read: false})
    .pipe(shell([
      'echo hello world'
			// write git command to break push to origin
      //'echo <%= f(file.path) %>',
      //'ls -l <%= file.path %>'
    ], {
      templateData: {
        f: function (s) {
          return s.replace(/$/, '.bak')
        }
      }
    }))
})
gulp.task('pushProd', function () {
  return gulp.src('*.js', {read: false})
    .pipe(shell([
      'echo hello world'
			// write git command to break push to origin
      //'echo <%= f(file.path) %>',
      //'ls -l <%= file.path %>'
    ], {
      templateData: {
        f: function (s) {
          return s.replace(/$/, '.bak')
        }
      }
    }))
})
 
