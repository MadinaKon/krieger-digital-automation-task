Feature: Existing user can buy a product successfully
  Background:
    Given I go to the "Hoeffner catalog page"
    And I am on the "Hoeffner catalog page"
    And I click the "cookie accept button"

  @regression
  Scenario: Add product to the cart from a homepage

    And I type "handtuch" into the "search input field"
    Then I see the "search result text"
    And I should see products in the catalog
    And following products are added to the cart
    |ArticleNumber                |Qty|
    |10828141                     |1  |
    And I am on the "Hoeffner product detail page"
    And I click the "add to cart button"
    And I click the "go to cart button"

    
    And I am on the "Hoeffner shopping cart page"
    And I see that the url matches the "warenkorb" url

    And I am on the "Checkout page"
    And I see the "cart overview"
    And I click the "cart overview close button"
    And I see the "empty cart text"
     