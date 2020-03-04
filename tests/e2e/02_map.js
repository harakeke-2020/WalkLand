const urlLink = process.env.TEST_URL || 'http://localhost:3000'

// this.clickmapIcon = function (browser) {
//   browser
//     .url(urlLink)
//     .click('button[name=landingButton]')
//     .waitForElementVisible('#gmimap0', 3000)
//     .waitForElementVisible('#gmimap0 area', 3000)
//     .moveToElement('#gmimap0 area', 10, 10)
//     .mouseButtonClick()
//   browser
//     .url(urlLink)

//   // .waitForElementVisible('button[name=showDetials]', 3000)
// }
this.checkSideBar = function (browser) {
  browser
    .url(urlLink)
    .click('button[name=landingButton]')
    .waitForElementVisible('.items-container', 1000)
    .expect.elements('.sidebar-item')
    .count.to.equal(10)

  browser
    .url(urlLink)
    .click('button[name=landingButton]')
    .waitForElementVisible('.items-container', 1000)
    .waitForElementVisible('.sidebar-item p', 1000)
    .expect.element('.sidebar-item p')
    .text.to.contain('rating')

  browser
    .url(urlLink)
    .click('button[name=landingButton]')
    .waitForElementVisible('.items-container', 1000)
    .click('.sidebar-item')
    .expect.elements('.sidebar-item')
    .count.to.equal(9)
}
this.checkSideBarItem = function (browser) {
  // eslint-disable-next-line no-unused-expressions
  browser
    .url(urlLink)
    .click('button[name=landingButton]')
    .waitForElementVisible('.items-container', 1000)
    .click('.sidebar-item')
    .expect.element('button[name=showDetials]').to.be.visible
    // .waitForElementVisible('button[name=showDetials]', 1000)
}
