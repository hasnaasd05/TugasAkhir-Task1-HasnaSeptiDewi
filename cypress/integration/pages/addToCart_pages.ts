export class AddToCart{
    btn_add_backpack = '#add-to-cart-sauce-labs-backpack'
    btn_add_bike_light = '#add-to-cart-sauce-labs-bike-light'
    cart_link = '#shopping_cart_container > a'
    cart_badge = 'span[class="shopping_cart_badge"]'

    // addBackpack(){
    //     cy.get(this.btn_add_backpack).click()        
    // }
    // addBikeLight(){
    //     cy.get(this.btn_add_bike_light).click()
    // }
    addAllProduct(){
        cy.get('.btn_inventory')
            .each($button => {
                cy.wait(1000);
        cy.wrap($button).click();
        
    });
    }
    assertAddToCart(){
        cy.get(this.cart_badge).should('be.visible')
        cy.wait(1000);
        cy.get(this.cart_link).click();
        cy.wait(1000)
        cy.get('.cart_item').should('have.length', 6);
    }

    backToProduct(){
        cy.get('#continue-shopping').click();
        cy.wait(1000)

    }
}