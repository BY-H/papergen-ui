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
