class SolutionsPage{
    get getMainTitle(){
        return cy.get('main h1');
    }

    get getTravelSection(){
        return cy.get('[alt="Travel destination"]');
    }

    get getTravelMainTitle(){
        return cy.get('main h1');
    }

    scrollToTravelSection(){
        this.getTravelSection.scrollIntoView();
    }

    clickTravelSection(){
        this.getTravelSection.click();
    }
}

export default new SolutionsPage();