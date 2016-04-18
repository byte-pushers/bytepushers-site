var gulp = require('gulp');
var del = require('del');
var cleanCSS = require('gulp-clean-css');

gulp.task('clean', function() {
    return del(['./build', './dist/**/*.*']);
});

gulp.task('copy', function() {
    gulp.src(['./src/main/webapp/components/**/*.*']).pipe(gulp.dest('./build/components/'));
    gulp.src(['./src/main/webapp/assets/css/*.css']).pipe(gulp.dest('./build/css'));
    gulp.src(['./src/main/webapp/shared/directives/**/', '!./src/main/webapp/shared/directives/directiveModule.js']).pipe(gulp.dest('./build/directives/'));
    gulp.src(['./src/main/webapp/*.*']).pipe(gulp.dest('./build/'));
});

gulp.task('min-css', function() {
    /*https://www.npmjs.com/package/gulp-clean-css*/
});

gulp.task('default', ['clean', 'copy']);

/*https://www.npmjs.com/package/gulp-inject*/