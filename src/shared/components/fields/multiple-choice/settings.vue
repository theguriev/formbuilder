<template>
  <div class="settings">
    <el-collapse>
      <el-collapse-item title="Base">
        <div class="flex flex-column mb2">
          <label class="mb1" for="">Label</label>
          <el-input placeholder="Label" v-model="label"></el-input>
        </div>
        <div class="flex flex-column mb2">
          <textarea-with-presets
            @input="changeChoices"
            :presets="choicesPresets"
            :value="choices"
          />
        </div>
        <div class="flex flex-column mb2">
          <label class="mb1" for="">Description</label>
          <el-input
            type="textarea"
            :rows="3"
            placeholder="Description"
            v-model="description">
          </el-input>
        </div>
        <div class="flex flex-column mb2">
          <el-checkbox v-model="required">Required</el-checkbox>
        </div>
      </el-collapse-item>
      <el-collapse-item title="Advanced options">
        <div class="flex flex-column mb2">
          <label class="mb1" for="">CSS Classes</label>
          <el-input placeholder="Enter CSS class names for the form field container" v-model="className"></el-input>
        </div>
        <div class="flex flex-column mb2">
          <el-checkbox v-model="multiple">Multiple</el-checkbox>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import { watch } from '@vue/composition-api'
import { isEqual } from 'lodash'
import fieldData from './index'
import TextareaWithPresets from '../../textarea-with-presets'
import choicesPresets from '../../../static/choices-presets'
import refsFactory from '../../../composables/refsFactory'
import useChoices from '../../../composables/useChoices'
import addWatch from '../../../composables/addWatch'
import defaultFieldDispatch from '../../../utils/defaultFieldDispatch'
import refToValue from '../../../composables/refToValue'

export default {
  name: 'multiple-choice-settings',
  props: {
    value: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    TextareaWithPresets
  },
  setup (props, { emit }) {
    const ret = addWatch(
      {
        ...refsFactory(
          props,
          Object.keys(fieldData.data.value)
        ),
        ...useChoices(props),
        choicesPresets
      },
      defaultFieldDispatch(emit)
    )

    function hadOptionsInput () {
      return !ret.multiple.value && ret.options.value instanceof Array && ret.options.value.findIndex(el => el.value === ret.input.value) === -1
    }

    watch(
      ret.choices,
      (newVal, oldVal) => {
        if (!isEqual(newVal, oldVal) && hadOptionsInput()) {
          ret.input.value = ''
          emit('input', refToValue(ret))
        }
      }
    )
    return ret
  }
}
</script>
