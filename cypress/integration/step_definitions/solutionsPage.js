import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import SolutionsPage from "../pages/SolutionsPage";

Then("The Solutions main title is visible", () => {
	SolutionsPage.getMainTitle.should('be.visible');
});

When("User scrolls to the Travel section", () => {
	SolutionsPage.scrollToTravelSection();
});

When("User clicks on the Travel section", () => {
	SolutionsPage.clickTravelSection();
});

Then("The Travel's main title is visible", () => {
	SolutionsPage.getTravelMainTitle.should('be.visible');
});