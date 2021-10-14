<template>
  <div class="form-confirmation flex flex-column">
    <label class="bgl-field-label mb1">Confirmation Type</label>
    <el-select
      v-model="type">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <label
      v-if="type === 'message'"
      class="bgl-field-label mt1 mb1">Message</label>
    <md
      v-if="type === 'message'"
      v-model="message" />
    <label
      v-if="type === 'redirect'"
      class="bgl-field-label mt1 mb1">Redirect URL</label>
    <el-input
      v-if="type === 'redirect'"
      v-model="redirectUrl" />
  </div>
</template>

<script>
import md from '../../md'
import fieldData from './index'
import refsFactory from '../../../composables/refsFactory'
import addWatch from '../../../composables/addWatch'
import defaultFieldDispatch from '../../../utils/defaultFieldDispatch'

export default {
  name: 'form-confirmation',
  components: {
    md
  },
  props: {
    value: {
      type: Object,
      default: () => {}
    }
  },
  setup (props, { emit }) {
    const options = [
      {
        label: 'Message',
        value: 'message'
      },
      {
        label: 'Go to URL (Redirect)',
        value: 'redirect'
      }
    ]
    return {
      options,
      ...addWatch(
        refsFactory(
          props,
          Object.keys(fieldData.data.value)
        ),
        defaultFieldDispatch(emit)
      )
    }
  }
}
</script>

<style scoped lang="scss">
.form-confirmation{
  padding: 12px;
}
</style>
