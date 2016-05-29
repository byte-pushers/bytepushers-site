var baseConfig = require('./karma.cucumber.conf.js');

module.exports = function(config){
    baseConfig(config);

    config.set({
      singleRun: true,
      autoWatch: false
    });
};
