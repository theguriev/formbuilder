<template>
  <div class="tables-wrapper">
    <div class="tables">
      <slot></slot>
      <footer-logo></footer-logo>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tables-wrapper{
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

.tables{
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: calc(100% - 50px);
  position: relative;
}

div.footer-logo{
  left: 50%;
  margin-left: -50px;
  bottom: 0;
}

.bgl-table{
  width: 100%;
  flex: 1;
  padding-bottom: 150px;
}
</style>
