const _ = require('lodash');
const config = require('./config');
const gulp = require('gulp');
const concat = require('gulp-concat');
const del = require('del');

const ITEMS = ['libs', 'js', 'css', 'index', 'templates', 'assets'];

ITEMS.forEach(item => {
  gulp.task(item, () => {
    const filename = config[item].filename;
    var stream = gulp.src(config[item].src);

    if (filename) {
      stream = stream.pipe(concat(filename));
    }

    return stream.pipe(gulp.dest(config[item].dest));
  });
});

gulp.task('clean', () => {
  del.sync([config.buildDir]);
});

gulp.task('watch', () => {
  ITEMS.forEach(item => {
    gulp.watch(config[item].src, [item]);
  });
});

gulp.task('default', _.concat(['clean'], ITEMS, ['watch']));
