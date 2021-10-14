<template>
  <div id="beagl">
    <router-view/>
  </div>
</template>

<style lang="scss">
  body,
  .el-popover {
    line-height: 1.3;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
    color: var(--text-regular);

    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    *, *:before, *:after {
      box-sizing: border-box;
    }

    .el-collapse-item .el-collapse-item__header{
      font-weight: bold;
    }

    .el-collapse-item .el-collapse-item__header,
    .el-collapse-item .el-collapse-item__content{
      padding: 0 16px;
    }

    ul{
      margin: 0;
      padding: 0;
    }
  }

  input{
    font-family: "Open Sans", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
  }
</style>
