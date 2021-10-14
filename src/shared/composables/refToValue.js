import { mapValues } from 'lodash'

export default function (data) {
  return mapValues(data, el => el.value)
}
