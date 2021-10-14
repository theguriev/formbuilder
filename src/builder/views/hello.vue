<template>
  <div class="form-page flex items-center justify-center">
    <main>
      <div class="text center">
        <div class="hello">
          Hello
        </div>
        <div class="info-text">
          <span>, let's create some cool form!</span>
        </div>
      </div>
      <div class="flex justify-center mt3">
        <div class="magic">
          <templates
            v-on:choose="choose"
            :templates="templates"></templates>
        </div>
      </div>
    </main>
    <footer-logo></footer-logo>
  </div>
</template>

<script>
import useTemplates from '@/shared/composables/useTemplates'

export default {
  name: 'hello',
  setup (props, { parent }) {
    return useTemplates(parent)
  }
}
</script>

<style scoped lang="scss">
.form-page{
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;

  main{
    width: 100%;
  }
}

.text{
  font-size: 48px;
}

.hello, .info-text{
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
}

.hello{
  animation: showup 7s forwards;
}

.info-text {
  animation: reveal 14s forwards;
}

.button-showup{
  animation: showupbutton 7s forwards;
}

.info-text span {
  margin-left: 0px;
  animation: slidein 4s;
}

@keyframes showup {
  0% {opacity:0;}
  100% {opacity:1;}
}

@keyframes slidein {
  0% { opacity:0; margin-left:-655px; }
  50% { opacity:0; margin-left:-655px; }
  100% { opacity:1; margin-left: 0px; }
}

@keyframes showupbutton {
  0% {opacity:0;}
  70% {opacity:0;}
  100% {opacity:1;}
}

@keyframes magicshow{
  0% {opacity:0;}
  70% {
    opacity:0;
    transform: translateY(100px);
  }
  100% {
    opacity:1;
    transform: translateY(0);
  }
}

.magic{
  animation: magicshow 4s forwards;
  width: 400px;
  padding: 12px 0;
  margin-top: 12px;
  box-shadow: 0 2px 12px 0 var(--shadow);
  border: 1px solid var(--border-extra-light);
  border-radius: var(--radius);
}
</style>
