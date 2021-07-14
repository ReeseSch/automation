import { Builder, Capabilities, By } from 'selenium-webdriver'
const chromedrivver = require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/index.html')
})

afterAll(async () => {
    await driver.quit()
})


test('It works! Awesome!', async() => {
    let movieInput = await driver.findElement(By.id('movieInput'))

    await movieInput.sendKeys('Star Wars\n')

    await driver.sleep(2000)

    let deleteBtn =  await driver.findElement(By.id('StarWars')).click()

    // let message = await driver.findElement(By.id('message'))
    // expect(message).toBe(`Star Wars deleted!`)

    await driver.sleep(1000)

    await movieInput.sendKeys('Lord of the Rings\n')

    await driver.sleep(2000)

    await (await driver.findElement(By.xpath(`//*[text()="Lord of the Rings"]`))).click()

    await driver.sleep(2000)

    await (await driver.findElement(By.xpath(`//*[text()="Lord of the Rings"]`))).click()

    await driver.sleep(2000)
})


