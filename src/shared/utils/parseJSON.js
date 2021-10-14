export default function (str) {
  let res
  try {
    res = JSON.parse(str)
  } catch (e) {}
  return res
}
