<template>
  <div>
    <div
      v-if="!render"
      @click="titleActive = true"
      :class="{ active: titleActive }"
      class="form-title">
      <input
        @blur="titleActive = false"
        @input="$emit('input', $event.target.value)"
        type="text"
        placeholder="Here will be your form name..."
        :value="value"
        class="title">
    </div>
    <div class="form-title-render p2" v-if="render">
      <span class="title">{{ value }}</span>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
  name: 'form-title',
  props: {
    value: {
      type: String,
      default: ''
    },
    render: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    const titleActive = ref(false)

    return {
      titleActive
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.form-title{
  padding: 15px;
  border-top: 1px solid transparent;
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;

  &:hover{
    box-shadow: inset 3px 0 var(--border-base);
  }

  &.active{
    box-shadow: inset 3px 0 var(--border-base);
    border-color: var(--border-light);
  }

  input{
    width: 100%;
  }
}

.title{
  font-size: 40px;
  font-weight: 600;
  border: 0;
  color: var(--black);

  &:focus{
    outline: 0;
  }
}
</style>
