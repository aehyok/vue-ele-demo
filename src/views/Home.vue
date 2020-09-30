<template>
  <el-container style="height: 100vh">
    <el-header class="app-header">
      <el-button type="primary" v-on:click="onGotoPage">{{
        message
      }}</el-button>
    </el-header>
    <el-container style="overflow: auto">
      <el-aside width="250px">Aside</el-aside>
      <el-main class>
        <div class="main-wrapper" style="position: relative; height: 100%">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
    <el-main>Main</el-main>
  </el-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      message: "Hello in Home",
    };
  },
  methods: {
    onGotoPage() {
      console.log("将要进行页面跳转");
      let momentId = "123";
      this.$router.push(`./About?momentId=${momentId}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.app-header {
  background: "#2bae85";
}
</style>