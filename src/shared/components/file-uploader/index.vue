<template>
  <div
    @dragover.prevent=""
    @drop.stop.prevent="drop"
    @dragenter="enter"
    @dragleave="leave"
    class="file-uploader flex flex-wrap">
    <preview
      v-for="file in files"
      :key="file.id"
      :file="file"
      :action="action"
      @loaded="loaded"
      @loadingError="loadingError"
      @onDelete="onDelete"
    />
    <loader
      v-if="rest > 0"
      @load="load"
      :accept="accept"
      :rest="rest"
      :dragging="entered > 0"
    />
  </div>
</template>

<script>
import { ref, watch } from '@vue/composition-api'
import { reject, set, chain, isEqual } from 'lodash'
import Loader from './loader.vue'
import Preview from './preview.vue'
import guid from '@/shared/utils/guid'

function calcRest (max, length) {
  if (max === -1) {
    return 9999999
  }
  return Math.max(max - length, 0)
}

export default {
  name: 'bgl-file-uploader',
  components: {
    Loader,
    Preview
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    action: {
      type: String,
      default: ''
    },
    limit: {
      type: Number,
      default: 5
    },
    accept: {
      type: String,
      default: ''
    },
    maxFileSize: {
      default: ''
    }
  },
  setup (props, { emit }) {
    const { value, limit, maxFileSize } = props
    const entered = ref(0)
    const files = ref(value)
    const rest = ref(calcRest(limit, files.value.length))
    const limitSize = ref(parseFloat(maxFileSize) || -1)

    function enter ($event) {
      entered.value++
    }

    function leave ($event) {
      entered.value--
    }

    function fileToObject (file) {
      const obj = [
        'lastModified',
        'lastModifiedDate',
        'name',
        'size',
        'type'
      ].reduce(
        (acc, cur) => ({
          ...acc,
          [cur]: file[cur]
        }),
        Object.create(null)
      )
      obj.file = file
      obj.id = guid()
      return obj
    }

    function concatToFiles (filesList) {
      return files.value.concat(filesList)
    }

    function limitBySize (el) {
      const limitBytes = limitSize.value * 1000000
      if (limitSize.value === -1) {
        return true
      }
      return el.size <= limitBytes
    }

    function prepareBeforeInsert (files) {
      return chain(files)
        .take(rest.value)
        .map(fileToObject)
        .filter(limitBySize)
        .thru(concatToFiles)
        .value()
    }

    function load ($event) {
      files.value = prepareBeforeInsert($event)
    }

    function drop ($event) {
      entered.value--
      files.value = prepareBeforeInsert($event.dataTransfer.files)
    }

    function onDelete ({ id }) {
      files.value = reject(files.value, { id })
    }

    function loaded ([ fileObj, loadedObj ]) {
      files.value = chain([ ...files.value ])
        .findIndex(
          el => el.id === fileObj.id
        )
        .thru(
          index => set(
            [ ...files.value ],
            index,
            {
              ...fileObj,
              new_name: loadedObj.new_name,
              url: loadedObj.url,
              candidate: loadedObj.candidate
            }
          )
        )
        .value()
    }

    function loadingError ([ fileObj, error ]) {
      onDelete(fileObj)
      emit('loadingError', [ fileObj, error ])
    }

    function updateRest () {
      rest.value = calcRest(props.limit, files.value.length)
    }

    watch([files, () => props.limit], updateRest)

    watch(
      () => props.maxFileSize,
      (newVal) => {
        limitSize.value = newVal
      }
    )

    watch(
      files,
      (newVal, oldVal) => {
        if (!isEqual(newVal, oldVal)) {
          emit('input', files.value)
        }
      }
    )

    return {
      entered,
      enter,
      leave,
      drop,
      load,
      files,
      onDelete,
      loaded,
      loadingError,
      rest
    }
  }
}
</script>

<style scoped lang="scss">
</style>
