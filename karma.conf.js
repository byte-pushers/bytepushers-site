module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    files: [
      'release/app.bundle.js',
      'src/test/spec/*.spec.js'
    ],
    preprocessors: {
      'src/test/spec/*.spec.js': ['babel']
    }
  });
};
