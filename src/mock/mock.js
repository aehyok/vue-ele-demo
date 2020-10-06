import Mock from 'mockjs'

/*
字段定义
图片、日期、数值、字符串、段落 等等
https://github.com/nuysoft/Mock/wiki/Text
*/
Mock.mock('/get/tableList', /post|get/i, {
    // /post|get/i 匹配post和get模式 也可以用'post'或'get'
    'data|1-100': [{
      'paramName': "@ctitle",
      'paramValue': "@cname",
      'paramDesc': "@cname",
      'paramImage':"@image('125x80')",
      'usage':'@DATETIME("yyyy年MM月dd日 HH:mm:ss")'
      }]
  })


Mock.mock('/get/table/usage',/post|get/i,{
  data:[
      {code:1,value:'运营支撑平台',order:10},
      {code:2,value:'EPG',order:20}
  ]
})