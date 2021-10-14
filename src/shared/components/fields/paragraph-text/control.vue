<template>
  <div
    :class="[className]"
    class="paragraph-text flex flex-column p2">
    <label class="bgl-field-label mb1" :class="{ 'is-required': required }">{{ label }}</label>
    <el-input
      type="textarea"
      :placeholder="placeholder"
      :maxlength="max === 0 ? '' : max"
      :show-word-limit="true"
      v-model="input"></el-input>
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
  name: 'paragraph-text',
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
