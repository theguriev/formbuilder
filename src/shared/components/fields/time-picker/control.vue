<template>
  <div
    :class="[className]"
    class="time-picker flex flex-column p2">
    <label class="bgl-field-label mb1" :class="{ 'is-required': required }">{{ label }}</label>
    <el-time-picker
      v-model="input"
      :placeholder="placeholder" />
    <div class="bgl-field-description">{{ description }}</div>
    <slot />
  </div>
</template>

<script>
import fieldData from './index'
import refsFactory from '../../../composables/refsFactory'
import addWatch from '../../../composables/addWatch'
import defaultFieldDispatch from '../../../utils/defaultFieldDispatch'

export default {
  name: 'time-picker',
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
