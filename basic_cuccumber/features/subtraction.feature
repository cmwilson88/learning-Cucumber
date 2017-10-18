Feature: Subtraction
	
	Scenario: 1 - 2
		Given I start with 1
		When I subtract by 2
		Then I end up with -1

	Scenario: 2 - 1
		Given I start with 2
		When I subtract by 1
		Then I end up with 1

	Scenario: 2 - -1
		Given I start with 2
		When I subtract by -1
		Then I end up with 3

	Scenario: 2 - 0
		Given I start with 2
		When I subtract by 0
		Then I end up with 2