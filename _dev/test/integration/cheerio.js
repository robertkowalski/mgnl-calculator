// mocha based tests

const assert = require('assert')
const request = require('request')
const cheerio = require('cheerio')

const URL = 'http://localhost:8080/magnoliaPublic/ci-testpage.html'

describe('integration test', () => {

  it('renders the template with the calculator', (done) => {
    request({
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:51.0) Gecko/20100101 Firefox/51.0'
      },
      uri: URL
    }, (err, res, body) => {
      const $ = cheerio.load(body)
      assert.equal($('.mgnl-calculator').length, 2)
      done()
    })
  }).timeout(10000)

  it('renders the interest calculator', (done) => {
    request({
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:51.0) Gecko/20100101 Firefox/51.0'
      },
      uri: URL
    }, (err, res, body) => {
      const $ = cheerio.load(body)

      const $el = $('#interestCalculator')

      assert.ok($el.length, '#interestCalculator found')
      assert.equal($el.find('h2').text(), 'Interest Calculator')
      done()
    })
  })


  it('renders the mortgage calendar', (done) => {
    request({
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:51.0) Gecko/20100101 Firefox/51.0'
      },
      uri: URL
    }, (err, res, body) => {
      const $ = cheerio.load(body)

      const $el = $('#mortgageCalculator')

      assert.ok($el.length, '#mortgageCalculator found')
      assert.equal($el.find('h2').text(), 'Mortgage Calculator')
      done()
    })
  })

})
