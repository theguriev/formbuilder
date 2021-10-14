<template>
  <div
    :class="[className]"
    class="multiple-choice flex flex-column p2">
    <label class="bgl-field-label mb1" :class="{ 'is-required': required }">{{ label }}</label>
    <div v-if="!multiple" class="radio-group flex flex-column">
      <el-radio
        v-for="item in options"
        class="mb1"
        v-model="input"
        :key="item.id"
        :label="item.value">{{ item.label }}</el-radio>
    </div>
    <div v-if="multiple" class="checkbox-group">
      <el-checkbox-group v-model="inputMultiple" class="flex flex-column">
        <el-checkbox
          v-for="item in options"
          class="mb1"
          :key="item.id"
          :label="item.value"></el-checkbox>
      </el-checkbox-group>
    </div>

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
  name: 'multiple-choice',
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
