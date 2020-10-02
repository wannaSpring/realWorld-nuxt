/* 
    nuxt.js 配置文件
*/
module.exports = {
    router: {
        linkActiveClass: 'active',
        extendRoutes(routes, resolve) {
            routes.splice(0)
            routes.push(...[
                {
                    path: '/',
                    component: resolve(__dirname, 'pages/layout/'),
                    children: [
                        {
                            path: '',
                            name: 'home',
                            component: resolve(__dirname, 'pages/home/')
                        },
                        {
                            path: '/login',
                            name: 'login',
                            component: resolve(__dirname, 'pages/login/')
                        },
                        {
                            path: '/register',
                            name: 'register',
                            component: resolve(__dirname, 'pages/login/')
                        },
                        {
                            path: '/profile/:username',
                            name: 'profile',
                            component: resolve(__dirname, 'pages/profile/')
                        },
                        {
                            path: '/settings',
                            name: 'settings',
                            component: resolve(__dirname, 'pages/settings/')
                        },
                        {
                            path: '/article/:slug',
                            name: 'article',
                            component: resolve(__dirname, 'pages/create/article/')
                        },
                        {
                            path: '/editor',
                            name: 'editor',
                            component: resolve(__dirname, 'pages/create/editor')
                        },
                    ]
                }
            ])
        }
    },

    server: {
        host: '0.0.0.0',
        port: 3000
    },

    plugins: [
        '~/plugins/request.js', // 波浪线开头表示从根路径触发
        '~/plugins/dayjs.js'
    ]
}