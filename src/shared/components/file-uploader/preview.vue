<template>
  <div class="bgl-file-uploader-preview mr2 mb2">
    <div class="bgl-file-content flex justify-center items-center">
      <div
        v-if="progressBar < 100"
        class="bgl-progress-bar">
        <div
          :style="`width: ${progressBar}%;`"
          class="bgl-progres-inner"
        />
      </div>
      <div class="bgl-overlay flex justify-center items-center">
        <div class="bgl-icons flex justify-center p3">
          <div class="bgl-overlay-content flex flex-column items-center">
            <svg
            @click="$emit('onDelete', file)"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512">
            <path d="M296 432h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zm-160 0h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8zM440 64H336l-33.6-44.8A48 48 0 0 0 264 0h-80a48 48 0 0 0-38.4 19.2L112 64H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h24v368a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V96h24a8 8 0 0 0 8-8V72a8 8 0 0 0-8-8zM171.2 38.4A16.1 16.1 0 0 1 184 32h80a16.1 16.1 0 0 1 12.8 6.4L296 64H152zM384 464a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V96h320zm-168-32h16a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8z"/>
          </svg>
          <span class="mt1">{{ file.size | bytes }}</span>
          </div>
        </div>
      </div>
      <div
        v-if="loaded && loaded.isImage"
        :style="`background-image: url(${loaded.url})`"
        class="bgl-preview-img"></div>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512">
        <path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16z"/>
      </svg>
    </div>
    <div class="bgl-file-name pt1" :title="file.name">
      {{ file.name | truncate(18) }}
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import truncate from '@/shared/utils/truncate'
import bytes from '@/shared/utils/bytes'

export default {
  name: 'bgl-file-uploader-preview',
  filters: {
    truncate,
    bytes
  },
  props: {
    file: {
      type: Object
    },
    action: {
      type: String
    }
  },
  setup ({ file, action }, { emit }) {
    const progressBar = ref(0)
    const loaded = ref(file.loaded)
    const humanBytes = ref(bytes(file.size))

    function upload (ctx) {
      const data = { file: ctx.file }

      let xhr = new XMLHttpRequest()
      xhr.open('POST', action, true)
      // xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
      // Update progress (can be used to show progress indicator)
      xhr.upload.addEventListener(
        'progress',
        e => {
          progressBar.value = (e.loaded * 100.0 / e.total) || 100
        }
      )
      xhr.addEventListener(
        'readystatechange',
        e => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            const loadedCandidate = JSON.parse(e.target.response).data
            loadedCandidate.isImage = loadedCandidate.type.includes('image')
            loaded.value = loadedCandidate
            emit('loaded', [ctx, loadedCandidate])
          } else if (xhr.readyState === 4 && xhr.status !== 200) {
            emit('loadingError', [ctx, e])
          }
        }
      )
      xhr.send(
        Object.keys(data).reduce(
          (acc, cur) => {
            acc.append(cur, data[cur])
            return acc
          },
          new FormData()
        )
      )
    }
    if (!loaded.value) {
      upload(file)
    }

    return {
      progressBar,
      loaded,
      humanBytes
    }
  }
}
</script>

<style scoped lang="scss">
.bgl-file-uploader-preview{

  .bgl-overlay-content{
    span{
      color: var(--white);
    }
  }

  .bgl-file-name{
    text-align: center;
  }

  .bgl-file-content{
    width: 146px;
    height: 146px;
    border-radius: var(--radius);
    border: 1px solid var(--border-base);
    position: relative;

    .bgl-icons{
      width: 100%;
      svg{
        width: 18px;
        fill: var(--white);
        cursor: pointer;
      }
    }

    &:hover{
      .bgl-overlay{
        opacity: 1;
      }
    }

    .bgl-overlay{
      border-radius: var(--radius);
      opacity: 0;
      transition: opacity 0.3s;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--overlay);
      z-index: 1;
    }

    & > svg{
      width: 20px;
      fill: var(--border-base);
    }

    .bgl-preview-img{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-size: cover;
      border-radius: var(--radius);
    }

    .bgl-progress-bar{
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 3px;

      .bgl-progres-inner{
        background: var(--primary);
        height: 100%;
        width: 0%;
        transition: width 0.3s;
      }
    }
  }
}
</style>
