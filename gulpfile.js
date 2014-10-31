/*
代码混淆： gulp-uglify
sass编译： gulp-sass
js代码连接： gulp-concat
js代码检查： gulp-jshint
图片压缩： gulp-imagemin
*/

var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    jshint = require('gulp-jshint');
    sass = require('gulp-sass');

var paths = {
    scripts:['assets/js/*.js'],
    sass:['assets/sass/*.scss'],
    css:['assets/css/*.css'],
    images:['assets/img/*']
}

gulp.task('scripts', function () {
    gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('lint', function () {
    gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('css', function () {
});

gulp.task('images', function () {
    gulp.src(paths.images)
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('sass', function () {
    gulp.src(paths.sass)
    .pipe(sass({
        onSuccess:function(){
            errLogToConsole: true,
            console.log("sass success");
        }
    }))
    //.pipe(uglify())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function () {
    gulp.watch(paths.scripts, ['scripts','lint']);
    gulp.watch(paths.css, ['css']);
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.images, ['images']);
});

gulp.task("default", ["scripts", "lint",'css', 'sass', 'images'], function () {
    console.log("the default task is finish!");
});
