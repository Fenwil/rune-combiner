var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('sass', function() {
    return gulp.src('sass/styles.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('css'))
});

gulp.task('default', ['sass'], function() {
    gulp.watch('sass/*.scss', ['sass']);
})