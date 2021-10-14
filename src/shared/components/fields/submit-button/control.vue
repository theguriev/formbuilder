<template>
  <div :class="[className]">
    <div
      v-if="!render"
      @click="$emit('click', $event)"
      class="submit-button">
        <button class="el-button el-button--primary">{{ input }}</button>
    </div>
    <div
      v-if="render"
      @click="$emit('click', $event)"
      class="submit-button-render p2">
        <el-button
          type="primary"
          native-type="submit"
          :loading="loading">{{ input }}</el-button>
    </div>
  </div>
</template>

<script>
import fieldData from './index'
import refsFactory from '../../../composables/refsFactory'
import addWatch from '../../../composables/addWatch'
import defaultFieldDispatch from '../../../utils/defaultFieldDispatch'

export default {
  name: 'submit-button',
  props: {
    value: {
      type: Object,
      default: () => {}
    },
    render: {
      type: Boolean,
      default: false
    },
    loading: {
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
.submit-button{
  padding: 15px;
  border-top: 1px solid transparent;
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;

  &:hover{
    box-shadow: inset 3px 0 var(--border-base);
  }

  &:focus{
    outline: 0;
  }

  &.active{
    box-shadow: inset 3px 0 var(--border-base);
    border-color: var(--border-light);
  }

  input{
    width: 100%;
  }
}
</style>
