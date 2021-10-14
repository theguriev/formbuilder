<template>
  <div class="bar block-settings">
    <slot />
  </div>
</template>

<style lang="scss">
.bar{
  .el-tabs{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-x: visible;
    top: 0;
    padding-left: 20px;
    margin-left: -20px;
    overflow-y: auto;
  }

  .el-tabs--card > .el-tabs__header{
    background: var(--border-extra-light);
    margin: 0;
  }

  .el-tabs__item{
    height: 50px;
    line-height: 50px;
  }
  .el-tabs--card > .el-tabs__header .el-tabs__nav,
  .el-tabs--card > .el-tabs__header .el-tabs__item{
    border-top: 0;
    border-left: 0;
    border-right: 0;
  }

  .el-tabs--card > .el-tabs__header .el-tabs__item.is-active{
    font-weight: bold;
    border-bottom: 2px solid var(--primary);
    border-bottom-color: var(--primary);
  }

  .el-tabs__content{
    overflow: visible;
  }
}
</style>

<style scoped lang="scss">
.bar{
  border-left: 1px solid var(--border-light);
  width: 280px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  padding-top: 0;
  background: var(--white);
}
</style>
