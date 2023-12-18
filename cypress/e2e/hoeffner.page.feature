Feature: Hoeffner Website

  Background:
    Given I go to the "Hoeffner page"
    And I am on the "Hoeffner page"

  @regression
  Scenario Outline: User can navigate to Hoeffner website
    And I click the "cookie accept button"
    And I type "<searchTerm>" into the "search input field"
    Then I see the "search result text"

    Examples:
      | searchTerm    |
      | Tischlampe    |
      | Handtuch      |
