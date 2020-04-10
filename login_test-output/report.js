$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Lovy/eclipse-workspace/ecommerce-cucumber-fm/src/test/java/com/apex/LoginFeature/login.feature");
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
  "duration": 8364668800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_Ez_Shop_Online()"
});
formatter.result({
  "duration": 38259500,
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
  "duration": 1057713600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 597818100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.validate_user_is_on_home_page()"
});
formatter.result({
  "duration": 165387700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 1203731900,
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
  "duration": 6655409200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_Ez_Shop_Online()"
});
formatter.result({
  "duration": 16992400,
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
  "duration": 591798200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 580930000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.validate_user_is_on_home_page()"
});
formatter.result({
  "duration": 310504600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 1386496200,
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
  "duration": 7168766600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_Ez_Shop_Online()"
});
formatter.result({
  "duration": 15486300,
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
  "duration": 533276900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 420836200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.validate_user_is_on_home_page()"
});
formatter.result({
  "duration": 160164200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 1053193100,
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
  "duration": 6663100600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_Ez_Shop_Online()"
});
formatter.result({
  "duration": 12343100,
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
  "duration": 730824900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 471563100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.validate_user_is_on_home_page()"
});
formatter.result({
  "duration": 163223100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 1155169600,
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
  "duration": 6386567000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_Ez_Shop_Online()"
});
formatter.result({
  "duration": 21054400,
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
  "duration": 304876500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 404248300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.validate_user_is_on_home_page()"
});
formatter.result({
  "duration": 126618400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 1066085600,
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
  "duration": 6659256000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_of_login_page_is_Ez_Shop_Online()"
});
formatter.result({
  "duration": 58513100,
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
  "duration": 496052400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 536009600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.validate_user_is_on_home_page()"
});
formatter.result({
  "duration": 199454700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 1262173400,
  "status": "passed"
});
});