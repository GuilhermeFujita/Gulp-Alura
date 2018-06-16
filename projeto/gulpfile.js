//Variables
var gulp        = require('gulp');
var imagemin    = require('gulp-imagemin');
var clean       = require('gulp-clean');
var concat      = require('gulp-concat');
var htmlReplace = require('gulp-html-replace');
var uglify      = require('gulp-uglify');
var usemin      = require('gulp-usemin');
var cssmin      = require('gulp-cssmin');
var browserSync = require('browser-sync');

//Tasks
gulp.task('default', ['copy'], function() {
    gulp.start('build-img', 'usemin');
});

gulp.task('copy', ['clean'], function() {
    return gulp.src('src/**/*')
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('build-img', function() {

  return gulp.src('dist/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('usemin', function() {
  return gulp.src('dist/**/*.html')
    .pipe(usemin({
      js: [uglify],
      css: [cssmin]
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('server', function(){
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });
});