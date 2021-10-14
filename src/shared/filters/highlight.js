/**
 * Highlight text with some tag. For example: This is The <b>New York</b>.
 *
 * @param {string} str Where we will find the string to highlight.
 * @param {string} highlightStr Highlight peace.
 * @param {string} before What we put before highlight part.
 * @param {string} after What we put after highlight part.
 */
export default function (str, highlightStr, before = '<b>', after = '</b>') {
  if (highlightStr === '') {
    return str
  }
  // eslint-disable-next-line template-curly-spacing
  return str.replace(new RegExp(`(${ highlightStr })`, 'i'), `${ before }$1${ after }`)
}
