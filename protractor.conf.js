exports.config = {
    /*had to run webdriver-manager in protractor bin to generate seleniumServerJar*/

    'framework': 'jasmine',

    'seleniumServerJar': './node_modules/protractor/selenium/selenium-server-standalone-2.52.0.jar',

    'capabilities': {
        'browserName': 'chrome'
    },

    'jasmineNodeOpts': {
        'showColors': true,
        'defaultTimeoutInterval': 30000
    }
};
