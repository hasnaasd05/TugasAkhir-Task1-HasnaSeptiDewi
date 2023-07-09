import {LoginPage} from "./pages/login_pages"
import {AddToCart} from "./pages/addToCart_pages"
import { CartPage } from './pages/cart_pages';
import { CheckoutInformation } from "./pages/checkout_step_one_pages";

let loginPage = new LoginPage()
let addToCart = new AddToCart()
let cartPage = new CartPage()
let checkoutData = new CheckoutInformation()
const URL = 'https://www.saucedemo.com/'

describe('Remove 2 Product from Cart and Failed Input Data', async () => {
    it('Remove Cart',  () => {
        loginPage.login(URL,'standard_user','secret_sauce')
        loginPage.assertLogin()
        addToCart.addAllProduct()
        addToCart.assertAddToCart()

        cartPage.removeCart()
        cartPage.cartCheckout()
        checkoutData.cartCheckout()
    });

    it('Checkout Failed', () => {
        checkoutData.cartCheckout()
        checkoutData.assertInputFail()
    });


});