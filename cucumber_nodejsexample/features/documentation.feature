Feature: Example feature
	As a user of Cucumber.js
	I want to have documentation on Cucumber
	So that I can concentrate on building awesome applications

	Scenario Outline: Reading documentation
		Given I am on the Cucumber.js GitHub repository
		When I click on <a>
		Then I should see <b>

	Examples:
	| a                   | b                           |
    | 'CLI'               | 'Running specific features' |
    | 'Custom Formatters' | 'Extending Built-Ins'       |