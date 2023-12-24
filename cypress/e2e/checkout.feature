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
   # And I click the "cart pickup option radio button"
    And I see the "cart overview"
    And I click the "cart overview close button"
    And I see the "empty cart text"

    # And I click the "continue browsing button"
    #  And I am on the "Hoeffner home page"

   # And I click the "to checkout button"
    # And I am on the "Order page"
    # And I type "s0539452@htw-berlin.de" into the "login email input field"
    # And I type "j4!2zZrvDhhNX99" into the "login password input field"
    # And I click the "login submit button"

    # And I am on the "Payment method page"
    # And I click the "direct payment button"

    












   # And I am on the "Payment method page"
     