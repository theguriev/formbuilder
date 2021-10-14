<template>
  <div
    :class="[className]"
    class="slider flex flex-column p2">
    <label class="bgl-field-label mb1">{{ label }}</label>
    <div v-if="!multiple">
      <el-slider
        v-model="input"
        :show-stops="showStops"
        :show-input="showInput"
        :step="step"
        :max="max"
        :min="min" />
    </div>
    <div v-if="multiple">
      <el-slider
        v-model="inputMultiple"
        range
        :show-stops="showStops"
        :step="step"
        :max="max"
        :min="min" />
    </div>
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
  name: 'slider',
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
