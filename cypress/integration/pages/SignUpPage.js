Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

class SignUpPage{

    get getEmailValidationMessage(){
        return cy.get('[id="email_message"]');
    }

    get getMinPasswordValidationMessage(){
        return cy.get('[id="passwordMinLength"]');
    }

    get getRecaptchaError(){
        return cy.get('[aria-describedby="error"]');
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

    get getEmailInput(){
        return cy.get('[id="email"]');
    }

    fillEmailInput(email){
        this.getEmailInput.type(email);
    }

    fillFirstNameInput(firstName){
        cy.get('[id="first_name"]').type(firstName);
    }

    fillLastNameInput(lastName){
        cy.get('[id="last_name"]').type(lastName);
    }

    fillPasswordInput(password){
        cy.get('[id="password"]').type(password);
    }

    checkTermsAndConditionsCheckbox(){
        cy.get('[id="terms_and_conditions"]').check();
    }

    clickSignUpButton(){
        cy.get('[type="submit"]').first().click();
    }

    doubleClickSignUpButton(){
        cy.get('[type="submit"]').first().click();
        cy.wait(100);
        cy.get('[type="submit"]').first().click();
    }

    clickTermsAndConditionsButton(){
        cy.get('[for="terms_and_conditions"] a').first().invoke('removeAttr', 'target').click();
    }
}

export default new SignUpPage();