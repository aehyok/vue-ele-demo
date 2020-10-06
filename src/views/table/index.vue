<template>
    <div>
        <div class="controlbox">
            <el-button type="primary" @click="newParameter">新增参数
            </el-button>
            <Select ref='usage' :name='select1' />
            <Select ref='auditStatus' :name='select2' />
        </div>
        <div style="margin-top: 20px">
            <el-table :data="tableData">
              <el-table-column prop="paramName" label="参数" align="left"></el-table-column>
              <el-table-column prop="paramValue" label="参数值" align="right"></el-table-column>
              <el-table-column prop="paramDesc" label="参数描述" align="center"></el-table-column>
              <el-table-column prop="usage" label="应用范围"></el-table-column>
              <el-table-column prop="paramImage" label="图片">
                <template v-slot="scope">
                  <el-image
                    :src="scope.row.paramImage"
                    fit="cover"></el-image>
                </template>
              </el-table-column>
              <el-table-column
              fixed="right"
              label="操作"
              width="100">
              <template v-slot="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                  <el-button type="text" size="small" >编辑</el-button>
              </template>
              </el-table-column>
            </el-table>
            <el-pagination class="pagination-container"
                background
                layout="prev, pager, next"
                :total="1000">
                </el-pagination>
        </div>
    </div>

</template>
<script>

import { getTableList } from '@/mock/api'
import Select from '@/components/InputModel/Select'

export default {
  components:{
    Select
  },
  data() {
    return {
      select1:'usage',
      select2:'auditStatus',
      tableData: [
        {
          paramName: "参数1",
          paramValue: "参数值1",
          paramDesc: "参数描述1",
          usage: 1,
        },
        {
          paramName: "参数2",
          paramValue: "参数值2",
          paramDesc: "参数描述2",
          usage: 2,
        },
        {
          paramName: "参数3",
          paramValue: "参数值3",
          paramDesc: "参数描述3",
          usage: 1,
        },
        {
          paramName: "参数4",
          paramValue: "参数值4",
          paramDesc: "参数描述4",
          usage: 1,
        },
        {
          paramName: "参数5",
          paramValue: "参数值5",
          paramDesc: "参数描述5",
          usage: 1,
        },
      ],
    };
  },

  created(){
      getTableList().then(req=>{
        this.tableData=req.data.data;
      });
  },
  methods: {
    //  getData(){
    //     const res= getTableList({})
    //     this.tableData=res;
    //     return this.tableData;
    // },
    handleClick(row){
        console.log(row);
    },
    newParameter(){
      console.log(this.$refs.usage.usage.value);
      console.log(this.$refs.auditStatus.auditStatus.value);
    }
  },
};
</script>
<style lang="scss" scoped>
.pagination-container{
    background: #fff;
    padding:32px 16px;
    text-align: right;
}
</style>