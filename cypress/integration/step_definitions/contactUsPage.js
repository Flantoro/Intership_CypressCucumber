import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import MainPage from "../pages/MainPage";
import ContactUsPage from "../pages/ContactUsPage";


// Scenario: "Talk to an expert" title shown on the Contact-Us page
When("User clicks Contact Us button", () => {
	MainPage.clickContactUsButton();
});

Then("Contact Us title is visible", () => {
	ContactUsPage.getContactUsTitle.should('be.visible');
});

When("User clicks Submit button on the Contact Us page", () => {
	ContactUsPage.clickSubmitButton();
});

Then("Help field validation message is displayed", () => {
	ContactUsPage.getValidationMessage.should('be.visible');
});


