var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

gulp.task('live-server', function () {
	var server = new LiveServer('server/main.js');
	server.start();
});

gulp.task('bundle', function () {
	return browserify({
		entries: 'app/main.jsx',
		debug: true,
	})
	//Chain the browserify to the reactify transform.
	//The reactify transforms the jsx into plain javascript.
	.transform(reactify)
	//Bundle using browserify bundle command.
	//This wraps up the transformations and tells browserify
	//we're ready to output the file.
	.bundle()
	//Vinyl source stream will spit out the new js file name:
	//Before transformation filename is called main,
	//afterward it will be called app.
	.pipe(source('app.js'))
	.pipe(gulp.dest('./.tmp'));

});

gulp.task('serve', /*depends on:*/['live-server'], function () {
		browserSync.init(null, {
			proxy:"http://localhost:7777",
			port: 9001
		})
	});
