Feature: User can login with the correct email and password

  Background:
    Given I go to the "Hoeffner login page"
    And I am on the "Hoeffner login page"

  @regression
  Scenario: User can navigate to login page
    And I click the "cookie accept button"
    And I type "s0539452@htw-berlin.de" into the "login email input field"
    And I type "j4!2zZrvDhhNX99" into the "login password input field"
    Then I click the "login submit button"
    When I click the "person icon"
    And user can see "Hallo, José Maurinho Taras"
    
