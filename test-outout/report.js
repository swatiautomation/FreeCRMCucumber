$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/hp/eclipse-workspace/FreeCrmBDDFramework/src/main/java/Features/deal.feature");
formatter.feature({
  "name": "Free CRM Login Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Free CRM creates a new deal scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is present on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "DealStepDefination.user_present_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of login page is free crm",
  "keyword": "When "
});
formatter.match({
  "location": "DealStepDefination.title_of_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "chinkisharma",
        "test@1234"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepDefination.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepDefination.user_is_on_hopme_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user moves to new deal page",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepDefination.user_moves_new_deal_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters deal details",
  "rows": [
    {
      "cells": [
        "testdeal",
        "1000",
        "50",
        "30"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepDefination.user_enters_deal_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealStepDefination.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});