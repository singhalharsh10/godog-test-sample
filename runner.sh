
#!/bin/sh

set -e -u

npm install --save -dev @cucumber/cucumber
npm i cucumber-html-reporter --save-dev
godog features/ -f cucumber:report/cucumber_report.json 
node index.js
godog features/ -f cucumber:report/cucumber_report_hierarchy.json 
node index2.js
godog features/ -f cucumber:report/cucumber_report_foundation.json 
node index3.js
godog features/ -f cucumber:report/cucumber_report_simple.json 
node index4.js