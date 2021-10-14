<template>
  <div
    @click.stop=""
    :class="{
      repeater: true,
      'columns-mode': columnsMode
    }"
    ref="repeater">
    <div v-if="render" class="read-only">
      <component
        v-for="field in content"
        :is="field.name"
        :id="field.id"
        :key="field.id"
        :formID="formID"
        v-on="$listeners"
        :rootFields="fields"
        :rootFieldsDispatcher="dispatchChange"
        :render="render"
        @input="updateFields"
        v-model="field.value">
        <block-errors
          v-if="field.value.errors !== undefined"
          :errors="field.value.errors" />
      </component>
    </div>
    <div v-if="!render">
      <repeater-drop-zone
        v-for="(field, index) in content"
        @drop.stop="drop($event, field.id, field.parent)"
        :key="field.id"
        :id="field.id">
        <repeater-block
          @dragStart="$event.dataTransfer.setData('text', field.id)"
          @add="addField($event, field, id)"
          @remove="removeField(field.id)"
          @duplicate="duplicateField(field.id)"
          @up="moveField(field.id, prev(index).id, field.parent)"
          @down="moveField(field.id, next(index).id, field.parent)"
          @click="activate(field.id)"
          :id="'rp-' + field.id"
          :isFirst="index === 0"
          :isLast="index === content.length - 1"
          :class="{
            active: field.active,
            'columns-mode': columnsMode
          }">
          <component
            :is="field.name"
            :id="field.id"
            :formID="formID"
            v-on="$listeners"
            :rootFields="fields"
            :rootFieldsDispatcher="dispatchChange"
            :render="render"
            v-model="field.value"
            @input="updateFields" />
        </repeater-block>
      </repeater-drop-zone>
    </div>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash'
import RepeaterBlock from './repeater-block'
import RepeaterDropZone from './repeater-drop-zone'
import BlockErrors from './block-errors'
import { computed } from '@vue/composition-api'
import { prepareInsertingObject, remove, add, move, duplicate } from './adjacency'

export default {
  name: 'repeater',
  components: {
    RepeaterBlock,
    RepeaterDropZone,
    BlockErrors
  },
  model: {
    prop: 'fields',
    event: 'change'
  },
  props: {
    formID: {
      type: Number,
      default: 0
    },
    fields: {
      type: Array,
      default: () => []
    },
    columnsMode: {
      type: Boolean,
      default: false
    },
    rootFieldsDispatcher: {
      default: false
    },
    id: {
      default: 0
    },
    render: {
      type: Boolean,
      default: false
    }
  },
  setup (props, context) {
    const { emit, listeners } = context
    const content = computed(() => props.fields.filter(el => el.parent === props.id))

    function defaultDispatchChange (fields) {
      emit('change', fields)
    }

    const dispatchChange = props.rootFieldsDispatcher || defaultDispatchChange

    function updateFields () {
      dispatchChange(cloneDeep(props.fields))
    }

    function getIndexByID (id) {
      return props.fields.findIndex(el => el.id === id)
    }

    function dispatchAdd (field, index, parent) {
      dispatchChange(
        add(
          cloneDeep(props.fields),
          prepareInsertingObject(cloneDeep({ ...field, parent: parent || props.id })),
          index + 1
        )
      )
    }

    function addField ($event, field, parent = 0) {
      const index = getIndexByID(field.id)
      const dispatch = field => dispatchAdd(field, index, parent)
      if (listeners.add) {
        emit('add', $event, dispatch)
      } else {
        field = {
          ...field,
          value: field.defaults
        }
        dispatch(field)
      }
    }

    function removeField (id) {
      dispatchChange(remove(cloneDeep(props.fields), id))
    }

    function duplicateField (id) {
      const branch = duplicate(cloneDeep(props.fields), id)
      const newFields = cloneDeep(props.fields)
      let index = getIndexByID(id)
      if (index === -1) {
        index = newFields.length
      }
      newFields.splice(index + 1, 0, ...branch)
      dispatchChange(newFields)
    }

    function moveField (id, toID, parent) {
      const to = getIndexByID(toID)
      dispatchChange(move(cloneDeep(props.fields), id, to, parent))
    }

    function activate (id) {
      const newFields = cloneDeep(props.fields)
        .map(el => ({ ...el, active: el.id === id }))
      dispatchChange(newFields)
    }

    function drop ($event, id, parent) {
      moveField($event.dataTransfer.getData('text'), id, parent)
    }

    function prev (index) {
      return content.value[index - 1] || content[0]
    }

    function next (index) {
      return content.value[index + 1] || content[content.length - 1]
    }

    return {
      dispatchChange,
      addField,
      removeField,
      duplicateField,
      moveField,
      activate,
      content,
      dispatchAdd,
      prev,
      next,
      drop,
      updateFields
    }
  }
}
</script>

<style scoped lang="scss">
.repeater{
  display: flex;
  flex-direction: column;

  & > div{
    display: flex;
    flex-direction: column;
  }

  &.columns-mode > div{
    flex-direction: row;
  }
}
</style>
