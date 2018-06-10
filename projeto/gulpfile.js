//Variaveis

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

//Tarefas

//Cópia
gulp.task('copy', function(){
    gulp.src('src/img/**/*')
        .pipe(gulp.dest('dist'));
});

//Otimização de imagens
gulp.task('build-img', function(){
    gulp.src('dist/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});
