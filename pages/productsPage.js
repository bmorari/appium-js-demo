class ProductsPage {

    constructor(driver) {
        this.driver = driver;
    }

    get productImages() {
        return this.driver.$$(
            'id=com.saucelabs.mydemoapp.android:id/productIV'
        );
    }
    ß
    async waitUntilDisplayed() {
        await this.productImages[0].waitForDisplayed({
            timeout: 15000
        });
    }

    async openFirstProduct() {
        const products = await this.productImages;

        if (products.length === 0) {
            throw new Error('No products were found on the Products screen');
        }

        await products[0].waitForDisplayed({
            timeout: 15000
        });

        await products[0].click();
    }
}

module.exports = ProductsPage;
