import request from '@/utils/request'


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