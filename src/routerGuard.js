import router  from './router'

//导航钩子
router.beforeEach((to,from ,next)=>{
    const info=localStorage.getItem('loginInfo')
    if(info){
        if(from.fullPath ==='/'){
            localStorage.removeItem('loginInfo')
            next('./login')
        }
        else{
            next()
        }
    } 
    else{
        if (to.path === '/login') {
            next()
        }
        else{
            next('./login')
        }
    }
})