import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import MainPage from "../pages/MainPage";
import SignUpPage from "../pages/SignUpPage";
import RandomData from "../helpers/RandomData";

Given("Main page is opened", () => {
	cy.visit('/')
    MainPage.clickAcceptCookies();
});

When("User clicks SignUp button", () => {
	MainPage.clickSignUpButton();
});
// Scenario Validation error message shown after registration details filled with 11 chars password

When("User fills Email input", () => {
	SignUpPage.fillEmailInput(RandomData.generateRandomEmail());
});

When("User fills First Name input", () => {
	SignUpPage.fillFirstNameInput(RandomData.generateRandomString());
});

When("User fills Last Name input", () => {
	SignUpPage.fillLastNameInput(RandomData.generateRandomString());
});

When("User fills Password input with invalid password", () => {
	SignUpPage.fillPasswordInput(RandomData.generateRandomInvalidPassword());
});

When("User checks Terms and Conditions checkbox", () => {
	SignUpPage.checkTermsAndConditionsCheckbox();
});

When("User clicks Submit button", () => {
	SignUpPage.clickSignUpButton();
});

Then("Min Lenght password validation message is visible", () => {
	SignUpPage.getMinPasswordValidationMessage.should('be.visible');
});

// Scenario The conditions header shown on the "Terms & Conditions" page

When("User clicks Terms and Conditions button", () => {
	SignUpPage.clickTermsAndConditionsButton();
});

Then("Terms and Conditions title is visible", () => {
	SignUpPage.getConditionsTitle.should('be.visible');
});

// Scenario Validation errors shown if no credentials entered in Sign Up form

When("User double clicks Submit button", () => {
	SignUpPage.doubleClickSignUpButton();
});

Then("Email validation message is visible", () => {
	SignUpPage.getEmailValidationMessage.should('be.visible');
});

Then("First Name validation message is visible", () => {
	SignUpPage.getFirstNameValidationMessage.should('be.visible');
});

Then("Last Name validation message is visible", () => {
	SignUpPage.getLastNameValidationMessage.should('be.visible');
});

Then("Password validation message is visible", () => {
	SignUpPage.getPasswordValidationMessage.should('be.visible');
});

Then("Terms and Conditions validation message is visible", () => {
	SignUpPage.getTermsAndConditionsValidationMessage.should('be.visible');
});

When("User fills Password input", () => {
	SignUpPage.fillPasswordInput(RandomData.generateRandomPassword());
});