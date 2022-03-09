var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'simple',
    jsonFile: 'report/cucumber_report_simple.json',
    output: 'report/cucumber_report_simple.html',
    reportSuiteAsScenarios: true,
    name: "Sample Golang Test",
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Version": "0.3.2",
        "Test Environment": "STAGING",
    }
};

reporter.generate(options);