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
          <label class="mb1" for="">Input type</label>
          <el-select v-model="type" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="flex flex-column mb2">
          <label class="mb1" for="">Max length</label>
          <el-input-number
            class="number-input"
            placeholder="Leave this field empty if you want to unlimited"
            v-model="max"
            :step="1"
            :min="0"></el-input-number>
          <small>Leave this field empty if you want to unlimited</small>
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
  name: 'single-line-text-settings',
  props: {
    value: {
      type: Object,
      default: () => {}
    }
  },
  setup (props, { emit }) {
    const options = [
      {
        label: 'Text',
        value: 'text'
      },
      {
        label: 'Email',
        value: 'email'
      },
      {
        label: 'Password',
        value: 'password'
      }
    ]
    const data = addWatch(
      refsFactory(
        props,
        Object.keys(fieldData.data.value)
      ),
      defaultFieldDispatch(emit)
    )
    return {
      ...data,
      options
    }
  }
}
</script>

<style scoped lang="scss">
.number-input{
  width: 100%;
}
</style>
