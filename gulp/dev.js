const gulp = require('gulp');

const fileInclude = require('gulp-file-include');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');
const fs = require('fs');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const { stream } = require('browser-sync');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');

const webpack = require('webpack-stream');
const babel = require('gulp-babel');


const plumberNotify = (title) => {
    return {
        errorHandler: notify.onError({
            title: title,
            message: 'Error <%= error.message %>',
            sound: false
        })
    };
}

gulp.task('clean:dev', function (done) {

    if (fs.existsSync('./build/')) {
        return gulp.src('./build/', { read: false })
            .pipe(clean({ forse: true}));
    }

    done();
});


gulp.task('html:dev', function () {
    return gulp.src(['./src/html/**/*.html', '!./src/html/components/*.html'])
        .pipe(changed('./build/', { hasChanged: changed.compareContents }))
        .pipe(plumber(plumberNotify('HTML')))
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./build/'))
        .pipe(browserSync.stream());
});


gulp.task('sass:dev', function () {
    return gulp.src('./src/scss/*.scss')
        .pipe(changed('./build/css'))
        .pipe(plumber(plumberNotify('SCSS')))
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(gulp.dest('./build/css'))
});

gulp.task('images:dev', function () {
    return gulp.src('./src/img/**/*')
        .pipe(changed('./build/img/'))
        .pipe(imagemin({ verbose: true }))
        .pipe(gulp.dest('./build/img/'))
});

gulp.task('fonts:dev', function () {
    return gulp.src('./src/fonts/**/*')
        .pipe(changed('./build/fonts/'))
        .pipe(gulp.dest('./build/fonts/'))
});

gulp.task('files:dev', function () {
    return gulp.src('./src/files/**/*')
        .pipe(changed('./build/files'))
        .pipe(gulp.dest('./build/files/'))
});

gulp.task('js:dev', function() {
    return gulp.src('./src/js/*.js')
    .pipe(changed('./build/js'))
    .pipe(plumber(plumberNotify('JS')))
    .pipe(babel())
    .pipe(webpack(require('./../webpack.config.js')))
    .pipe(gulp.dest('./build/js'))
})

gulp.task('server:dev', function () {
    browserSync.init({
        server: './build/',
        port: 8000,
        open: true,
    })
});

gulp.task('watch:dev', function () {
    gulp.watch('./src/scss/**/*.scss', gulp.parallel('sass:dev')).on('change', browserSync.reload);
    gulp.watch('./src/**/*.html', gulp.parallel('html:dev')).on('change', browserSync.reload);
    gulp.watch('./src/img/**/*', gulp.parallel('images:dev')).on('change', browserSync.reload);
    gulp.watch('./src/fonts/**/*', gulp.parallel('fonts:dev')).on('change', browserSync.reload);
    gulp.watch('./src/files/**/*', gulp.parallel('files:dev')).on('change', browserSync.reload);
    gulp.watch('./src/js/**/*.js', gulp.parallel('js:dev')).on('change', browserSync.reload);
});