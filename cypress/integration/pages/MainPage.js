class MainPage {

    get getDownloadFullCoverageText(){
        return cy.get('main div div div p').first();
    }

    get getOurNetworkFeauresSection(){
        return cy.get('[contenttype="sectionTextCards"]');
    }

    get getResourcesButton(){
        return cy.get('[id="radix-:Rmljm:"]');
    }

    get getComparePricingSection(){
        return cy.get('[data-state="open"] p').eq(1);
    }

    scrollToComparePricingSection(){
        this.getComparePricingSection.scrollIntoView();
    }

    clickResourcesButton(){
        this.getResourcesButton.realClick();
    }

    clickArticleButton(){
        cy.get('[href="/resources/enterprise-cloud-data-storage"]').click();
    }

    clickBlogButton(){
        cy.get('[href="/resources"]').first().click();
    }

    scrollToOurNetworkFeaturesSection(){
        this.getOurNetworkFeauresSection.scrollIntoView();
    }

    scrollToOurNetworkButton(){
        cy.get('footer [href="/our-network"]').scrollIntoView();
    }

    scrollToEmailInput(){
        cy.get('[id="email"]').scrollIntoView();
    }

    clickOurNetworkButton(){
        cy.get('footer [href="/our-network"]').click();
    }

    scollToGlobalCoverageButton(){
        cy.get('footer [href="/global-coverage"]').scrollIntoView();
    }

    clickGlobalCoverageButton(){
        cy.get('footer [href="/global-coverage"]').click();
    }

    scrollToExploreText(){
        cy.get('[action="/sign-up"]').scrollIntoView();
    }

    clickAcceptCookies(){
        cy.get('[id="onetrust-accept-btn-handler"]').click();
    }

    clickSolutionsButton(){
        cy.get('[href="/solutions"]').first().click();
    }

    clickContactUsButton(){
        cy.get('[href="/contact-us"]').first().click();
    }

    clickSignUpButton(){
        cy.get('[id="header-sign-up"]').click();
    }

    fillEmailInput(email){
        cy.get('[id="email"]').type(email);
    }

    clickBottomSignUpButton(){
        cy.get('[action="/sign-up"] button').first().click();
    }

    scrollToTelnyxVSTwilioButton(){
        cy.get('[href="/the-better-twilio-alternative"]').scrollIntoView();
    }

    clickTelnyxVSTwilioButton(){
        cy.get('[href="/the-better-twilio-alternative"]').click();
    }

}

export default new MainPage();