Feature: Example feature
	As a user of Cucumber.js
	I want to have documentation on Cucumber
	So that I can concentrate on building awesome applications

	Scenario Outline: Reading documentation
		Given I am on the <a>
		When I click on <b>
		Then I should see <c>

	Examples:
	| a                                                           | b                   | c                           |
    | 'https://www.github.com/cucumber/cucumber-js/tree/master'   | 'CLI'               | 'Running specific features' |
    | 'https://www.github.com/cucumber/cucumber-js/tree/master'   | 'Custom Formatters' | 'Extending Built-Ins'       |
    | 'https://github.com/'                                       | 'Features'          | 'How developers work'       |
    | 'https://www.apple.com'                                     | 'Watch'             | 'Series 3' |