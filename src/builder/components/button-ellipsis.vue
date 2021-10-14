<template>
  <el-dropdown
    @command="command"
    :hide-on-click="false"
    trigger="click">
    <button class="bgl-toolbar-button settings-toolbar-button ml1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 512">
        <path d="M32 224c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM0 136c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32-32 14.3-32 32zm0 240c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32-32 14.3-32 32z"/>
      </svg>
    </button>
    <el-dropdown-menu
      class="bgl-dropdown"
      slot="dropdown">
      <el-dropdown-item
        :command="'tips'"
        :icon="enabledTips ? 'el-icon-check' : ''">Enable tips</el-dropdown-item>
      <el-dropdown-item
        command="fullScreen"
        :icon="enabledFullScreen ? 'el-icon-check' : ''">Full screen mode</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { camelCase } from 'lodash'
export default {
  name: 'button-full-screen',
  props: {
    enabledTips: {
      type: Boolean,
      default: false
    },
    enabledFullScreen: {
      type: Boolean,
      default: false
    }
  },
  setup ({ enabledTips, enabledFullScreen }, { emit }) {
    function command (cmd) {
      emit(camelCase(`on-change-${cmd}`))
    }

    return {
      command
    }
  }
}
</script>

<style scoped lang="scss">
button{
  width: auto;
  svg{
    width: 10px;
    height: 28px;
    position: relative;
    top: 3px;
  }
}

.bgl-dropdown{
  min-width: 200px;
}
</style>
