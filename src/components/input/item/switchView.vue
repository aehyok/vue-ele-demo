<template>
  <el-form-item :label="column.title" :prop="column.name">
    <el-switch v-model="value" style="float:left"></el-switch>
  </el-form-item>
</template>
<script>
// 可在el-switch 设置左右侧文字
// active-text="按月付费"
// inactive-text="按年付费"
export default {
  props: {
    column: {
      type: [Object],
      default: () => {
        console.log("switch");
      }
    },
    data: {
      type: Boolean,
      default: false // 只有true和false两个值
    }
  },
  created() {
    console.log(this.column.name, this.column.required, "this.column.switch");
  },
  //
  data() {
    return {};
  },
  computed: {
    value: {
      get: function() {
        console.log(this.data, "this.data.switch");
        return this.data;
      },
      set: function(val) {
        console.log("this.switch", typeof val, val);
        this.$emit("update:data", val);
      }
    }
  }
};
</script>
