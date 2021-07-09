import request from '@/utils/request'


const dataApi = {
    getListDataFileBy(params) {
        return request({
            method: 'get',
            url: '/data/listDataFileByIdentityId',
            params: params
        })
    },
    getDataFile(params) {
        return request({
            method: 'get',
            url: '/data/getDataFile',
            params: params
        })
    },
    getListMetaData(params) {
        return request({
            method: 'get',
            url: '/data/listMetaDataColumn',
            params: params
        })
    },
    getListDataFile(params) {
        return request({
            method: 'get',
            url: '/data/listDataFile',
            params: params
        })
    }
}

export default dataApi