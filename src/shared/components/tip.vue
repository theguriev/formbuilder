<template>
  <div class="tip">
    <slot name="component" />
    <div
      ref="dot"
      class="dot bottom"
      :class="{ 'bgl-hide-dot': !visible }" />
    <el-popover
      v-if="dot"
      ref="popover"
      width="450"
      placement="top-start"
      :reference="dot"
      v-model="visible"
      trigger="manual">
      <div class="tip-content mr3 mb1 ml1 flex flex-column">
        <slot name="content" />
      </div>
      <button
        @click="close"
        title="Close"
        class="bgl-tips-close bgl-toolbar-button">
        <i class="el-icon-close"></i>
      </button>
    </el-popover>
  </div>
</template>

<script>
import Vue from 'vue'
import { ref, onMounted, watch } from '@vue/composition-api'
export default {
  name: 'tip',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit, refs }) {
    const visible = ref(false)
    const dot = ref(null)
    const popover = ref(null)

    function close () {
      visible.value = false
    }

    onMounted(
      () => {
        // Fix popover relation bug.
        Vue.nextTick(() => { visible.value = props.value })
      }
    )

    watch(
      () => props.value,
      (newVal, oldVal) => {
        if (oldVal !== undefined && oldVal !== newVal) {
          visible.value = newVal
        }
      }
    )

    return {
      dot,
      popover,
      visible,
      close
    }
  }
}
</script>

<style scoped lang="scss">
.bgl-tips-close{
  position: absolute;
  top: 4px;
  right: 4px;
}

.bgl-hide-dot{
  display: none;
}

.tip{
  position: relative;
}

.tip-content{
  word-break: break-word;
}

.dot{
  position: absolute;

  &.bottom{
    bottom: 0;
    left: 50%;
  }

  &.top{
    top: 0;
    left: 50%;
  }

  &.left{
    top: 50%;
    left: 0;
  }

  &.right{
    top: 50%;
    right: 0;
  }

  &:before{
    animation: nux-pulse 1.6s cubic-bezier(.17,.67,.92,.62) infinite;
    background: var(--primary);
    height: 24px;
    left: -12px;
    top: -12px;
    transform: scale(.33333);
    width: 24px;
    border-radius: 100%;
    pointer-events: none;
    position: absolute;
    content: ' ';
  }

  &:after{
    background: var(--primary);
    height: 8px;
    left: -4px;
    top: -4px;
    width: 8px;
    content: ' ';
    border-radius: 100%;
    position: absolute;
  }
}

@keyframes nux-pulse {
  to {
    background: rgba(64, 158, 255, 0);
    transform: scale(1)
  }
}
</style>
