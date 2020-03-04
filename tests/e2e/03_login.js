const urlLink = process.env.TEST_URL || 'http://localhost:3000'

this.checkDetails = function (browser) {
  // eslint-disable-next-line no-unused-expressions
  browser
    .url(urlLink)
    .click('button[name=landingButton]')
    .waitForElementVisible('#loginLink', 1000)
    .click('#loginLink')
}
