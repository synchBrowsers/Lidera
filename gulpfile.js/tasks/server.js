const browserSync = require('browser-sync').create();

module.exports = () => {
	browserSync.init({
		injectChanges: true,
		open: true,
		reloadOnRestart: true,
		reloadDebounce: 100,
		port: 3000,
		server: {
			baseDir: [
				'./build',
			],
		},
		directory: false,
	});

	browserSync.watch('build/**/*').on('change', browserSync.reload);
};