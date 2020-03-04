const urlLink = process.env.TEST_URL || 'http://localhost:3000'

this.createAReview = function (browser) {
  const user = 'dank45'
  const walkInput = "good walk"
  // eslint-disable-next-line no-unused-expressions
  browser
    .url(urlLink)
    .click('button[name=landingButton]')
    .waitForElementVisible('#loginLink', 1000)
    .click('#loginLink')
    .clearValue('input[name=username]')
    .setValue('input[name=username]', user)
    .clearValue('input[name=password]')
    .setValue('input[name=password]', 'q')
    .click('button[name=login]')
    .click('.sidebar-item')
    .click('button[name=showDetials]')
    .clearValue('input[name=rating]')
    .setValue('input[name=rating]', '4')
    .clearValue('input[name=review]')
    .setValue('input[name=review]', walkInput)
    .click('button[name=submitReview]')
    .expect.elements('#tomId')
    .count.to.equal(2)
  browser
    .expect.element('#tomId:nth-child(2)')
    .text.to.contain(user)
  browser
    .expect.element('#tomId:nth-child(2)')
    .text.to.contain(walkInput)
}
