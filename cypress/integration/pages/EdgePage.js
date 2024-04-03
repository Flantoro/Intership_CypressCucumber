class EdgePage{
    get getKelsieProfilePicture(){
        return cy.get('[alt="Kelsie_Anderson"]');
    }

    get getSuccesMessage(){
        return cy.get('[class="c-iaFiUj"] p');
    }

    get getRelatedAcrticlesSection(){
        return cy.get('main section').last();
    }

    fillEmailInput(email){
        cy.get('[id="Email"]').type(email);
    }

    clickSubscribeButton(){
        cy.get('[type="submit"]').click();
    }

    scrollToEmailInput(){
        cy.get('[id="Email"]').scrollIntoView();
    }

    scrollToRelatedArticleSection(){
       this.getRelatedAcrticlesSection.scrollIntoView();
    }
}

export default new EdgePage();