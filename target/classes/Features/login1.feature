Feature: Free CRM Login Feature

#Scenario: Free CRM Login Test Scenario
#
#Given User is present on the login page
#When title of login page is free crm
#Then user enters "chinkisharma" and "test@1234"
#Then user clicks on login button
#Then user is on home page
#Then close the browser


Scenario Outline: Free CRM Login Test Scenario

Given User is present on the login page
When title of login page is free crm
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then close the browser

Examples:
| username | password |
| chinkisharma | test@1234 |
| tom | test456 |