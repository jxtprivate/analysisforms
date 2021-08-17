<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  height: 100%;
  /* margin-top: 60px; */
  /* opacity: 0.5; */
  > div {
    height: 100%;
  }
}
html,
body {
  // width: 100%;
  height: 100%;
  // 尽量不要动用全局样式
  margin: 0;
  padding: 0;
}
</style>
