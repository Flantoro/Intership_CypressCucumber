class EdgePage{
    get getKelsieProfilePicture(){
        return cy.get('[alt="Kelsie_Anderson"]');
    }

    get getEmailInput(){
        return cy.get('[id="Email"]');
    }

    get getSubscribeButton(){
        return cy.get('[type="submit"]');
    }

    get getSuccesMessage(){
        return cy.get('[class="c-iaFiUj"] p');
    }

    get getRelatedArticleSection(){
        return cy.get('main section').last();
    }

    fillEmailInput(email){
        this.getEmailInput.type(email);
    }

    clickSubscribeButton(){
        this.getSubscribeButton.click();
    }

    scrollToEmailInput(){
        this.getEmailInput.scrollIntoView();
    }

    scrollToRelatedArticleSection(){
        this.getRelatedArticleSection.scrollIntoView();
    }
}

export default new EdgePage();