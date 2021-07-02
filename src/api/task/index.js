import request from '@/utils/request'


const taskApi = {
    getOrgTaskTrend(params) {
        return request({
            method: 'get',
            url: '/org/taskTrend',
            params: params
        })
    }
}

export default taskApi