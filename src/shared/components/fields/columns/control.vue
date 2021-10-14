<template>
  <div
    :class="[className]"
    @dragenter.stop="dragenter++"
    @dragleave.stop="dragenter--"
    @drop.stop="drop"
    class="columns p2">
    <div
      v-if="!content.length && !render"
      class="welcome flex flex-column items-center"
      :class="{ transparent: dragenter > 0 }">
      <button
        @click.stop="clickAdd"
        title="Add block"
        class="mb1">
        <i class="el-icon-circle-plus-outline"></i>
      </button>
      <small v-if="!dragenter">Drop block here or click to plus button</small>
      <small v-if="dragenter">Block will be here :-)</small>
    </div>
    <repeater
      ref="repeater"
      @add="clickAdd"
      :columnsMode="true"
      :id="id"
      :render="render"
      :rootFieldsDispatcher="rootFieldsDispatcher"
      v-model="rootFields" />
    <slot />
  </div>
</template>

<script>
import { ref, computed } from '@vue/composition-api'
import Repeater from '../../repeater/'
import refsFactory from '../../../composables/refsFactory'

export default {
  name: 'columns',
  props: {
    value: {
      type: Object,
      default: () => {}
    },
    id: {
      default: 0
    },
    rootFields: {
      default: []
    },
    rootFieldsDispatcher: {
      type: Function,
      default: () => {}
    },
    render: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Repeater
  },
  setup (props, { emit, refs }) {
    const dragenter = ref(false)
    const content = computed(() => props.rootFields.filter(el => el.parent === props.id))

    function defaultAddFieldCallBack (field) {
      refs.repeater.dispatchAdd(field, content.value.length, props.id)
    }

    function clickAdd ($event, cb = defaultAddFieldCallBack) {
      emit('add', $event, cb)
    }

    function drop ($event) {
      dragenter.value--
      refs.repeater.moveField($event.dataTransfer.getData('text'), 0, props.id)
    }

    return {
      content,
      clickAdd,
      dragenter,
      drop,
      ...refsFactory(
        props,
        ['className']
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.welcome{
  &.transparent{
    opacity: .5;
  }

  button{
    cursor: pointer;
    font-size: 26px;
    border: 0;
    background: var(--white);

    &:hover{
      color: var(--primary);
    }
  }

  small{
    color: var(--text-secondary);
  }
}
</style>
