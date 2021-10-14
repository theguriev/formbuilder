export default function (str, limit = 16, last = 6, omission = '...') {
  str = String(str)
  if (str.length > limit) {
    const start = limit - last - omission.length
    return str.substr(0, start) + omission + str.substr(last * -1)
  }
  return str
}
