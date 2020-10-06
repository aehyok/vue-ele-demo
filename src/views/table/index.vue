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

        <!-- 弹窗 -->
    <el-dialog
      :visible.sync="dialogTableVisible"
      @close="resetForm('form')"
    >
      <el-form
        :model="form"
        
        ref="form"
        label-width="120px"
        v-loading="dialogLoading"
      >
        <el-form-item prop="id" style="display: none;"></el-form-item>
        <el-form-item label="参数：" prop="paramName">
          <el-input v-model="form.paramName" v-if="dioType !== 1"></el-input>
          <span v-else>{{ form.paramName }}</span>
        </el-form-item>
        <el-form-item label="参数值：" prop="paramValue">
          <el-input v-model="form.paramValue" v-if="dioType !== 1"></el-input>
          <span v-else>{{ form.paramValue }}</span>
        </el-form-item>
        <el-form-item label="参数描述：" prop="paramDesc">
          <el-input
            v-model="form.paramDesc"
            type="textarea"
            resize="none"
            v-if="dioType !== 1"
          />
          <span v-else>{{ form.paramDesc }}</span>
        </el-form-item>
        <el-form-item label="应用范围：" prop="usage">
          <el-select v-model="form.usage">
            <el-option label="运营支撑平台" :value="1"></el-option>
            <el-option label="EPG" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="应用运营商："
          prop="serviceProvider"
          v-if="form.usage === 2"
        >
          <el-select v-model="form.serviceProvider">
            <el-option
              v-for="i in operatorList"
              :key="i.id"
              :value="i.operatorId"
              :label="i.name"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm('form')">保存</el-button>
        <el-button @click="resetForm('form')">取消</el-button>
      </div>
    </el-dialog>
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
      dioType:0,
      dialogLoading:false,
      dialogTableVisible:false,
      form: {
        id: '',
        paramName: '', // 参数
        paramValue: '', // 参数值
        paramDesc: '', // 参数描述
        usage: '',
        serviceProvider: '',
      },
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
      console.log(this.$refs.usage.value);
      console.log(this.$refs.auditStatus.value);
      this.dialogTableVisible = true;
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