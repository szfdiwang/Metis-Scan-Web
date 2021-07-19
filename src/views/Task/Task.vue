<template>
  <div class="Data">
    <div class="imgBox"></div>
    <div class="textBox">
      <div class="textNode">{{ $t('task.TASK') }}</div>
      <div class="text">{{ $t('task.PTASKSINTHEWHOLENETWORK') }}</div>
    </div>
    <div class="selectItem">
      <div>
        <span>{{ $t('task.StatusItem') }}:</span>
        <el-select v-model="value" placeholder="请选择" @change="selectChange" :popper-append-to-body="false">
          <el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </div>
      <div>
        <span>{{ $t('task.TimeSpan') }}:</span>
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
        <div style="width: 1.64rem">
          <span style="margin-left: 0.3rem">{{ $t('task.No') }}</span>
        </div>
        <div style="width: 2.3rem">{{ $t('task.Name') }}</div>
        <div style="width: 2.2rem">{{ $t('task.identifier') }}</div>
        <!-- <div style="width: 1.9rem"></div> -->
        <div style="width: 2.38rem">{{ $t('task.Sponsor') }}</div>
        <div style="width: 2rem">{{ $t('task.Status') }}</div>
        <div style="width: 2.4rem">{{ $t('task.StartTime') }}</div>
        <div style="1.9rem">{{ $t('task.TimeSpent') }}</div>
        <div></div>
      </div>
    </div>
    <div class="rankingTd" v-for="(item, index) in listTask" :key="index">
      <div style="width: 1.64rem" class="rankingTdImg">
        <div id="xh">
          <div class="order">
            {{ (curPage - 1) * pageSize + index + 1 }}
          </div>
        </div>
      </div>
      <div style="width: 2.3rem">
        {{ item.taskName }}
      </div>
      <div style="width: 2.2rem">
        <div>{{ item.id }}</div>
      </div>
      <!-- <div style="width: 1.9rem; color: #fec43e" @click="TaskDetail(item.id)">
        {{ $t('node.Detail') }}
      </div> -->
      <div style="width: 2.38rem">{{ item.dynamicFields.sponsorName }}</div>
      <div style="width: 2rem">
        <span style="color: #5bc49f">{{ item.status }}</span>
        <span v-if="item.status === 'Failed'" style="color: #f24b4b">{{ item.status }}</span>
      </div>
      <div style="width: 2.4rem">{{ formatDate(item.createAt) }}</div>
      <div style="width: 1.9rem">{{ formatDates(getTimeStamp(item.endAt) - getTimeStamp(item.createAt)) }}</div>
      <div style="color: #fec43e; cursor: pointer" @click="TaskDetail(item.id)">
        {{ $t('node.Detail') }}
      </div>
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
import { taskApi } from '../../api/index'
console.log('taskApi', taskApi)
export default {
  components: { formatDate, formatDates },
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
        },
        {
          // value: '',
          // label: ''
        }
      ],
      value: '',
      listTask: [],
      curPage: 1,
      pageSize: 10,
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
<style>
/* .el-picker-panel,
.el-date-range-picker,
.el-popper,
.has-sidebar,
.has-time { */
.el-button,
.el-picker-panel__footer,
.el-input__inner,
.el-picker-panel__sidebar,
.el-picker-panel__body-wrapper {
  background-color: #08164d !important;
  color: #fff;
}
 .el-date-table__row {
  background-color: #08164d !important;
}
</style>
<style lang="scss" scoped>
.Data {
  .select {
    height: 0.4rem;
    background-color: sandybrown;
  }
  .imgBox {
    height: 0.94rem;
    display: flex;
    background: url('../../assets/img/node/2.bj1.png');
    opacity: 0.4;
    position: relative;
  }
  .textBox {
    position: absolute;
    top: 0;
    display: flex;
    .textNode {
      font-size: 0.4rem;
      line-height: 0.94rem;
      margin-left: 1.1rem;
    }
    .text {
      font-size: 0.32rem;
      line-height: 1rem;
      margin-left: 0.41rem;
    }
  }
  .rankingTh {
    margin: 0.1rem 1.3rem;
    display: flex;
  }
  .rankingTd {
    margin: 0.1rem 1.3rem;
    height: 0.4rem;
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
    padding: 0.2rem 1.1rem;
    span {
      margin-right: 0.2rem;
    }
    div {
      margin-right: 0.7rem;
    }
  }
  .Pagination {
    padding: 0px 1.3rem;
  }
  .order {
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    background-color: #3f4590;
    text-align: center;
    margin-left: 30px;
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
  /deep/ .el-select,
  /deep/ .el-input,
  /deep/ .el-input__inner {
    background-color: #08164d;
    color: #fff;
    border: 0px;
    border-radius: 0px;
    text-align: center;
  }
  /deep/ .el-range-input {
    background-color: #08164d;
    color: #fff;
  }
  /deep/ .el-range-separator {
    color: #ccc;
  }
  /deep/ .el-select__caret,
  /deep/ .el-input__icon,
  /deep/ .el-icon-arrow-up {
    color: #3954ff;
  }
  /deep/ .el-pager li {
    background: #303047;
    color: #fff;
  }
}
/deep/ .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #3954ff; // 进行修改选中项背景和字体
  color: #fff;
}
/deep/ .el-select-dropdown {
  background-color: #08164d;
  color: #fff !important;
  border: #08164d;
}
/deep/ .el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background-color: #08164d;
}
/deep/ .el-select-dropdown__item {
  color: #fff;
}
</style>