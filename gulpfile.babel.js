import gulp from 'gulp';
import del from 'del';
import babel from 'gulp-babel';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import cleanCSS from 'gulp-clean-css';
import concat from 'gulp-concat';
import inject from 'gulp-inject';
import wiredep from 'wiredep';

import webpackConst from 'webpack';
import gutil from 'gulp-util';

const webpack = (cb) => {
    const config = require('./webpack.config');
    config.entry.app = './src/main/webapp/app.js';

    webpackConst(config, (err, stats) => {
        if(err)  {
            throw new gutil.PluginError("webpack", err);
        }

        gutil.log("[webpack]", stats.toString({
            chunks: false,
            errorDetails: true
        }));

        cb();
    });
};

const clean = () => { return del(['./build', './dist']); };

const copyBuild = () => {
    return gulp.src(['./src/main/webapp/components/**/*.js']).pipe(babel({presets: ['es2015']})).pipe(gulp.dest('./build/components/')),
        gulp.src(['./src/main/webapp/components/**/*.html']).pipe(gulp.dest('./build/components/')),
        gulp.src(['./src/main/webapp/assets/libs/**/*.*']).pipe(gulp.dest('./build/libs/')),
        gulp.src(['./src/main/webapp/assets/css/*.css']).pipe(gulp.dest('./build/css')),
        gulp.src(['./src/main/webapp/assets/js/*.js']).pipe(babel({presets: ['es2015']})).pipe(gulp.dest('./build/js/')),
        gulp.src(['./src/main/webapp/shared/directives/**/*.*']).pipe(babel({presets: ['es2015']})).pipe(gulp.dest('./build/shared/directives/')),
        gulp.src(['./src/main/webapp/*.js']).pipe(babel({presets: ['es2015']})).pipe(gulp.dest('./build/')),
        gulp.src(['./src/main/webapp/*.html']).pipe(gulp.dest('./build/'));
};

const uglifyCSS = () => {
    return gulp.src(['./build/css/*.css']).pipe(cleanCSS()).pipe(concat('main.min.css')).pipe(gulp.dest('./dist/css'));
};

const uglifyJS = () => {
    return gulp.src(['./build/bootstrap.js','./build/app.js','./build/config.js'])
            .pipe(concat('bootstrap.js'))
            .pipe(uglify({mangle:false}))
            .pipe(rename('bootstrap.min.js'))
            .pipe(gulp.dest('dist'));
};

const copyDist = () => {
    return gulp.src(['./build/index.html']).pipe(gulp.dest('./dist/')),
        gulp.src(['./build/main.js']).pipe(gulp.dest('./dist/')),
        gulp.src(['./build/libs/**/*.*']).pipe(gulp.dest('./dist/libs')),
        gulp.src(['./build/js/*.js']).pipe(gulp.dest('./dist/js/')),
        gulp.src(['./build/components/**/*.*']).pipe(gulp.dest('./dist/components/')),
        gulp.src(['./build/shared/directives/**/*.*']).pipe(gulp.dest('./dist/shared/directives/'));
};

const injector_index = () => {
    let target = gulp.src('./dist/index.html');
    let sources =  gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.min.css', './dist/css/*.css'], {read: false});
    return target
        .pipe(inject(sources, {relative: true}))
        .pipe(gulp.dest('./dist'));
};

/*const injector_index = () => {
    let target = gulp.src('./dist/index.html');
    let sources =  gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.min.css', './dist/css/!*.css', './node_modules/requirejs/require.js'], {read: false});
    let sources2 = gulp.src(['./dist/main.js'], {read:false});
    return target
        .pipe(inject(sources, {relative: true}))
        .pipe(inject(sources2, {
            starttag: '<script src="../node_modules/requirejs/require.js"',
            endtag: '></script>',
            relative: true,
            transform: function (filepath, file, i, length) {
                let tmp = filepath.slice(0, -3);
                return ' data-main="' + tmp +'"' + (i + 1 < length ? ',' : '');
            }
        }))
        .pipe(gulp.dest('./dist'));
};*/

const injector_main = () => {
    let sources = gulp.src([
        './dist/libs/angular/angular.min.js',
        './dist/libs/angular-ui-router/angular-ui-router.min.js',
        './dist/libs/domReady/domReady.js',
        './dist/libs/bytepushers/bytepushers-js-core.min.js',
        './dist/libs/bytepushers/bytepushers-js-messaging.min.js',
        './dist/libs/bytepushers/bytepushers-js-restful.min.js'
    ], {read: false});
    let sources2 = gulp.src(['dist/bootstrap.min.js'], {read:false});

    let names = ['angular', 'uiRouter', 'domReady', 'bytepushers_core', 'bytepushers_messaging', 'bytepushers_restful'];

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
                let tmp = filepath.slice(0, -3);
                return tmp + (i + 1 < length ? ',' : '');
            }
        }))
        .pipe(gulp.dest('./dist'));

};

const bower = () => {
    return gulp.src(['./dist/index.html']).pipe(wiredep({dependencies: false, devDependencies: true})).pipe(gulp.dest('./dist'));
};

const watch_webpack = () => {
    gulp.watch('./src/main/webapp/**/*.js', webpack);
};

const watch_build = () => {
    gulp.watch('./src/main/webapp/**/*.*', build);
};

export {webpack, clean, copyBuild, uglifyCSS, uglifyJS, copyDist, injector_index, injector_main, bower, watch_build, watch_webpack};

let injector = gulp.series(injector_index, injector_main);
let build = gulp.series(clean, copyBuild, uglifyCSS, uglifyJS, copyDist, injector);

export {build, injector};
export default build;
