//Variaveis

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var clean = require('gulp-clean');

//Tarefas
gulp.task('copy', ['clean'], function(){
    gulp.src('src/img/**/*')
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function(){
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('build-img', ['copy'], function(){
    return gulp.src('dist/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});
