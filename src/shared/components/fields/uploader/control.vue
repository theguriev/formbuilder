<template>
  <div
    :class="[className]"
    class="bgl-uploader flex flex-column p2">
    <label class="bgl-field-label mb1" :class="{ 'is-required': required }">{{ label }}</label>
    <file-uploader
      :action="url"
      :isMultiple="isMultiple"
      :limit="limit"
      :accept="accept"
      :maxFileSize="maxFileSize"
      v-model="input"
      @loadingError="loadingError"
    />
    <div class="bgl-field-description">{{ description }}</div>
    <slot />
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'
import fieldData from './index'
import refsFactory from '../../../composables/refsFactory'
import addWatch from '../../../composables/addWatch'
import FileUploader from '../../../components/file-uploader/'
import defaultFieldDispatch from '../../../utils/defaultFieldDispatch'

export default {
  name: 'uploader',
  props: {
    value: {
      type: Object,
      default: () => {}
    },
    render: {
      type: Boolean,
      default: false
    },
    formID: {
      type: Number,
      default: 0
    }
  },
  components: {
    FileUploader
  },
  setup (props, { emit, parent }) {
    const url = computed(() => window.beaglApp.ajaxUrl + `form/${props.formID}/uploads`)
    const data = addWatch(
      refsFactory(
        props,
        Object.keys(fieldData.data.value)
      ),
      defaultFieldDispatch(emit)
    )
    const isMultiple = computed(() => data.limit.value > 1)

    function onChange (file, fileList) {
      data.input.value = fileList
    }

    function loadingError ([ fileObj, error ]) {
      const res = JSON.parse(error.target.responseText)
      parent.$notify({
        title: 'Error',
        message: res.data,
        type: 'error'
      })
    }

    return {
      isMultiple,
      url,
      ...data,
      onChange,
      loadingError
    }
  }
}
</script>

<style scoped lang="scss">
.el-upload-list__item-img{
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: cover;
}
</style>
