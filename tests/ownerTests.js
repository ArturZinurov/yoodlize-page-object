var yPage = {}
var testData = require('../testAssets/yoodlizeTestData')
var emailLogin = require('../testAssets/emailLogin')
var listProductGuideMe = require('../testAssets/listProductGuideMe')
var listProductIGotIt = require('../testAssets/listProductIGotIt')
var clickByText = require('../testAssets/clickByText')

module.exports = {
    beforeEach: browser => {
        yPage = browser.page.yoodlizePageObject()
        yPage.navigate()
    },
    after: browser => {
        browser.end()
    },
    'List an Item while Not Logged In': () => {
        yPage
            .waitForElementVisible('@login', 1000)
            .click('@listProductLoggedOut')
        yPage
            .waitForElementVisible('@emailInput', 10000)
    },
    'List an Item while Logged In: Guide Me': () => {
        yPage
            .click('@login')
        emailLogin(yPage, testData.loginCredentials[0])
        listProductGuideMe(yPage, testData.listProductMethod1[0])

        ////
    },
    // 'List an Item while Logged In: I Got It': browser => {

    // },
    // 'List an Item with Blank Fields': browser => {

    // },
    // 'Edit Profile with Valid Details': browser => {

    // },
    // 'Edit Profile with Required Fields Blank': browser => {

    // },
    // 'Add New Payout through PayPal': browser => {

    // },
    // 'Add New Payout through Bank Account': browser => {

    // },
    // 'Edit Existing Payout Method': browser => {

    // },
    // 'Write Review and View on Dashboard': browser => {

    // },
    // 'Write Review and View on Dashboard of Recipient': browser => {

    // },
    // 'Read Review of Me on Dashboard': browser => {

    // },
    // 'Send Message to Owner': browser => {

    // },
    // 'Send Response to Renter': browser => {

    // },
    // 'Organize / Delete Messages': browser => {

    // },
}