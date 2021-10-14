const UNITS = [
  'B',
  'kB',
  'MB',
  'GB',
  'TB',
  'PB',
  'EB',
  'ZB',
  'YB'
]

export function calcExponent (number) {
  return Math.min(Math.floor(Math.log10(number) / 3), UNITS.length - 1)
}

export default function (number) {
  const exponent = calcExponent(number)
  const unit = UNITS[exponent]
  number = Number((number / Math.pow(1000, exponent)).toPrecision(3)).toLocaleString()
  return number + ' ' + unit
}
