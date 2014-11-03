/*
代码混淆： gulp-uglify
sass编译： gulp-sass
js代码连接： gulp-concat
js代码检查： gulp-jshint
图片压缩： gulp-imagemin
防止因错中断管道： gulp-plumber
*/

var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    jshint = require('gulp-jshint'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload'),
    minifyCSS = require('gulp-minify-css'),
    sass = require('gulp-sass');

var paths = {
    htmls: ['index.html'],
    scripts: ['assets/js/*.js'],
    sass: ['assets/sass/*.scss'],
    styles: ['assets/css/*.css'],
    images: ['assets/img/*']
}

gulp.task('scripts', function () {
    gulp.src(paths.scripts)
    //plumber放在其他管道之前
    .pipe(plumber())
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload());
});

gulp.task('lint', function () {
    gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('css', function () {
    gulp.src(paths.styles)
    .pipe(minifyCSS({keepBreaks: false}))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload());
});

gulp.task('images', function () {
    gulp.src(paths.images)
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('stdist/img'));
});

gulp.task('sass', function () {
    gulp.src(paths.sass)
    .pipe(plumber())
    .pipe(sass({
        onSuccess: function () {
            errLogToConsole: true,
            console.log("sass success");
        }
    }))
    .pipe(minifyCSS({keepBreaks: false}))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload());
});

gulp.task('htmls', function () {
    gulp.src(paths.htmls)
    .pipe(gulp.dest(''))
    .pipe(livereload());
});

gulp.task('watch', function () {
    //var server = livereload();

    gulp.watch(paths.scripts, ['scripts', 'lint']);
    gulp.watch(paths.styles, ['css']);
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.images, ['images']);
    gulp.watch(paths.htmls, ['htmls']);
});

gulp.task("default", ["scripts", "lint", 'sass', 'css', 'images', 'watch'], function () {
    console.log("the default task is finish!");
});
