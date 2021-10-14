<template>
  <div
    :class="[className]"
    class="dropdown flex flex-column p2">
    <label class="bgl-field-label mb1" :class="{ 'is-required': required }">{{ label }}</label>
    <el-select
      v-if="!multiple"
      v-model="input"
      :clearable="clearable"
      :collapse-tags="collapseTags"
      :placeholder="placeholder">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select
      v-if="multiple"
      v-model="inputMultiple"
      :multiple="true"
      :clearable="clearable"
      :collapse-tags="collapseTags"
      :placeholder="placeholder">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <div class="bgl-field-description">{{ description }}</div>
    <slot />
  </div>
</template>

<script>
import fieldData from './index'
import refsFactory from '../../../composables/refsFactory'
import useChoices from '../../../composables/useChoices'
import addWatch from '../../../composables/addWatch'
import defaultFieldDispatch from '../../../utils/defaultFieldDispatch'

export default {
  name: 'dropdown',
  props: {
    value: {
      type: Object,
      default: () => {}
    }
  },
  setup (props, { emit }) {
    return addWatch(
      {
        ...refsFactory(
          props,
          Object.keys(fieldData.data.value)
        ),
        ...useChoices(props)
      },
      defaultFieldDispatch(emit)
    )
  }
}
</script>
