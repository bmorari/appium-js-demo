import { remote } from 'webdriverio';
import { wdOpts } from '../config';

import ProductsPage from '../pages/productsPage';
import ProductDetailsPage from '../pages/productDetailsPage';

async function addItemToCartTest() {
  const driver = await remote(wdOpts);

  const productsPage = new ProductsPage(driver);
  const productDetailsPage = new ProductDetailsPage(driver);

  try {

    await productsPage.waitUntilDisplayed();
    await productsPage.openFirstProduct();
    await productDetailsPage.addItemToCart();
    await productDetailsPage.goToCart();
    await productDetailsPage.assertItemTitle('Sauce Labs Backpack');

    console.log('Item was added to the cart successfully');
  } finally {
    await driver.deleteSession();
  }
}

addItemToCartTest().catch((error) => {
  console.error('Test failed:', error);
  process.exitCode = 1;
});
