<template>
  <div class="bgl-permalink">
    <div v-if="slug !== ''">
      {{ permalink }}
    </div>
    <small v-if="slug === ''">
      Not specified yet.
    </small>
  </div>
</template>

<script>
import { get } from 'lodash'

export default {
  name: 'block-settings-title',
  props: {
    settings: {
      default: () => {}
    }
  },
  setup ({ settings }) {
    const slug = get(settings, 'slug', '')
    const permalink = window.beaglApp.homeUrl + '/' + slug

    return {
      permalink,
      slug
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
