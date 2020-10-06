<template>
    <el-select v-model='value' :name="name" :id="name" :ref="name">
        <el-option v-for="(item,index) in list" :key="index" :label="item.value" :value="item.code"></el-option>
    </el-select>
</template>
<script>
import { getTableUsage,getTableAuditStatus } from '@/mock/api'
export default {
    props:{
        name:{
            type : String,
            default :'0'
        }
    },
    data(){
        return {
            list:[],  
            value:''              
        }
    },
    beforeCreate(){
        //console.log(this);
    },
    created(){
        console.log('获取select列表数据');

        this.getTable(this.name).then(request=>{
        this.list=request.data.data;
      });
    },
    methods:{
        getTable(tableName){
            switch(tableName){
                case 'usage':
                    return getTableUsage();
                case 'auditStatus':
                    return getTableAuditStatus();
            }
        }

    }
}
</script>