const gulp = require('gulp');
const plumber = require('gulp-plumber');
const errorHandler = require('gulp-plumber-error-handler');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');

module.exports = () => {
	return gulp.src('app/images/**/*')
		.pipe(plumber({ errorHandler: errorHandler('Error in icons task') }))
		.pipe(changed('build/images'))
		.pipe(imagemin())
		.pipe(gulp.dest('build/images'))
}