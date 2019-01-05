$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/hp/eclipse-workspace/FreeCrmBDDFramework/src/main/java/Features/contacts.feature");
formatter.feature({
  "name": "Free CRM create contacts",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Free CRM Create a new contact",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is present on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "title of login page is free crm",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters contacts details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ]
    },
    {
      "cells": [
        "chinkisharma",
        "test@1234",
        "ram",
        "sharma",
        "BA"
      ]
    },
    {
      "cells": [
        "chinkisharma",
        "test@1234",
        "david",
        "sharma",
        "RG"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Free CRM Create a new contact",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is present on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefination.user_present_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of login page is free crm",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"chinkisharma\" and \"test@1234\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_hopme_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_moves_to_new_contact_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters contacts details \"ram\" and \"sharma\" and \"BA\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_enters_contacts_details(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Free CRM Create a new contact",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is present on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefination.user_present_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of login page is free crm",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"chinkisharma\" and \"test@1234\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_hopme_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_moves_to_new_contact_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters contacts details \"david\" and \"sharma\" and \"RG\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_enters_contacts_details(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});