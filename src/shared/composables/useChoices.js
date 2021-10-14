/* eslint-disable quotes */
import { ref, watch, computed } from '@vue/composition-api'
import { uid } from '@/shared/components/repeater/adjacency'

export default function (props) {
  const options = ref(props.value.options)
  const choices = computed(() => {
    return options.value.map(el => el.label).join("\n")
  })

  function changeChoices (str) {
    if (str === undefined) {
      return false
    }
    options.value = ('' + str).split("\n").map(el => ({
      label: el,
      value: el,
      id: uid()
    }))
  }

  watch(
    () => props.value.options,
    (newValue) => {
      options.value = newValue || []
    }
  )

  return {
    options,
    choices,
    changeChoices
  }
}
