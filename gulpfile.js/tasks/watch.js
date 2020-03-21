const gulp = require('gulp');

module.exports = () => {
	global.isWatching = true;

	gulp.watch('app/**/*.scss', gulp.series('styles'));
	gulp.watch('app/**/*.pug', gulp.series('templates'));
	gulp.watch('app/**/*.js', gulp.series('scripts'));
	gulp.watch('app/icons/**/*', gulp.series('icons'));
	gulp.watch('app/**/*', gulp.series('images'));
	gulp.watch('app/**/*.json', gulp.series('templates'));
};