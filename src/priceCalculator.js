import { clamp } from './math.js'

// Calcule un prix après rabais et taxes, avec quelques branches à couvrir.
export function computeFinalPrice(basePrice, promo, province = 'QC') {
  if (basePrice < 0) throw new Error('Negative price')

  // Rabais selon code promo
  let discount = 0
  switch (promo) {
    case 'VIP':
      discount = 0.2
      break
    case 'STUDENT':
      discount = 0.1
      break
    case 'NONE':
    default:
      discount = 0
  }

  // Plafonner le rabais à 30%
  const effective = clamp(discount, 0, 0.3)
  const afterDiscount = basePrice * (1 - effective)

  // Taxes simples
  const taxRate = province === 'QC' ? 0.14975 : province === 'ON' ? 0.13 : 0.12
  const afterTax = afterDiscount * (1 + taxRate)

  // Arrondi 2 décimales
  return Math.round(afterTax * 100) / 100
}
