module.exports={
    devServer: {
        port: 9527,
        proxy: {
          '/infra': {
            //target: 'http://172.18.44.211:3000',
            target: 'https://www.easy-mock.com/mock/5f76cd32afffa44aa69cffd7/dvs',
            ws: true,
            changeOrigin: true,
            pathRewrite: {
              '^/infra': '',
            },
          },
        },
      },
}