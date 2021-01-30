<!--日期格式类型-->
<template>
  <el-form-item :label="column.title" :prop="column.name" :rules="rules">
    <el-date-picker
      v-model="value"
      type="date"
      placeholder="选择日期"
      format="yyyy 年 MM 月 dd 日"
      style="float:left"
    >
    </el-date-picker>
  </el-form-item>
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
      type: String,
      default: ""
    }
  },
  data() {
    return {
      rules: [
        {
          required: this.column.required,
          message: "请输入" + this.column.title
        }
      ]
    };
  },
  computed: {
    value: {
      get: function() {
        return this.data;
      },
      set: function(val) {
        console.log("this.date", typeof val, val);
        this.$emit("update:data", val);
      }
    }
  }
};
</script>
