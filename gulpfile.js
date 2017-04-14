'use strict';
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    rigger = require("gulp-rigger"),
    prefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');
var path = {
    build: {
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: {
        html:'src/*.html',
        js: 'src/js/main.js',
        libsJs: 'src/js/libs/**/*.js',
        style: 'src/style/main.sass',
        style: 'src/style/listing.sass',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch: {
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.*',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};
 gulp.task('js', function() {
        return gulp.src(path.src.libsJs)
            .pipe(concat('libs.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest(path.build.js));
    });

gulp.task('sass',function(){
    gulp.src(path.src.style)
        .pipe(sass().on('error',sass.logError))
        .pipe(prefixer())
        .pipe(gulp.dest(path.build.css));
});

gulp.task('html',function(){
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
});

gulp.task('img', function () {
    gulp.src(path.src.img) 
        .pipe(imagemin())
        .pipe(gulp.dest(path.build.img))
});

gulp.task('watch', function(){
    gulp.watch(path.src.style,['sass']);
    gulp.watch(path.src.js,['js']);
    gulp.watch(path.src.html,['html']);
    gulp.watch(path.src.img,['image']);
});

gulp.task('build', ['img', 'sass', 'js', 'html']);