<template>
  <el-row  type="flex" justify="space-between" class="header" :gutter="20" >
    <el-col :span="3"
      ><div class="grid-content bg-purple">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
      </div></el-col
    >
    <el-col :span="2"
      ><div class="grid-content bg-purple">
        <el-dropdown>
          <span class="el-dropdown-link">
            个人中心<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>用户信息</el-dropdown-item>
            <el-dropdown-item>主题</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item disabled></el-dropdown-item>
            <el-dropdown-item divided>Logout</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div></el-col
    >
  </el-row>
</template>

<style>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}

.header{
  margin-top: 10px;
}
</style>
<script>
export default {
  data() {
    return {
      isCollapse: true,
    };
  },
};
</script>