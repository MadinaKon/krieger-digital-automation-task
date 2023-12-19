Feature: Hoeffner Website

  Background:
    Given I go to the "Hoeffner home page"
    And I am on the "Hoeffner home page"
     And I click the "cookie accept button"

 @regression
  Scenario Outline: User can navigate to Hoeffner website and search for a product
    And I type "<searchTerm>" into the "search input field"
    Then I see the "search result text"
    # And I see that the url matches the "suche?anfrage=handtuch" url

    Examples:
      | searchTerm    |
      | tischlampe    |
      | handtuch      |
      
