<template>
  <div class="nodeBox">
    <div class="imgBox">
      <div class="topImg">
        <div><img src="../../assets/img/node/2.bj1.png" /></div>
        <div><img src="../../assets/img/node/2.bj1.png" /></div>
        <div class="textNode">{{ $t('node.NODE') }}</div>
        <div class="text">{{ this.totalRows }}{{ $t('node.PARTICIPATINGNODESINTHEWHOLENETWORK') }}</div>
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
            <div  class="order">
              {{ (curPage - 1) * pageSize + index + 1 }}
            </div>
          </div>
          <!-- <div>
            <img src="../../assets/img/node/2.icon3.svg" alt="" />
          </div> -->
        </div>
        <div style="width: 3.8rem">
          <div>{{ item.orgName }}</div>
          <div id="id" class="icoFontlist">{{ item.identityId }}</div>
        </div>
        <div style="width: 1.99rem; color: #fec43e" @click="Detail(item.identityId)">
          {{ $t('node.Detail') }}
        </div>
        <div style="width: 4.18rem" class="power">
          <div>
            <div>CPU: {{ item.dynamicFields.remainCore }}</div>
            <div>{{ $t('node.Memory') }}: {{ item.dynamicFields.remainMemory }}</div>
            <div>{{ $t('node.Bandwidth') }}: {{ item.dynamicFields.remainBandwidth }}</div>
          </div>
          <div>
            <div>
              {{ $t('node.Remaining') }}:
              {{
                item.dynamicFields.totalCore / item.dynamicFields.remainCore === NaN
                  ? 0
                  : item.dynamicFields.totalCore / item.dynamicFields.remainCore
              }}%
            </div>
            <div>
              {{ $t('node.Remaining') }}:
              {{
                [item.dynamicFields.totalMemory / item.dynamicFields] === NaN
                  ? 0
                  : item.dynamicFields.totalMemory / item.dynamicFields
              }}%
            </div>
            <div>
              {{ $t('node.Remaining') }}:
              {{ item.dynamicFields.totalBandwidth / item.dynamicFields.remainBandwidth ? NaN : 0 }}%
            </div>
          </div>
        </div>
        <div style="width: 2.04rem">{{ item.accumulativeDataFileCount }}</div>
        <div style="width: 2.62rem">2%</div>
        <div>
          <div class="hot">
            <div v-for="(item, index) in getHot(item.dynamicFields.idleDays)" :key="index" style="margin: 0px 2px">
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
      isShow: true
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
      this.isShow = false
      if (this.curPage === 1) {
        this.isShow = true
      }
      this.getListOrgInfo()
    },
    async getListOrgInfo() {
      const res = await nodeApi.getOrgListOrgInfo({
        pageNo: this.curPage,
        pageSize: this.pageSize
      })
      console.log('节点', res)
      if (res.code === 0) {
        this.data = res.data
        this.totalRows = res.totalRows
      }
    },
    Detail(value) {
      this.$router.push({
        path: 'nodeDetail',
        query: {
          identityId: value
        }
      })
    }
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
