<template>
  <div class="NodeDetail">
    <div class="NodeDetailTop">
      <div class="pic" @click="$router.push('/node/index')">
        <img src="../../assets/img/node/3.icon1.svg" alt="" style="line-height: 0.42rem" />
      </div>
      <div class="bank">XXXBANK</div>
      <div class="Identifier">Identifier：{{ this.id }}</div>
    </div>
    <div style="text-align: center" class="title">
      <img src="../../assets/img/node/3.title2.svg" alt="" />
      <div class="NumberTasks">
        {{ $t('node.NumberTasks') }}
      </div>
    </div>
    <div>
      <basic-area-chart></basic-area-chart>
    </div>
    <div class="conent">
      <!-- <div class="conentTop">
        <div class="Metadata">{{ $t('node.metadata') }}：100</div>
        <div class="Tasks">{{ $t('node.Tasks') }}：200</div>
      </div> -->
    </div>
    <div class="tab">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane name="first" label="元数据">
          <div slot="label" :class="{ active: index == '0' }" class="Metadatayy">{{ $t('node.metadata') }}：100</div>
          <div class="conent">
            <div class="ranking">
              <div class="rankingTh">
                <div style="width: 1.24rem">{{ $t('data.No') }}</div>
                <div style="width: 3.8rem">{{ $t('data.NameIdentifier') }}</div>
                <div style="width: 2.5rem">{{ $t('data.Identifier') }}</div>
                <div style="width: 2.9rem">{{ $t('node.Size') }}</div>
                <div style="width: 2.54rem">{{ $t('node.Columns') }}</div>
                <div style="width: 2.62rem">{{ $t('node.Rows') }}</div>
                <div>{{ $t('data.ParticipatedTasks') }}</div>
              </div>
            </div>
            <div class="rankingTd" v-for="(item, index) in DataList" :key="index">
              <div style="width: 1.24rem" class="rankingTdImg">
                <div id="xh">
                  <div v-if="index > 2 && isShow === true" class="order">
                    {{ (curPage - 1) * pageSize + index + 1 }}
                  </div>
                  <div v-if="isShow === false" class="order">
                    {{ (curPage - 1) * pageSize + index + 1 }}
                  </div>
                  <img v-if="index === 0 && isShow" src="../../assets/img/excel/1.svg" alt="" />
                  <img v-if="index === 1 && isShow" src="../../assets/img/excel/2.svg" alt="" />
                  <img v-if="index === 2 && isShow" src="../../assets/img/excel/3.svg" alt="" />
                </div>
              </div>
              <!-- <BasicAreaChart></BasicAreaChart> -->
              <div style="width: 3.8rem">
                <div>{{ item.resourceName }}</div>
                <div>{{ item.metaDataId }}</div>
              </div>
              <div style="width: 2.5rem; color: #fec43e" @click="MetaData(item.metaDataId)">
                {{ $t('node.Detail') }}
              </div>
              <template>
                <div style="width: 2.9rem">{{ (item.size / 1024 / 1024).toFixed(2) }}MB</div>
              </template>
              <div style="width: 2.54rem">{{ item.columns }}</div>
              <div style="width: 2.62rem">{{ item.rows }}</div>
              <div>{{ item.dynamicFields.taskCount }}</div>
              <div class="Pagination">
                <el-pagination
                  background
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="curPage"
                  :page-size="pageSize"
                  layout="total, prev, pager, next"
                  :total="totalRows"
                >
                </el-pagination>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane name="second" label="任务" stretch="true" @tab-click="tabClick">
          <div slot="label" :class="{ active: index == '1' }">{{ $t('node.Tasks') }}：100</div>
          <div class="conent">
            <div class="ranking">
              <div class="rankingTh">
                <div style="width: 1.24rem">{{ $t('task.No') }}</div>
                <div style="width: 3.8rem">{{ $t('task.NameIdentifier') }}</div>
                <div style="width: 1.99rem">{{ $t('task.Identifier') }}</div>
                <div style="width: 2.7rem">{{ $t('task.Capacity') }}</div>
                <!-- <div style="width: 2.04rem">{{ $t('node.Columns') }}</div> -->
                <div style="width: 2.04rem">{{ $t('task.Status') }}</div>
                <div style="width: 2.62rem">{{ $t('task.StartTime') }}</div>
                <div>{{ $t('task.TimeSpent') }}</div>
              </div>
            </div>
            <div class="rankingTd" v-for="(item, index) in taskList" :key="index">
              <div style="width: 1.24rem" class="rankingTdImg">
                <div id="xh">
                  <div v-if="index > 2" class="order">
                    {{ index + 1 }}
                  </div>
                  <img v-if="index === 0" src="../../assets/img/excel/1.svg" alt="" />
                  <img v-if="index === 1" src="../../assets/img/excel/2.svg" alt="" />
                  <img v-if="index === 2" src="../../assets/img/excel/3.svg" alt="" />
                </div>
              </div>
              <div style="width: 3.8rem">
                <div>{{ item.taskName }}</div>
                <div>ID:{{ item.id }}</div>
              </div>
              <div style="width: 1.99rem; color: #fec43e" @click="TaskDetail(item.id)">
                {{ $t('node.Detail') }}
              </div>
              <div style="width: 2.7rem">{{ item.dynamicFields.sponsorName }}</div>
              <!-- <div style="width: 2.04rem">10</div> -->
              <div style="width: 2.04rem">{{ item.status }}</div>
              <div style="width: 2.62rem">{{ formatDate(item.createAt) }}</div>
              <div>{{ formatDates(getTimeStamp(item.startAt) - getTimeStamp(item.endAt)) }}</div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
      <div class="Pagination">
        <el-pagination
          background
          @size-change="handleSizeChanges"
          @current-change="handleCurrentChanges"
          :current-page="curPages"
          :page-size="pageSizes"
          layout="total, prev, pager, next"
          :total="totalRowss"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import { formatDate, formatDates } from '../../utils/tiem'
import BasicAreaChart from './components/BasicAreaChart.vue'
import { dataApi, nodeApi, taskApi } from '../../api/index'
console.log('dataApi', dataApi)
export default {
  components: { BasicAreaChart, formatDate, formatDates },
  data() {
    return {
      curPage: 1,
      pageSize: 5,
      totalRows: 10,
      //任务
      curPages: 1,
      pageSizes: 5,
      totalRowss: 10,
      index: '0',
      activeName: 'first',
      DataList: [],
      id: '',
      taskList: [],
      newArrList: [],
      isShow: true,
      name: '',
      date: ''
    }
  },
  created() {
    this.id = this.$route.query.identityId
    this.getOrgInfo()
    this.getListTask()
    this.getCurrentTime()
    this.gettaskTrend()
  },
  methods: {
    handleSizeChange(size) {
      this.pageSize = size
      this.getOrgInfo()
    },
    handleCurrentChange(page) {
      this.curPage = page
      this.isShow = false
      if (this.curPage === 1) {
        this.isShow = true
      }
      this.getOrgInfo()
    },
    //任务
    handleSizeChanges(size) {
      this.pageSizes = size
      this.getListTask()
    },
    handleCurrentChanges(page) {
      this.curPages = page
      this.isShow = false
      if (this.curPages === 1) {
        this.isShow = true
      }
      this.getListTask()
    },
    handleClick(tab) {
      console.log('标签', tab.name)
      this.name = tab.name
      this.index = tab.index
    },
    TaskDetail(value) {
      this.$router.push({
        path: '/task/TaskDetail',
        query: {
          id: value
        }
      })
    },
    MetaData(value) {
      this.$router.push({
        path: 'MetaData',
        query: {
          metaDataId: value
        }
      })
      // console.log('标', value)
    },
    async getOrgInfo() {
      const res = await dataApi.getListDataFileBy({
        identityId: this.id,
        pageNo: this.curPage,
        pageSize: this.pageSize
      })
      this.DataList = res.data
      this.totalRows = res.totalRows
      console.log('元数据', this.totalRows)
    },
    async getListTask() {
      const res = await taskApi.getListTaskBy({
        identityId: this.id,
        pageNo: this.curPages,
        pageSize: this.pageSizes
      })
      this.taskList = res.data
      this.totalRowss = res.totalRows
      console.log('任务', this.totalRowss)
    },
    tabClick(value) {
      // console.log('tab标签',value);
    },
    formatDate(time) {
      return formatDate(time, 'YYYY-MM-DD HH:mm:ss')
    },
    getTimeStamp(str) {
      var date = new Date(str)
      // 可以准确精确到毫秒
      return date.getTime(date)
    },
    formatDates(time) {
      return formatDate(time, 'HH:mm:ss')
    },
    async gettaskTrend() {
      const res = await taskApi.getOrgTaskTrend({
        identityId: this.id,
        startDate: this.date,
        days: 6
      })
      console.log('走势图', res)
    },
    getCurrentTime() {
      let date = new Date()
      let Y = date.getFullYear()
      let M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
      let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      // let hours = date.getHours()
      // let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      // let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      this.date = Y + '-' + M + '-' + D
      // + ' ' + hours + ':' + minutes + ':' + seconds
      console.log('时间', this.date) // 2019-10-12 15:19:28
      return this.date
    }
  }
}
</script>
<style lang='scss' scoped>
.active {
  background-color: #3954ff !important;
  margin: 0px 0px !important;
}
.title {
  width: 243px;
  height: 32px;
  // background: #182d98;
  margin: 20px auto;
  position: relative;
  .NumberTasks {
    position: absolute;
    top: 0.07rem;
    left: 55px;
  }
}
.NodeDetail {
  height: 1000px;
  padding: 0.2rem;
  line-height: 0.42rem;
  background: url('../../assets/img/home/bj1.png');
  .NodeDetailTop {
    height: 0.42rem;
    display: flex;
    margin-bottom: 0.1rem;
    .pic {
      line-height: 0.5rem;
      margin-left: 0.2rem;
    }
    .bank {
      font-size: 30px;
      font-weight: 600;
      margin: 0.02rem 0.2rem;
    }
    .Identifier {
      line-height: 0.6rem;
    }
  }
  .conent {
    padding: 0px 0.2rem;
  }

  .rankingTh {
    margin: 0.1rem;
    display: flex;
  }
  .rankingTd {
    margin: 0.1rem;
    width: 18.4rem;
    height: 0.94rem;
    background: #080c3d;
    border-radius: 4px;
    display: flex;
    align-items: center;
    .rankingTdImg {
      display: flex;
      img {
        margin: 0px 0.15rem;
      }
    }

    .power {
      display: flex;
      align-items: center;
      div {
        margin-right: 0.2rem;
      }
    }
  }
  /deep/ .el-tabs__active-bar {
    background-color: transparent;
  }
  /deep/ ::after {
    display: none;
  }
  /deep/ #tab-first {
    margin: 0px 10px 0px 40px;
    width: 2.41rem;
    height: 0.4rem;
    text-align: center;
    color: #eee;
    background: #11175d;
    transform: rotateZ(10deg) skew(-10deg, -10deg);
  }
  /deep/ #tab-second {
    width: 2.41rem;
    height: 0.4rem;
    text-align: center;
    color: #eee;
    background: #11175d;
    transform: rotateZ(10deg) skew(-10deg, -10deg);
  }
  .Pagination {
    margin: 0.1rem 0.3rem;
  }
}
/deep/ .el-tabs__item {
  padding: 0px;
}
.Pagination {
  display: flex;
  justify-content: space-between;
  .el-pagination {
    margin-top: 0.1rem;
    ::v-deep .el-input__inner {
      background: #303047;
      border-color: #303047;
      color: #fff;
    }
    ::v-deep .btn-prev,
    ::v-deep .btn-next {
      background: #303047;
      border-color: #303047;
      color: #fff;
    }
  }
}
.order {
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
  background-color: #3f4590;
  text-align: center;
  line-height: 0.2rem;
  margin-left: 0.2rem;
}
</style>