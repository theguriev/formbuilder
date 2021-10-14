<template>
  <div class="render">
    <beagl-form
      :renderForm="form"
      :displayTitle="displayTitle"
      :disableSubmit="disableSubmit" />
  </div>
</template>

<script>
import { ref, watch } from '@vue/composition-api'
import { get } from '@/shared/api/request'
import prepareForm from '@/shared/utils/prepareForm'
import BeaglForm from '@/shared/components/bgl-form'

export default {
  name: 'Render',
  components: {
    BeaglForm
  },
  props: {
    url: {
      type: String,
      default: ''
    },
    displayTitle: {
      type: Boolean,
      default: true
    },
    disableSubmit: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit, parent }) {
    /** Important for showing errors */
    window.bgl.notify = parent.$notify

    const form = ref(prepareForm({}))

    function loadForm () {
      window.beaglApp.ajaxUrl = props.url.split('/').slice(0, -2).concat(['']).join('/')
      get(props.url)
        .then(res => res.data)
        .then(
          ret => {
            form.value = prepareForm(ret)
          }
        )
    }
    loadForm()

    watch(
      () => props.url,
      (newVal) => {
        loadForm()
      }
    )
    return {
      form
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.render{
  line-height: 1.3;
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
  color: var(--text-regular);
}
</style>
<style lang="scss">
.el-popper{
  line-height: 1.3;
  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
  color: var(--text-regular);
}
</style>
