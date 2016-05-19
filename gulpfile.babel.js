import gulp from 'gulp';
import del from 'del';
import webpackConst from 'webpack';
import gutil from 'gulp-util';
import cssmin from 'gulp-cssmin';
import concat from 'gulp-concat';
import inject from 'gulp-inject';
import mainBowerFiles from 'main-bower-files';

const clean = () => { return del(['./release']); };

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

const copyBuild = () => {
    return gulp.src(['./src/main/webapp/index.html']).pipe(gulp.dest('./release/')),
        gulp.src(['./src/main/webapp/assets/libs/**/*.*']).pipe(gulp.dest('./release/libs/')),
        gulp.src(['./src/main/webapp/components/**/*.html']).pipe(gulp.dest('./release/components/'));
}

const uglifyCSS = () => {
    return gulp.src(['./src/main/webapp/assets/css/*.css']).pipe(cssmin()).pipe(concat('main.min.css')).pipe(gulp.dest('./release/css'));
};

const injector = () => {
    let target = gulp.src('./release/index.html');
    let sources =  gulp.src(['./release/libs/bootstrap/bootstrap.min.css','./release/css/main.min.css','./release/app.bundle.js'], {read: false});
    return target
        .pipe(inject(sources, {relative: true}))
        .pipe(gulp.dest('./release'));
};

const bower = () => {
    return gulp.src(['./release/index.html']).pipe(inject(gulp.src(mainBowerFiles()))).pipe(gulp.dest('./release'));
};

const watch = () => {
    gulp.watch('./src/main/webapp/**/*.*', build);
};

export {clean, webpack, copyBuild, uglifyCSS, injector, bower, watch};

let build = gulp.series(clean, webpack, copyBuild, uglifyCSS, injector);

export {build};
export default build;
