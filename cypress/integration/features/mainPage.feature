Feature: Main Page

Background:
    Given Main page is opened

Scenario: "Download full coverage" message shown on the Global coverage page
    When User scrolls to Global Coverage button
    And User clicks Global Coverage button
    Then The 'Download full coverage' message is visible

Scenario: Features section shown on the Our Network page
    When User scrolls to Our Network button
    And User clicks Our Network button
    And User scrolls to Our Network Features section
    Then Our Network Features section is visible

Scenario: Telnyx message price shown on the Talnyx VS Twilio page
    When User scrolls to Telnyx VS Twilio button
    And User clicks Telnyx VS Twilio button
    And User scrolls to Compare Pricing section
    Then The Message pricing for Telnyx contain $0.004

Scenario: Verify the email input on the main page
    When User scrolls to Email input
    And User fills bottom email input
    And User clicks bottom Sign Up button
    Then Company email should contain entered email