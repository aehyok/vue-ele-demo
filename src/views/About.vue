<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button type="primary">{{ message }}</el-button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      message: "Hello in world",
    };
  },
  beforeCreate() {
    console.log(this.$route);
  },
  methods: {},
};
</script>