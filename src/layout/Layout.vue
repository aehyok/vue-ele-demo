<template>
  <el-container>
    <el-aside>
      aside
    </el-aside>
    <el-container>
      <el-header>
        header
      </el-header>
      <el-main>
        main
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  padding: 60px 26px 0 226px;
  min-height: 100vh;
  box-sizing: border-box;
}
.main-container {
  padding: 30px 20px;
  background: #fff;
  margin: 20px 0 0 0;
}
</style>
