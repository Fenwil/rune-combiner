const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const browserify = require('gulp-browserify')
const browserSync = require('browser-sync').create()

gulp.task('serve', ['styles', 'scripts'], () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
  gulp.watch('sass/*.scss', ['styles'])
  gulp.watch('js/*.js', ['scripts'])
  gulp.watch('index.html').on('change', browserSync.reload)
})

gulp.task('styles', () => {
  gulp.src('sass/styles.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream())
})

gulp.task('scripts', () => {
  gulp.src('js/script.js')
    .pipe(browserify({
      insertGlobals: true,
      debug: !gulp.env.production
    }))
    .pipe(uglify())
    .pipe(rename('script.min.js'))
    .pipe(gulp.dest('js'))
    .pipe(browserSync.stream())
})

gulp.task('default', ['serve'])

// gulp.task('default', ['serve', 'uglify'], () => {
//   gulp.watch('sass/*.scss', ['sass'])
//   gulp.watch('js/script.js', ['uglify'])
// })
