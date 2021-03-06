var gulp = require('gulp'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	webpack = require("webpack"),
	webpackDevServer = require("webpack-dev-server"),
	webpackConfig = require("./webpack.config.js"),
	webpackProductionConfig = require("./webpack.config.production.js"),
	gutil = require('gulp-util');


gulp.task('sass', function () {
    return gulp.src('./src/sass/app.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('./build/css'));
});

gulp.task('images', function () {
    return gulp.src('src/images/**/*')
    			// * if required * do image optimisation, etc
				.pipe(gulp.dest('build/images'));
});

gulp.task('html', function () {
    return gulp.src('app/index.html')
    			// * if required * do image optimisation, etc
				.pipe(gulp.dest('build'));
});

gulp.task("webpack:server", function(callback) {

	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	myConfig.devtool = "eval";
	myConfig.debug = true;

	// Start a webpack-dev-server
	var server = new webpackDevServer(webpack(myConfig), {
		//noInfo: true,
		//watch: true,
		historyApiFallback: true,
		contentBase: './build',
		hot: true,
		progress: true,
		open: true,
		stats: {
			colors: true
		}
	});

	server.listen(3000, "0.0.0.0", function(err) {
		if(err) throw new gutil.PluginError("webpack-dev-server", err);
		gutil.log("[webpack-dev-server]", "http://localhost:3000");
	});

});

gulp.task("build", ['html', 'sass', 'images'], function () {
    // run webpack
    webpack(webpackProductionConfig, function (err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
    });
});

gulp.task('watch', function () {
	gulp.watch('./src/sass/**/*.scss', ['sass']);
	gulp.watch('./app/index.html', ['html']);
});

gulp.task('default', ['webpack:server', 'watch']);