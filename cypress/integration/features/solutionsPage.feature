Feature: Edge Page

Background:
    Given Main page is opened

Scenario: Travel title shown on the "Travel and Hospitality" page
    When User clicks Solutions button
    And User scrolls to the Travel section
    And User clicks on the Travel section
    Then The Travel's main title is visible

Scenario: Main title shown on the Solutions page
    When User clicks Solutions button
    Then The Solutions main title is visible