<template>
    <el-select v-model='value'>
        <el-option v-for="(item,index) in list" :key="index" :label="item.value" :value="item.code"></el-option>
    </el-select>
</template>
<script>
import { getTableUsage } from '@/mock/api'
export default {
    data(){
        return {
            list:[],  
            value:''              
        }
    },
    beforeCreate(){

    },
    created(){
        console.log('获取select列表数据');

        getTableUsage().then(request=>{
        this.list=request.data.data;
      });
    }
}
</script>