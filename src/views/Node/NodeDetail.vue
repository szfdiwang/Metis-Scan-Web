<template>
  <div class="NodeDetail">
    <div class="NodeDetailTop"></div>
    <div class="textBox">
      <div class="picBox" @click="$router.push('/node/index')">
        <img src="../../assets/img/node/3.icon1.svg" alt="" class="pic" />
      </div>
      <div class="bank">XXXBANK</div>
      <div class="Identifier">Identifier：{{ id }}</div>
    </div>
    <div style="text-align: center" class="title">
      <div class="NumberTasks">
        {{ $t('node.NumberTasks') }}
      </div>
      <img src="../../assets/img/node/nodeborder/border1.svg" class="topLeft" alt="" />
      <img src="../../assets/img/node/nodeborder/border2.svg" class="topRight" alt="" />
      <img src="../../assets/img/node/nodeborder/border3.svg" class="bottomRight" alt="" />
      <img src="../../assets/img/node/nodeborder/border4.svg" class="bottomLeft" alt="" />
    </div>
    <div style="padding: 0px 1.11rem">
      <basic-area-chart :id="id"></basic-area-chart>
    </div>
    <div class="tab" style="padding: 0px 1.11rem">
      <ul class="tab-box">
        <li v-for="tab in tabList" :key="tab.name" class="tab-item-box pointer" @click="handleClick(tab)">
          <div class="tab-wrapper-box pointer" :class="{ active: tab.name === activeName }"></div>
          <p class="tab-text-box pointer">{{ $t(`node.${tab.label}`) }}</p>
        </li>
      </ul>
      <div v-if="activeName === 'metadata'" class="content" style="padding: 0.1rem 0.2rem">
        <div class="ranking">
          <div class="rankingTh">
            <div style="width: 1.44rem">
              <span style="margin-left: 0.3rem">{{ $t('data.No') }}</span>
            </div>
            <div style="width: 2.98rem">{{ $t('data.NameIdentifier') }}</div>
            <div style="width: 2.65rem">{{ $t('node.Size') }}</div>
            <div style="width: 2.57rem">{{ $t('node.Columns') }}</div>
            <div style="width: 2.62rem">{{ $t('node.Rows') }}</div>
            <div style="width: 1rem">{{ $t('data.ParticipatedTasks') }}</div>
            <div></div>
          </div>
        </div>
        <div class="rankingTd" v-for="(item, index) in DataList" :key="index">
          <div style="width: 1.44rem" class="rankingTdImg">
            <div id="xh">
              <div class="order">
                <div class="num">{{ (curPage - 1) * pageSize + index + 1 }}</div>
              </div>
            </div>
          </div>
          <div style="width: 3rem">
            <div>{{ item.resourceName }}</div>
            <div
              style="
                font-size: 0.12rem;
                margin-top: 0.14rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 1.3rem;
              "
            >
              {{ item.metaDataId }}
            </div>
          </div>
          <template>
            <div style="width: 2.7rem">{{ changeSizeFn(item.size) }}</div>
          </template>
          <div style="width: 2.54rem">{{ thousandMark(item.columns) }}</div>
          <div style="width: 2.62rem">{{ thousandMark(item.rows) }}</div>
          <div style="width: 0.9rem">{{ thousandMark(item.dynamicFields.taskCount) }}</div>
          <div
            style="
              color: #fec43e;
              cursor: pointer;
              width: 2.8rem;
              height: 100%;
              line-height: 0.94rem;
              text-align: center;
            "
            @click="MetaData(item.metaDataId)"
          >
            {{ $t('node.Detail') }}
          </div>
        </div>
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
        <img src="../../assets/img/node/border/1.svg" alt="" class="borderBottomRight" />
        <img src="../../assets/img/node/border/2.svg" alt="" class="borderTopRight" />
        <img src="../../assets/img/node/border/3.svg" alt="" class="borderBottomLeft" />
        <img src="../../assets/img/node/border/4.svg" alt="" class="borderTopLeft" />
      </div>
      <div v-else class="content" style="padding: 0.1rem 0.2rem">
        <div class="ranking">
          <div class="rankingTh">
            <div style="width: 1.74rem">
              <span style="margin-left: 0.3rem">{{ $t('task.No') }}</span>
            </div>
            <div style="width: 2.6rem">{{ $t('data.NameIdentifier') }}</div>
            <div style="width: 2.6rem">{{ $t('task.Capacity') }}</div>
            <div style="width: 2.24rem">{{ $t('task.Status') }}</div>
            <div style="width: 2.82rem">{{ $t('task.StartTime') }}</div>
            <div style="width: 1rem">{{ $t('task.TimeSpent') }}</div>
            <div style="width: 2.8rem"></div>
          </div>
        </div>
        <!-- <div v-if="taskList.length < 1" style="text-align: center; margin-top: 180px; color: #413e3e; font-size: 20px">
          <el-empty :description="$t('common.noData')"></el-empty>
        </div> -->
        <div class="rankingTd" v-for="(item, index) in taskList" :key="index">
          <div style="width: 1.74rem" class="rankingTdImg">
            <div id="xh">
              <div class="order">
                <div class="num">{{ (curPages - 1) * pageSizes + index + 1 }}</div>
              </div>
            </div>
          </div>
          <div style="width: 2.6rem">
            <div>{{ item.taskName }}</div>
            <div style="font: size 0.12rem; margin-top: 0.14rem">
              ID: <span style="margin-left: 0.05rem">{{ item.id }}</span>
            </div>
          </div>
          <div style="width: 2.6rem">
            <template>
              <div v-if="item.dynamicFields.taskSponsor === 1">{{ $t('task.taskSponsor') }}</div>
              <div v-if="item.dynamicFields.dataProvider === 1">{{ $t('task.DataProvider') }}</div>
              <div v-if="item.dynamicFields.powerProvider === 1">{{ $t('task.powerProvider') }}</div>
            </template>
          </div>
          <div style="width: 2.24rem">
            <div :class="{ success: item.status === 'success', failed: item.status === 'failed' }">
              <span>{{ $t(`task.${item.status}`) }}</span>
            </div>
          </div>
          <div style="width: 2.82rem">{{ dayjs(item.createAt).format('YYYY-MM-DD HH:mm:ss') }}</div>
          <div style="width: 1.1rem">{{ dayjs(dayjs(item.endAt).diff(item.createAt)).format('HH:mm:ss') }}</div>
          <div
            style="
              color: #fec43e;
              cursor: pointer;
              width: 2.8rem;
              height: 100%;
              line-height: 0.94rem;
              text-align: center;
            "
            @click="TaskDetail(item.id)"
          >
            {{ $t('node.Detail') }}
          </div>
        </div>
        <div class="Pagination" v-if="taskList.length > 1">
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
        <img src="../../assets/img/node/border/1.svg" alt="" class="borderBottomRight" />
        <img src="../../assets/img/node/border/2.svg" alt="" class="borderTopRight" />
        <img src="../../assets/img/node/border/3.svg" alt="" class="borderBottomLeft" />
        <img src="../../assets/img/node/border/4.svg" alt="" class="borderTopLeft" />
      </div>
    </div>
  </div>
</template>
<script>
import { formatDate, formatDates } from '../../utils/tiem'
import BasicAreaChart from './components/BasicAreaChart.vue'
import { dataApi, taskApi } from '../../api/index'
import { changeSizeFn, thousandMark } from '@/utils/utils'
import dayjs from 'dayjs'
export default {
  components: { BasicAreaChart },
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
      activeName: 'metadata',
      DataList: [],
      id: '',
      taskList: [],
      newArrList: [],
      isShow: true,
      show: true,
      name: '',
      date: '',
      tabList: [
        {
          id: 0,
          name: 'metadata',
          label: 'metadata'
        },
        {
          id: 1,
          name: 'task',
          label: 'task'
        }
      ]
    }
  },
  created() {
    // this.id = this.$route.query.identityId
    this.getOrgInfo()
    this.getListTask()
  },
  methods: {
    dayjs,
    changeSizeFn,
    thousandMark,
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
      this.show = false
      if (this.curPages === 1) {
        this.show = true
      }
      this.getListTask()
    },
    handleClick(tab) {
      this.activeName = tab.name
    },
    TaskDetail(value) {
      this.$router.push({
        path: '/node/TaskDetail',
        query: {
          id: value
        }
      })
    },
    MetaData(value) {
      this.$router.push({
        path: '/node/MetaData',
        query: {
          metaDataId: value,
          deatil: '3'
        }
      })
    },
    async getOrgInfo() {
      const res = await dataApi.getListDataFileBy({
        identityId: localStorage.getItem('id'),
        pageNo: this.curPage,
        pageSize: this.pageSize
      })
      this.DataList = res.data
      this.totalRows = res.totalRows
    },
    async getListTask() {
      const res = await taskApi.getListTaskBy({
        identityId: localStorage.getItem('id'),
        pageNo: this.curPages,
        pageSize: this.pageSizes
      })
      this.id = localStorage.getItem('id')
      this.taskList = res.data
      this.totalRowss = res.totalRows
    },
    tabClick(value) {}
  }
}
</script>
<style lang='scss' scoped>
.active {
  background-color: #3954ff !important;
  margin: 0px 0px !important;
}
.title {
  width: 2.43rem;
  height: 0.32rem;
  margin: 0.2rem auto;
  background: #182d98;
  text-align: center;
  line-height: 0.32rem;
  position: relative;
}
.topLeft {
  position: absolute;
  top: -0.12rem;
  left: -0.12rem;
}
.topRight {
  position: absolute;
  top: -0.12rem;
  right: -0.12rem;
}
.bottomLeft {
  position: absolute;
  bottom: -0.12rem;
  left: -0.12rem;
}
.bottomRight {
  position: absolute;
  bottom: -0.12rem;
  right: -0.12rem;
}
.NodeDetail {
  padding-bottom: 0.3rem;
  position: relative;
  .NodeDetailTop {
    height: 0.94rem;
    display: flex;
    margin-bottom: 0.1rem;
    background: url('../../assets/img/node/2.bj1.png');
    opacity: 0.4;
  }
  .textBox {
    position: absolute;
    top: 0;
    display: flex;
    .picBox {
      height: 0.3rem;
      width: 0.6rem;
      background: #11175d;
      border-radius: 0.08rem;
      border-radius: 0.08rem;
      margin-top: 0.31rem;
      cursor: pointer;
      text-align: center;
      margin-left: 1.1rem;
      .pic {
        margin-top: 0.04rem;
      }
    }
    .bank {
      font-size: 0.3rem;
      font-weight: 600;
      line-height: 0.94rem;
      margin-left: 0.125rem;
    }
    .Identifier {
      line-height: 1.06rem;
      margin-left: 0.3rem;
    }
  }
  .content {
    position: relative;
  }
  .rankingTh {
    display: flex;
    height: 0.16rem;
    line-height: 0.16rem;
  }
  .rankingTd {
    height: 0.94rem;
    background: #0c0e26;
    border-radius: 4px;
    display: flex;
    margin: 10px 0;
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
  /deep/ ::after {
    display: none;
  }
}
.data {
  position: absolute;
  top: 3.66rem;
  left: 2.1rem;
  z-index: 999;
}
.task {
  position: absolute;
  top: 3.58rem;
  left: 4.55rem;
  z-index: 999;
  height: 0.38rem;
  .text {
    line-height: 0.38rem;
  }
}
.Pagination {
  display: flex;
  justify-content: space-between;
  .el-pagination {
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
  /deep/ .el-pager li {
    background: #303047;
    color: #fff;
  }
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
/deep/ .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #3954ff; // 进行修改选中项背景和字体
  color: #fff;
}
/deep/ .rankingTd:hover {
  background-color: #3954ff;
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
/deep/ .el-pagination__total {
  height: 0.28rem;
  width: 0.45rem;
}

.tab-box {
  display: flex;
  margin-bottom: 0.3rem;
  .tab-item-box {
    width: 2rem;
    height: 40px;
    position: relative;
    margin-right: 10px;
    &:hover .tab-wrapper-box {
      background-color: #3954ff;
    }
    .tab-wrapper-box {
      width: 100%;
      height: 100%;
      background: #11175d;
      transform: rotateZ(10deg) skew(-10deg, -10deg);
      line-height: 40px;
      border-radius: 4px;
      text-align: center;
      position: relative;
      &.active {
        background-color: #3954ff;
      }
    }
    .tab-text-box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: BebasNeueBold, PuHuiTiMedium;
      font-size: 14px;
      color: #ffffff;
      letter-spacing: 0;
      font-weight: 500;
    }
  }
}
</style>