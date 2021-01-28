<!--日期范围-->
<template>
  <div>
    <el-form-item :label="column.title" :prop="column.name">
      <el-date-picker
        v-model="value"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        style="float:left"
      >
      </el-date-picker>
    </el-form-item>
  </div>
</template>
<script>
export default {
  props: {
    column: {
      type: [Object],
      default: () => {
        console.log("1");
      }
    },
    data: {
      type: Array,
      default: () => {
        console.log("1");
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    value: {
      get: function() {
        return this.data;
      },
      set: function(val) {
        console.log(val, "sssssss");
        this.$emit("update:data", val);
      }
    }
  }
};
</script>
