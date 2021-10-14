<template>
  <div class="blocks-wrapper">
    <div class="blocks">
      <slot />
      <footer-logo />
    </div>
  </div>
</template>

<style scoped lang="scss">
.blocks-wrapper{
  overflow-y: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;

  &.active-bar{
    margin-right: 280px;
  }
}

.blocks{
  display: flex;
  flex-direction: column;
  width: 900px;
  margin: 100px auto 50px auto;
  padding: 0 0 100px 0;
  box-sizing: border-box;
  min-height: calc(100% - 150px);
  position: relative;
}

div.footer-logo{
  left: 50%;
  margin-left: -50px;
  bottom: 0;
}
</style>
