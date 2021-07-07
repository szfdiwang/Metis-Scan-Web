import request from '@/utils/request'


const taskApi = {
    getListTaskBy(params) {
        return request({
            method: 'get',
            url: '/task/listTaskByIdentityId',
            params: params
        })
    },
    getOrgTaskTrend(params) {
        return request({
            method: 'get',
            url: '/apis/org/taskTrend',
            params: params
        })
    },
    getListTask(params) {
        return request({
            method: 'get',
            url: '/task/listTask',
            params: params

        })
    }
}

export default taskApi