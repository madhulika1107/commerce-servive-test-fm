Feature: ecommerce Registration Feature

#without Exapmles keyword (We have to use Scenario Outline not only Scenario, when using Example key word)
Scenario Outline: ecommerce Registration Test Scenario

Given you are on login page
When login page title is Ez Shop Online
Then user click signUP buton
Then user clicks gender buton
Then user enters contacts details "<FirstName>" and "<lastName>" and "<dateOfBirth>" and "<monthOfBirth>" and "<yearOfBirth>" and "<emailID>" and "<houseNumber>" and "<streetName>" and "<city>" and "<county>"  and "<country>"  and "<postal>" and "<dPhone>" and "<ePhone>"  and"<password>" and "<cPassword>"
Then user clicks on terms
Then user clicks sign up button
Then validate if user is already singedUP
Then close the window

Examples:
	|FirstName | lastName | dateOfBirth | monthOfBirth | yearOfBirth | emailID | houseNumber | streetName | city | county | country | postal | dPhone | ePhone | password | cPassword |				
	| Madhulika  | Srivastava | 01 | 03 | 1985 | madhulika.srvt@gmail.com | 123 | sss | Pleasanton | Alameda | USA | 12345 | 408-444-2222 | 444-444-4444 | Lovy123 | Lovy123 |
	|   | Srivastava | 01 | 03 | 1985 | madhulika.srvt@gmail.com | 123 | sss | Pleasanton | Alameda | USA | 12345 | 408-444-2222 | 444-444-4444 | Lovy123 | Lovy123 |
	| Madhulika  | Srivastava | 01 | 03 | 1985 |  | 123 | sss | Pleasanton | Alameda | USA | 12345 | 408-444-2222 | 444-444-4444 | Lovy123 | Lovy123 |
	| Madhulika | Srivastava | 01 | 03 | 1985 | madhulika.srvt@gmail.com | 123 | sss | Pleasanton | Alameda | USA | 12345 | 408-444-2222 | 444-444-4444 | | Lovy123 |
