import Mock from 'mockjs'

Mock.mock('/get/tableList', /post|get/i, {
    // /post|get/i 匹配post和get模式 也可以用'post'或'get'
    'data|1-100': [{
      'paramName': "@ctitle",
      'paramValue': "@cname",
      'paramDesc': "@cname",
      'usage':"@cname"
      }]
  })