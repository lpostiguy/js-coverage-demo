import { computeFinalPrice } from '../src/priceCalculator.js'

describe('computeFinalPrice', () => {
  /**
   * Intention :
   *  Vérifier que le prix final d’un client VIP au Québec
   *  applique bien le rabais et les taxes locales.
   *
   * Données de test :
   *  - Prix initial : 100
   *  - Statut : "VIP"
   *  - Province : "QC"
   *
   * Oracle :
   *  - Résultat attendu = 91.98
   */
  it('VIP au QC', () => {
    expect(computeFinalPrice(100, 'VIP', 'QC')).toBe(91.98)
  })

  /**
   * Intention :
   *  Vérifier le calcul du prix final sans rabais en Ontario.
   *
   * Données de test :
   *  - Prix initial : 100
   *  - Statut : "NONE"
   *  - Province : "ON"
   *
   * Oracle :
   *  - Résultat attendu = 113
   */
  it('NONE en ON', () => {
    expect(computeFinalPrice(100, 'NONE', 'ON')).toBe(113)
  })

  /**
   * Intention :
   *  Vérifier que le rabais étudiant en Colombie-Britannique
   *  est bien appliqué avec les taxes locales.
   *
   * Données de test :
   *  - Prix initial : 200
   *  - Statut : "STUDENT"
   *  - Province : "BC"
   *
   * Oracle :
   *  - Résultat attendu = 201.6
   */

  /** TODO
  it('STUDENT en BC', () => {
    expect(computeFinalPrice(200, 'STUDENT', 'BC')).toBe(201.6)
  })
      */

  /**
   * Intention :
   *  Vérifier que la fonction rejette un prix négatif.
   *
   * Données de test :
   *  - Prix initial : -1
   *  - Statut : "NONE"
   *  - Province : "QC"
   *
   * Oracle :
   *  - Une erreur "Negative price" est levée.
   */

  /** TODO
  it('prix négatif alors erreur', () => {
    expect(() => computeFinalPrice(-1, 'NONE', 'QC')).toThrow('Negative price')
  })
      */
})



