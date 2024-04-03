class SolutionsPage{
    get getMainTitle(){
        return cy.get('main h1');
    }

    get getTravelMainTitle(){
        return cy.get('main h1');
    }

    scrollToTravelSection(){
        cy.get('[alt="Travel destination"]').scrollIntoView();
    }

    clickTravelSection(){
        cy.get('[alt="Travel destination"]').click();
    }
}

export default new SolutionsPage();