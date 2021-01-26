<template>
  <el-container>
    <el-header>
      <lay-header />
    </el-header>
    <el-container>
      <el-aside width="280px">
        <lay-aside />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LayHeader from "./LayHeader.vue";
import LayAside from "./LayAside.vue";

export default defineComponent({
  components: {
    LayHeader,
    LayAside
  }
});
</script>

<style lang="scss" scoped>
.el-header {
  width: 100%;
  height: 60px;
  background: linear-gradient(to left, #b53a85, #4d4398);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.el-aside {
  height: calc(100vh - 60px);
  background: #2c303a;
  width: 90px;
}
</style>
