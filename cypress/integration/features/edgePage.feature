Feature: Edge Page

Background:
    Given Main page is opened

Scenario: Kelsie Anderson profile picture shown on the Edge page
    When User clicks Resources button
    And User clicks Blog button
    And User clicks Article button
    Then The Kelsie Anderson profile picture is visible

Scenario: Success message shown after subscribing for a latest articles via Edge page
    When User clicks Resources button
    And User clicks Blog button
    And User clicks Article button
    And User scrolls to the email input
    And User fills email input
    And User clicks subscribe button
    Then Success message shown on the Edge page

Scenario: Related articles section is present on the Edge page
    When User clicks Resources button
    And User clicks Blog button
    And User clicks Article button
    And User scrolls to the Related Articles section
    Then Related Articles section is visible