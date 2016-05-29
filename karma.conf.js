var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    files: [
      'src/test/spec/*Spec.js'
    ],
    preprocessors: {
      'src/test/spec/*Spec.js': ['webpack']
    },
    webpack: webpackConfig
  });
};
