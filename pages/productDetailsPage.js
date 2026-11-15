const assert = require('node:assert');

class ProductDetailsPage {

    constructor(driver) {
        this.driver = driver;
    }

    get addToCartButton() {
        return this.driver.$(
            'id=com.saucelabs.mydemoapp.android:id/cartBt'
        );
    }

    get selectCartButton() {
        return this.driver.$(
            'id=com.saucelabs.mydemoapp.android:id/cartIV'
        );
    }

    get itemTitle() {
        return this.driver.$(
            'id=com.saucelabs.mydemoapp.android:id/titleTV'
        );
    }

    async addItemToCart() {
        await this.addToCartButton.waitForDisplayed({
            timeout: 15000
        });

        await this.addToCartButton.click();
    }

    async goToCart() {
        await this.selectCartButton.waitForDisplayed({
            timeout: 15000
        });

        await this.selectCartButton.click();
    }

    async assertItemTitle(expectedTitle) {
        await this.itemTitle.waitForDisplayed({
            timeout: 15000
        });

        const actualTitle = await this.itemTitle.getText();

        assert.strictEqual(
            actualTitle,
            expectedTitle,
            `Wrong title. Expected "${expectedTitle}", received "${actualTitle}"`
        );
    }
}

export default ProductDetailsPage;
