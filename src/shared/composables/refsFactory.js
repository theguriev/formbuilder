import { isEqual } from 'lodash'
import { ref, watch } from '@vue/composition-api'

export default function (props, names = []) {
  const data = names.reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: ref(props.value[cur])
    }),
    Object.create(null)
  )

  watch(
    () => props.value,
    (newVal, oldVal) => {
      if (!isEqual(newVal, oldVal)) {
        names.forEach(
          cur => {
            data[cur].value = newVal[cur]
          }
        )
      }
    }
  )
  return data
}
