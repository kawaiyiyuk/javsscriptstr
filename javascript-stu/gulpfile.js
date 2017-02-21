var gulp =require('gulp');
var sass = require('gulp-sass');

gulp.task("sass",function(){
    return gulp.src("../app/**/*.scss")
    .pipe(sass().on("error",sass.logError))
    .pipe(gulp.dest("../app/**/*.scss"))
})

gulp.task("watch",function(){
    gulp.watch("../app/**/*.scss",["sass"])
})

gulp.task("default",["watch","sass"])