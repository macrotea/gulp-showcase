var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    sass = require("gulp-ruby-sass")
;

//cmd: gulp compress-lib-1
gulp.task('compress-lib-1', function () {
    gulp.src('js/lib-1/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/lib-1'))
});

//cmd: gulp compress-lib-1
//不知道为啥跑不起来，迟点再解决
gulp.task('styles', function () {
    gulp.src('sass/sc1/*.scss')
    .on('error', function (err) {
        console.log(err.message);
    })
    .pipe(sass())
    .pipe(gulp.dest('dist/css/sc1'));
});

gulp.task('watch', function () {
    gulp.watch('js/lib-1/*.js',["compress-lib-1"]);
});

gulp.task("default",["compress-lib-1", "watch"]);

//gulp.task("default",function(){
//    console.log("the default task is running!");
//});