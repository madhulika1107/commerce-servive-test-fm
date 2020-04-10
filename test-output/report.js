$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "ecommerce Login Feature",
  "description": "",
  "id": "ecommerce-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#without Exapmles keyword (We have to use Scenario only notScenario Outline )"
    },
    {
      "line": 4,
      "value": "#Scenario: ecommerce Login Test Scenario"
    },
    {
      "line": 6,
      "value": "#Given user is already on login Page"
    },
    {
      "line": 7,
      "value": "#When title of login page is Ez Shop Online"
    },
    {
      "line": 8,
      "value": "#Then user enters \"madhulika.srvt@gmail.com\" and \"Lovy123\""
    },
    {
      "line": 9,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 10,
      "value": "#Then validate user is on home page"
    },
    {
      "line": 11,
      "value": "#Then close the browser"
    },
    {
      "line": 13,
      "value": "#without Exapmles keyword (We have to use Scenario Outline not only Scenario, when using Example key word)"
    }
  ],
  "line": 14,
  "name": "ecommerce Login Test Scenario",
  "description": "",
  "id": "ecommerce-login-feature;ecommerce-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user is already on login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is Ez Shop Online",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "validate user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "ecommerce-login-feature;ecommerce-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 24,
      "id": "ecommerce-login-feature;ecommerce-login-test-scenario;;1"
    },
    {
      "cells": [
        "madhulika.srvt@gmail.com",
        "Lovy123"
      ],
      "line": 25,
      "id": "ecommerce-login-feature;ecommerce-login-test-scenario;;2"
    },
    {
      "cells": [
        "Lovy17@gmail.com",
        "Lovy17"
      ],
      "line": 26,
      "id": "ecommerce-login-feature;ecommerce-login-test-scenario;;3"
    },
    {
      "cells": [
        "madhulika.srvt@gmail.com",
        "Lovy"
      ],
      "line": 27,
      "id": "ecommerce-login-feature;ecommerce-login-test-scenario;;4"
    },
    {
      "cells": [
        "madhulika.srvt@gmail.com",
        ""
      ],
      "line": 28,
      "id": "ecommerce-login-feature;ecommerce-login-test-scenario;;5"
    },
    {
      "cells": [
        "",
        "Lovy123"
      ],
      "line": 29,
      "id": "ecommerce-login-feature;ecommerce-login-test-scenario;;6"
    },
    {
      "cells": [
        "",
        ""
      ],
      "line": 30,
      "id": "ecommerce-login-feature;ecommerce-login-test-scenario;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "ecommerce Login Test Scenario",
  "description": "",
  "id": "ecommerce-login-feature;ecommerce-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user is already on login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is Ez Shop Online",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"madhulika.srvt@gmail.com\" and \"Lovy123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "validate user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_login_Page()"
});
formatter.result({
  "duration": 7157910900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_Ez_Shop_Online()"
});
formatter.result({
  "duration": 13626100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "madhulika.srvt@gmail.com",
      "offset": 13
    },
    {
      "val": "Lovy123",
      "offset": 44
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 385396800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 346480500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.validate_user_is_on_home_page()"
});
formatter.result({
  "duration": 119197300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 864486000,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "ecommerce Login Test Scenario",
  "description": "",
  "id": "ecommerce-login-feature;ecommerce-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user is already on login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is Ez Shop Online",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"Lovy17@gmail.com\" and \"Lovy17\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "validate user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_login_Page()"
});
formatter.result({
  "duration": 6122989000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_Ez_Shop_Online()"
});
formatter.result({
  "duration": 9706600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lovy17@gmail.com",
      "offset": 13
    },
    {
      "val": "Lovy17",
      "offset": 36
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 352148800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 377267300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.validate_user_is_on_home_page()"
});
formatter.result({
  "duration": 72201100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 886824700,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "ecommerce Login Test Scenario",
  "description": "",
  "id": "ecommerce-login-feature;ecommerce-login-test-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user is already on login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is Ez Shop Online",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"madhulika.srvt@gmail.com\" and \"Lovy\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "validate user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_login_Page()"
});
formatter.result({
  "duration": 6341226300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_Ez_Shop_Online()"
});
formatter.result({
  "duration": 10270100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "madhulika.srvt@gmail.com",
      "offset": 13
    },
    {
      "val": "Lovy",
      "offset": 44
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 542836700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 410646600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.validate_user_is_on_home_page()"
});
formatter.result({
  "duration": 127538500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 820234100,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "ecommerce Login Test Scenario",
  "description": "",
  "id": "ecommerce-login-feature;ecommerce-login-test-scenario;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user is already on login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is Ez Shop Online",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"madhulika.srvt@gmail.com\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "validate user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_login_Page()"
});
formatter.result({
  "duration": 5978973400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_Ez_Shop_Online()"
});
formatter.result({
  "duration": 8637000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "madhulika.srvt@gmail.com",
      "offset": 13
    },
    {
      "val": "",
      "offset": 44
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 253525500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 947844400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.validate_user_is_on_home_page()"
});
formatter.result({
  "duration": 82980800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 821718000,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "ecommerce Login Test Scenario",
  "description": "",
  "id": "ecommerce-login-feature;ecommerce-login-test-scenario;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user is already on login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is Ez Shop Online",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"\" and \"Lovy123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "validate user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_login_Page()"
});
formatter.result({
  "duration": 5903477700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_Ez_Shop_Online()"
});
formatter.result({
  "duration": 8308800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    },
    {
      "val": "Lovy123",
      "offset": 20
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 243234700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 462864100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.validate_user_is_on_home_page()"
});
formatter.result({
  "duration": 80521100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 845398700,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "ecommerce Login Test Scenario",
  "description": "",
  "id": "ecommerce-login-feature;ecommerce-login-test-scenario;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "user is already on login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "title of login page is Ez Shop Online",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user enters \"\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "validate user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_already_on_login_Page()"
});
formatter.result({
  "duration": 5885235600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_Ez_Shop_Online()"
});
formatter.result({
  "duration": 7701500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    },
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 150569700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 362593100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.validate_user_is_on_home_page()"
});
formatter.result({
  "duration": 84638600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 814352100,
  "status": "passed"
});
});