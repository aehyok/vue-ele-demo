//import { asyncRoutes } from './router'

export default {
    namespaced: true,
    state: {
        isCollapse:true,
    },
    getters:{
        //getCollapse:state=>state.isCollapse
        getCollapse(state){
            return state.isCollapse
        }
      },
    mutations: {
        changeCollapse(state){
            state.isCollapse=!state.isCollapse
        }
    },
    actions: {
        
    },
}