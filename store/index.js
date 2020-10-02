const cookieparser = process.server ? require('cookieparser') : undefined
// 初始化state，并且向外导出
export const state = () => {
    return {
        user: null
    }
}

export const mutations = {
    setUser(state, data) {
        state.user = data
    }
}

export const actions = {
    nuxtServerInit({ commit }, { req }) {
        let user = null
        // 请求头中是否存在cookie
        if (req.headers.cookie) {
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
                user = JSON.parse(parsed.user)
            } catch (err) {
                // No valid cookie found
            }
        }
        commit('setUser', user)
    }
}
