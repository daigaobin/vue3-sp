<!--
 * @Author: 牧鱼
 * @Date: 2022-03-31 17:38:33
 * @LastEditTime: 2022-04-07 16:36:34
 * @LastEditors: 牧鱼
 * @Description: 
 * @FilePath: \vue3-sp\src\App.vue
-->
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
