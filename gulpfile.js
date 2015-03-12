var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var zip = require('gulp-zip');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var mainBowerFiles = require('main-bower-files');
var packageJson = require('./package.json');

var paths = {
    frontLib: 'public/lib',
    scripts: 'public/lib/**/*.js'
};

gulp.task('bower', function () {
    del.sync(paths.frontLib);
    gulp.src(mainBowerFiles(), {base: 'bower_components'})
        .pipe(gulp.dest(paths.frontLib));
});

gulp.task('scripts', function () {
    gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js'));
});

gulp.task('package', function () {
    gulp.src(['bin/**', 'models/**', 'public/**', 'routes/**', 'views/**', '*', '!.*', '!*.iml'], {base: '.'})
        .pipe(zip(packageJson.name + '-' + packageJson.version + '.zip'))
        .pipe(gulp.dest('build'));
});

gulp.task('default', function () {

});