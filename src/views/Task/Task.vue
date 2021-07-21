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
    <div style="padding: 0 1.1rem">
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
          <div style="width: 1rem">{{ $t('task.TimeSpent') }}</div>
          <div style="width: 2.8rem"></div>
        </div>
        <div class="rankingTd" v-for="(item, index) in listTask" :key="index">
          <div style="width: 1.64rem" class="rankingTdImg">
            <div id="xh">
              <div class="order">
                <div class="num">{{ (curPage - 1) * pageSize + index + 1 }}</div>
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
          <div style="width: 1rem">{{ formatDates(getTimeStamp(item.endAt) - getTimeStamp(item.createAt)) }}</div>
          <div
            style="
              color: #fec43e;
              cursor: pointer;
              width: 2.8rem;
              height: 100%;
              line-height: 0.4rem;
              text-align: center;
            "
            @click="TaskDetail(item.id)"
          >
            <span style="margin-left: -0.4rem"> {{ $t('node.Detail') }}</span>
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
        <img src="../../assets/img/node/边角/1.svg" alt="" class="borderBottomRight" />
        <img src="../../assets/img/node/边角/2.svg" alt="" class="borderTopRight" />
        <img src="../../assets/img/node/边角/3.svg" alt="" class="borderBottomLeft" />
        <img src="../../assets/img/node/边角/4.svg" alt="" class="borderTopLeft" />
      </div>
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
.el-scrollbar__view,
.el-select-dropdown__list {
  padding-bottom: 20px;
}
.el-picker-panel,
.el-date-range-picker,
.el-popper,
.has-sidebar,
.has-time {
  border: 1px solid #2c3b8d !important;
}
.el-button,
.el-picker-panel__footer,
.el-input__inner,
.el-picker-panel__sidebar,
.el-picker-panel__body-wrapper {
  background-color: #08164d;
  color: #c0c4cc;
  border-color: rgba(10, 84, 234, 0.3) !important;
}
.el-picker-panel__content,
.el-date-range-picker__content,
.is-left {
  border-color: rgba(10, 84, 234, 0.3) !important;
}
.el-date-range-picker__time-header {
  border-color: rgba(10, 84, 234, 0.3) !important;
}
.el-date-table__row {
  background-color: #08164d;
}
.el-input__inner {
  background-color: #141f34 !important;
  border: 2px solid #031c4f !important;
  border-radius: 4px !important;
}
.el-picker-panel__shortcut {
  color: #c0c4cc !important;
}
.el-date-table th {
  border-bottom: 2px solid #2c3b8d !important;
  color: #c0c4cc;
}
.el-date-table td.in-range div,
.el-date-table td.in-range div:hover,
.el-date-table.is-week-mode .el-date-table__row.current div,
.el-date-table.is-week-mode .el-date-table__row:hover div {
  background-color: #08164d;
}
.el-button.is-disabled.is-plain,
.el-button.is-disabled.is-plain:focus,
.el-button.is-disabled.is-plain:hover {
  background-color: #3954ff;
}
.el-button.is-plain:focus,
.el-button.is-plain:hover {
  background-color: #3954ff;
  color: #fff;
}
</style>
<style lang="scss" scoped>
.Data {
  position: relative;
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
  .ranking {
    position: relative;
    padding: 0.12rem 0px;
    .rankingTh {
      margin: 0rem 0.2rem;
      display: flex;
    }
    .rankingTd {
      margin: 0.1rem 0.2rem;
      height: 0.4rem;
      background: #0c0e26;
      border-radius: 4px;
      display: flex;
      align-items: center;
      .rankingTdImg {
        display: flex;
        img {
          margin: 0px 0.15rem;
        }
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
    padding: 0px 0.2rem;
  }
  .order {
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    background-color: #3f4590;
    margin-left: 0.3rem;
    .num {
      text-align: center;
      line-height: 0.2rem;
    }
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
    // background-color:#81AAFF;
    background-color: rgb(129, 170, 255) 10% !important;
    color: #fff;
    border: 0px;
    border-radius: 0px;
    text-align: center;
  }
  /deep/ .el-range-input {
    background-color: #141f34;
    //  background-color: rgb(129, 170, 255) 10% !important;
    color: #c0c4cc;
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
  color: #fff;
  border: #08164d;
}
/deep/ .el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
  background-color: #08164d;
}
/deep/ .el-select-dropdown__item {
  color: #fff;
}
/deep/ .rankingTd:hover {
  background-color: #3954ff !important;
}
.borderBottomRight {
  position: absolute;
  right: 0;
  bottom: 0;
}
.borderTopRight {
  position: absolute;
  top: 0;
  right: 0;
}
.borderBottomLeft {
  position: absolute;
  left: 0;
  bottom: 0;
}
.borderTopLeft {
  position: absolute;
  top: 0;
  left: 0;
}
</style>