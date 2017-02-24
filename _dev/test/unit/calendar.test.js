// jest based tests

import MgnlCalculator from '../../js/calculator.js'
import $ from 'jquery'

window.$ = window.jQuery = $

describe('calculator', () => {

  it('returns a Calendar instance', () => {
    expect(new MgnlCalculator('.my-element').parseFormula).toBeTruthy()
  })

  it('parses the formula', () => {
    const formula = '([A] * [B]) / 100'
    const res = new MgnlCalculator('#uid').parseFormula(formula, 10, 20)

    expect(res).toEqual('(10 * 20) / 100')
  })

  it('returns null on empty input', () => {
    const formula = '([A] * [B]) / 100'
    const parser = new MgnlCalculator('#uid').parseFormula

    expect(parser(formula, '', 20)).toEqual(null)
    expect(parser(formula, 20, '')).toEqual(null)
  })

  it('returns null on strings as input', () => {
    const formula = '([A] * [B]) / 100'
    const parser = new MgnlCalculator('#uid').parseFormula

    expect(parser(formula, 20, 'foo')).toEqual(null)
    expect(parser(formula, 'foo', 20)).toEqual(null)
  })

  it('accepts 0 as input', () => {
    const formula = '([A] * [B]) / 100'
    const parser = new MgnlCalculator('#uid').parseFormula

    expect(parser(formula, 0, 10)).toEqual('(0 * 10) / 100')
    expect(parser(formula, 20, 0)).toEqual('(20 * 0) / 100')
  })
})
