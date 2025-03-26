import request from '@/utils/request'

export function getNotifications() {
    return request({
        url: '/system/notifications',
        method: 'get'
    })
}

export function addNotifications(data: any) {
    return request({
        url: '/system/notifications',
        method: 'post',
        data
    })
}
