// 引入axios
 import axios from 'axios'

// 请求模拟数据
export const getTableList=()=>{
   return axios('/get/tableList')
}

export const getTableUsage=()=>{
   return axios('/get/table/usage')
}

