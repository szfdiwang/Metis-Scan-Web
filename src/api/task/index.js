import request from '@/utils/request'


const taskApi = {
    getListTaskBy(params) {
        return request({
            method: 'get',
            url: '/task/listTaskByIdentityId',
            params: params
        })
    },
    //参与任务数量走势图
    getOrgTaskTrend(params) {
        return request({
            method: 'get',
            url: '/org/taskTrend',
            params: params
        })
    },
    // 任务搜索
    getListTask(params) {
        return request({
            method: 'get',
            url: '/task/listTask',
            params: params

        })
    },
    // 任务详情
    getTaskDetail(params) {
        return request({
            method: 'get',
            url: '/task/getTaskDetails',
            params: params
        })
    },
    // 查询任务日志列表
    getListTaskLog(params) {
        return request({
            method: 'get',
            url: '/task/listTaskEvent',
            params: params
        })
    }

}

export default taskApi