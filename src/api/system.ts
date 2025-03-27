import request from '@/utils/request'

export function getNotifications() {
    return request({
        url: '/api/system/notifications/',
        method: 'get'
    })
}

export function addNotifications(data: any) {
    return request({
        url: '/api/system/notifications/add',
        method: 'post',
        data
    })
}

export function getFeedbacks() {
    return request({
        url: '/api/system/feedbacks/',
        method: 'get'
    })
}

export function addFeedback(data: any) {
    return request({
        url: '/api/system/feedbacks/add',
        method: 'post',
        data
    })
}
