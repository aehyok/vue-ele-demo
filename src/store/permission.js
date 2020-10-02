import { asyncRoutes } from './router'

export default {
    namespaced: true,
    state: {
        menus: [],
        leftMenus: [],
    },
    getters: {
        hasMenu(state) {
            return state.menus.length > 0
        },
        permitedRoutes(state) {
            return filterByMenu(asyncRoutes, state.menus)
        },
        displayMenuTree(state) {
            const newLeftMenus = filterLeftMenu(state.leftMenus)
            // return state.leftMenus
            return newLeftMenus
        },
    },
    mutations: {
        setMenus(state, menus) {
            state.menus = menus
        },
        setLeftMenus(state, data) {
            state.leftMenus = data
        },
    },
    actions: {
        async fetchMenu({ commit }) {
            try {
                const res = await getPermissionTree()
                commit('setMenus', res.data)
            } catch (error) {
                Message.error(error.message)
            }
        },
    },
}