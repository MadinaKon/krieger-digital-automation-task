Feature: User can login with the correct email and password

  Background:
    Given I go to the "Hoeffner login page"
    And I am on the "Hoeffner login page"

  @regression
  Scenario: Login with valid credentials
    And I click the "cookie accept button"
    And I type "s0539452@htw-berlin.de" into the "login email input field"
    And I type "j4!2zZrvDhhNX99" into the "login password input field"
    Then I click the "login submit button"
    And I go to the "Hoeffner account page"
    Then I see the "account overview headline"
    
  @regression
  Scenario: Login with invalid credentials
    And I click the "cookie accept button"
    And I type "azu@htw-berlin.de" into the "login email input field"
    And I type "j4!2zZrvDhhNX99" into the "login password input field"
    Then I click the "login submit button"
    And I see the "login error text"

  @regression
  Scenario: Forgot password case
    And I click the "cookie accept button"
    And I click the "forgot password link"
    And I see the "forgot password input field"
    And I type "azu@htw-berlin.de" into the "forgot password input field"
    And I see the "forget password successful message"
   # And I see that the url matches the "passwortMail/gesendet" url
    
