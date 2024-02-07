const { Given, When, Then, defineStep } = require('@cucumber/cucumber')

Given("I visit a login page", async function() {
    await page.goto("https://www.saucedemo.com/v1/index.html");
})

When("I fill the login form with valid credentials", async function () {
    await page.fill("#user-name","standard_user");
    await page.fill("#password","secret_sauce");
    await page.click("#login-button");

})