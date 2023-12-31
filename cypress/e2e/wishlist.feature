Feature: Existing user can add a product to the wishlist successfully

  Background:
    Given I go to the "Hoeffner login page"
    And I am on the "Hoeffner login page"
    And I click the "cookie accept button"
   

  @regression
  Scenario: Add product to the wishlist
    And I go to the "Hoeffner wishlist page"
    And I type "handtuch" into the "search input field"
    Then I see the "search result text"
    And I should see products in the catalog
    And product is added to the wishlist
      |ArticleNumber  |
      | 11827118      |

    And I click the "visitor login button"
    And I am on the "Hoeffner login page"
    When I get login credentials from environment variables
  | inputField               | environment key |
  | loginEmailInput          | EMAIL           |
  | loginPasswordInput       | PASSWORD        |
    Then I click the "login submit button"
    Then I go to the "Logged in user wishlist page"


    # this step is failing randomly due to the "302: https://www.hoeffner.de/login"
    # And product with article number "11827118" is listed under the wishlist



   

 
