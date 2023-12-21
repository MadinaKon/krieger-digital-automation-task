Feature: Existing user can add a product to the wishlist successfully

  Background:
    Given I go to the "Hoeffner login page"
    And I am on the "Hoeffner login page"
    And I click the "cookie accept button"
    And I type "s0539452@htw-berlin.de" into the "login email input field"
    And I type "j4!2zZrvDhhNX99" into the "login password input field"
    Then I click the "login submit button"
    And I go to the "Hoeffner account page"
    Then I see the "account overview headline"

  @regression
  Scenario: Add product to the wishlist

   # Verify the wishlist feature is displayed
   #Add an item to the wishlist
   #Verify the item was added to the wishlist
   # Update the item in the wishlist
   # Verify the item was updated in the wishlist
   # Remove the item from the wishlist
   # Verify the item was removed from the wishlist

   
    And I go to the "Hoeffner wishlist page"
    And I type "handtuch" into the "search input field"
    Then I see the "search result text"
    And I should see products in the catalog
   # And product "11827118" to the wishlist is being added
    # And following products are added to the wishlist
    And product is added to the wishlist
      |ArticleNumber  |
      | 11823931      |
      | 11827118      |
      | 40820295      |
      |10826445       |
     
#   And product is removed from the wishlist
#       |ArticleNumber  |
#       | 11823931      |
#       | 11827118      |
#       | 40820295      |
#       |10826445       |


   # And I click the "add to wishlist button"
   # Then I see the "wishlist icon"
   # Then I see the "wishlist icon clicked"
  # Then "wishlist icon count" count should be correct

