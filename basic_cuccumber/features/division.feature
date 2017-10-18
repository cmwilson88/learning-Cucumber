Feature: Division

	Scenario Outline: <a> / <b>
		Given I start with <a>
		When I divide by <b>
		Then I end up with <answer>

	Examples: 
		| a  | b  | answer    |
		| 12 | 3  | 4         |
		| 6  | 2  | 3         | 
		| 77 | 11 | 7         |
		| 144| 12 | 12        |

	Scenario: 1 / 0
		Given I start with 1
		When I divide by 0
		Then I end up with Infinity