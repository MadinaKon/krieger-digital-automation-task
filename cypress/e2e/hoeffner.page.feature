Feature: Hoeffner Website

  Background:
    Given I go to the "Hoeffner home page"
    And I am on the "Hoeffner home page"
     And I click the "cookie accept button"

 @regression
  Scenario Outline: User can navigate to Hoeffner website and search for a product
    And I type "<searchTerm>" into the "search input field"
    Then I see the "search result text"
   And I see that the url matches the "<searchResult>" url

    Examples:
      | searchTerm    |searchResult            |
      | tischlampe    |suche?anfrage=tischlampe|
      | handtuch      |suche?anfrage=handtuch  |
      
