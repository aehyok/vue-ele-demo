<template>
    <div>
        <div class="controlbox">
            <el-button type="primary">新增参数
            </el-button>
        </div>
        <div style="margin-top: 20px">
            <el-table :data="tableData">
            <el-table-column prop="paramName" label="参数"></el-table-column>
            <el-table-column prop="paramValue" label="参数值"></el-table-column>
            <el-table-column prop="paramDesc" label="参数描述"></el-table-column>
            <el-table-column prop="usage" label="应用范围"></el-table-column>
            <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
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

//import { getTableList } from '@/mock/api'

export default {
  data() {
    return {
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
      //this.getTableList();

  },
  methods: {
    //  getData(){
    //     const res= getTableList({})
    //     this.tableData=res;
    //     return this.tableData;
    // },
    handleClick(row){
        console.log(row);
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