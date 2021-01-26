<template>
  <div class="platform-header">
    <img style="height: 50px;" :src="logoSrc" alt="广东IPTV行业管理平台" />
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      logoSrc: require("../assets/logo.png")
    };
  }
});
</script>

<style lang="scss" scoped>
.platform-header {
  position: fixed;
  left: 0;
  margin: 0 20px;
}
.el-header {
  width: 100%;
  height: 60px;
  background: linear-gradient(to left, #b53a85, #4d4398);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
