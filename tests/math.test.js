import { clamp, mean } from '../src/math.js'

describe('math', () => {
  /**
   * Intention :
   *  Vérifier que la fonction clamp ramène bien une valeur
   *  dans les bornes [min, max], ou retourne la borne si on sort de l’intervalle.
   *
   * Données de test :
   *  - Valeurs : -5, 15, 5
   *  - Bornes : 0 et 10
   *
   * Oracle :
   *  - clamp(-5, 0, 10) = 0
   *  - clamp(15, 0, 10) = 10
   *  - clamp(5, 0, 10)  = 5
   */
  it('clamp: borne inférieure et supérieure', () => {
    expect(clamp(-5, 0, 10)).toBe(0)
    expect(clamp(15, 0, 10)).toBe(10)
    expect(clamp(5, 0, 10)).toBe(5)
  })

  /**
   * Intention :
   *  Vérifier que clamp lève une erreur si les bornes sont inversées.
   *
   * Données de test :
   *  - x = 5
   *  - min = 10, max = 0
   *
   * Oracle :
   *  - Une exception "Invalid range" est levée.
   */
  it('clamp: range invalide alors throw', () => {
    expect(() => clamp(5, 10, 0)).toThrow('Invalid range')
  })

  /**
   * Intention :
   *  Vérifier que mean sur un tableau vide retourne bien NaN.
   *
   * Données de test :
   *  - Tableau : []
   *
   * Oracle :
   *  - mean([]) est NaN
   */

  /** TODO
it('mean: tableau vide alors NaN', () => {
  expect(Number.isNaN(mean([]))).toBe(true)
})

*/

  /**
   * Intention :
   *  Vérifier que mean calcule correctement la moyenne d’un tableau de nombres.
   *
   * Données de test :
   *  - Tableau : [2, 4, 8, 10]
   *
   * Oracle :
   *  - mean([2,4,8,10]) = (2+4+8+10)/4 = 6
   */

  /** TODO
  it('mean: retourne la moyenne du tableau', () => {
    expect(mean([2, 4, 8, 10])).toBe(6)
  })

    */
})
