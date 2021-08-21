const gulp = require("gulp");
const sass = require("gulp-sass");
const header = require("gulp-header");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const autoprefixer = require("gulp-autoprefixer");
const pkg = require("./package.json");
const browserSync = require("browser-sync").create();
const bundle = require("gulp-bundle-assets");

gulp.task("vendor", function () {
	gulp
		.src([
			"./node_modules/bootstrap/dist/**/*",
			"!./node_modules/bootstrap/dist/css/bootstrap-grid*",
			"!./node_modules/bootstrap/dist/css/bootstrap-reboot*",
		])
		.pipe(gulp.dest("./vendor/bootstrap"));

	gulp.src(["./node_modules/@fortawesome/**/*"]).pipe(gulp.dest("./vendor"));

	gulp
		.src([
			"./node_modules/jquery/dist/*",
			"!./node_modules/jquery/dist/core.js",
		])
		.pipe(gulp.dest("./vendor/jquery"));

	gulp
		.src(["./node_modules/jquery.easing/*.js"])
		.pipe(gulp.dest("./vendor/jquery-easing"));

	gulp
		.src(["./node_modules/owl.carousel/dist/*"])
		.pipe(gulp.dest("./vendor/owl.carousel"));
});

gulp.task("css:compile", function () {
	return gulp
		.src("./scss/**/*.scss")
		.pipe(
			sass
				.sync({
					outputStyle: "expanded",
				})
				.on("error", sass.logError)
		)
		.pipe(
			autoprefixer({
				browsers: ["last 2 versions"],
				cascade: false,
			})
		)
		.pipe(gulp.dest("./css"));
});

gulp.task("bundle", function () {
	return gulp
		.src("./bundle.config.js")
		.pipe(bundle())
		.pipe(gulp.dest("./dist"));
});

gulp.task("css:minify", ["css:compile"], function () {
	return gulp
		.src(["./css/*.css", "!./css/*.min.css"])
		.pipe(cleanCSS())
		.pipe(
			rename({
				suffix: ".min",
			})
		)
		.pipe(gulp.dest("./css"))
		.pipe(browserSync.stream());
});

gulp.task("css", ["css:compile", "css:minify"]);

gulp.task("js:minify", function () {
	return gulp
		.src(["./js/*.js", "!./js/*.min.js"])
		.pipe(uglify())
		.pipe(
			rename({
				suffix: ".min",
			})
		)
		.pipe(gulp.dest("./js"))
		.pipe(browserSync.stream());
});

gulp.task("js", ["js:minify"]);

gulp.task("default", ["css", "js", "vendor"]);

gulp.task("browserSync", function () {
	browserSync.init({
		server: {
			baseDir: "./",
		},
	});
});

gulp.task("dev", ["css", "js", "browserSync"], function () {
	gulp.watch("./scss/*.scss", ["css"]);
	gulp.watch("./js/*.js", ["js"]);
	gulp.watch("./*.html", browserSync.reload);
});
