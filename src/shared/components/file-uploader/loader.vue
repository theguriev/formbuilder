<template>
  <div
    @click="open"
    class="bgl-file-uploader-loader flex justify-center align-center">
    <input
      type="file"
      :multiple="rest > 1"
      @change="change"
      :accept="accept"
      ref="fileButton" />
    <svg v-if="!dragging" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
      <path d="M312.5 168.5c-4.7-4.7-12.3-4.7-17 0l-98.3 98.3c-4.7 4.7-4.7 12.3 0 17l5.7 5.7c4.7 4.7 12.3 4.7 17 0l68.2-68.2V372c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12V221.3l68.2 68.2c4.7 4.7 12.3 4.7 17 0l5.7-5.7c4.7-4.7 4.7-12.3 0-17l-98.5-98.3zm259.2 70.3c2.8-9.9 4.3-20.2 4.3-30.8 0-61.9-50.1-112-112-112-16.7 0-32.9 3.6-48 10.8-31.6-45-84.3-74.8-144-74.8-94.4 0-171.7 74.5-175.8 168.2C39.2 220.2 0 274.3 0 336c0 79.6 64.4 144 144 144h368c70.7 0 128-57.2 128-128 0-47-25.8-90.8-68.3-113.2zM512 448H144c-61.9 0-112-50.1-112-112 0-56.8 42.2-103.7 97-111-.7-5.6-1-11.3-1-17 0-79.5 64.5-144 144-144 60.3 0 111.9 37 133.4 89.6C420 137.9 440.8 128 464 128c44.2 0 80 35.8 80 80 0 18.5-6.3 35.6-16.9 49.2C573 264.4 608 304.1 608 352c0 53-43 96-96 96z"/>
    </svg>
    <svg v-if="dragging" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
      <path d="M571.7 238.8c2.8-9.9 4.3-20.2 4.3-30.8 0-61.9-50.1-112-112-112-16.7 0-32.9 3.6-48 10.8-31.6-45-84.3-74.8-144-74.8-94.4 0-171.7 74.5-175.8 168.2C39.2 220.2 0 274.3 0 336c0 79.6 64.4 144 144 144h368c70.7 0 128-57.2 128-128 0-47-25.8-90.8-68.3-113.2zM512 448H144c-61.9 0-112-50.1-112-112 0-56.8 42.2-103.7 97-111-.7-5.6-1-11.3-1-17 0-79.5 64.5-144 144-144 60.3 0 111.9 37 133.4 89.6C420 137.9 440.8 128 464 128c44.2 0 80 35.8 80 80 0 18.5-6.3 35.6-16.9 49.2C573 264.4 608 304.1 608 352c0 53-43 96-96 96z"/>
    </svg>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  name: 'bgl-file-uploader-loader',
  props: {
    dragging: {
      type: Boolean,
      default: false
    },
    accept: {
      type: String,
      default: ''
    },
    rest: {
      type: Number,
      default: 1
    }
  },
  setup (props, { emit }) {
    const fileButton = ref(null)

    function open () {
      fileButton.value.click()
    }

    function change ($event) {
      emit('load', $event.target.files)
    }

    return {
      fileButton,
      open,
      change
    }
  }
}
</script>

<style scoped lang="scss">
.bgl-file-uploader-loader{
  width: 146px;
  height: 146px;
  border-radius: var(--radius);
  border: 1px dashed var(--border-base);
  background: var(--background-uploader);

  &:hover{
    cursor: pointer;
    border-color: var(--primary);
    svg{
      fill: var(--primary);
    }
  }

  svg{
    width: 28px;
    fill: var(--border-base);
  }

  input{
    display: none;
  }
}
</style>
