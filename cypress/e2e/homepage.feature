Feature: Hoeffner Website

  Background:
    Given I go to the "Hoeffner home page"
    And I am on the "Hoeffner home page"
     And I click the "cookie accept button"

#  @regression
#   Scenario Outline: User can navigate to Hoeffner website and search for a product
#     And I type "<searchTerm>" into the "search input field"
#     Then I see the "search result text"
#    And I see that the url matches the "<searchResult>" url

#     Examples:
#       | searchTerm    |searchResult            |
#       | tischlampe    |suche?anfrage=tischlampe|
#       | handtuch      |suche?anfrage=handtuch  |

       @regression
  Scenario: User can navigate to Hoeffner website and search for a product
    And I type "handtuch" into the "search input field"
    Then I see the "search result text"
    Then I see the "main filter"
   # And I click the "sorting filter"
   # Then I see the "list sorting filter"
   And I check "Handtücher" in the category checkbox
   And I check "Waschhandschuhe & Seiftücher" in the category checkbox
 #  And I check "Duschtücher" in the category checkbox
   And I check "Gästetücher" in the category checkbox
   And I check "Strandtücher" in the category checkbox
   And I check "Badetücher & Saunatücher" in the category checkbox
   And I click the "show results button"
   And article title should include category "tuch"