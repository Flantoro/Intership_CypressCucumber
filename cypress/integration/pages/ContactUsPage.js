class ContactUsPage{
    get getContactUsTitle(){
        return cy.get('[title="Contact us"] h1');
    }

    get getReasonForContact(){
        return cy.get('[id="Reason_for_Contact__c"]');
    }

    get getValidationMessage(){
        return cy.get('[id="ValidMsgReason_for_Contact__c"]');
    }

    clickSubmitButton(){
        cy.get('[type="submit"]').click();
    }
}

export default new ContactUsPage();