export class CheckoutInformation{
    btn_checkout = '#continue'

    assertCart(){
        cy.get('.cart_item').should('have.length', 4);
    }

    cartCheckout(){
        cy.get(this.btn_checkout).click()
    }

    assertInputFail(){
        cy.get('[data-test="error"]').should('be.visible');
        cy.wait(1000);
    }



}