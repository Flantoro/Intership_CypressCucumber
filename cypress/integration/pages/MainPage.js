class MainPage {

    get getAcceptCookies(){
        return cy.get('[id="onetrust-accept-btn-handler"]');
    }
    get getSolutionsButton(){
        return cy.get('[href="/solutions"]').first();
    }
    get getContactUsButton(){
        return cy.get('[href="/contact-us"]');
    }
    get getSignUpButton(){
        return cy.get('[id="header-sign-up"]');
    }
    get getEmailInput(){
        return cy.get('[id="email"]');
    }
    get getBottomSignUpButton(){
        return cy.get('[action="/sign-up"] button');
    }

    get getExploreText(){
        return cy.get('[action="/sign-up"]');
    }

    get getTelnyxVSTwilioButton(){
        return cy.get('[href="/the-better-twilio-alternative"]');
    }

    get getEdgeButton(){
        return cy.get('[href="/resources/about-edge-connectivity"]');
    }

    get getGlobalCoverageButton(){
        return cy.get('footer [href="/global-coverage"]');
    }

    get getDownloadFullCoverageText(){
        return cy.get('main div div div p').first();
    }

    get getOurNetworkButton(){
        return cy.get('footer [href="/our-network"]');
    }

    get getOurNetworkFeaturesSection(){
        return cy.get('[contenttype="sectionTextCards"]');
    }

    get getComparePricingSection(){
        return cy.get('[data-state="open"] p').eq(1);
    }

    scrollToComparePricingSection(){
        this.getComparePricingSection.scrollIntoView();
    }

    scrollToOurNetworkFeaturesSection(){
        this.getOurNetworkFeaturesSection.scrollIntoView();
    }

    scrollToOurNetworkButton(){
        this.getOurNetworkButton.scrollIntoView();
    }

    scrollToEmailInput(){
        this.getEmailInput.scrollIntoView();
    }

    clickOurNetworkButton(){
        this.getOurNetworkButton.click();
    }

    scollToGlobalCoverageButton(){
        this.getGlobalCoverageButton.scrollIntoView();
    }

    clickGlobalCoverageButton(){
        this.getGlobalCoverageButton.click();
    }

    scrollToEdgeButton(){
        this.getEdgeButton.scrollIntoView();
    }

    clickToEdgeButton(){
        this.getEdgeButton.click();
    }

    scrollToExploreText(){
        this.getExploreText.scrollIntoView();
    }

    clickAcceptCookies(){
        this.getAcceptCookies.click();
    }

    clickSolutionsButton(){
        this.getSolutionsButton.click();
    }

    clickContactUsButton(){
        this.getContactUsButton.first().click();
    }

    clickSignUpButton(){
        this.getSignUpButton.click();
    }

    fillEmailInput(email){
        this.getEmailInput.type(email);
    }

    clickBottomSignUpButton(){
        this.getBottomSignUpButton.click();
    }

    scrollToTelnyxVSTwilioButton(){
        this.getTelnyxVSTwilioButton.scrollIntoView();
    }

    clickTelnyxVSTwilioButton(){
        this.getTelnyxVSTwilioButton.click();
    }

}

export default new MainPage();