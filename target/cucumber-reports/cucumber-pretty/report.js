$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/ryanair/ryanair_payment_test_no_login.feature");
formatter.feature({
  "line": 1,
  "name": "As a Ryanair user I do not login and attempt to make book a flight login popup is displayed",
  "description": "",
  "id": "as-a-ryanair-user-i-do-not-login-and-attempt-to-make-book-a-flight-login-popup-is-displayed",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3346000100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Book a flight, without Logging into RyanAir and assert login popup",
  "description": "",
  "id": "as-a-ryanair-user-i-do-not-login-and-attempt-to-make-book-a-flight-login-popup-is-displayed;book-a-flight,-without-logging-into-ryanair-and-assert-login-popup",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@test2"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I make a booking from DUB to BER on 12/03/2020 for 2 adults and 1 child",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I should get the login required popup",
  "keyword": "Then "
});
formatter.match({
  "location": "RyanAirProjectStepDefinitions.IMakeABooking()"
});
formatter.result({
  "duration": 32808506900,
  "status": "passed"
});
formatter.match({
  "location": "RyanAirProjectStepDefinitions.IShouldGetTheLoginRequiredPopup()"
});
formatter.result({
  "duration": 2928362400,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1229176500,
  "status": "passed"
});
});