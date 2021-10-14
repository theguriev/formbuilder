<template>
  <div
    :class="[form.settings.className]"
    class="render">
    <form
      v-if="!submitted"
      @submit.prevent="processForm">
      <form-title
        v-if="displayTitle"
        :render="true"
        v-model="form.title" />
      <repeater
        ref="repeater"
        :render="true"
        @change="updateContent"
        :formID="form.id"
        v-if="form.content"
        v-model="form.content" />
      <submit-button
        v-if="form.content.length && !disableSubmit"
        :render="true"
        :loading="loading"
        v-model="form.submit.value" />
    </form>
    <form-title
      v-if="submitted && displayTitle"
      :render="true"
      v-model="form.title" />
    <div
      v-if="submitted"
      class="confirmation p2"
      v-html="mdHTML"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import Repeater from '@/shared/components/repeater/'
import FormTitle from '@/shared/components/form-title'
import removeErrors from '@/shared/utils/process/removeErrors'
import process from '@/shared/utils/process/process'
import { add } from '@/shared/api/entries'
import { send } from '@/shared/api/notification'
import { ref, computed, watch } from '@vue/composition-api'
import { get, cloneDeep, omit } from 'lodash'
import { defaults } from '@/shared/utils/prepareForm'
import { renderNotification, prepareRenderTags } from '@/shared/utils/tags'
import FormConfirmation from '@/shared/components/fields/form-confirmation/'
import marked from 'marked'
import { html } from '@/shared/utils/email'

export default {
  name: 'Render',
  components: {
    Repeater,
    FormTitle
  },
  props: {
    renderForm: {
      type: Object,
      default: () => {}
    },
    disableSubmit: {
      type: Boolean,
      default: false
    },
    displayTitle: {
      type: Boolean,
      default: true
    }
  },
  setup (props, { emit }) {
    const form = ref(props.renderForm)
    const confirmation = computed(() => get(form, 'value.settings.confirmations.0', defaults(FormConfirmation.data)[0]))
    const loading = ref(false)
    const submitted = ref(false)
    const mdHTML = computed(() => marked(confirmation.value.value.message))

    function isFieldHaveErrros (el) {
      return el.value.errors instanceof Array && el.value.errors.length > 0
    }

    function isHaveErrors () {
      return form.value.content.some(isFieldHaveErrros)
    }

    function jumpToErrors () {
      Vue.nextTick(() => {
        const el = document.querySelector('.block-errors')
        if (el !== null) {
          el.scrollIntoView({ block: 'center', behavior: 'smooth' })
        }
      })
    }

    function successSend () {
      if (confirmation.value.value.type === 'redirect') {
        window.location.replace(confirmation.value.value.redirectUrl)
      } else {
        loading.value = false
        submitted.value = true
      }
    }

    function sendNotifications (entryID) {
      get(form, 'value.settings.notifications', [])
        .map(
          renderNotification(
            prepareRenderTags({
              ...cloneDeep(form.value),
              entryID
            })
          )
        )
        .map(
          el => ({
            ...el.value,
            message: html(
              window.beaglApp.textDirection,
              window.beaglApp.backgroundColor,
              window.beaglApp.blogName,
              window.beaglApp.homeUrl,
              marked(el.value.message)
            )
          })
        )
        .map(send)
    }

    function removeGarbageInfo (form) {
      return omit(form, ['settings'])
    }

    function processForm () {
      if (props.disableSubmit) {
        return true
      }
      loading.value = true
      form.value = {
        ...form.value,
        content: form.value.content
          .map(removeErrors)
          .map(process)
      }
      if (isHaveErrors()) {
        jumpToErrors()
        loading.value = false
      } else {
        add(form.value.id, removeGarbageInfo(form.value))
          .then(res => res.data)
          .then(sendNotifications)
          .then(successSend)
          .catch(() => { loading.value = false })
      }
    }

    function updateContent ($event) {
      form.value = {
        ...form.value,
        content: $event
      }
    }

    watch(
      () => props.renderForm,
      () => {
        form.value = props.renderForm
      }
    )

    return {
      processForm,
      loading,
      submitted,
      confirmation,
      mdHTML,
      form,
      updateContent
    }
  }
}
</script>
