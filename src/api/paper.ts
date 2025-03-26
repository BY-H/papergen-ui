import request from '@/utils/request'

export function summary() {
    return request({
        url: '/api/papers/summary',
        method: 'GET'
    })
}
