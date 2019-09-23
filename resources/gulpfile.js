// * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// PATHS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * *
const path = {
    sass: './sass',
    css: './css'
}

// * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Code
// * * * * * * * * * * * * * * * * * * * * * * * * * * * *
const gulp = require('gulp')
const sass = require('gulp-sass')
const allSassFiles = path.sass + '/**/*.scss'

gulp.task('style', () => {
    gulp.src(path.sass + '/app.scss')
        .pipe(sass())
        .pipe(gulp.dest(path.css))
})

gulp.task('watch', () => {
    gulp.watch(allSassFiles, ['style'])
})
