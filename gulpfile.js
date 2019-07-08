var gulp = require("gulp");

// gulp browser
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");

// watch
var watchify = require("watchify");
var fancy_log = require("fancy-log");

// uglify
var uglify = require("gulp-uglify");
var sourcemaps = require("gulp-sourcemaps");
var buffer = require("vinyl-buffer");

// sass
const minify = require("gulp-minify-css");
const sass = require("gulp-sass");

var paths = {
  pages: ["src/*.html"]
};

var watchedBrowserify = watchify(
  browserify({
    basedir: ".",
    debug: true,
    entries: ["src/main.ts"],
    cache: {},
    packageCache: {}
  })
  .plugin(tsify)
  // babel transfer
  .transform("babelify", {
    presets: ["es2015"],
    extensions: [".ts"]
  })
);

gulp.task("copy-html", function () {
  return gulp.src(paths.pages).pipe(gulp.dest("dist"));
});

function bundle() {
  return (
    watchedBrowserify
    .bundle()
    .pipe(source("bundle.js"))

    // add uglify
    .pipe(buffer())
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write("./"))

    // dist
    .pipe(gulp.dest("./dist/js/"))
  );
}

gulp.task("sass", function () {
  return gulp.src("./src/index.scss")
    .pipe(sass())
    .pipe(minify())
    .pipe(gulp.dest("./dist/css/"))
});

gulp.task("default", gulp.series(gulp.parallel("copy-html", "sass"),  bundle));
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", fancy_log);
