<template>
  <svg xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    role="presentation"
  >
    <g :fill="iconColor">
      <path :d="icon"/>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    iconColor: {
      type: String,
      default: '#000'
    },
    icon: {
      type: String,
      default: ''
    },
    viewBox: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px; /* yes, I'm that particular about formatting */
}
</style>
