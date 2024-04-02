class ContactUsPage{
    get getContactUsTitle(){
        return cy.get('[title="Contact us"] h1');
    }

    get getReasonForContact(){
        return cy.get('[id="Reason_for_Contact__c"]');
    }

    get getSubmitButton(){
        return cy.get('[type="submit"]');
    }

    get getValidationMessage(){
        return cy.get('[id="ValidMsgReason_for_Contact__c"]');
    }

    clickSubmitButton(){
        this.getSubmitButton.click();
    }
}

export default new ContactUsPage();