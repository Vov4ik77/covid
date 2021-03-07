const gulp = require('gulp');
const _connect = require('gulp-connect');

function connect(cb) {
    _connect.server({
      root: '',
      livereload: true
    });

    cb();
};

function html(cb) {
    gulp.src('*.html')
      .pipe(_connect.reload());

    cb();
};
function js(cb) {
  gulp.src('*.js')
    .pipe(_connect.reload());

  cb();
};
function css(cb) {
  gulp.src('*.css')
    .pipe(_connect.reload());

  cb();
};
function watch(cb) {
  gulp.watch('*.html', html);
  gulp.watch('*.js', js);
  gulp.watch('*.css', css);

  cb();
};

exports.default =  gulp.series(connect, watch);