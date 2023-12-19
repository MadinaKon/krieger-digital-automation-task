Feature: Existing user can buy a product successfully
  Background:
    Given I go to the "Hoeffner catalog page"
    And I am on the "Hoeffner catalog page"
    And I click the "cookie accept button"

#   Background:
#     Given I go to the "Hoeffner login page"
#     And I am on the "Hoeffner login page"
#     And I click the "cookie accept button"

#   @regression
#   Scenario Outline: Login with valid credentials
   
#     # And I type "s0539452@htw-berlin.de" into the "login email input field"
#     # And I type "j4!2zZrvDhhNX99" into the "login password input field"
#   #  Then I click the "login submit button"
#      And I type "<searchTerm>" into the "search input field"
#      Then I see the "search result text"
#      And I see that the url matches the "<searchResult>" url

#     Examples:
#       | searchTerm    |searchResult            |
#       | handtuch      |suche?anfrage=handtuch  |

  @regression
  Scenario: Login with valid credentials
   
    # And I type "s0539452@htw-berlin.de" into the "login email input field"
    # And I type "j4!2zZrvDhhNX99" into the "login password input field"
  #  Then I click the "login submit button"
     And I type "handtuch" into the "search input field"
    Then I see the "search result text"
    And I should see products in the catalog
   # Then I click the "product" from the list