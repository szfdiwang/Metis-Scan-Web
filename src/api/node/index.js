import request from '@/utils/request'

// 节点列表
const nodeApi = {
    getOrgListOrgInfo(params) {
        return request({
            method: 'get',
            url: '/org/listOrgInfo',
            params: params
        })
    },
    getFindOrgInfo(params) {
        return request({
            method: 'get',
            url: '/org/findOrgInfo',
            params: params
        })
    }

}

export default nodeApi