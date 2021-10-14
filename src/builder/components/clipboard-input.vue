<template>
  <div
    @click="copy"
    class="clipboard-input">{{ txt }}</div>
</template>

<script>
import copyToClipboard from '@/shared/utils/copyToClipboard'
export default {
  name: 'clipboard-input',
  props: {
    txt: {
      type: String,
      default: ''
    }
  },
  setup (props, { parent }) {
    function copy () {
      copyToClipboard(props.txt)
      parent.$notify({
        title: 'Success',
        message: 'Successfully copied to clipboard.',
        type: 'success'
      })
    }
    return {
      copy
    }
  }
}
</script>

<style scoped lang="scss">
.clipboard-input{
  border: 1px solid var(--border-base);
  border-radius: var(--radius);
  padding: 8px;
  background: var(--background-base);
  cursor: copy;
}
</style>
