var gulp = require('gulp'),
    clean = require('gulp-clean'),
    zip = require('gulp-zip');

gulp.task('clean', function () {
    return gulp.src('dist')
        .pipe(clean({ force: true }));
});

gulp.task('zip', function () {
    return gulp.src(['dist/**/*', 'site.zip'])
        .pipe(zip('site.zip'))
        .pipe(gulp.dest('.'));
});