import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

//引入路由机制
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Layout,
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
                component: () => import('@/views/admin/admin.vue')
            }
        ],


    },
    {
        path: '/about',
        name: 'About',
        meta: {
            title: '关于',
        },
        component: () => import('@/views/About.vue'),
    },
]

const router = new VueRouter({
    routes,
})

export default router