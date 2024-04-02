import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import MainPage from "../pages/MainPage";
import SignUpPage from "../pages/SignUpPage";
import RandomData from "../helpers/RandomData";

let email;

Given("Main page is opened", () => {
	cy.visit('/')
    MainPage.clickAcceptCookies();
    email = RandomData.generateRandomEmail();
});

When("User clicks SignUp button", () => {
	MainPage.clickSignUpButton();
});

When("User scrolls to the Learn About the Edge button", () => {
	MainPage.scrollToEdgeButton();
});

When("User clicks the Learn About the Edge button", () => {
	MainPage.clickToEdgeButton();
});

When("User clicks Solutions button", () => {
	MainPage.clickSolutionsButton();
});

// Scenario: "Download full coverage" message shown on the Global coverage page
When("User scrolls to Global Coverage button", () => {
	MainPage.scollToGlobalCoverageButton();
});

When("User clicks Global Coverage button", () => {
	MainPage.clickGlobalCoverageButton();
});

Then("The 'Download full coverage' message is visible", () => {
	MainPage.getDownloadFullCoverageText.should('be.visible');
});

// Scenario: Features section shown on the Our Network page

When("User scrolls to Our Network button", () => {
	MainPage.scrollToOurNetworkButton();
});

When("User clicks Our Network button", () => {
	MainPage.clickOurNetworkButton();
});

When("User scrolls to Our Network Features section", () => {
	MainPage.scrollToOurNetworkFeaturesSection();
});

Then("Our Network Features section is visible", () => {
	MainPage.getOurNetworkFeaturesSection.should('be.visible');
});

// Scenario: Telnyx message price shown on the Talnyx VS Twilio page

When("User scrolls to Telnyx VS Twilio button", () => {
	MainPage.scrollToTelnyxVSTwilioButton();
});

When("User clicks Telnyx VS Twilio button", () => {
	MainPage.clickTelnyxVSTwilioButton();
});

When("User scrolls to Compare Pricing section", () => {
	MainPage.scrollToComparePricingSection();
});

Then("The Message pricing for Telnyx contain $0.004", () => {
	MainPage.getComparePricingSection.contains('$0.004')
});

// Verify the email input on the main page

When("User scrolls to Email input", () => {
	MainPage.scrollToEmailInput();
});

When("User fills bottom email input", () => {
	MainPage.fillEmailInput(email)
});

When("User clicks bottom Sign Up button", () => {
	MainPage.clickBottomSignUpButton();
});

Then("Company email should contain entered email", () => {
	SignUpPage.getEmailInput.should('have.value', email);
});