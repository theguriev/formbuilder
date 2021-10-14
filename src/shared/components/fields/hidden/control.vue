<template>
  <div class="bgl-hidden-field">
    <div class="p2 flex flex-column" v-if="!render">
      <label class="bgl-field-label mb1">Hidden field</label>
      <el-input v-model="input" />
    </div>
    <el-input
      class="hidden"
      v-if="render"
      v-model="input"
      type="hidden" />
  </div>
</template>

<script>
import fieldData from './index'
import refsFactory from '../../../composables/refsFactory'
import addWatch from '../../../composables/addWatch'
import defaultFieldDispatch from '../../../utils/defaultFieldDispatch'

export default {
  name: 'hidden',
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

<style scoped lang="scss">
.hidden{
  display: none;
}
</style>
