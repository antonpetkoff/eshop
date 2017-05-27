var config = require('./config');
var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');

gulp.task('js', function() {
  return gulp.src(config.js.src)
    .pipe(concat(config.js.filename))
    .pipe(gulp.dest(config.js.dest));
});

gulp.task('libs', function() {
  return gulp.src(config.libs.src)
    .pipe(concat(config.libs.filename))
    .pipe(gulp.dest(config.libs.dest));
});

gulp.task('css', function() {
  return gulp.src(config.css.src)
    .pipe(concat(config.css.filename))
    .pipe(gulp.dest(config.css.dest));
});

gulp.task('html', function() {
  return gulp.src(config.html.src)
    .pipe(gulp.dest(config.html.dest));
})

gulp.task('clean', function() {
    del.sync([config.buildDir]);
});

gulp.task('watch', function() {
  gulp.watch(config.js.src, ['js']);
  gulp.watch(config.css.src, ['css']);
});

gulp.task('default', ['clean', 'libs', 'js', 'css', 'html', 'watch']);
