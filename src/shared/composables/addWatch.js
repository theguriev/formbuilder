import { watch } from '@vue/composition-api'
import { values, isEqual } from 'lodash'

export default function (data, fn) {
  watch(
    values(data),
    (newVal, oldVal) => {
      if (!isEqual(newVal, oldVal)) {
        fn(data, newVal, oldVal)
      }
    }
  )
  return data
}
