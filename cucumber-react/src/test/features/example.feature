Feature: Title check
	I should be able to go to a website
	and check its title

Scenario: Get the title of webpage
	Given I go to the website /
	Then I expect the title of the page Welcome to React

Scenario: Fill input box
	Given I go to the website /
	When I fill out the input box with id of #maininput with the text Hello there
	Then the subheader will read HELLO THERE