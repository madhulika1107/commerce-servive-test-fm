$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Lovy/eclipse-workspace/ecommerce-cucumber-fm/src/test/java/com/apex/RegistrationFeature/registration.Feature");
formatter.feature({
  "line": 1,
  "name": "ecommerce Registration Feature",
  "description": "",
  "id": "ecommerce-registration-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#without Exapmles keyword (We have to use Scenario Outline not only Scenario, when using Example key word)"
    }
  ],
  "line": 4,
  "name": "ecommerce Registration Test Scenario",
  "description": "",
  "id": "ecommerce-registration-feature;ecommerce-registration-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "you are on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "login page title is Ez Shop Online",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click signUP buton",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks gender buton",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters contacts details \"\u003cFirstName\u003e\" and \"\u003clastName\u003e\" and \"\u003cdateOfBirth\u003e\" and \"\u003cmonthOfBirth\u003e\" and \"\u003cyearOfBirth\u003e\" and \"\u003cemailID\u003e\" and \"\u003chouseNumber\u003e\" and \"\u003cstreetName\u003e\" and \"\u003ccity\u003e\" and \"\u003ccounty\u003e\"  and \"\u003ccountry\u003e\"  and \"\u003cpostal\u003e\" and \"\u003cdPhone\u003e\" and \"\u003cePhone\u003e\"  and\"\u003cpassword\u003e\" and \"\u003ccPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on terms",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks sign up button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "validate if user is already singedUP",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the window",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "ecommerce-registration-feature;ecommerce-registration-test-scenario;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "lastName",
        "dateOfBirth",
        "monthOfBirth",
        "yearOfBirth",
        "emailID",
        "houseNumber",
        "streetName",
        "city",
        "county",
        "country",
        "postal",
        "dPhone",
        "ePhone",
        "password",
        "cPassword"
      ],
      "line": 17,
      "id": "ecommerce-registration-feature;ecommerce-registration-test-scenario;;1"
    },
    {
      "cells": [
        "Madhulika",
        "Srivastava",
        "01",
        "03",
        "1985",
        "madhulika.srvt@gmail.com",
        "123",
        "sss",
        "Pleasanton",
        "Alameda",
        "USA",
        "12345",
        "408-444-2222",
        "444-444-4444",
        "Lovy123",
        "Lovy123"
      ],
      "line": 18,
      "id": "ecommerce-registration-feature;ecommerce-registration-test-scenario;;2"
    },
    {
      "cells": [
        "",
        "Srivastava",
        "01",
        "03",
        "1985",
        "madhulika.srvt@gmail.com",
        "123",
        "sss",
        "Pleasanton",
        "Alameda",
        "USA",
        "12345",
        "408-444-2222",
        "444-444-4444",
        "Lovy123",
        "Lovy123"
      ],
      "line": 19,
      "id": "ecommerce-registration-feature;ecommerce-registration-test-scenario;;3"
    },
    {
      "cells": [
        "Madhulika",
        "Srivastava",
        "01",
        "03",
        "1985",
        "",
        "123",
        "sss",
        "Pleasanton",
        "Alameda",
        "USA",
        "12345",
        "408-444-2222",
        "444-444-4444",
        "Lovy123",
        "Lovy123"
      ],
      "line": 20,
      "id": "ecommerce-registration-feature;ecommerce-registration-test-scenario;;4"
    },
    {
      "cells": [
        "Madhulika",
        "Srivastava",
        "01",
        "03",
        "1985",
        "madhulika.srvt@gmail.com",
        "123",
        "sss",
        "Pleasanton",
        "Alameda",
        "USA",
        "12345",
        "408-444-2222",
        "444-444-4444",
        "",
        "Lovy123"
      ],
      "line": 21,
      "id": "ecommerce-registration-feature;ecommerce-registration-test-scenario;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "ecommerce Registration Test Scenario",
  "description": "",
  "id": "ecommerce-registration-feature;ecommerce-registration-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "you are on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "login page title is Ez Shop Online",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click signUP buton",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks gender buton",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters contacts details \"Madhulika\" and \"Srivastava\" and \"01\" and \"03\" and \"1985\" and \"madhulika.srvt@gmail.com\" and \"123\" and \"sss\" and \"Pleasanton\" and \"Alameda\"  and \"USA\"  and \"12345\" and \"408-444-2222\" and \"444-444-4444\"  and\"Lovy123\" and \"Lovy123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on terms",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks sign up button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "validate if user is already singedUP",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the window",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrayionStemDefination.you_are_on_login_page()"
});
formatter.result({
  "duration": 7267527000,
  "status": "passed"
});
formatter.match({
  "location": "RegistrayionStemDefination.login_page_title_is_Ez_Shop_Online()"
});
formatter.result({
  "duration": 15361500,
  "status": "passed"
});
formatter.match({
  "location": "RegistrayionStemDefination.user_click_signUP_buton()"
});
formatter.result({
  "duration": 307208700,
  "status": "passed"
});
formatter.match({
  "location": "RegistrayionStemDefination.user_clicks_gender_buton()"
});
formatter.result({
  "duration": 94093800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Madhulika",
      "offset": 30
    },
    {
      "val": "Srivastava",
      "offset": 46
    },
    {
      "val": "01",
      "offset": 63
    },
    {
      "val": "03",
      "offset": 72
    },
    {
      "val": "1985",
      "offset": 81
    },
    {
      "val": "madhulika.srvt@gmail.com",
      "offset": 92
    },
    {
      "val": "123",
      "offset": 123
    },
    {
      "val": "sss",
      "offset": 133
    },
    {
      "val": "Pleasanton",
      "offset": 143
    },
    {
      "val": "Alameda",
      "offset": 160
    },
    {
      "val": "USA",
      "offset": 175
    },
    {
      "val": "12345",
      "offset": 186
    },
    {
      "val": "408-444-2222",
      "offset": 198
    },
    {
      "val": "444-444-4444",
      "offset": 217
    },
    {
      "val": "Lovy123",
      "offset": 236
    },
    {
      "val": "Lovy123",
      "offset": 250
    }
  ],
  "location": "RegistrayionStemDefination.user_enters_contacts_details_and_and_and_and_and_and_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1502333900,
  "status": "passed"
});
formatter.match({
  "location": "RegistrayionStemDefination.user_clicks_on_terms()"
});
formatter.result({
  "duration": 76543300,
  "status": "passed"
});
formatter.match({
  "location": "RegistrayionStemDefination.user_clicks_sign_up_button()"
});
formatter.result({
  "duration": 287672100,
  "status": "passed"
});
formatter.match({
  "location": "RegistrayionStemDefination.validate_if_user_is_already_singedUP()"
});
formatter.result({
  "duration": 457371900,
  "status": "passed"
});
formatter.match({
  "location": "RegistrayionStemDefination.close_the_window()"
});
formatter.result({
  "duration": 825570600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "ecommerce Registration Test Scenario",
  "description": "",
  "id": "ecommerce-registration-feature;ecommerce-registration-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "you are on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "login page title is Ez Shop Online",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click signUP buton",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks gender buton",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters contacts details \"\" and \"Srivastava\" and \"01\" and \"03\" and \"1985\" and \"madhulika.srvt@gmail.com\" and \"123\" and \"sss\" and \"Pleasanton\" and \"Alameda\"  and \"USA\"  and \"12345\" and \"408-444-2222\" and \"444-444-4444\"  and\"Lovy123\" and \"Lovy123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on terms",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks sign up button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "validate if user is already singedUP",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the window",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrayionStemDefination.you_are_on_login_page()"
});
formatter.result({
  "duration": 6639285000,
  "status": "passed"
});
formatter.match({
  "location": "RegistrayionStemDefination.login_page_title_is_Ez_Shop_Online()"
});
formatter.result({
  "duration": 9053700,
  "status": "passed"
});
formatter.match({
  "location": "RegistrayionStemDefination.user_click_signUP_buton()"
});
formatter.result({
  "duration": 250596600,
  "status": "passed"
});
formatter.match({
  "location": "RegistrayionStemDefination.user_clicks_gender_buton()"
});
formatter.result({
  "duration": 117205800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 30
    },
    {
      "val": "Srivastava",
      "offset": 37
    },
    {
      "val": "01",
      "offset": 54
    },
    {
      "val": "03",
      "offset": 63
    },
    {
      "val": "1985",
      "offset": 72
    },
    {
      "val": "madhulika.srvt@gmail.com",
      "offset": 83
    },
    {
      "val": "123",
      "offset": 114
    },
    {
      "val": "sss",
      "offset": 124
    },
    {
      "val": "Pleasanton",
      "offset": 134
    },
    {
      "val": "Alameda",
      "offset": 151
    },
    {
      "val": "USA",
      "offset": 166
    },
    {
      "val": "12345",
      "offset": 177
    },
    {
      "val": "408-444-2222",
      "offset": 189
    },
    {
      "val": "444-444-4444",
      "offset": 208
    },
    {
      "val": "Lovy123",
      "offset": 227
    },
    {
      "val": "Lovy123",
      "offset": 241
    }
  ],
  "location": "RegistrayionStemDefination.user_enters_contacts_details_and_and_and_and_and_and_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1530296600,
  "status": "passed"
});
formatter.match({
  "location": "RegistrayionStemDefination.user_clicks_on_terms()"
});
formatter.result({
  "duration": 75327100,
  "status": "passed"
});
formatter.match({
  "location": "RegistrayionStemDefination.user_clicks_sign_up_button()"
});
formatter.result({
  "duration": 237483800,
  "status": "passed"
});
formatter.match({
  "location": "RegistrayionStemDefination.validate_if_user_is_already_singedUP()"
});
formatter.result({
  "duration": 444097700,
  "status": "passed"
});
formatter.match({
  "location": "RegistrayionStemDefination.close_the_window()"
});
formatter.result({
  "duration": 806265600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "ecommerce Registration Test Scenario",
  "description": "",
  "id": "ecommerce-registration-feature;ecommerce-registration-test-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "you are on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "login page title is Ez Shop Online",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click signUP buton",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks gender buton",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters contacts details \"Madhulika\" and \"Srivastava\" and \"01\" and \"03\" and \"1985\" and \"\" and \"123\" and \"sss\" and \"Pleasanton\" and \"Alameda\"  and \"USA\"  and \"12345\" and \"408-444-2222\" and \"444-444-4444\"  and\"Lovy123\" and \"Lovy123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on terms",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks sign up button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "validate if user is already singedUP",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the window",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrayionStemDefination.you_are_on_login_page()"
});
formatter.result({
  "duration": 5838209000,
  "status": "passed"
});
formatter.match({
  "location": "RegistrayionStemDefination.login_page_title_is_Ez_Shop_Online()"
});
formatter.result({
  "duration": 9139400,
  "status": "passed"
});
formatter.match({
  "location": "RegistrayionStemDefination.user_click_signUP_buton()"
});
formatter.result({
  "duration": 251058900,
  "status": "passed"
});
formatter.match({
  "location": "RegistrayionStemDefination.user_clicks_gender_buton()"
});
formatter.result({
  "duration": 94888600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Madhulika",
      "offset": 30
    },
    {
      "val": "Srivastava",
      "offset": 46
    },
    {
      "val": "01",
      "offset": 63
    },
    {
      "val": "03",
      "offset": 72
    },
    {
      "val": "1985",
      "offset": 81
    },
    {
      "val": "",
      "offset": 92
    },
    {
      "val": "123",
      "offset": 99
    },
    {
      "val": "sss",
      "offset": 109
    },
    {
      "val": "Pleasanton",
      "offset": 119
    },
    {
      "val": "Alameda",
      "offset": 136
    },
    {
      "val": "USA",
      "offset": 151
    },
    {
      "val": "12345",
      "offset": 162
    },
    {
      "val": "408-444-2222",
      "offset": 174
    },
    {
      "val": "444-444-4444",
      "offset": 193
    },
    {
      "val": "Lovy123",
      "offset": 212
    },
    {
      "val": "Lovy123",
      "offset": 226
    }
  ],
  "location": "RegistrayionStemDefination.user_enters_contacts_details_and_and_and_and_and_and_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1158197900,
  "status": "passed"
});
formatter.match({
  "location": "RegistrayionStemDefination.user_clicks_on_terms()"
});
formatter.result({
  "duration": 71870000,
  "status": "passed"
});
formatter.match({
  "location": "RegistrayionStemDefination.user_clicks_sign_up_button()"
});
formatter.result({
  "duration": 270159600,
  "status": "passed"
});
formatter.match({
  "location": "RegistrayionStemDefination.validate_if_user_is_already_singedUP()"
});
formatter.result({
  "duration": 435398200,
  "status": "passed"
});
formatter.match({
  "location": "RegistrayionStemDefination.close_the_window()"
});
formatter.result({
  "duration": 808900900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "ecommerce Registration Test Scenario",
  "description": "",
  "id": "ecommerce-registration-feature;ecommerce-registration-test-scenario;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "you are on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "login page title is Ez Shop Online",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click signUP buton",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks gender buton",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters contacts details \"Madhulika\" and \"Srivastava\" and \"01\" and \"03\" and \"1985\" and \"madhulika.srvt@gmail.com\" and \"123\" and \"sss\" and \"Pleasanton\" and \"Alameda\"  and \"USA\"  and \"12345\" and \"408-444-2222\" and \"444-444-4444\"  and\"\" and \"Lovy123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on terms",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks sign up button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "validate if user is already singedUP",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close the window",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrayionStemDefination.you_are_on_login_page()"
});
formatter.result({
  "duration": 5804043600,
  "status": "passed"
});
formatter.match({
  "location": "RegistrayionStemDefination.login_page_title_is_Ez_Shop_Online()"
});
formatter.result({
  "duration": 11219200,
  "status": "passed"
});
formatter.match({
  "location": "RegistrayionStemDefination.user_click_signUP_buton()"
});
formatter.result({
  "duration": 263306500,
  "status": "passed"
});
formatter.match({
  "location": "RegistrayionStemDefination.user_clicks_gender_buton()"
});
formatter.result({
  "duration": 117071500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Madhulika",
      "offset": 30
    },
    {
      "val": "Srivastava",
      "offset": 46
    },
    {
      "val": "01",
      "offset": 63
    },
    {
      "val": "03",
      "offset": 72
    },
    {
      "val": "1985",
      "offset": 81
    },
    {
      "val": "madhulika.srvt@gmail.com",
      "offset": 92
    },
    {
      "val": "123",
      "offset": 123
    },
    {
      "val": "sss",
      "offset": 133
    },
    {
      "val": "Pleasanton",
      "offset": 143
    },
    {
      "val": "Alameda",
      "offset": 160
    },
    {
      "val": "USA",
      "offset": 175
    },
    {
      "val": "12345",
      "offset": 186
    },
    {
      "val": "408-444-2222",
      "offset": 198
    },
    {
      "val": "444-444-4444",
      "offset": 217
    },
    {
      "val": "",
      "offset": 236
    },
    {
      "val": "Lovy123",
      "offset": 243
    }
  ],
  "location": "RegistrayionStemDefination.user_enters_contacts_details_and_and_and_and_and_and_and_and_and_and_and_and_and_and_and(String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1531911200,
  "status": "passed"
});
formatter.match({
  "location": "RegistrayionStemDefination.user_clicks_on_terms()"
});
formatter.result({
  "duration": 82393300,
  "status": "passed"
});
formatter.match({
  "location": "RegistrayionStemDefination.user_clicks_sign_up_button()"
});
formatter.result({
  "duration": 238827400,
  "status": "passed"
});
formatter.match({
  "location": "RegistrayionStemDefination.validate_if_user_is_already_singedUP()"
});
formatter.result({
  "duration": 448884000,
  "status": "passed"
});
formatter.match({
  "location": "RegistrayionStemDefination.close_the_window()"
});
formatter.result({
  "duration": 827410400,
  "status": "passed"
});
});