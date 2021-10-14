/**
 * Prepare conver field list to try with categories.
 *
 * @param {Object} list Field list.
 */
export default function (list) {
  let obj = list.filter(el => el.hide !== true)
    .reduce(
      (acc, cur) => {
        let category = cur.category || 'Single Line Text'
        acc[category] = acc[category] || []
        acc[category].push(cur)
        return acc
      },
      Object.create(null)
    )
  return Object.keys(obj).map(
    key => ({
      title: key,
      fields: obj[key]
    })
  )
}
