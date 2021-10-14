<template>
  <div class="smart-tags">
    <el-link
      v-if="!showTags && tags.length > 0"
      @click="showTags = !showTags"
      class="tags-link"
      type="info">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        <path d="M625.941 293.823L421.823 497.941c-18.746 18.746-49.138 18.745-67.882 0l-1.775-1.775 22.627-22.627 1.775 1.775c6.253 6.253 16.384 6.243 22.627 0l204.118-204.118c6.238-6.239 6.238-16.389 0-22.627L391.431 36.686A15.895 15.895 0 0 0 380.117 32h-19.549l-32-32h51.549a48 48 0 0 1 33.941 14.059L625.94 225.941c18.746 18.745 18.746 49.137.001 67.882zM252.118 32H48c-8.822 0-16 7.178-16 16v204.118c0 4.274 1.664 8.292 4.686 11.314l211.882 211.882c6.253 6.253 16.384 6.243 22.627 0l204.118-204.118c6.238-6.239 6.238-16.389 0-22.627L263.431 36.686A15.895 15.895 0 0 0 252.118 32m0-32a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.746 18.746-49.138 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118V48C0 21.49 21.49 0 48 0h204.118zM144 124c-11.028 0-20 8.972-20 20s8.972 20 20 20 20-8.972 20-20-8.972-20-20-20m0-28c26.51 0 48 21.49 48 48s-21.49 48-48 48-48-21.49-48-48 21.49-48 48-48z"/>
      </svg> Show tags
    </el-link>
    <el-link
      v-if="showTags && tags.length > 0"
      @click="showTags = !showTags"
      class="tags-link"
      type="info">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
        <path d="M625.941 293.823L421.823 497.941c-18.746 18.746-49.138 18.745-67.882 0l-1.775-1.775 22.627-22.627 1.775 1.775c6.253 6.253 16.384 6.243 22.627 0l204.118-204.118c6.238-6.239 6.238-16.389 0-22.627L391.431 36.686A15.895 15.895 0 0 0 380.117 32h-19.549l-32-32h51.549a48 48 0 0 1 33.941 14.059L625.94 225.941c18.746 18.745 18.746 49.137.001 67.882zM252.118 32H48c-8.822 0-16 7.178-16 16v204.118c0 4.274 1.664 8.292 4.686 11.314l211.882 211.882c6.253 6.253 16.384 6.243 22.627 0l204.118-204.118c6.238-6.239 6.238-16.389 0-22.627L263.431 36.686A15.895 15.895 0 0 0 252.118 32m0-32a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.746 18.746-49.138 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118V48C0 21.49 21.49 0 48 0h204.118zM144 124c-11.028 0-20 8.972-20 20s8.972 20 20 20 20-8.972 20-20-8.972-20-20-20m0-28c26.51 0 48 21.49 48 48s-21.49 48-48 48-48-21.49-48-48 21.49-48 48-48z"/>
      </svg> Hide tags
    </el-link>
    <div
      v-if="showTags"
      class="tags mb1">
      <div class="title pt1 pb1 pl2 pr2">Smart tags</div>
      <ul class="tags-list">
        <li
          v-for="tag in tags"
          :key="tag.id"
          class="pl2 pr2">
          <el-link
            @click="$emit('select', tag.value)"
            :underline="false">{{ tag.name }}</el-link>
        </li>
      </ul>
    </div>
    <slot />
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
  name: 'smart-tags',
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  },
  setup (props, { emit }) {
    const showTags = ref(false)
    return {
      showTags
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.smart-tags{
  position: relative;

  .tags-link{
    position: absolute;
    font-size: 12px;
    top: -30px;
    right: 0;

    svg{
      width: 12px;
      margin-right: 4px;
    }
  }
}
.tags{
  border: 1px solid var(--border-light);
  border-radius: var(--radius);

  .title{
    background: var(--title-header-bg);
  }

  ul.tags-list{
    padding-top: var(--space-1);
    padding-bottom: var(--space-1);
  }
}
</style>
