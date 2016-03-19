'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

// lint - error checking

gulp.task('styles:lint', function() {
    gulp.src(path.join(conf.paths.css.src, '/components/**/*.scss'))
        .pipe($.sassLint())
        .pipe($.sassLint.format())
        .pipe($.sassLint.failOnError())
});

// build css from sass

gulp.task('styles:css', function() {
    var sassOptions = {
        style: 'expanded'
    };

    return gulp.src([path.join(conf.paths.css.src, '/styles/**/*.scss')])
        .pipe($.debug())
        .pipe($.sass(sassOptions)).on('error', conf.errorHandler('Sass'))
        .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
        .pipe(gulp.dest(conf.paths.css.dest));
});

// build minified css from css

function minify() {

    return gulp.src([path.join(conf.paths.css.dest, '/**/*.css'), '!' + path.join(conf.paths.css.dest, '/**/*.min.css')])
        .pipe($.debug())
        .pipe($.sourcemaps.init())
        .pipe($.cleanCss({}))
        .pipe($.rename({ suffix: '.min' }))
        .pipe($.sourcemaps.write('maps'))
        .pipe(gulp.dest(conf.paths.css.dest));
};

gulp.task('styles:minify', function() {

    return minify();

});

// wait for css to build before minifying
gulp.task('styles:build', ['styles:css'], function(){
    return minify();
});
