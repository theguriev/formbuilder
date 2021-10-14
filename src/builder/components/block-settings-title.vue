<template>
  <div class="bar-block-title">
    <div class="left mr2">
      <icon-base :icon="path" :viewBox="viewBox" />
    </div>
    <div class="right">
      <div class="title mb1">{{ title }}</div>
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'block-settings-title',
  props: {
    title: {
      default: '',
      type: String
    },
    description: {
      default: '',
      type: String
    },
    path: {
      default: '',
      type: String
    },
    viewBox: {
      default: '',
      type: String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .bar-block-title{
    display: flex;
    padding: 16px;
    box-sizing: border-box;

    .left{
      width: 18px;
    }

    .title{
      font-size: 12px;
      font-weight: bold;
    }

    .description{
      font-size: 12px;
    }
  }
</style>
