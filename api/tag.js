import { request } from '@/plugins/request'
// import request from '@/utils/axios'

export const getTags = () => {
    return request({
        method: 'GET',
        url: '/api/tags',
    })
}

