Feature: Free CRM create contacts

Scenario Outline: Free CRM Create a new contact

Given User is present on the login page
When title of login page is free crm
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then user moves to new contact page
Then user enters contacts details "<firstname>" and "<lastname>" and "<position>"
Then close the browser

Examples:
|username | password | firstname | lastname | position |
| chinkisharma | test@1234 | ram | sharma | BA |
|chinkisharma |test@1234| david | sharma | RG |



