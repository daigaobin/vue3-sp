<!--
 * @Author: 牧鱼
 * @Date: 2022-03-31 16:08:52
 * @LastEditTime: 2022-03-31 16:56:05
 * @LastEditors: 牧鱼
 * @Description: 
 * @FilePath: \vue3\src\views\HomeView.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
