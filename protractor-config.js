exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: [
    'test/e2e/*spec.js'
  ],

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {'args': ['--disable-extensions']}
  },

  baseUrl: 'http://localhost:3000',

  onPrepare: function() {
    // Override the timeout for webdriver.
    browser.manage().timeouts().setScriptTimeout(60000);
  },

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 60000
  }
};
