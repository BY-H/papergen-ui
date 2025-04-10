import request from '@/utils/request'

export function summary() {
    return request({
        url: '/api/papers/summary',
        method: 'GET'
    })
}

export function getPapers(params: any) {
    return request({
        url: '/api/papers/list',
        method: 'GET',
        params
    })
}

export function autoCreatePaper(data: any) {
    return request({
        url: '/api/papers/auto_create',
        method: 'POST',
        data
    })
}

export function manualCreatePaper(data: any) {
    return request({
        url: '/api/papers/manual_create',
        method: 'POST',
        data
    })
}