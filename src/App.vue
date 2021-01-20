<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <el-button>111111111111111111</el-button>
  <HelloWorld msg="Hello to Your Vue.js App" />
</template>

<script>
import ElButton from "element-plus";
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    [ElButton.name]: ElButton,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
