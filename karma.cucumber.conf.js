var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['cucumber-js'],
    files: [
      {pattern: 'src/test/features/*.feature', watched: true, included: false, served: true},
      {pattern: 'src/test/features/support/*.js', watched: true, included: false, served: true},
      {pattern: 'src/test/features/steps/*Steps.js', watched: true, included: true, served: true}
    ],
    preprocessors: {
      'src/test/features/steps/*Steps.js': ['webpack']
    },
    webpack: webpackConfig,
    captureTimeout: 60000
  });
};
