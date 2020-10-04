<template>
<el-container style="height: 100vh">
  <el-aside width="200px"><SideMenu /></el-aside>
  <el-container>
    <el-header  class="app-header"><Header /></el-header>
    <el-main> <router-view></router-view></el-main>
  </el-container>
</el-container>
</template>

<script>
import Header from "./Header"
import SideMenu from "./sideMenu"

export default {
  components: {
    Header,
    SideMenu
  },
  data () {
    return {
      
    };
  },
  methods: {
    onGotoPage () {
      console.log("将要进行页面跳转");
      let momentId = "123";
      this.$router.push(`./About?momentId=${momentId}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.app-header {
  background: '#2bae85';
  background-color: '#2bae85';
}
</style>
