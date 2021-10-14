<template>
  <div
    :class="[className]"
    class="switcher flex flex-column p2">
    <label class="bgl-field-label mb1">{{ label }}</label>
    <el-switch
      v-model="input"
      :active-text="activeText"
      :inactive-text="inactiveText"
      :active-color="activeColor"
      :inactive-color="inactiveColor" />
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
  name: 'switcher',
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
