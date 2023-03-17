$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/BackgroundColor.feature");
formatter.feature({
  "line": 2,
  "name": "Background change functionality validation",
  "description": "",
  "id": "background-change-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "1 Sky Blue Background",
  "description": "",
  "id": "background-change-functionality-validation;1-sky-blue-background",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@SkyBlue"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "\"Set SkyBlue Background\" button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on the \"button1\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyBlue Background",
      "offset": 1
    }
  ],
  "location": "BackgroundStepDefinitation.button_exists(String)"
});
formatter.result({
  "duration": 10111172700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "button1",
      "offset": 16
    }
  ],
  "location": "BackgroundStepDefinitation.user_click_on_the_button(String)"
});
formatter.result({
  "duration": 115800,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepDefinitation.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 788100,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy18.getCssValue(Unknown Source)\r\n\tat pages.BackgroundPage.validateBlueBackground(BackgroundPage.java:67)\r\n\tat steps.BackgroundStepDefinitation.the_background_color_will_change_to_sky_blue(BackgroundStepDefinitation.java:35)\r\n\tat ✽.Then the background color will change to sky blue(features/BackgroundColor.feature:8)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 11,
  "name": "2 White Background Change",
  "description": "",
  "id": "background-change-functionality-validation;2-white-background-change",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@White"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "\"Set SkyWhite Background\" button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on the \"button2\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the background color will change to white",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Set SkyWhite Background",
      "offset": 1
    }
  ],
  "location": "BackgroundStepDefinitation.button_exists(String)"
});
formatter.result({
  "duration": 4387581800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "button2",
      "offset": 16
    }
  ],
  "location": "BackgroundStepDefinitation.user_click_on_the_button(String)"
});
formatter.result({
  "duration": 123600,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundStepDefinitation.the_background_color_will_change_to_white()"
});
formatter.result({
  "duration": 248100,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy18.getCssValue(Unknown Source)\r\n\tat pages.BackgroundPage.validateWhiteBackground(BackgroundPage.java:73)\r\n\tat steps.BackgroundStepDefinitation.the_background_color_will_change_to_white(BackgroundStepDefinitation.java:43)\r\n\tat ✽.Then the background color will change to white(features/BackgroundColor.feature:14)\r\n",
  "status": "failed"
});
});