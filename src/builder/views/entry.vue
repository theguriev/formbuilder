<template>
  <div>
    <tool-bar>
      <template v-slot:left>
        <button
          @click="back"
          title="Back"
          class="bgl-toolbar-button">
          <i class="el-icon-arrow-left"></i>
        </button>
        <div class="divider"></div>
      </template>
    </tool-bar>
    <div class="content">
      <blocks>
        <beagl-form
          :renderForm="form"
          :disableSubmit="true" />
      </blocks>
    </div>
  </div>
</template>

<script>
import ToolBar from './tool-bar'
import BeaglForm from '@/shared/components/bgl-form'
import Blocks from './blocks'
import { one } from '@/shared/api/entry'
import { ref } from '@vue/composition-api'

let beforeRouteData = null

export default {
  name: 'Entry',
  beforeRouteEnter (to, from, next) {
    one(to.params.id)
      .then(res => res.data)
      .then(
        entry => {
          if (!entry.id) {
            return next('/')
          }
          beforeRouteData = entry
          return next()
        }
      )
  },
  components: {
    ToolBar,
    BeaglForm,
    Blocks
  },
  setup (props, { refs, root, parent }) {
    const form = ref({
      ...beforeRouteData.content,
      settings: Object.create(null)
    })
    function back () {
      root.$router.go(-1)
    }
    return {
      back,
      form
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
:not([disabled]).active{
  color: var(--white);
  background: var(--text-regular);
  border-color: var(--text-regular);
}
.normal-buttons{
  margin-right: 8px;

  button{
    height: 36px;
  }
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
