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

    scrollToelnyxVSTwilioButton(){
        this.getTelnyxVSTwilioButton.scrollIntoView();
    }

    clickTelnyxVSTwilioButton(){
        this.getTelnyxVSTwilioButton.click();
    }

}

export default new MainPage();