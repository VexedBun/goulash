/*
    Problems? Try installing the latest Node version.
    This code tested and working on Node 5.6.0
*/

'use strict';

var gulp            = require('gulp'),
    gutil           = require('gulp-util'),
    vinyl           = require('vinyl-source-stream'),
    browserify      = require('browserify'),
    sass            = require('gulp-sass'),
    sourcemaps      = require('gulp-sourcemaps'),
    autoprefixer    = require('gulp-autoprefixer'),
    eslint          = require('gulp-eslint'),
    babelify        = require('babelify');

var config  = {
    source: './source',
    build:  './build',
    sass: {
        errLogToConsole: true,
        outputStyle: 'expanded'
    },
    autoprefixer: {
        browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
    }
    eslint: {
        quotes:   [1, 'single'],
        semi  :   [1, 'always']
    }
};

gulp.task('compile:sass', function() {
    return gulp
        .src(`${config.source}/sass/style.scss`)
        .pipe(sourcemaps.init())
        .pipe(sass(config.sass).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer(config.autoprefixer))
        .pipe(gulp.dest(`${config.build}/css/`))
        .resume();
});

gulp.task('compile:js', function() {

    var bundler = browserify({
        entries:    `${config.source}/js/app.js`,
        debug:      true,
        transform:  [babelify.configure({
            presets: ['es2015'],
            plugins: ['transform-class-properties']
        })],
    });

    bundler
        .bundle()
        .on('error', handleError)
        .pipe(vinyl('bundle.js'))
        .pipe(gulp.dest(`${config.build}/js/`));
});

gulp.task('lint:js', function() {
    return gulp
        .src(`${config.source}/js/app.js`)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('process:js', ['lint:js', 'compile:js'], function() {
    console.log('Javascript processed successfully.');
});

gulp.task('watch', function(){
    gulp.watch(`${config.source}/sass/**/*.scss`, ['compile:sass']);
    gulp.watch(`${config.source}/js/**/*.js`, ['lint:js', 'compile:js']);
})

function handleError(e)
{
    gutil.log(e);
}
