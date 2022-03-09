var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'hierarchy',
    jsonFile: 'report/cucumber_report_hierarchy.json',
    output: 'report/cucumber_report_hierarchy.html',
    name: "Sample Golang Test",
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    storeScreenshots: true,
    screenshotsDirectory: 'screenshots/',
    metadata: {
        "App Version": "0.3.2",
        "Test Environment": "STAGING",
    }
};

reporter.generate(options);