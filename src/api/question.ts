import request from '@/utils/request'

export function summary() {
    return request({
        url: '/api/questions/summary',
        method: 'GET'
    })
}
