module.exports = function(config) {
  config.set({
    basePath: './app',
    frameworks: ['jasmine'],
    files: [
      'assets/bower_components/angular/angular.js',
      'assets/bower_components/angular-ui-router/release/angular-ui-router.js',
      'assets/bower_components/angular-resource/angular-resource.js',
      'assets/bower_components/angular-mocks/angular-mocks.js',
      'src/**/*.js'
    ],
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome','PhantomJS'],
    phantomjsLauncher: {
      exitOnResourceError: true
    },
    singleRun: false,
    concurrency: Infinity
  });
};
