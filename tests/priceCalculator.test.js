import { computeFinalPrice } from '../src/priceCalculator.js'

describe('computeFinalPrice', () => {
  it('VIP au QC', () => {
    expect(computeFinalPrice(100, 'VIP', 'QC')).toBe(91.98)
  })

  it('NONE en ON', () => {
    expect(computeFinalPrice(100, 'NONE', 'ON')).toBe(113)
  })
})

/*
it('STUDENT en BC', () => {
  expect(computeFinalPrice(200, 'STUDENT', 'BC')).toBe(201.6)
})

it('prix négatif alors erreur', () => {
  expect(() => computeFinalPrice(-1, 'NONE', 'QC')).toThrow('Negative price')
})
*/

