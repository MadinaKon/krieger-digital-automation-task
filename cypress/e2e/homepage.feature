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

#   @regression
#   Scenario: User can check by category and verify category
#     And I type "handtuch" into the "search input field"
#     Then I see the "search result text"
#     Then I see the "main filter"
#    And I check "Handtücher" in the category checkbox
#    And I check "Waschhandschuhe & Seiftücher" in the category checkbox
#    And I check "Duschtücher" in the category checkbox
#    And I check "Gästetücher" in the category checkbox
#    And I check "Strandtücher" in the category checkbox
#    And I check "Badetücher & Saunatücher" in the category checkbox
#    And I click the "show results button"
#    And "name" should include category "tuch"


#  @regression
#   Scenario: User can check by brands and verify brands
#     And I type "handtuch" into the "search input field"
#     Then I see the "search result text"
#     Then I click the "brands button"
#     And I check "CaWö" in the category checkbox
#     And I click the "show results button"
#     And "brand" should include category "CaWö"


    @regression
  Scenario: User can click More filters and see an overlay
    And I type "handtuch" into the "search input field"
    Then I see the "search result text"
    Then I click the "more filter"
    Then I see the "more filters overlay"
    When I click category overlay filters
    Given I click "sorting" in the overlay filters
    Given I click "color" in the overlay filters
    Given I click "prices" in the overlay filters
    Given I click "brands" in the overlay filters

   


    












  #    @regression
  # Scenario: User can check by colors and verify colors category title name
  #   And I type "handtuch" into the "search input field"
  #   Then I see the "search result text"
  #   Then I see the "main filter"
  #  And I check "beige" in the category checkbox
  #  And I check "blau" in the category checkbox
  #  And I check "braun" in the category checkbox
  #  And I check "creme" in the category checkbox
  #  And I check "gelb" in the category checkbox
  #  And I check "grau" in the category checkbox
  #  And I check "grün" in the category checkbox


    #  @regression
#   Scenario: User can check by colors and verify colors category title name
#     And I type "handtuch" into the "search input field"
#     Then I see the "search result text"
#     Then I click the "prices filter"
#    # Then I click the "prices range start input field"
#     And I type "10" into the "prices range start input field"
#        # Then I click the "prices range end input field"
#     And I type "55" into the "prices range end input field"