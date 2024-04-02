Feature: Sign Up Page

Background:
    Given Main page is opened

Scenario: Validation error message shown after registration details filled with 11 chars password
    When User clicks SignUp button
    And User fills Email input
    And User fills First Name input
    And User fills Last Name input
    And User fills Password input with invalid password
    And User checks Terms and Conditions checkbox
    And User clicks Submit button
    Then Min Lenght password validation message is visible
 
Scenario: The conditions header shown on the "Terms & Conditions" page
    When User clicks SignUp button
    And User clicks Terms and Conditions button
    Then Terms and Conditions title is visible

Scenario: Validation errors shown if no credentials entered in Sign Up form
    When User clicks SignUp button
    And User double clicks Submit button
    Then Email validation message is visible
    And First Name validation message is visible
    And Last Name validation message is visible
    And Password validation message is visible
    And Terms and Conditions validation message is visible

Scenario: Validation error message shown after registration details filled except email
    When User clicks SignUp button
    And User fills First Name input
    And User fills Last Name input
    And User fills Password input
    And User checks Terms and Conditions checkbox
    And User clicks Submit button
    Then Email validation message is visible