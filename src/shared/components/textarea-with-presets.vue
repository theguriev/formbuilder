<template>
  <div class="textarea-with-presets">
    <div class="flex justify-between mb1">
      <label for="">Choices</label>
      <el-link
        v-if="!showPresets"
        @click="togglePresets"
        class="presets-link"
        type="info">Show presets</el-link>
      <el-link
        v-if="showPresets"
        @click="togglePresets"
        class="presets-link"
        type="info">Hide presets</el-link>
    </div>
    <div v-if="showPresets" class="presets mb1">
      <div class="title pt1 pb1 pl2 pr2">Presets</div>
      <ul class="presets-list">
        <li
          v-for="(preset, index) in presets"
          :key="index"
          class="pl2 pr2">
          <el-link
            @click="setPreset(preset.choices)"
            :underline="false">{{ preset.name }}</el-link>
        </li>
      </ul>
    </div>
    <el-input
      type="textarea"
      :rows="3"
      placeholder="Add choices (one pre line)"
      @input="$emit('input', $event)"
      :value="v">
    </el-input>
  </div>
</template>

<script>
import { ref, watch } from '@vue/composition-api'
export default {
  name: 'textarea-with-presets',
  props: {
    value: {
      type: String,
      default: ''
    },
    presets: {
      type: Array,
      default: () => []
    }
  },
  setup (props, { emit }) {
    const showPresets = ref(false)
    const v = ref(props.value)

    function togglePresets () {
      showPresets.value = !showPresets.value
    }

    function setPreset (choices) {
      v.value = choices.join('\n')
      showPresets.value = false
      emit('input', v.value)
    }

    watch(() => props.value, (newVal) => {
      v.value = newVal
    })

    return {
      showPresets,
      togglePresets,
      setPreset,
      v
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.presets-link{
  font-size: 12px;
}
.presets{
  border: 1px solid var(--border-light);
  border-radius: var(--radius);

  .title{
    background: var(--title-header-bg);
  }

  ul.presets-list{
    padding-top: var(--space-1);
    padding-bottom: var(--space-1);
  }
}
</style>
