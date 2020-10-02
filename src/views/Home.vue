<template>
  <div>
    <el-button type="primary" v-on:click="onGotoPage">{{ message }}</el-button>
  </div>
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