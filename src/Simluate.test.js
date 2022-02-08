const {faker} = require('@faker-js/faker');
const baseUrl = 'http://localhost:3000';
const puppeteer = require('puppeteer');

// How many test cases to run in parallel.
// Smaller is slower, but less taxing on your computer.
const BATCH_SIZE = 4;

const roll = (sides) => Math.floor(Math.random() * sides) + 1;

/* 
    Traffic simulator

    This script isn't a test, per se, as much as a way to simulate
    actual browsing behavior. The outcomes of each visitor are randomly 
    determined, but weighted so as to emulate real browsing behavior
    with one exception: the purchase conversion rate. 
    
    The script is tuned to yield slightly more purchases than a real 
    e-commerce site so that we have plenty of data to work with in our 
    analysis. The range you'll see isn't crazy, it's just more in line 
    with what one might expect during a big sale as opposed to a typical 
    Tuesday in July.

    Note: If your computer really struggles to run this, try adjusting 
    the BATCH_SIZE variable to something smaller. 
*/
test('simulate 100 visitors', () => {
    const batchedSimulations = (total) => {
        const promises = [];
        const batch = (total < BATCH_SIZE) ? total : BATCH_SIZE;
        for (let id=0; id<batch; id++) {
            promises.push(new Promise((resolve, reject) => {
                simulateVisitor(total - id).then(() => resolve());
            }));
        }
        return Promise.all(promises).then(() => {
            if ( total >= BATCH_SIZE )
                return batchedSimulations(total - BATCH_SIZE);
        })
    }

    return new Promise((resolve, reject) => {
        batchedSimulations(100).then(() => resolve());
    });
}, 99999999);

async function simulateVisitor(visitorId) {
    let itemsInCart = 0;
    const browser = await puppeteer.launch({
        headless: true,
    });
    const page = await browser.newPage(); 
    await page.goto(baseUrl);
    
    // 33% bounce rate
    if ( roll(3) == 1 ) 
        return outcome(browser, visitorId, "Bounce (Home)");

    const menus = await page.$$("[data-testid='headerMenu']");
    const category = menus[roll(menus.length) - 1];
    
    // Simulate browsing around the site
    // Up to 4 cycles of category -> product -> add to cart
    for(let rounds=0; rounds<4; rounds++) {
        await category.click();
        await page.waitForSelector("[data-testid='productCard']");

        // 5 to 1 (20%) chance of bouncing on any particular category view
        // BUT
        // Less likely if you have items in your cart
        if ( roll(5 + (5 * itemsInCart)) == 1 )
            return outcome(browser, visitorId, (itemsInCart) ? `Abandon Cart (${itemsInCart} items)` : "Bounce (Category)");

        const products = await page.$$("[data-testid='productCard']");
        const productCard = products[roll(products.length) - 1];
        
        await productCard.click();
        await page.waitForSelector("[data-testid='thumbnail']");

        // 50 to 1 (2%) chance of bailing on any particular product view 
        // BUT
        // Less likely if you have items in your cart
        if ( roll(50 + (5 * itemsInCart)) == 1 )
            return outcome(browser, visitorId, (itemsInCart) ? `Abandon Cart (${itemsInCart} items)` : "Bounce (Product)");

        const thumbnails = await page.$$("[data-testid='thumbnail']");
        let thumbsViewed;
        for(thumbsViewed=0; thumbsViewed<roll(thumbnails.length); thumbsViewed++) {
            const thumbnail = thumbnails[roll(thumbnails.length) - 1];
            await thumbnail.click();
        }

        // 10 to 1 (10%) chance of adding to cart
        // BUT
        // Viewing more thumbnails makes you more likely to ATC
        if ( roll(10 - thumbsViewed) == 1 ) {
            await page.waitForSelector("[data-testid='addToCartButton']");
            await page.click("[data-testid='addToCartButton']");
            itemsInCart++;
        }
    }

    await page.click("[data-testid='cartButton']");
    await page.waitForTimeout(1000);
    const items = await page.$$("[data-testid='cartItem']");
    
    // Didn't find anything to purchase
    if ( !items.length  )
        return outcome(browser, visitorId, `Bounce (Not interested)`);

    // 25% abandon cart rate
    if ( roll(4) == 1  )
        return outcome(browser, visitorId, `Abandon Cart (${items.length} items)`);
        
    await page.waitForSelector("[data-testid='checkoutButton']");

    page.click("[data-testid='checkoutButton']");
    await page.waitForNavigation();

    await page.click("input[id='name']");
    await page.type("input[id='name']", faker.name.findName());
    await page.click("input[id='street']");
    await page.type("input[id='street']", faker.address.streetAddress());
    await page.click("input[id='city']");
    await page.type("input[id='city']", faker.address.cityName());
    await page.click("input[id='state']");
    await page.type("input[id='state']", faker.address.stateAbbr());
    await page.click("input[id='postcode']");
    await page.type("input[id='postcode']", faker.address.zipCode());
    await page.click("input[id='country']");
    await page.type("input[id='country']", 'USA');
    
    const nextButton = await page.$("[data-testid='checkoutNextButton']");
    await nextButton.click();

    // 90% chance of moving forward in checkout
    if ( roll(10) == 1  )
        return outcome(browser, visitorId, `Abandon Checkout (Address)`);

    const shippingMethods = await page.$$("[data-testid='shippingMethodRadio']");
    const shippingMethod = shippingMethods[roll(shippingMethods.length)-1];
    await shippingMethod.click();

    await nextButton.click();

    // 90% chance of moving forward in checkout
    if ( roll(10) == 1  )
        return outcome(browser, visitorId, `Abandon Checkout (Shipping Method)`);

    await page.click("input[id='ccNumber']");
    await page.type("input[id='ccNumber']", faker.finance.creditCardNumber());
    await page.click("input[id='expiration']");
    await page.type("input[id='expiration']", "02/2030");

    nextButton.click();
    await page.waitForNavigation();
    await page.waitForTimeout(1000);
    
    return outcome(browser, visitorId, "Order completed!"); 
}

// TODO: Figure out why this timeout is necessary -SJ
// Without it, I get a bunch of warnings about click events
// occurring after the browser has been closed. Something
// with the async execution.
const outcome = (browser, visitorId, message) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            browser.close().then(() => {
                console.log(`Visitor ${visitorId}: ${message}`);
                resolve();
            });
        }, 250);
    });
};