Feature: Hoeffner Website

  Background:
    Given I go to the "Hoeffner homepage"
    And I am on the "Hoeffner homepage"

  @regression
  Scenario Outline: User can navigate to Hoeffner website
    And I click the "cookie accept button"
    And I type "<searchTerm>" into the "search input field"
    Then I see the "search result text"

    Examples:
      | searchTerm    |
      | Tischlampe    |
      | Handtuch      |

  @smoke
  Scenario: User can navigate to Hoeffner website
    And I click the "cookie accept button"
    And I type "Handtuch" into the "search input field"
    Then I see the "search result text"
    And I see that the url matches the "suche?anfrage=handtuch" url


    Examples:
      | searchTerm    |
      | Tischlampe    |
      | Handtuch      |

      
