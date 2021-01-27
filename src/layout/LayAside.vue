<template>
  <div class="menu-container">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-scrollbar class="scroll-wrap" :noresize="false" :view-style="{ height: '100%' }">
      <el-menu
        default-active="/echart-map"
        background-color="#2c303a"
        router
        text-color="#BCBCBC"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-submenu index="1">
          <template #title>
            <i class="el-icon-location"></i>
            <span>表单组件</span>
          </template>
          <el-menu-item-group>
            <template #title>分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template #title>选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="/table">
          <i class="el-icon-menu"></i>
          <template #title>table组件</template>
        </el-menu-item>
        <el-submenu index="3">
          <template #title>
            <i class="el-icon-location"></i>
            <span>echarts组件</span>
          </template>
          <el-menu-item index="./echart-map">echarts-map</el-menu-item>
          <el-menu-item index="3-2">选项1</el-menu-item>
          <el-menu-item index="3-3">选项1</el-menu-item>
        </el-submenu>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <template #title>map组件</template>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-setting"></i>
          <template #title>代码表组件</template>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-setting"></i>
          <template #title>多媒体组件</template>
        </el-menu-item>
        <el-submenu index="7">
          <template #title>
            <i class="el-icon-location"></i>
            <span>菜单维护</span>
          </template>
          <el-menu-item index="7-3-1">选项1</el-menu-item>
          <el-submenu index="7-4">
            <template #title>选项4</template>
            <el-menu-item index="7-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="8">
          <i class="el-icon-setting"></i>
          <template #title>系统授权</template>
        </el-menu-item>
        <el-menu-item index="9">
          <i class="el-icon-setting"></i>
          <template #title>可视化拖拽组件</template>
        </el-menu-item>
        <el-menu-item index="10">
          <i class="el-icon-setting"></i>
          <template #title>可视化流程设计</template>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<style lang="scss" scoped>
.el-menu {
  background: #2c303a;
  border-right: none;
  width: 200px;
}
.menu-container {
  position: fixed;
  top: 68px;
  // left: 20px;
  height: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  background: #2c303a;
  width: 200px;

  // ::v-deep .el-scrollbar__wrap {
  //   overflow-x: hidden;
  // }
}
.scroll-wrap {
  overflow: hidden;
  height: 100%;

  // ::v-deep .el-scrollbar__view {
  //   position: relative;
  // }
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
