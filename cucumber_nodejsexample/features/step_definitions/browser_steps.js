const seleniumWebDriver = require('selenium-webdriver');
const {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
	Given('I am on the Cucumber.js GitHub repository', function() {
		return this.driver.get('https://www.github.com/cucumber/cucumber-js/tree/master');
	})

     When('I click on {string}', function (text) {
     	return this.driver.findElement({linkText: text}).then(function(element) {
     		return element.click();
     	})
     });

     Then('I should see {string}', function (text) {
     	let xpath = "//*[contains(text(),'" + text + "')]";
     	let condition = seleniumWebDriver.until.elementLocated({xpath: xpath});
     	console.log(xpath, condition)
     	return this.driver.wait(condition, 5000);
     });

})