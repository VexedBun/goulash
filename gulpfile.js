'use strict';

var gulp            = require('gulp'),
    gutil           = require('gulp-util'),
    vinyl           = require('vinyl-source-stream'),
    browserify      = require('browserify'),
    eslint          = require('gulp-eslint'),
    babelify        = require('babelify'),
    eslint          = require('gulp-eslint'),
    esdoc           = require('gulp-esdoc');

var config  = {
    source: './modules',
    eslint: {
        quotes:   [1, 'single'],
        semi  :   [1, 'always']
    },
    esdoc: {
        destination: './documentation/js',
        plugins: [
            {
                name: 'esdoc-es7-plugin'
            }
        ]
    }
};

gulp.task('lint:js', function() {
    return gulp
        .src(`${config.source}/**/*.js`)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

// gulp.task('document:js', function() {
//     return gulp
//         .src(`${config.source}/**/*.js`)
//         .pipe(esdoc(config.esdoc))
//         .resume();
// });

gulp.task('watch', function() {
    gulp.watch(`${config.source}/**/*.js`, ['lint:js']);
})

function handleError(e)
{
    gutil.log(e);
}
