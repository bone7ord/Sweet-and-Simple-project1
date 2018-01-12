var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');


gulp.task('sass', function(){
  return gulp.src('sass-test/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('sass/*.scss', ['sass']);
  gulp.watch('*.html', browserSync.reload);
  // gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
});

gulp.task('imagemin', function(){
  return gulp.src('img/**/*.+(png|jpg|gif|svg)')
  .pipe(imagemin())
  .pipe(gulp.dest('img'))
});
