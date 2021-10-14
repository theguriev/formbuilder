<template>
  <div class="bgl-md">
    <el-input
      v-if="!isMD"
      ref="input"
      type="textarea"
      :rows="rows"
      :value="value"
      @input="$emit('input', $event)" />
    <div
      v-if="isMD"
      :style="{ width: width + 'px', height: height + 'px' }"
      v-html="mdHTML"
      class="bgl-html">
    </div>
    <button
      class="bgl-md-text"
      @click="isMD = !isMD">
      <svg
        v-if="!isMD"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 512">
        <path d="M593.8 59.1H46.2C20.7 59.1 0 79.8 0 105.2v301.5c0 25.5 20.7 46.2 46.2 46.2h547.7c25.5 0 46.2-20.7 46.1-46.1V105.2c0-25.4-20.7-46.1-46.2-46.1zM338.5 360.6H277v-120l-61.5 76.9-61.5-76.9v120H92.3V151.4h61.5l61.5 76.9 61.5-76.9h61.5v209.2zm135.3 3.1L381.5 256H443V151.4h61.5V256H566z"/>
      </svg>
    </button>
    <button
      class="bgl-md-text"
      @click="isMD = !isMD">
      <svg
        v-if="isMD"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512">
        <path d="M448 48v72a8 8 0 0 1-8 8h-16a8 8 0 0 1-8-8V64H240v384h72a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H136a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h72V64H32v56a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V48a16 16 0 0 1 16-16h416a16 16 0 0 1 16 16z"/>
      </svg>
    </button>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, computed } from '@vue/composition-api'
import { debounce } from 'lodash'
import marked from 'marked'
export default {
  name: 'md',
  props: {
    value: {
      type: String,
      default: ''
    },
    rows: {
      type: Number,
      default: 10
    }
  },
  setup (props, { refs }) {
    const isMD = ref(false)
    const width = ref(30)
    const height = ref(30)
    const mdHTML = computed(() => marked(props.value))

    function changeSize ({ target }) {
      const { offsetHeight, offsetWidth } = target
      width.value = offsetWidth
      height.value = offsetHeight
    }
    const changeSizeDebounce = debounce(changeSize, 100)

    onMounted(() => {
      window.addResizeListener(refs.input.$el, changeSizeDebounce)
    })

    onBeforeUnmount(() => {
      if (refs.input) {
        window.removeResizeListener(refs.input.$el, changeSizeDebounce)
      }
    })

    return {
      isMD,
      width,
      height,
      mdHTML
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.bgl-html{

  ul{
    list-style-type: disc;
    padding: 0 0 0 16px;
  }

  ol{
    list-style-type: decimal;
    padding: 0 0 0 16px;
  }

  blockquote{
    padding: 0 0 0 24px;
    border-left: 3px solid var(--border-base);
    margin: 0;
  }

  code{
    background-color: var(--border-base);
    border-radius: var(--radius);
    padding: 4px;
  }
}
</style>
<style scoped lang="scss">
.bgl-md{
  position: relative;

  .bgl-md-text{
    width: 24px;
    opacity: 0.5;
    position: absolute;
    bottom: 1px;
    right: 8px;
    cursor: pointer;
    border: 0;
    padding: 0;

    &:hover{
      opacity: 1;
    }
  }

  .bgl-html{
    border: 1px solid var(--border-base);
    color: var(--text-regular);
    background-color: var(--white);
    border-radius: var(--radius);
    padding: 5px 15px;
    line-height: 1.5;
    overflow-y: auto;

    ul{
      list-style-type: disc;
    }

    ol{
      list-style-type: decimal;
    }
  }
}
</style>
