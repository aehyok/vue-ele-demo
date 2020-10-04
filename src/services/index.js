import request from '@/utils/request'

/**
 * 验证短信验证码
 * @param {Object} data request body
 * @param {string} data.mobile 手机号
 * @param {string} data.messageCode 验证码
 */

// // 获取Table数据列表
// export const getTableList = async() => {
//   const res = await request('/Get/TableList', {
//     method: 'get',
//   })
//   if(res && res.code ===200 ){
//       return res.data
//   }
//   return []
// }

// // 获取栏目类型
// export const getCategoryType = async (data = {}) => {
//   const res = await request('/system/getCategoryType', {
//     method: 'post',
//     data,
//   })
//   if (res && res.code === 200) {
//     return res.data
//   }
//   return []
// }
