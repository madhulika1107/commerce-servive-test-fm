Feature: ecommerce Login Feature

#without Exapmles keyword (We have to use Scenario only notScenario Outline )
#Scenario: ecommerce Login Test Scenario

#Given user is already on login Page
#When title of login page is Ez Shop Online
#Then user enters "madhulika.srvt@gmail.com" and "Lovy123"
#Then user clicks on login button
#Then validate user is on home page
#Then close the browser

#without Exapmles keyword (We have to use Scenario Outline not only Scenario, when using Example key word)
Scenario Outline: ecommerce Login Test Scenario

Given user is already on login Page
When title of login page is Ez Shop Online
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then validate user is on home page
Then close the browser

Examples:
	| username | password |						
	| madhulika.srvt@gmail.com  | Lovy123 |
	| Lovy17@gmail.com    | Lovy17 | 
	| madhulika.srvt@gmail.com  | Lovy |
	| madhulika.srvt@gmail.com  | |
	|   | Lovy123 |
	|  |  |
	
	
	

