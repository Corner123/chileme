<template lang='pug'>
  div#app
     el-row
        el-col(:span='1')
           div.gridlt
        el-col(:span='23')
           div.gridrt
</template>

<style lang="scss">
@mixin init{
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-align: center;
}
html,body{
  @include init;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @include init;
  background: aqua;
}
.el-row{
  height: 100%;
}

</style>