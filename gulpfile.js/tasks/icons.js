const gulp = require('gulp');
const plumber = require('gulp-plumber');
const svgSymbols = require('gulp-svg-symbols');
const errorHandler = require('gulp-plumber-error-handler');
const imagemin = require('gulp-imagemin');
const rename = require('gulp-rename');

module.exports = () => {
	return gulp.src('app/images/icons/**/*.svg')
		.pipe(plumber({ errorHandler: errorHandler('Error in icons task') }))
		.pipe(svgSymbols({
			title: false,
			id: 'icon_%f',
			class: '%f',
			templates: ['default-svg'],
		}))
		.pipe(imagemin([
			imagemin.svgo({
				plugins: [
					{ optimizationLevel: 3 },
					{ progessive: true },
					{ interlaced: true },
					{ removeViewBox: false },
					{ removeUselessStrokeAndFill: true },
					{ cleanupIDs: false },
					{ cleanupAttrs: true },
					{ removeMetadata: true },
					{ removeTitle: true },
					{ removeAttrs: { attrs: '(fill|stroke|data-name)' } },
				],
			}),
		]))
		.pipe(rename('icon.svg'))
		.pipe(gulp.dest('build/images/'))
}