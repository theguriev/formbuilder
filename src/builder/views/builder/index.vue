<template>
  <div>
    <tool-bar>
      <template v-slot:left>
        <el-popover
          ref="popper"
          width="400">
          <field-search
            @selected="addField"
            :tree="tree"></field-search>
        </el-popover>
        <el-popover
          ref="popperEmbed"
          title="Embed this form"
          trigger="click"
          width="300">
          <el-tabs type="card">
            <el-tab-pane class="flex flex-column" label="Internal WP">
              <small class="mb2">You are almost done. To embed this form on your site, please paste the following shortcode inside a post or page.</small>
              <clipboard-input :txt="embedShortCode" />
            </el-tab-pane>
            <el-tab-pane class="flex flex-column" label="Anywhere">
              <small class="mb2">You can paste this code in any website.</small>
              <clipboard-input :txt="embedCode" />
            </el-tab-pane>
          </el-tabs>
        </el-popover>
        <button
          v-on:click="goTo('/')"
          title="Back"
          class="bgl-toolbar-button">
          <i class="el-icon-arrow-left"></i>
        </button>
        <div class="divider"></div>
        <tip v-model="tip1">
          <template v-slot:component>
            <button
              @click.stop="clickAdd"
              title="Add block"
              :disabled="render"
              class="bgl-toolbar-button">
              <i class="el-icon-circle-plus-outline"></i>
            </button>
          </template>
          <template v-slot:content>
            <span>Welcome to the wonderful world of Beagl forms! Click the “+” (“Add field”) button to add a new field. There are fields available for all kinds of content: you can insert text, fancy field, layouts and lots more!</span>
            <div class="link pt1">
              <el-link
                @click="tip1 = false; tip2 = true;"
                type="primary">See next tip</el-link>
            </div>
          </template>
        </tip>
      </template>
      <template v-slot:right>
        <div class="normal-buttons flex">
          <tip v-model="tip4">
            <template v-slot:component>
              <el-button
                v-popover:popperEmbed
                class="bgl-toolbar-normal-button"
                icon="el-icon-set-up"
                size="small">Embed</el-button>
            </template>
            <template v-slot:content>
              <span>Finished developing you first form? That’s great, let’s get this embeded right now. Just click “Embed” and you’re good to go.</span>
              <div class="link pt1">
                <el-link
                  @click="tip4 = false; onChangeTips()"
                  type="primary">Got it</el-link>
              </div>
            </template>
          </tip>
          <tip v-model="tip3">
            <template v-slot:component>
              <el-button
                :class="{ active: render }"
                class="bgl-toolbar-normal-button"
                @click="render = !render"
                size="small">Preview</el-button>
            </template>
            <template v-slot:content>
              <span>Click “Preview” to load a preview of this page, so you can make sure you’re happy with your fields.</span>
              <div class="link pt1">
                <el-link
                  @click="tip3 = false; tip4 = true;"
                  type="primary">See next tip</el-link>
              </div>
            </template>
          </tip>
          <el-button
            @click="saveForm"
            :disabled="render"
            class="bgl-toolbar-normal-button"
            size="small"
            type="primary">Save</el-button>
        </div>
        <tip v-model="tip2">
          <template v-slot:component>
            <button
              :disabled="render"
              class="bgl-toolbar-button settings-toolbar-button"
              :class="{
                active: activeBar && !render
              }"
              v-on:click="activeBar = !activeBar">
              <i class="el-icon-s-tools"></i>
            </button>
          </template>
          <template v-slot:content>
            <span>You’ll find more settings for your page and fields in the sidebar. Click the cog icon to toggle the sidebar open and closed.</span>
            <div class="link pt1">
              <el-link
                @click="tip2 = false; tip3 = true;"
                type="primary">See next tip</el-link>
            </div>
          </template>
        </tip>
        <button-ellipsis
          :enabledTips="enabledTips"
          :enabledFullScreen="enabledFullScreen"
          @onChangeTips="onChangeTips"
          @onChangeFullScreen="onChangeFullScreen" />
      </template>
    </tool-bar>
    <div class="content">
      <blocks :class="{ 'active-bar' : activeBar && !render }">
        <form-title
          v-if="!render"
          :render="render"
          v-model="form.title" />
        <repeater
          ref="repeater"
          :formID="form.id"
          v-if="form.content && !render"
          @add="toggleAddPopper"
          @change="deactivateSubmit"
          v-model="form.content" />
        <submit-button
          v-if="form.content.length > 0 && !!form.submit && !render"
          @click="activateSubmit"
          :class="{ active: submitFieldActive }"
          v-model="form.submit.value" />
        <beagl-form
          v-if="render"
          :renderForm="form" />
      </blocks>
      <bar
        v-if="activeBar && !render"
        @close="activeBar = false">
        <el-tabs type="card">
          <button class="close-bar" @click="activeBar = false"><i class="el-icon-close"></i></button>
          <el-tab-pane label="Form">
            <form-settings
              v-model="settings"
              :form="form"
              @input="updateSettings" />
          </el-tab-pane>
          <el-tab-pane label="Block">
            <div
              class="no-block-selected"
              v-if="!active">No block selected.</div>
            <block-settings-title
              v-if="active"
              :title="active.title"
              :description="active.description"
              :path="active.icon.path"
              :viewBox="active.icon.viewBox" />
            <component
              v-if="active && active.settings"
              :is="active.settings"
              v-model="active.value" />
          </el-tab-pane>
        </el-tabs>
      </bar>
    </div>
  </div>
</template>

<script>
import { isEqual } from 'lodash'
import { ref, watch, computed, onMounted, onUnmounted } from '@vue/composition-api'
import FieldSearch from '@/builder/components/field-search'
import ClipboardInput from '@/builder/components/clipboard-input'
import FormTitle from '@/shared/components/form-title'
import Repeater from '@/shared/components/repeater/'
import Tip from '@/shared/components/tip/'
import BlockSettingsTitle from '@/builder/components/block-settings-title/'
import ButtonEllipsis from '@/builder/components/button-ellipsis'
import ToolBar from '../tool-bar'
import Bar from './bar'
import FormSettings from './form-settings'
import Blocks from '../blocks'
import { one, save } from '@/shared/api/form'
import prepareForm from '@/shared/utils/prepareForm'
import prepareTree from '@/shared/utils/prepareTree'
import generateEmbedCode from '@/shared/utils/generateEmbedCode'
import generateShortCode from '@/shared/utils/generateShortCode'
import BeaglForm from '@/shared/components/bgl-form'
import { email, text, textLarge } from '@/shared/utils/tags'

let beforeRouteData = null

export default {
  name: 'Builder',
  beforeRouteEnter (to, from, next) {
    one(to.params.id)
      .then(res => res.data)
      .then(
        form => {
          if (!form.id) {
            return next('/')
          }
          beforeRouteData = prepareForm(form)
          return next()
        }
      )
  },
  components: {
    ToolBar,
    Bar,
    Blocks,
    FormSettings,
    Repeater,
    FormTitle,
    BlockSettingsTitle,
    FieldSearch,
    ClipboardInput,
    BeaglForm,
    ButtonEllipsis,
    Tip
  },
  setup (props, { refs, root, parent }) {
    const fieldSearchVisible = ref(false)
    const activeBar = ref(localStorage.getItem('bgl-enabled-side-bar') === '1')
    const form = ref(beforeRouteData)
    const settings = ref(form.value.settings)
    const embedCode = generateEmbedCode(form.value.id)
    const embedShortCode = generateShortCode(form.value.id)
    const tree = ref(prepareTree(window.bgl.fields))
    const previousTarget = ref(null)
    const submitFieldActive = ref(false)
    const render = ref(false)
    const enabledTips = ref(localStorage.getItem('bgl-enabled-tips') === '1')
    const enabledFullScreen = ref(localStorage.getItem('bgl-enabled-full-screen') === '1')
    const tip1 = ref(enabledTips.value)
    const tip2 = ref(false)
    const tip3 = ref(false)
    const tip4 = ref(false)
    const active = computed(
      () => {
        if (submitFieldActive.value === true) {
          return form.value.submit
        }
        return form.value.content.find(el => el.active)
      }
    )
    let addFieldCallBack = null

    function toggleFullScreenClass (isFullScreen) {
      if (isFullScreen) {
        document.body.classList.add('bgl-full-screen')
      } else {
        document.body.classList.remove('bgl-full-screen')
      }
    }

    toggleFullScreenClass(enabledFullScreen.value)

    function conditionalDeactivate ($event) {
      if (refs.popper.showPopper && !$event.target.closest('.el-popper')) {
        refs.popper.showPopper = false
      }
    }

    function defaultAddFieldCallBack (field) {
      refs.repeater.dispatchAdd(field, form.value.content.length, 0)
    }

    function toggleAddPopper ($event, cb) {
      addFieldCallBack = cb
      refs.popper.referenceElm = $event.target
      if (refs.popper.showPopper) {
        if (previousTarget.value && previousTarget.value.contains($event.target)) {
          refs.popper.showPopper = false
        } else {
          refs.popper.popperJS._reference = $event.target
          refs.popper.popperJS.state.updateBound()
        }
      } else {
        refs.popper.showPopper = true
      }
      previousTarget.value = $event.target
    }

    function clickAdd ($event) {
      toggleAddPopper($event, defaultAddFieldCallBack)
    }

    function addField (field) {
      const cb = addFieldCallBack || defaultAddFieldCallBack
      cb(field)
    }

    function saveForm () {
      save(form.value.id, form.value)
    }

    function goTo (route) {
      root.$router.push(route)
    }

    function activateSubmit () {
      submitFieldActive.value = true
      form.value = {
        ...form.value,
        content: form.value.content.map(el => ({ ...el, active: false }))
      }
    }

    function deactivateSubmit ($event) {
      form.value = {
        ...form.value,
        content: $event
      }
      submitFieldActive.value = false
    }

    function updateSettings ($event) {
      form.value = {
        ...form.value,
        settings: $event
      }
    }

    function onChangeTips () {
      enabledTips.value = !enabledTips.value
      localStorage.setItem('bgl-enabled-tips', enabledTips.value === true ? 1 : 0)
      if (enabledTips.value === true) {
        tip1.value = true
        tip2.value = false
        tip3.value = false
        tip4.value = false
      } else {
        tip1.value = false
        tip2.value = false
        tip3.value = false
        tip4.value = false
      }
    }

    function onChangeFullScreen () {
      enabledFullScreen.value = !enabledFullScreen.value
      localStorage.setItem('bgl-enabled-full-screen', enabledFullScreen.value === true ? 1 : 0)
      toggleFullScreenClass(enabledFullScreen.value)
    }

    onMounted(() => {
      document.body.addEventListener('click', conditionalDeactivate)
    })

    onUnmounted(() => {
      document.body.removeEventListener('click', conditionalDeactivate)
    })

    watch(
      activeBar,
      (newVal, oldVal) => {
        if (!isEqual(newVal, oldVal)) {
          localStorage.setItem('bgl-enabled-side-bar', newVal === true ? 1 : 0)
        }
      }
    )

    watch(
      form,
      (newVal, oldVal) => {
        const tags = {
          email: email(newVal.content),
          text: text(newVal.content),
          textLarge: textLarge(newVal.content)
        }
        settings.value = {
          ...settings.value,
          notifications: settings.value.notifications
            .map(
              el => ({
                ...el,
                value: {
                  ...el.value,
                  tags
                }
              })
            )
        }
      }
    )

    return {
      fieldSearchVisible,
      activeBar,
      form,
      tree,
      previousTarget,
      active,
      toggleAddPopper,
      saveForm,
      goTo,
      addField,
      clickAdd,
      submitFieldActive,
      deactivateSubmit,
      activateSubmit,
      render,
      embedCode,
      embedShortCode,
      updateSettings,
      settings,
      tip1,
      tip2,
      tip3,
      tip4,
      onChangeTips,
      onChangeFullScreen,
      enabledTips,
      enabledFullScreen
    }
  }
}
</script>

<style scoped lang="scss">
.content{
  position: absolute;
  top: 56px;
  left: 0;
  right: 0;
  bottom: 0;
}
.divider{
  width: 1px;
  height: 30px;
  background: var(--border-light);
  display: block;
  margin: 0 8px;
}

.no-block-selected{
  text-align: center;
  padding: 32px 0;
}

.close-bar{
  position: absolute;
  top: -43px;
  right: 7px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  border: none;
  font-size: 22px;
  border-radius: 4px;
  cursor: no-drop;
  background: transparent;
  z-index: 1;

  &:not([disabled]){
    cursor: pointer;
  }

  &:not([disabled]):hover{
    background-color: var(--white);
    box-shadow: inset 0 0 0 1px var(--border-light), inset 0 0 0 2px var(--white), 0 1px 1px var(--border-base);
  }

  &:focus{
    outline: none;
  }
}
</style>
