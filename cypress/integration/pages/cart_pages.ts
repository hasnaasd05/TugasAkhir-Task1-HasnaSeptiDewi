export class CartPage{
    btn_checkout = '#checkout'

    removeCart(){
        cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        cy.wait(1000);
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
        cy.wait(1000);

    }

    cartCheckout(){
        cy.get(this.btn_checkout).should('be.visible');
        cy.wait(1000);
        cy.get(this.btn_checkout).click();
        cy.wait(1000);
    }

}