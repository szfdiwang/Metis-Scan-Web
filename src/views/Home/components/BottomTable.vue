<template>
  <div class="bottom-table-box">
    <div class="bottom-table-wrapper">
      <ul class="tabs-box">
        <li v-for="menu in menuList" :key="menu.id" class="tabs-item-box pointer" @click="selectRank(menu.name)">
          <div class="tab-mini-box pointer" :class="{ active: curTab === menu.name }">
            <span style="visibility: hidden">{{ $t('home.powerRank') }}</span>
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
        :header-cell-style="{ backgroundColor: '#05052E', color: '#fff', border: 'none' }"
      >
        <el-table-column prop="rank" :label="$t('common.rank')" width="100">
          <template slot-scope="scope">
            <div v-if="scope.row.rank > 3">
              <div class="rank-round">{{ scope.row.rank }}</div>
            </div>
            <div v-else>
              <div v-if="scope.row.rank === 1">
                <img src="../../../assets/img/home/rank1.svg" alt="" />
              </div>
              <div v-if="scope.row.rank === 2">
                <img src="../../../assets/img/home/rank2.svg" alt="" />
              </div>
              <div v-if="scope.row.rank === 3">
                <img src="../../../assets/img/home/rank3.svg" alt="" />
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="name" :label="$t('home.name')"> </el-table-column>
        <el-table-column prop="identifier" :label="$t('home.identifier')"></el-table-column>
        <el-table-column prop="power" :label="$t('home.power')" width="520">
          <template slot-scope="scope">
            <div class="power-box">
              <div>
                <span> {{ $t('common.cpu') }}</span
                >&nbsp;:&nbsp;<span>{{ scope.row.power.cpu }}</span>
              </div>
              <div>
                <span> {{ $t('common.memory') }}</span
                >&nbsp;:&nbsp;<span>{{ scope.row.power.memory }}</span>
              </div>
              <div>
                <span> {{ $t('common.bandWidth') }}</span
                >&nbsp;:&nbsp;<span>{{ scope.row.power.bandWidth }}</span>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="powerRatio" :label="$t('home.powerRatio')" width="120"> </el-table-column>
        <el-table-column prop="activeDegree" :label="$t('home.activeDegree')">
          <!-- <template slot-scope="scope"> </template> -->
        </el-table-column>
      </el-table>
    </div>

    <img src="../../../assets/img/home/table-bg.svg" alt="" class="bg-img" />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      curTab: 'power',
      tableData: [
        {
          name: '王小虎',
          rank: 1,
          identifier: '0x9012131313131231231231',
          power: {
            cpu: 'aaa',
            memory: 'bbb',
            bandWidth: 'ccc'
          },
          powerRatio: '2%',
          activeDegree: '49%'
        },
        {
          name: '王小虎',
          rank: 2,
          identifier: '0x9012131313131231231231',
          power: {
            cpu: 'aaa',
            memory: 'bbb',
            bandWidth: 'ccc'
          },
          powerRatio: '2%',
          activeDegree: '49%'
        },
        {
          name: '王小虎',
          rank: 3,
          identifier: '0x9012131313131231231231',
          power: {
            cpu: 'aaa',
            memory: 'bbb',
            bandWidth: 'ccc'
          },
          powerRatio: '2%',
          activeDegree: '49%'
        },
        {
          name: '王小虎',
          rank: 4,
          identifier: '0x9012131313131231231231',
          power: {
            cpu: 'aaa',
            memory: 'bbb',
            bandWidth: 'ccc'
          },
          powerRatio: '2%',
          activeDegree: '49%'
        },
        {
          name: '王小虎',
          rank: 5,
          identifier: '0x9012131313131231231231',
          power: {
            cpu: 'aaa',
            memory: 'bbb',
            bandWidth: 'ccc'
          },
          powerRatio: '2%',
          activeDegree: '49%'
        },
        {
          name: '王小虎',
          rank: 6,
          identifier: '0x9012131313131231231231',
          power: {
            cpu: 'aaa',
            memory: 'bbb',
            bandWidth: 'ccc'
          },
          powerRatio: '2%',
          activeDegree: '49%'
        },
        {
          name: '王小虎',
          rank: 7,
          identifier: '0x9012131313131231231231',
          power: {
            cpu: 'aaa',
            memory: 'bbb',
            bandWidth: 'ccc'
          },
          powerRatio: '2%',
          activeDegree: '49%'
        },
        {
          name: '王小虎',
          rank: 8,
          identifier: '0x9012131313131231231231',
          power: {
            cpu: 'aaa',
            memory: 'bbb',
            bandWidth: 'ccc'
          },
          powerRatio: '2%',
          activeDegree: '49%'
        },
        {
          name: '王小虎',
          rank: 9,
          identifier: '0x9012131313131231231231',
          power: {
            cpu: 'aaa',
            memory: 'bbb',
            bandWidth: 'ccc'
          },
          powerRatio: '2%',
          activeDegree: '49%'
        },
        {
          name: '王小虎',
          rank: 10,
          identifier: '0x9012131313131231231231',
          power: {
            cpu: 'aaa',
            memory: 'bbb',
            bandWidth: 'ccc'
          },
          powerRatio: '2%',
          activeDegree: '49%'
        }
      ]
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
  watch: {},
  mounted() {},
  methods: {
    selectRank(type) {
      console.log(type)
      this.curTab = type
    }
  }
}
</script>

<style lang='scss' scoped>
.bottom-table-box {
  height: 6.53rem;
  padding: 0.2rem;
  margin-bottom: 50px;
  position: relative;
  .bottom-table-wrapper {
    position: relative;
    z-index: 100;
  }
  .tabs-box {
    display: flex;
    margin-bottom: 0.1rem;
    margin-left: 0.1rem;
    .tabs-item-box {
      position: relative;
      &:not(:first-child) {
        margin-left: 20px;
      }
      .tab-mini-box {
        display: inline-block;
        padding: 14px 30px;
        background: #11175d;
        transform: rotateZ(10deg) skew(-10deg, -10deg);
        &.active {
          background-color: #3954ff;
        }
      }
      .tab-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: PingFangSC-Medium;
        font-size: 14px;
        color: #ffffff;
        letter-spacing: 0;
        line-height: 12px;
        font-weight: 500;
        white-space: nowrap;
      }
    }
  }
  ::v-deep .el-table__body,
  .el-table {
    border-spacing: 0 8px;
    border-collapse: separate;
    table-layout: fixed;
    background: #05052e;
    border: none !important;
  }
  ::v-deep .el-table tr {
    background: #080c3d !important;
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
  // ::v-deep .el-table td,
  // .el-table th {
  //   padding: 0.08rem 0 !important;
  // }

  .power-box {
    display: flex;
    & > div:not(:first-child) {
      padding-left: 0.6rem;
    }
  }
  .rank-round {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #3f4590;
    color: #fff;
    text-align: center;
    line-height: 21px;
    font-size: 12px;
  }
}
</style>