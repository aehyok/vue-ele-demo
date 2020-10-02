import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

//引入路由机制
Vue.use(VueRouter)


export const constantRoutes = [
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录页',
      },
      component: () => import('@/views/login'),
    },
  ]

const asyncRoutes = [
    {
        path: '/',
        name: '/',
        component: Layout,
        redirect: '/admin',
        meta: {
            title: '首页',
            
        },
        children: [
            {
                path: '/admin',
                name: 'admin',
                meta: {
                    title: '后台管理',
                    hidden: false
                },
                component: () => import('@/views/admin')
            },
            {
                path: '/home',
                name: 'home',
                meta: {
                    title: '后台管理',
                    hidden: false
                },
                component: () => import('@/views/Home')
            },
            {
                path: '/table',
                name: 'table',
                meta: {
                    title: 'Table管理',
                    hidden: false
                },
                component: () => import('@/views/table')
            }
        ],

    },
    {
        path: '/about',
        name: 'about',
        meta: {
            title: '关于',
        },
        component: () => import('@/views/About.vue'),
    },
    {
        path: '/login',
        name: 'login',
        meta: {
          title: '登录页',
        },
        component: () => import('@/views/login'),
      },
]

const router = new VueRouter({
    routes: [...asyncRoutes],
})

export default router