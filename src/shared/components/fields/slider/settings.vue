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
      </el-collapse-item>
      <el-collapse-item title="Advanced options">
        <div class="flex flex-column mb2">
          <label class="mb1" for="">Maximum value</label>
          <el-input-number
            class="number-input"
            placeholder="Max"
            v-model="max"></el-input-number>
        </div>
        <div class="flex flex-column mb2">
          <label class="mb1" for="">Minimum value</label>
          <el-input-number
            class="number-input"
            placeholder="Min"
            v-model="min"></el-input-number>
        </div>
        <div class="flex flex-column mb2">
          <label class="mb1" for="">Step size</label>
          <el-input-number
            class="number-input"
            placeholder="Step"
            v-model="step"></el-input-number>
        </div>
        <div class="flex flex-column mb2">
          <el-checkbox v-model="showStops">Display breakpoints</el-checkbox>
          <el-checkbox v-model="showInput" :disabled="multiple">Display an input box, works when range is false</el-checkbox>
          <el-checkbox v-model="multiple">Range selection</el-checkbox>
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
  name: 'slider-settings',
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
