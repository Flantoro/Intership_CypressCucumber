import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import MainPage from "../pages/MainPage";
import EdgePage from "../pages/EdgePage";
import RandomData from "../helpers/RandomData";

// Scenario: Kelsie Anderson profile picture shown on the Edge page
Then("The Kelsie Anderson profile picture is visible", () => {
	EdgePage.getKelsieProfilePicture.should('be.visible');
});

// Scenario: Success message shown after subscribing for a latest articles via Edge page
When("User scrolls to the email input", () => {
	EdgePage.scrollToEmailInput();
});

When("User fills email input", () => {
	EdgePage.fillEmailInput(RandomData.generateRandomEmail());
});

When("User clicks subscribe button", () => {
	EdgePage.clickSubscribeButton();
});

Then("Success message shown on the Edge page", () => {
	EdgePage.getSuccesMessage.should('be.visible');
});

//Scenario: Related articles section is present on the Edge page

When("User scrolls to the Related Articles section", () => {
	EdgePage.scrollToRelatedArticleSection();
});

Then("Related Articles section is visible", () => {
	EdgePage.getRelatedAcrticlesSection.should('be.visible');
});