
import { ref, watch } from '@vue/composition-api'

export default function (props, emit) {
  const active = ref(props.value)

  watch(
    active,
    (newValue, oldVal) => {
      if (newValue !== oldVal) {
        emit('onChangeActive', newValue)
      }
    }
  )

  return {
    active
  }
}
