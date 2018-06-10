//Variaveis

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

//Tarefas

gulp.task('build-img', function(){
    gulp.src('dist/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});
