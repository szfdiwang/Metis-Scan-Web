<template>
  <div class="nodeBox">
    <div class="imgBox">
      <div class="topImg">
        <div><img src="../../assets/img/node/2.bj1.png" /></div>
        <div><img src="../../assets/img/node/2.bj1.png" /></div>
        <div class="textNode">{{ $t('node.NODE') }}</div>
        <div class="text">{{ $t('node.PARTICIPATINGNODESINTHEWHOLENETWORK') }}</div>
      </div>
    </div>
    <div class="ranking">
      <div class="rankingTh">
        <div style="width: 1.24rem">{{ $t('node.No') }}</div>
        <div style="width: 3.8rem">{{ $t('node.NameIdentifier') }}</div>
        <div style="width: 1.99rem">{{ $t('node.Identifier') }}</div>
        <div style="width: 4.18rem">{{ $t('node.ComputingPower') }}</div>
        <div style="width: 2.04rem">{{ $t('node.Metadata') }}</div>
        <div style="width: 2.62rem">{{ $t('node.ParticipatedTasks') }}</div>
        <div>{{ $t('node.ActiveDegree') }}</div>
      </div>
      <div class="rankingTd" v-for="(item, index) in data" :key="index">
        <div style="width: 1.24rem" class="rankingTdImg">
          <div id="xh">
            <div v-if="index > 2" class="order">
              {{ index + 1 }}
            </div>
            <img v-if="index === 0" src="../../assets/img/excel/1.svg" alt="" />
            <img v-if="index === 1" src="../../assets/img/excel/2.svg" alt="" />
            <img v-if="index === 2" src="../../assets/img/excel/3.svg" alt="" />
          </div>
          <!-- <div>
            <img src="../../assets/img/node/2.icon3.svg" alt="" />
          </div> -->
        </div>
        <div style="width: 3.8rem">
          <div>{{ item.orgName }}银行</div>
          <div id="id" class="icoFontlist">{{ item.identityId }}</div>
        </div>
        <div style="width: 1.99rem; color: #fec43e" @click="Detail(item.identityId)">
          {{ $t('node.Detail') }}
        </div>
        <div style="width: 4.18rem" class="power">
          <div>
            <div>CPU: {{ item.accumulativeCore }}</div>
            <div>{{ $t('node.Memory') }}: {{ item.accumulativeMemory }}</div>
            <div>{{ $t('node.Bandwidth') }}: {{ item.accumulativeBandwidth }}</div>
          </div>
          <div>
            <div>{{ $t('node.Remaining') }}: xxx%</div>
            <div>{{ $t('node.Remaining') }}: xxx%</div>
            <div>{{ $t('node.Remaining') }}: xxx%</div>
          </div>
        </div>
        <div style="width: 2.04rem">{{ item.accumulativeDataFileCount }}</div>
        <div style="width: 2.62rem">2%</div>
        <div>
          <div class="hot">
            <div v-for="(item, index) in 5" :key="index" style="margin: 0px 2px">
              <img src="../../assets/img/excel/hot.svg" alt="" />
            </div>
          </div>
        </div>
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
import { nodeApi, dataApi } from '../../api/index'
console.log('nodeApi', nodeApi)
export default {
  data() {
    return {
      curPage: 1,
      pageSize: 5,
      totalRows: 10,
      curTab: 'power',
      hot: '0',
      data: [],
    }
  },
  created() {
    this.getListOrgInfo()
  },
  methods: {
    getHot(idleDays) {
      return Number(6 - idleDays < 0 ? 0 : 6 - idleDays)
    },
    handleCurrentChange(page) {
      this.curPage = page
    },
    async getListOrgInfo() {
      const res = await nodeApi.getOrgListOrgInfo({
        pageNo: this.curPage,
        pageSize: this.pageSize
      })
      console.log('刘俊', res)
      if (res.code === 0) {
        this.data = res.data
        this.totalRows = res.totalRows
      }
    },
    Detail(value) {
      this.$router.push({
        name: 'nodeDetail',
        params: {
          identityId: value
        }
      })
      console.log('00000', identityId)
    }
    // async Detail(value) {
    //   this.$router.push({
    //     path: 'nodeDetail',
    //     query: {
    //       identityId: value
    //     }
    //   })
    //   console.log('0000000',identityId)
    //   const res = await dataApi.getListDataFileBy({
    //     identityId: value,
    //     pageNo: 1,
    //     pageSize: 5
    //   })
    //   console.log('7777', res)
    // }
  }
}
</script>
<style lang="scss" scoped>
.nodeBox {
  height: 1000px;
  background: url('../../assets/img/home/bj1.png');
  padding: 0px 0.2rem;
  .imgBox {
    position: relative;
    padding-bottom: 0.1rem;
    .topImg {
      padding: 0px 1.445rem;
      width: 124px;
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
        font-size: 0.25rem;
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
    border-radius: 0.04rem;
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
  .Pagination {
    // width: 18.4rem;
    // height: 0.4rem;
    // background: #080c3d;
    // border-radius: 0.04rem;
    // margin-left: 0.1rem;
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
  /deep/ .el-select el-select--mini {
    margin-left: 16rem;
  }
  #id {
    overflow: hidden;
    word-break: keep-all;
    text-overflow: ellipsis;
    width: 180px;
  }
  .hot {
    display: flex;
  }
  #xh {
    list-style-type: decimal !important;
  }
  .order {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #3f4590;
    text-align: center;
    margin-left: 20px;
  }
}
</style>
