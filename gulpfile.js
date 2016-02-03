'use strict';

var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    http = require('http'),
    st = require('st');

gulp.task('less', function() {
  gulp.src('static/*.less')
    .pipe(less())
    .pipe(gulp.dest('static'))
    .pipe(livereload());
});

gulp.task('html', function() {
    gulp.src('*.html')
        .pipe(livereload());
});

gulp.task('watch', ['server'], function() {
  livereload.listen({ basePath: process.cwd() });
  gulp.watch('static/*.less', ['less']);
  gulp.watch('*.html', ['html']);
});

gulp.task('server', function(done) {
  http.createServer(
    st({ path: process.cwd(), index: 'index.html', cache: false })
  ).listen(8080, done);
});