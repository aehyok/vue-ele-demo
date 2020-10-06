<template>
  <el-row  type="flex" justify="space-between" class="header" :gutter="20" >
    <el-col :span="16"
      ><div>
         <el-button @click="changeCollapseLeftNavbar" icon='el-icon-s-operation'></el-button><span style="margin-left:20px;font-size:20px;">数字乡村振兴运营平台
</span>
      </div></el-col
    >
    
    <el-col :span="4"
      ><div class="grid-content-right">
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
.grid-content-right{
  float:right;
}
</style>
<script>
import { mapGetters,mapMutations } from 'vuex'

export default {
  data() {
    return {
      
    };
  },
  computed:{
    ...mapGetters('permission',['getCollapse']),
  },
  methods:{
    ...mapMutations('permission',['changeCollapse']),
    changeCollapseLeftNavbar(){
        this.changeCollapse()
    },
  }
};
</script>