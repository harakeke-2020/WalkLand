const urlLink = process.env.TEST_URL || 'http://localhost:3000'

this.landingPageTitle = function (browser) {
  browser
    .url(urlLink)
    .expect.title()
    .to.contain('Walkland')
}

this.landingPageLogo = function (browser) {
  browser
    .url(urlLink)
    .waitForElementVisible('h1')
    .assert.title('Walkland')
    .end()
}

this.clickStartButton = function (browser) {
  browser
    .url(urlLink)
    .waitForElementVisible('button')
    .elementIdClick('#start-button')
    .using()
}