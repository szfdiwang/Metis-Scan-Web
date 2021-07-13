<template>
  <div class="Data">
    <div class="imgBox">
      <div class="topImg">
        <div><img src="../../assets/img/node/2.bj1.png" /></div>
        <div><img src="../../assets/img/node/2.bj1.png" /></div>
        <div class="textNode">{{ $t('task.TASK') }}</div>
        <div class="text">{{ $t('task.PTASKSINTHEWHOLENETWORK') }}</div>
      </div>
    </div>
    <div class="selectItem">
      <div>
        <span>{{ $t('task.StatusItem') }}:</span>
        <el-select v-model="value" placeholder="请选择" @change="selectChange">
          <el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </div>
      <div>
        <span>{{ $t('task.TimeSpan') }}:</span>
        <!-- <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </div>
      <div>
        <span>{{ $t('task.to') }}</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>  -->
        <el-date-picker
          v-model="value1"
          type="datetimerange"
          :picker-options="pickerOptions"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          align="right"
          value-format="yyyy-MM-dd"
          @change="pickerChange"
        >
        </el-date-picker>
      </div>
    </div>
    <div class="ranking">
      <div class="rankingTh">
        <div style="width: 1.24rem">{{ $t('task.No') }}</div>
        <div style="width: 3.8rem">{{ $t('task.NameIdentifier') }}</div>
        <div style="width: 1.99rem">{{ $t('task.Identifier') }}</div>
        <div style="width: 4.18rem">{{ $t('task.Sponsor') }}</div>
        <div style="width: 2.04rem">{{ $t('task.Status') }}</div>
        <div style="width: 2.62rem">{{ $t('task.StartTime') }}</div>
        <div>{{ $t('task.TimeSpent') }}</div>
      </div>
    </div>
    <div class="rankingTd" v-for="(item, index) in listTask" :key="index">
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
      <div style="width: 3.8rem">
        <div>{{ item.taskName }}</div>
        <div>ID : {{ item.id }}</div>
      </div>
      <div style="width: 1.99rem; color: #fec43e" @click="TaskDetail(item.id)">
        {{ $t('node.Detail') }}
      </div>
      <div style="width: 4.18rem">{{ item.dynamicFields.sponsorName }}</div>
      <div style="width: 2.04rem">{{ item.status }}</div>
      <div style="width: 2.62rem">{{ formatDate(item.createAt) }}</div>
      <div>{{ formatDates(getTimeStamp(item.endAt) - getTimeStamp(item.createAt)) }}</div>
    </div>
    <div class="Pagination">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        :current-page="curPage"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="totalRows"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import { formatDate, formatDates } from '../../utils/tiem'
import Pagination from '../../components/Pagination.vue'
import { taskApi } from '../../api/index'
console.log('taskApi', taskApi)
export default {
  components: { Pagination, formatDate, formatDates },
  data() {
    return {
      option: [
        {
          value: 'pending',
          label: 'pending'
        },
        {
          value: 'denied',
          label: 'denied'
        },
        {
          value: 'computing',
          label: 'computing'
        },
        {
          value: 'failed',
          label: 'failed'
        },
        {
          value: 'success',
          label: 'success'
        }
      ],
      value: '',
      listTask: [],
      curPage: 1,
      pageSize: 5,
      totalRows: 10,
      isShow: true,
      //
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)]
    }
  },
  created() {
    this.getListTask()
  },
  methods: {
    handleCurrentChange(page) {
      this.curPage = page
      this.isShow = false
      if (this.curPage === 1) {
        this.isShow = true
      }
      this.getListTask()
    },
    async getListTask() {
      const res = await taskApi.getListTask({
        pageNo: this.curPage,
        pageSize: this.pageSize
      })
      this.listTask = res.data
      this.totalRows = res.totalRows
      console.log('任务', res)
    },
    TaskDetail(value) {
      this.$router.push({
        path: '/task/TaskDetail',
        query: {
          identId: value
        }
      })
    },
    async pickerChange(value) {
      console.log(value)
      const res = await taskApi.getListTask({
        pageNo: this.curPage,
        pageSize: this.pageSize,
        startDate: value[0],
        endDate: value[1]
      })
      this.listTask = res.data
      this.totalRows = res.totalRows
      console.log('时间搜索任务列表', res)
    },
    async selectChange(value) {
      console.log(value)
      const res = await taskApi.getListTask({
        pageNo: this.curPage,
        pageSize: this.pageSize,
        status: value
      })
      this.listTask = res.data
      this.totalRows = res.totalRows
      console.log('状态搜索任务', res)
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
    }
  }
}
</script>
<style lang="scss" scoped>
.Data {
  height: 1000px;
  background: url('../../assets/img/home/bj1.png');
  padding: 0px 0.2rem;
  .select {
    height: 0.4rem;
    background-color: sandybrown;
  }
  .imgBox {
    position: relative;
    padding-bottom: 0.1rem;
    .topImg {
      padding: 0px 1.445rem;
      width: 1.24rem;
      display: flex;
      justify-content: space-between;
      img {
        width: 8rem;
        height: 1rem;
      }
      .textNode {
        position: absolute;
        left: 0.2rem;
        top: 0.35rem;
        font-size: 30px;
      }
      .text {
        position: absolute;
        left: 2rem;
        top: 0.35rem;
        font-size: 25px;
      }
    }
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
  .selectItem {
    display: flex;
    padding: 0.2rem 0.1rem;
    span {
      margin-right: 0.2rem;
    }
    div {
      margin-right: 0.7rem;
    }
  }
  .pagination {
    margin: 0.2rem 0.1rem;
  }
  .order {
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    background-color: #3f4590;
    text-align: center;
    margin-left: 20px;
  }
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
</style>