<template>
  <div
    :class="[className]"
    class="html">
    <div v-if="!render" class="flex flex-column p2">
      <label class="bgl-field-label mb1">HTML</label>
      <el-input
        type="textarea"
        rows="10"
        v-model="input"></el-input>
      <div class="bgl-field-description">{{ description }}</div>
    </div>
    <div v-if="render" v-html="input"></div>
    <slot />
  </div>
</template>

<script>
import fieldData from './index'
import refsFactory from '../../../composables/refsFactory'
import addWatch from '../../../composables/addWatch'
import defaultFieldDispatch from '../../../utils/defaultFieldDispatch'

export default {
  name: 'html-field',
  props: {
    value: {
      type: Object,
      default: () => {}
    },
    render: {
      type: Boolean,
      default: false
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
