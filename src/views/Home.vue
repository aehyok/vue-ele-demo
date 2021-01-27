<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <el-button type="primary" @click="test">test</el-button>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { ElButton } from "element-plus";

@Options({
  components: {
    HelloWorld,
    [ElButton.name]: ElButton
  },
  mounted() {
    console.log("mounted");
  },
  methods: {
    test() {
      alert(1111);
    }
  }
})
export default class Home extends Vue {}
</script>
