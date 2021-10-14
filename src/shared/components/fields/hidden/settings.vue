<template>
  <div class="settings"></div>
</template>

<script>
import fieldData from './index'
import refsFactory from '../../../composables/refsFactory'
import addWatch from '../../../composables/addWatch'
import defaultFieldDispatch from '../../../utils/defaultFieldDispatch'

export default {
  name: 'hidden-settings',
  props: {
    value: {
      type: Object,
      default: () => {}
    }
  },
  setup (props, { emit }) {
    return addWatch(
      refsFactory(
        props,
        Object.keys(fieldData.data.value)
      ),
      defaultFieldDispatch(emit)
    )
  }
}
</script>
