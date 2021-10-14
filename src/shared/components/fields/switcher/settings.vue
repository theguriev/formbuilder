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
          <label class="mb1">Active text</label>
          <el-input
            placeholder="Text displayed when in ON state"
            v-model="activeText"></el-input>
        </div>
        <div class="flex flex-column mb2">
          <label class="mb1">Inactive text</label>
          <el-input
            placeholder="Text displayed when in OFF state"
            v-model="inactiveText"></el-input>
        </div>
        <div class="flex flex-column mb2">
          <label class="mb1">Active color</label>
          <el-color-picker v-model="activeColor"></el-color-picker>
          <small>Background color when in <b>ON</b> state</small>
        </div>
        <div class="flex flex-column mb2">
          <label class="mb1">Inactive color</label>
          <el-color-picker v-model="inactiveColor"></el-color-picker>
          <small>Background color when in <b>OFF</b> state</small>
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
  name: 'switcher-settings',
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
