<template>
  <div
    @dragover.prevent=""
    @drop.stop.prevent="drop"
    @dragenter="enter"
    @dragleave="leave"
    class="repeater-drop-zone"
    :class="{
      entered: entered > 0
    }">
    <slot></slot>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
  name: 'repeater-drop-zone',
  setup (props, { emit }) {
    const entered = ref(0)

    function enter ($event) {
      entered.value++
      emit('dragEnter', $event)
    }

    function leave ($event) {
      entered.value--
      emit('dragLeave', $event)
    }

    function drop ($event) {
      emit('drop', $event)
      entered.value--
    }

    return {
      entered,
      enter,
      leave,
      drop
    }
  }
}
</script>

<style scoped lang="scss">
.entered{
  box-shadow: inset 0px 3px 0px 0px var(--primary);
}

.repeater-drop-zone{
  padding-top: 8px;
}
</style>
