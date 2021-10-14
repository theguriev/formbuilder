<template>
  <div class="form-notification flex flex-column">
    <label class="bgl-field-label mb1">Send to email address</label>
    <smart-tags
      @select="to += $event"
      :tags="emailTags">
      <el-input v-model="to" />
    </smart-tags>
    <label class="bgl-field-label mb1 mt2">Email subject</label>
    <smart-tags
      @select="subject += $event"
      :tags="textTags">
      <el-input v-model="subject" />
    </smart-tags>
    <label class="bgl-field-label mb1 mt2">From name</label>
    <smart-tags
      @select="fromName += $event"
      :tags="textTags">
      <el-input v-model="fromName" />
    </smart-tags>
    <label class="bgl-field-label mb1 mt2">From email</label>
    <smart-tags
      @select="fromEmail += $event"
      :tags="emailTags">
      <el-input v-model="fromEmail" />
    </smart-tags>
    <label class="bgl-field-label mb1 mt2">Reply to</label>
    <smart-tags
      @select="reply += $event"
      :tags="emailTags">
      <el-input v-model="reply" />
    </smart-tags>
    <label class="bgl-field-label mb1 mt2">Message</label>
    <smart-tags
      @select="message += $event"
      :tags="textLargeTags">
      <md v-model="message" />
    </smart-tags>
  </div>
</template>

<script>
import md from '../../md'
import fieldData from './index'
import refsFactory from '../../../composables/refsFactory'
import addWatch from '../../../composables/addWatch'
import defaultFieldDispatch from '../../../utils/defaultFieldDispatch'
import SmartTags from '../../smart-tags'
import { computed } from '@vue/composition-api'
import { get } from 'lodash'

export default {
  name: 'form-notification',
  components: {
    md,
    SmartTags
  },
  props: {
    value: {
      type: Object,
      default: () => {}
    }
  },
  setup (props, { emit }) {
    const emailTags = computed(() => get(props, 'value.tags.email', []))
    const textTags = computed(() => get(props, 'value.tags.text', []))
    const textLargeTags = computed(() => get(props, 'value.tags.textLarge', []))
    return {
      ...addWatch(
        refsFactory(
          props,
          Object.keys(fieldData.data.value)
        ),
        defaultFieldDispatch(emit)
      ),
      emailTags,
      textTags,
      textLargeTags
    }
  }
}
</script>

<style scoped lang="scss">
.form-notification{
  padding: 12px;
}
</style>
