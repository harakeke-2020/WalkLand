const urlLink = process.env.TEST_URL || 'http://localhost:3000'

this.checkRegisterPopUp = function (browser) {
  // eslint-disable-next-line no-unused-expressions
  browser
    .url(urlLink)
    .click('button[name=landingButton]')
    .waitForElementVisible('#registerLink', 1000)
    .click('#registerLink')
    .expect.element('.popup').to.be.visible
}

this.checkRegisterPopUp = function (browser) {
  const user = 'dank45'
  browser
    .url(urlLink)
    .click('button[name=landingButton]')
    .waitForElementVisible('#registerLink', 1000)
    .click('#registerLink')
    .clearValue('input[name=username]')
    .setValue('input[name=username]', user)
    .clearValue('input[name=password]')
    .setValue('input[name=password]', 'q')
    .click('button[name=submit]')
    .waitForElementVisible('#profile-name-nav', 1000)
    .expect.element('#profile-name-nav')
    .text.to.contain(user)
  // eslint-disable-next-line no-unused-expressions
  browser
    .waitForElementVisible('button[name=logOut]', 2000)
    .expect.element('button[name=logOut]').to.be.visible
  // eslint-disable-next-line no-unused-expressions
  browser
    .click('button[name=logOut]')
    .expect.element('button[name=logOut]').to.not.be.found
}

// this.checkRegisterPopUp = function (browser) {
//   const user = 'dank2'
//   browser
//     .url(urlLink)
//     .click('button[name=landingButton]')
//     .waitForElementVisible('#registerLink', 1000)
//     .click('#registerLink')
//     .clearValue('input[name=username]')
//     .setValue('input[name=username]', user)
//     .clearValue('input[name=password]')
//     .setValue('input[name=password]', 'q')
//     .click('button[name=submit]')
//     .waitForElementVisible('#registerLink', 1000)
//     .waitForElementVisible('button[name=logOut]', 2000)
// }
