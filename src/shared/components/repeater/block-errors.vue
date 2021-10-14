<template>
  <ul class="block-errors">
    <li
      v-for="(error, index) in errors"
      :key="index">{{ error }}</li>
  </ul>
</template>

<script>
export default {
  name: 'block-errors',
  props: {
    errors: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
.block-errors {
  color: var(--danger);
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>
