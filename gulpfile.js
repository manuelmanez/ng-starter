var gulp = require('gulp');
var webserver = require('gulp-webserver');
var less = require('gulp-less');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var imagemin = require('gulp-imagemin');
var del = require('del');
var uglify = require('gulp-uglify');
var cleancss = require('gulp-clean-css');
var rev = require('gulp-rev');
var usemin = require('gulp-usemin');
var notify = require('gulp-notify');
var ngannotate = require('gulp-ng-annotate');
var shell = require('gulp-shell');

/*
 * precompile less
 */
gulp.task('less-dev', ['jshint'], function() {
  return gulp.src('app/assets/styles/less/master.less') // return to finish the action when is a dependency in another task
    .pipe(less())
    .pipe(gulp.dest('app/assets/styles/css/'));
});

/*
 * linter javascript files
 */
gulp.task('jshint', function() {
  return gulp.src(['app/src/**/*.js', 'app/assets/scripts/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'))
    .on('error', notify.onError(function(error) {
      return {
        title: "Javascript linter error",
        message: error.message
      };
    }));
});

/*
 * create server and open browser
 */
gulp.task('webserver-dev', ['less-dev'], function() {
  gulp.src('app')
    .pipe(webserver({
      host: 'localhost',
      port: 8000,
      open: true,
      livereload: true,
      directoryListing: false
    }))
    .pipe(notify({
      title: "Server",
      message: "server running on development with live reload"
    }));
});

/*
 * compress images and save in dist/images folder
 */
gulp.task('imagemin', function() {
  gulp.src('app/assets/images/**/*')
    .pipe(imagemin({
      interlaced: true,
      progressive: true,
      optimizationLevel: 5,
      verbose: true
    }))
    .pipe(notify({
      title: "Minimize images",
      message: "task completed",
      onLast: true
    }))
    .pipe(gulp.dest('dist/images'));
});

/*
 * delete all files in dist folder
 */
gulp.task('clean', function() {
  return del.sync(['dist/*']);
});

/*
 * Copy all fonts to dist/fonts
 */
gulp.task('copyfonts', function() {
  gulp.src(['app/assets/bower_components/bootstrap/fonts/**/*',
      'app/assets/bower_components/font-awesome/fonts/**/*'
    ])
    .pipe(notify({
      title: "Copy fonts",
      message: "task completed",
      onLast: true
    }))
    .pipe(gulp.dest('dist/fonts'));
});

/*
 * minify css, uglify js, rename with a revision random number,
 * copy to dist and reference links and scripts in index.html
 */
gulp.task('usemin', ['less-dev'], function() {
  gulp.src('app/index.html')
    .pipe(usemin({
      css: [cleancss(), rev()],
      js: [ngannotate(), uglify(), rev()],
      png: [rev()]
    }))
    .pipe(notify({
      title: "Minify css - Uglify js",
      message: "task completed",
      onLast: true
    }))
    .pipe(gulp.dest('dist/'))
})

/*
 * copy favicon to dist folder
 */
gulp.task('favicon', function() {
  gulp.src('app/favicon.*')
    .pipe(notify({
      title: "Copy favicon",
      message: "task completed",
      onLast: true
    }))
    .pipe(gulp.dest('dist/'));
})

/*
 * 1. javascript linter watching js files
 * 2. create server
 * 3. precompile less watching less files
 */
gulp.task('dev', ['webserver-dev'], function() {
  gulp.watch('app/assets/styles/less/**/*.less', ['less-dev']);
  gulp.watch('app/src/**/*.js', ['jshint']);
  gulp.watch('app/assets/scripts/**/*.js', ['jshint']);
});

/*
 * 1. clean dist folder
 * 2. javascript linter watching js files
 * 3. precompile less watching less files
 * 4. minify css, uglify js, rename with a revision random number,
 *    copy to dist and reference links and scripts in index.html
 * 5. compress images and save in dist/images folder
 * 6. copy all fonts to dist/fonts
 */
gulp.task('dist', ['clean', 'usemin'], function() {
  gulp.start('imagemin', 'copyfonts', 'favicon');
});

gulp.task('utest', shell.task('karma start karma.conf.js'));
