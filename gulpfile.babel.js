var gulp = require('gulp'),
    del = require('del'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    inject = require('gulp-inject'),
    wiredep = require('wiredep').stream;

function clean() {
    return del(['./build', './dist']);
};

function copyBuild() {
    return gulp.src(['./src/main/webapp/components/**/*.*']).pipe(gulp.dest('./build/components/')),
        gulp.src(['./src/main/webapp/assets/libs/**/*.*']).pipe(gulp.dest('./build/libs/')),
        gulp.src(['./src/main/webapp/assets/css/*.css']).pipe(gulp.dest('./build/css')),
        gulp.src(['./src/main/webapp/assets/js/*.js']).pipe(gulp.dest('./build/js/')),
        gulp.src(['./src/main/webapp/shared/directives/**/*.*']).pipe(gulp.dest('./build/shared/directives/')),
        gulp.src(['./src/main/webapp/*.*']).pipe(gulp.dest('./build/'));
};

function uglifyCSS() {
    return gulp.src(['./build/css/*.css']).pipe(cleanCSS()).pipe(concat('main.min.css')).pipe(gulp.dest('./dist/css'));
};

function uglifyJS() {
    return gulp.src(['./build/bootstrap.js','./build/app.js','./build/modules.js','./build/modules.js','./build/states.js'])
            .pipe(concat('bootstrap.js'))
            .pipe(uglify({mangle:false}))
            .pipe(rename('bootstrap.min.js'))
            .pipe(gulp.dest('dist'));
        ;
};

function copyDist() {
    return gulp.src(['./build/index.html']).pipe(gulp.dest('./dist/')),
        gulp.src(['./build/main.js']).pipe(gulp.dest('./dist/')),
        gulp.src(['./build/libs/**/*.*']).pipe(gulp.dest('./dist/libs')),
        gulp.src(['./build/js/*.js']).pipe(gulp.dest('./dist/js/')),
        gulp.src(['./build/components/**/*.*']).pipe(gulp.dest('./dist/components/')),
        gulp.src(['./build/shared/directives/**/*.*']).pipe(gulp.dest('./dist/shared/directives/'));
};

function injector_index() {
    var target = gulp.src('./dist/index.html');
    var sources =  gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.min.css', './dist/css/*.css', './node_modules/requirejs/require.js'], {read: false});
    var sources2 = gulp.src(['./dist/main.js'], {read:false});
    return target
        .pipe(inject(sources, {relative: true}))
        .pipe(inject(sources2, {
            starttag: '<script src="../node_modules/requirejs/require.js"',
            endtag: '></script>',
            relative: true,
            transform: function (filepath, file, i, length) {
                var tmp = filepath.slice(0, -3);
                return ' data-main="' + tmp +'"' + (i + 1 < length ? ',' : '');
            }
        }))
        .pipe(gulp.dest('./dist'));
};

function injector_main() {
    var sources = gulp.src([
        './dist/libs/angular/angular.min.js',
        './dist/libs/angular-ui-router/angular-ui-router.min.js',
        './dist/libs/domReady/domReady.js',
        './dist/libs/bytepushers/bytepushers-js-core.min.js',
        './dist/libs/bytepushers/bytepushers-js-messaging.min.js',
        './dist/libs/bytepushers/bytepushers-js-restful.min.js'
    ], {read: false});
    var sources2 = gulp.src(['dist/bootstrap.min.js'], {read:false});

    var names = ['angular', 'uiRouter', 'domReady', 'bytepushers_core', 'bytepushers_messaging', 'bytepushers_restful'];

    return gulp.src('./dist/main.js')
        .pipe(inject(sources, {
            starttag: 'paths: {',
            endtag: '}',
            relative: true,
            transform: function (filepath, file, i, length) {
                var tmp = filepath.slice(0, -3);
                return names[i] + ':"' + tmp + '"' + (i + 1 < length ? ',' : '');
            }
        }))
        .pipe(inject(sources2, {
            starttag: 'deps: ["',
            endtag: '"]',
            relative: true,
            transform: function (filepath, file, i, length) {
                var tmp = filepath.slice(0, -3);
                return tmp + (i + 1 < length ? ',' : '');
            }
        }))
        .pipe(gulp.dest('./dist'));

};

function bower(){
    return gulp.src(['./dist/index.html']).pipe(wiredep({dependencies: false, devDependencies: true})).pipe(gulp.dest('./dist'));
};

function watch() {
    gulp.watch('./src/main/webapp/**/*.*', build);
}

exports.clean = clean;
exports.copyBuild = copyBuild;
exports.uglifyCSS = uglifyCSS;
exports.uglifyJS = uglifyJS;
exports.copyDist = copyDist;
exports.injector_index = injector_index;
exports.injector_main = injector_main;
exports.bower = bower;
exports.watch = watch;

var injector = gulp.series(injector_index, injector_main);
var build = gulp.series(clean, copyBuild, uglifyCSS, uglifyJS, copyDist, injector);

gulp.task('default', build);
gulp.task('injector', injector);
gulp.task('bower', bower);
gulp.task('watch', watch);