const {defineSupportCode} = require('cucumber');
const assert = require('assert');

defineSupportCode(function({Given, When, Then}) {
	Given('I go to the website {url}', function(url) {
		browser.url(url)
	})

	Then('I expect the title of the page {text}', function(text) {
		let pageHeading = browser.getText('h1')
		assert.equal(text, pageHeading)
	})
})