import gulp from 'gulp';
import del from 'del';
import webpackConst from 'webpack';
import gutil from 'gulp-util';
import cssmin from 'gulp-cssmin';
import concat from 'gulp-concat';
import inject from 'gulp-inject';
import mainBowerFiles from 'main-bower-files';
import karmaConst from 'karma';
let server = karmaConst.Server;
import protractorConst from 'gulp-protractor';
let protractor_function = protractorConst.protractor;
let webdriver_update = protractorConst.webdriver_update;
import cucumberConst from 'gulp-cucumber';


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

const karma =  (done) => {
  new karmaConst.Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
};

const karma_ci =  (done) => {
  new karmaConst.Server({
    configFile: __dirname + '/karma.conf.ci.js'
  }, done).start();
};

const protractor = (cb) => {
  webdriver_update;

  gulp.src(['src/test/protractor/*.js']).pipe(protractor_function({
      configFile: 'protractor.conf.js',
  })).on('error', function(e) {
      console.log(e)
  }).on('end', cb);
};

const cucumber = () => {
  return gulp.src('src/test/features/*.feature').pipe(cucumberConst({
        'steps': 'src/test/features/steps/*.js',
        'support': 'src/test/features/support/*.js',
        'format': 'summary'
    }));
}

export {clean, webpack, copyBuild, uglifyCSS, injector, bower, karma, karma_ci, protractor, cucumber};

let build = gulp.series(clean, webpack, copyBuild, uglifyCSS, injector, karma_ci);

export {build};
export default build;
