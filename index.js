var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonFile: 'report/cucumber_report.json',
    output: 'report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    name: "Sample Golang Test",
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Version": "2",
        "Test Environment": "STAGING"
    }
};

reporter.generate(options);