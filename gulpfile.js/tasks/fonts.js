const gulp = require('gulp');

module.exports = () => (
	gulp.src('app/styles/fonts/**/**.{ttf,woff,woff2,svg,eot}')
		.pipe(gulp.dest('build/styles/fonts'))
);