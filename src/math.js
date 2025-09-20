// Retourne un nombre qui se trouve dans le range effectif min et max sinon x
export function clamp(x, min, max) {
  if (min > max) throw new Error('Invalid range')
  if (x < min) return min
  if (x > max) return max
  return x
}

// Retourne la moyenne d'un tableau
export function mean(nums) {
  if (nums.length === 0) return NaN
  let s = 0
  for (const n of nums) s += n
  return s / nums.length
}
