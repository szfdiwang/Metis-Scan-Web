import request from '@/utils/request'


const homeApi = {
    getGlobalState: (data) => {
        return request({
            method: 'get',
            url: '/home/globalStats',
            params: data
        })
    },
    /**
    * 
    * @param {
     *      startDate | 开始日期，开始日期最大值=now-days 
     *      days      | 多少天的数据
     * } data 
     * @returns 
     */
    getPowerTrend: (data) => {
        return request({
            method: 'get',
            url: '/home/powerTrend',
            params: data
        })
    },
    /**
     * 
     * @param {
     *      startDate | 开始日期，开始日期最大值=now-days 
     *      days      | 多少天的数据
     * } data 
     * @returns 
     */
    getDataTrend: (data) => {
        return request({
            method: 'get',
            url: '/home/dataTrend',
            params: data
        })
    },
    /**
     * 
     * @param {
     *      pageNo   | 页码，从1开始 |
     *      pageSize | 每页数据      |
     * } data 
     * @returns 
     */
    getPowerRanking: (data) => {
        return request({
            method: 'get',
            url: '/home/powerRanking',
            params: data
        })
    },
    /**
    * 
    * @param {
     *      pageNo   | 页码，从1开始 |
     *      pageSize | 每页数据      |
     * } data 
     * @returns 
     */
    getActivityRanking: (data) => {
        return request({
            method: 'get',
            url: '/home/activityRanking',
            params: data
        })
    },

}

export default homeApi