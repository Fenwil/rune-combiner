var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');


gulp.task('sass', function() {
    return gulp.src('sass/styles.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('css'))
});
    
gulp.task('uglify', function() {
    return gulp.src('js/script.js')
        .pipe(uglify())
        .pipe(rename('script.min.js'))
        .pipe(gulp.dest('js'))
});

gulp.task('default', ['sass','uglify'], function() {
    gulp.watch('sass/*.scss', ['sass']);
    gulp.watch('js/script.js', ['uglify']);
})