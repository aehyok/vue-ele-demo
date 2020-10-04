<template>
    <div style="margin-top:20px;">
        <el-table>
            <el-table-column prop="paramName" label="参数"></el-table-column>
            <el-table-column prop="paramValue" label="参数值"></el-table-column>
            <el-table-column prop="paramDesc" label="参数描述"></el-table-column>
            <el-table-column prop="paramDesc" label="应用范围"></el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tableData:{
                
            }
        }
    }
}
</script>