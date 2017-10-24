const {defineSupportCode} = require('cucumber');
const assert = require('assert');

defineSupportCode(function({Given, When, Then}) {
	Given('I go to the website {url}', function(url) {
		browser.url(url)
	})

	When('I fill out the input box with id of {text} with the text {text1}', function(text, text1) {
		browser.addValue(text, text1)
	})

	Then('I expect the title of the page {text}', function(text) {
		let pageHeading = browser.getText('h1')
		assert.equal(text, pageHeading)
	})

	Then('the subheader will read {text}', function(text) {
		let pageSubHeading = browser.getText('h3')
		assert.equal(text, pageSubHeading)
	})
})