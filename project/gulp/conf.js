// Configuration common to multiple tasks

'use strict';

var gutil = require('gulp-util');

exports.paths = {
    css: {
        src: 'src',
        dest: 'dist/css'
    },
    js: {
        src: 'src',
        dest: 'dist/js'
    }
};

/**
 *  Common implementation for an error handler of a Gulp plugin
 */
exports.errorHandler = function(title) {

    return function(err) {
        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
    };
};
