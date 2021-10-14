<template>
  <div class="settings">
    <el-collapse>
      <el-collapse-item title="Base">
        <div class="flex flex-column mb2">
          <label class="mb1" for="">Label</label>
          <el-input placeholder="Label" v-model="label"></el-input>
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
          <label class="mb1" for="">Max</label>
          <el-input-number
            class="number-input"
            placeholder="Leave this field empty if you want Infinity"
            v-model="max"
            :step="1"
            :min="0"></el-input-number>
          <small>Leave this field empty if you want <b>Infinity</b></small>
        </div>
        <div class="flex flex-column mb2">
          <label class="mb1" for="">Min</label>
          <el-input-number
            class="number-input"
            placeholder="Leave this field empty if you want -Infinity"
            v-model="min"></el-input-number>
          <small>Leave this field empty if you want <b>-Infinity</b></small>
        </div>
        <div class="flex flex-column mb2">
          <label class="mb1" for="">Incremental step</label>
          <el-input-number
            class="number-input"
            placeholder="Incremental step for number field"
            v-model="step"></el-input-number>
        </div>
        <div class="flex flex-column mb2">
          <label class="mb1" for="">Placeholder Text</label>
          <el-input placeholder="Enter text for the form field placeholder" v-model="placeholder"></el-input>
        </div>
        <div class="flex flex-column mb2">
          <label class="mb1" for="">CSS Classes</label>
          <el-input placeholder="Enter CSS class names for the form field container" v-model="className"></el-input>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import fieldData from './index'
import refsFactory from '../../../composables/refsFactory'
import addWatch from '../../../composables/addWatch'
import defaultFieldDispatch from '../../../utils/defaultFieldDispatch'

export default {
  name: 'numbers-settings',
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

<style scoped lang="scss">
.number-input{
  width: 100%;
}
</style>
