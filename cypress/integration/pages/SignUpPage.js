Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

class SignUpPage{
    
    
    get getEmailInput(){
        return cy.get('[id="email"]');
    }

    get getFirstNameInput(){
        return cy.get('[id="first_name"]');
    }

    get getLastNameInput(){
        return cy.get('[id="last_name"]');
    }

    get getPasswordInput(){
        return cy.get('[id="password"]');
    }

    get getTermsAndConditionsCheckbox(){
        return cy.get('[id="terms_and_conditions"]');
    }

    get getSignUpButton(){
        return cy.get('[type="submit"]').first();
    }

    get getEmailValidationMessage(){
        return cy.get('[id="email_message"]');
    }

    get getMinPasswordValidationMessage(){
        return cy.get('[id="passwordMinLength"]');
    }

    get getRecaptchaError(){
        return cy.get('[aria-describedby="error"]');
    }

    get getTermsAndConditionsButton(){
        return cy.get('[for="terms_and_conditions"] a').first();
    }

    get getConditionsTitle(){
        return cy.get('[contenttype="heroOverview"] h1');
    }

    get getFirstNameValidationMessage(){
        return cy.get('[id="first_name_message"]');
    }

    get getLastNameValidationMessage(){
        return cy.get('[id="last_name_message"]');
    }

    get getPasswordValidationMessage(){
        return cy.get('[id="password_message"]');
    }

    get getTermsAndConditionsValidationMessage(){
        return cy.get('[id="terms_and_conditions_message"]');
    }

    fillEmailInput(email){
        this.getEmailInput.type(email);
    }

    fillFirstNameInput(firstName){
        this.getFirstNameInput.type(firstName);
    }

    fillLastNameInput(lastName){
        this.getLastNameInput.type(lastName);
    }

    fillPasswordInput(password){
        this.getPasswordInput.type(password);
    }

    checkTermsAndConditionsCheckbox(){
        this.getTermsAndConditionsCheckbox.check();
    }

    clickSignUpButton(){
        this.getSignUpButton.click();
    }

    doubleClickSignUpButton(){
        this.getSignUpButton.click();
        cy.wait(100);
        this.getSignUpButton.click();
    }

    clickTermsAndConditionsButton(){
        this.getTermsAndConditionsButton.invoke('removeAttr', 'target').click();
    }
}

export default new SignUpPage();