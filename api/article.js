import { request } from '@/plugins/request'
// import request from '@/utils/axios'

// 公共文章
export const getArticles = params => {
    return request({
        method: 'GET',
        url: '/api/articles',
        params
    })
}
// 关注文章
export const getYourFeedArticles = params => {
    return request({
        method: 'GET',
        url: '/api/articles/feed',
        params
    })
}

// 添加关注
export const addFavorite = slug => {
    return request({
        method: 'POST',
        url: `/api/articles/:${slug}/favorite`,
    })
}

// 取消关注
export const unFavorite = slug => {
    return request({
        method: 'DELETE',
        url: `/api/articles/:${slug}/favorite`,
    })
}

// 获取文章
export const getArticleDetails = slug => {
    return request({
        method: 'GET',
        url: `api/articles/${slug}`,
    })
}

// 获取文章评论
export const getArticleComments = slug => {
    return request({
        method: 'GET',
        url: `api/articles/${slug}/comments`,
    })
}

