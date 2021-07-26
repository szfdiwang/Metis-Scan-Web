<template>
  <div class="bottom-table-box clip-border">
    <div class="bottom-table-wrapper">
      <ul class="tabs-box">
        <li v-for="menu in menuList" :key="menu.id" class="tabs-item-box pointer" @click="selectRank(menu.name)">
          <div class="tab-mini-box pointer" :class="{ active: curTab === menu.name }">
            <div style="visibility: hidden">{{ $t('home.powerRank') }}</div>
          </div>
          <div class="tab-text pointer">{{ $t('home.powerRank') }}</div>
        </li>
        <!-- <div class="tab-mini-box" :class="{ active: curTab === 'active' }" @click="selectRank('active')">
        {{ $t('home.activeRank') }}
      </div> -->
      </ul>
      <el-table
        :data="tableData"
        style="width: 100%"
        :row-style="{ height: '.4rem' }"
        :cell-style="{ padding: 0 }"
        :header-cell-style="{
          height: '0.3rem',
          lineHeight: '0.1rem',
          color: '#fff',
          border: 'none'
        }"
      >
        <el-table-column prop="rank" :label="$t('common.rank')" width="50">
          <template slot-scope="scope">
            <Rankings :index="scope.$index" :curPage="curPage" :pageSize="pageSize" />
          </template>
        </el-table-column>
        <el-table-column prop="orgName" :show-overflow-tooltip="true" :label="$t('home.name')" min-width="120"> </el-table-column>
        <el-table-column
          prop="identityId"
          :show-overflow-tooltip="true"
          :label="$t('home.identifier')"
          min-width="120"
        ></el-table-column>
        <el-table-column prop="power" :label="$t('home.power')" min-width="200">
          <template slot-scope="scope">
            <div class="power-box">
              <div>
                <span> {{ $t('common.cpu') }}</span
                >&nbsp;:&nbsp;<span>{{ scope.row.core }}</span>
              </div>
              <div>
                <span> {{ $t('common.memory') }}</span
                >&nbsp;:&nbsp;<span>{{ scope.row.memory }}</span>
              </div>
              <div>
                <span> {{ $t('common.bandWidth') }}</span
                >&nbsp;:&nbsp;<span>{{ scope.row.bandwidth }}</span>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="powerRatio" :label="$t('home.powerRatio')" min-width="100">
          <template slot-scope="scope">
            <span> {{ getRatio(scope.row.bandwidth) }} </span>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="activeDegree" :label="$t('home.activeDegree')">
          <template slot-scope="scope">
            <ul class="degree">
              <li
                v-for="item in 6"
                :key="item"
                :style="{ height: 50 / (8 - item) + 'px', opacity: getOpacity(item, scope.row.idleDays) }"
              ></li>
            </ul>
          </template>
        </el-table-column> -->
        <el-table-column prop="activeDegree" :label="$t('home.activeDegree')" min-width="120">
          <template slot-scope="scope">
            <span v-for="(item, index) in getHot(scope.row.idleDays)" :key="index">
              <img src="../../../assets/img/home/red.svg" alt="" />
            </span>
            <span v-for="(item, index) in getCold(scope.row.idleDays)" :key="index + 'C'">
              <img src="../../../assets/img/home/cold.svg" alt="" />
            </span>
          </template>
        </el-table-column>
      </el-table>
      <div v-if="totalNum !== 0" class="page-box">
        <el-Pagination
          background
          :current-page="curPage"
          :page-size="pageSize"
          layout="total, prev, pager, next"
          :total="totalNum"
          @current-change="handleCurrentChange"
        ></el-Pagination>
      </div>
    </div>
    <!-- <img src="../../../assets/img/home/table-bg.svg" alt="" class="bg-img" /> -->
  </div>
</template>

<script>
import { homeApi } from '@/api/index'
import Rankings from './Rankings'
export default {
  components: {
    Rankings
  },
  props: {
    totalBandWidth: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      curPage: 1,
      totalNum: 10,
      pageSize: 10,
      curTab: 'power',
      tableData: []
    }
  },
  computed: {
    menuList() {
      return [
        {
          id: '1',
          name: 'power',
          label: this.$t('home.powerRank')
        },
        {
          id: '2',
          name: 'active',
          label: this.$t('home.activeRank')
        }
      ]
    }
  },
  mounted() {
    this.curTab === 'power' ? this.initPowerRank() : this.initActivityRank()
  },
  methods: {
    handleCurrentChange(page) {
      this.curPage = page
      this.curTab === 'power' ? this.initPowerRank() : this.initActivityRank()
    },

    getCold(idleDays) {
      return Number(6 - idleDays < 0 ? 6 : idleDays)
    },

    getHot(idleDays) {
      return Number(6 - idleDays < 0 ? 0 : 6 - idleDays)
    },

    getOpacity(index, idleDays) {
      if (idleDays >= 6) {
        return 0.15
      }
      let count = 6 - idleDays - index
      return [1, 0.7, 0.6, 0.5, 0.4, 0.3][count]
    },

    getRatio(bandWidth) {
      return `${((bandWidth / this.totalBandWidth) * 100).toFixed(2)}%`
    },

    selectRank(type) {
      this.curTab = type
      this.curPage = 1
      this.curTab === 'power' ? this.initPowerRank() : this.initActivityRank()
    },

    initActivityRank() {
      homeApi
        .getActivityRanking({
          pageNo: this.curPage,
          pageSize: this.pageSize
        })
        .then(res => {
          console.log('initActivityRank', res)
          if (res.code === 0) {
            this.tableData = res.data
            this.totalNum = res.totalRows
          }
        })
    },
    initPowerRank() {
      homeApi
        .getPowerRanking({
          pageNo: this.curPage,
          pageSize: this.pageSize
        })
        .then(res => {
          console.log('initPowerRank', res)
          if (res.code === 0) {
            this.tableData = res.data
            this.totalNum = res.totalRows
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom-table-box {
  height: 6.53rem;
  padding: 0.2rem;
  margin-bottom: 50px;
  position: relative;
  .bottom-table-wrapper {
    position: relative;
    z-index: 100;
  }
  .page-box {
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
      ::v-deep .btn-next,
      ::v-deep .el-pager li {
        background: #303047;
        border-color: #303047;
        color: #fff;
      }
    }
  }
  .tabs-box {
    display: flex;
    margin-left: 0.1rem;
    .tabs-item-box {
      position: relative;
      &:not(:first-child) {
        margin-left: 0.2rem;
      }
      .tab-mini-box {
        display: block;
        padding: 0.14rem 0.3rem;
        background: #11175d;
        transform: rotateZ(10deg) skew(-10deg, -10deg);
        font-family: BebasNeueBold, PuHuiTiMedium;
        font-size: 14px;
        color: #ffffff;
        letter-spacing: 0;
        line-height: 0.12rem;
        font-weight: 500;
        &.active {
          background-color: #3954ff;
        }
      }
      .tab-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: BebasNeueBold, PuHuiTiMedium;
        font-size: 14px;
        color: #ffffff;
        letter-spacing: 0;
        line-height: 0.12rem;
        font-weight: 500;
        white-space: nowrap;
      }
    }
  }
  ::v-deep .el-table__body {
    border-spacing: 0 0.08rem;
    border-collapse: separate;
    table-layout: fixed;
    border: none !important;
  }
  ::v-deep .el-table {
    background: transparent !important; // 整体背景色
  }
  ::v-deep .el-table th,
  ::v-deep .el-table__header tr {
    background: transparent !important; // 使头部透明
  }

  ::v-deep .el-table__header-wrapper,
  ::v-deep .el-table__header {
    height: 0.4rem;
    line-height: 0.1rem;
    background-color: transparent;
  }

  ::v-deep .el-table .el-table__body tr {
    background: #080c3d !important; // 行内容部分颜色
    border: none !important;
  }
  ::v-deep .el-table__row {
    height: 0.4rem;
  }
  ::v-deep .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: #3954ff !important;
  }
  .bg-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }

  .power-box {
    display: flex;
    & > div:not(:first-child) {
      padding-left: 0.6rem;
    }
  }
}
.degree {
  display: flex;
  align-items: flex-end;
  & > li {
    margin: 0 1.5px;
    width: 10px;
    height: 100%;
    opacity: 0.15;
    background: #b03b3b;
    border-radius: 1.54px 1.54px 0 0;
  }
}
/deep/ .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #3954ff; // 进行修改选中项背景和字体
  color: #fff;
}
</style>
