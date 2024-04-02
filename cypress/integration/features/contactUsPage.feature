Feature: Contact Us Page

Background:
    Given Main page is opened

Scenario: "Talk to an expert" title shown on the Contact-Us page
    When User clicks Contact Us button
    Then Contact Us title is visible

Scenario: Validation error is shown on the Contact Us page without specifying details
    When User clicks Contact Us button
    And User clicks Submit button on the Contact Us page
    Then Help field validation message is displayed
