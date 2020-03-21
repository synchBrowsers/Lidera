const gulp = require('gulp');
const plumber = require('gulp-plumber');
const filter = require('gulp-filter');
const errorHandler = require('gulp-plumber-error-handler');
const pug = require('gulp-pug');
const rename = require('gulp-rename');
const getData = require('jade-get-data')('app/data');

module.exports = () => {
	return gulp.src('app/pages/**/*.pug')
		.pipe(plumber({ errorHandler: errorHandler('Error in templates task') }))
		.pipe(filter(file => /app[\\\/]pages/.test(file.path)))
		.pipe(pug({ data: { getData } }))
		.pipe(rename({ dirname: '.' }))
		.pipe(gulp.dest('build'))
}