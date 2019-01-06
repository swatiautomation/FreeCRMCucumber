Feature: Free CRM Login Feature

Scenario: Free CRM creates a new deal scenario

Given User is present on the login page
When title of login page is free crm
Then user enters username and password
|chinkisharma |test@1234 |

Then user clicks on login button
Then user is on home page
Then user moves to new deal page
Then user enters deal details
|testdeal | 1000 | 50 | 30 |
Then close the browser