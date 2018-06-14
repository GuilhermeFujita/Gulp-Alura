//Variaveis

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var htmlReplace = require('gulp-html-replace');
var uglify = require('gulp-uglify');

//Tarefas
gulp.task('default', ['copy'], function(){
    gulp.start('build-img', 'build-html', 'build-js');
})

gulp.task('copy', ['clean'], function(){
    gulp.src('src/**/*')
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function(){
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('build-img', function(){
    return gulp.src('dist/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('build-js', function(){
    gulp.src('dist/js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('build-html', function(){
    gulp.src('dist/**/*.html')
        .pipe(htmlReplace({
            'js': 'js/all.js'
        }))
        .pipe(gulp.dest('dist/'));
});