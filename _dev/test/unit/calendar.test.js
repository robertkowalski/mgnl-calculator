// jest based tests

import MgnlCalculator from '../../js/calculator.js'
import $ from 'jquery'

const markup = `
<div id="uid" class="mgnl-calculator">
  <h2>My title</h2>

  <label>
    Interest
    <input class="mgnl-calculator__value1"/>
  </label>

  <label>
    Money
    <input class="mgnl-calculator__value2"/>
  </label>

  <input
    data-formula="([A] * [B]) / 100"
    disabled="true"
    class="mgnl-calculator__result" />
</div>
`

window.$ = window.jQuery = $

describe('calculator', () => {

  it('returns a Calendar instance', () => {
    expect(new MgnlCalculator('.my-element').parseFormula).toBeTruthy()
  })

  it('parses the formula', () => {
    document.body.innerHTML = markup

    const formula = '([A] * [B]) / 100'
    const res = new MgnlCalculator('#uid').parseFormula(formula, 10, 20)

    expect(res).toEqual('(10 * 20) / 100')
  })

  it('calculates and updates the dom', () => {
    document.body.innerHTML = markup

    const $body = $(document.body)

    new MgnlCalculator('#uid')

    $body.find('.mgnl-calculator__value1').val(6).trigger('keyup')
    $body.find('.mgnl-calculator__value2').val(100).trigger('keyup')

    const res = $body.find('.mgnl-calculator__result').val()
    expect(res).toEqual('6')
  })
})
