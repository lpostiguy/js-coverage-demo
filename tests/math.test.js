import { clamp, mean } from '../src/math.js'

describe('math', () => {
  it('clamp: borne inférieure et supérieure', () => {
    expect(clamp(-5, 0, 10)).toBe(0)
    expect(clamp(15, 0, 10)).toBe(10)
    expect(clamp(5, 0, 10)).toBe(5)
  })

  it('clamp: range invalide alors throw', () => {
    expect(() => clamp(5, 10, 0)).toThrow('Invalid range')
  })

  /*
it('mean: tableau vide alors NaN', () => {
  expect(Number.isNaN(mean([]))).toBe(true)
})

it('mean: retourne la moyenne du tableau', () => {
  expect(mean([2, 4, 8, 10])).toBe(6)
})
  */
})
