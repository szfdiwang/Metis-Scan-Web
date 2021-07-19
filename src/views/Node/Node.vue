<template>
  <div class="nodeBox">
    <div class="imgBox"></div>
    <div class="textBox">
      <div class="textNode">{{ $t('node.NODE') }}</div>
      <div class="text">
        <span style="color: #f36101">{{ this.totalRows }}</span
        >{{ $t('node.PARTICIPATINGNODESINTHEWHOLENETWORK') }}
      </div>
    </div>
    <div style="padding: 0px 1.1rem" class="ImgBox">
      <!-- <div class="borderImg">
          <img src="'../../assets/img/node/2.border.svg" alt="" />
        </div> -->
      <div class="ranking">
        <div class="rankingTh">
          <div style="width: 1.8rem">
            <span style="margin-left: 0.3rem">{{ $t('node.No') }}</span>
          </div>
          <div style="width: 2.5rem">{{ $t('node.NameIdentifier') }}</div>
          <!-- <div style="width: 1.99rem"></div> -->
          <div style="width: 3.8rem">{{ $t('node.ComputingPower') }}</div>
          <div style="width: 2.04rem">{{ $t('node.Metadata') }}</div>
          <div style="width: 2.02rem">{{ $t('node.ParticipatedTasks') }}</div>
          <div style="width: 1.9rem">{{ $t('node.ActiveDegree') }}</div>
          <div></div>
        </div>
        <div class="rankingTd" v-for="(item, index) in data" :key="index">
          <div style="width: 1.8rem" class="rankingTdImg">
            <div id="xh">
              <div class="order">
                {{ (curPage - 1) * pageSize + index + 1 }}
              </div>
            </div>
          </div>
          <div style="width: 2.5rem">
            <div>{{ item.orgName }}</div>
            <div id="id" class="icoFontlist">{{ item.identityId }}</div>
          </div>
          <!-- <div style="width: 1.99rem; color: #fec43e" @click="Detail(item.identityId)">
            {{ $t('node.Detail') }}
          </div> -->
          <div style="width: 3.8rem" class="power">
            <div style="width: 1.2rem">
              <div>
                C P U : <span style="margin-left: 0.13rem">{{ item.dynamicFields.remainCore }}</span>
              </div>
              <div style="margin: 0.08rem 0">
                {{ $t('node.Memory') }} : <span style="margin-left: 0.1rem">{{ item.dynamicFields.remainMemory }}</span>
              </div>
              <div>
                {{ $t('node.Bandwidth') }} :
                <span style="margin-left: 0.1rem">{{ item.dynamicFields.remainBandwidth }}</span>
              </div>
            </div>
            <div>
              <div style="margin-left: 0.1rem">
                <div>
                  {{ $t('node.Remaining') }}:<span style="margin-left: 0.1rem"
                    >{{
                      item.dynamicFields.totalCore / item.dynamicFields.remainCore === NaN
                        ? 0
                        : item.dynamicFields.totalCore / item.dynamicFields.remainCore
                    }}
                    %</span
                  >
                </div>
                <div style="margin: 0.08rem 0">
                  {{ $t('node.Remaining') }}:<span style="margin-left: 0.1rem"
                    >{{
                      [item.dynamicFields.totalMemory / item.dynamicFields] === NaN
                        ? 0
                        : item.dynamicFields.totalMemory / item.dynamicFields
                    }}%</span
                  >
                </div>
                <div>
                  {{ $t('node.Remaining') }}:
                  <span style="margin-left: 0.1rem"
                    >{{ item.dynamicFields.totalBandwidth / item.dynamicFields.remainBandwidth ? NaN : 0 }}%</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div style="width: 2.04rem">{{ item.accumulativeDataFileCount }}</div>
          <div style="width: 2.02rem">{{ item.accumulativePowerTaskCount + item.accumulativeDataTaskCount }}</div>
          <div>
            <div class="hot" style="width: 1.9rem">
              <div v-for="(item, index) in getHot(item.dynamicFields.idleDays)" :key="index" style="margin: 0px 2px">
                <img src="../../assets/img/excel/hot.svg" alt="" />
              </div>
            </div>
          </div>
          <div style="color: #fec43e; cursor: pointer" @click="Detail(item.identityId)">
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
        <!-- <img src="../../assets/img/node/2.border.svg" alt="" class="borderImg" /> -->
      </div>
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
  position: relative;
  .imgBox {
    display: flex;
    height: 0.9rem;
    background: url('../../assets/img/node/2.bj1.png');
    opacity: 0.4;
    margin: 0.05rem 0;
    line-height: 0.9rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .textBox {
    position: absolute;
    top: 0.1rem;
    display: flex;
    .textNode {
      font-size: 0.4rem;
      margin: 0px 1.12rem 0px 1.1rem;
    }
    .text {
      margin-top: 0.15rem;
      font-size: 0.25rem;
    }
  }
  // .ImgBox {
  //   background: url('../../assets/img/node/2.border.svg');
  //  background-size: 2000px 600px;
  //  width: 100%;
  //  height: 100%;
  //   background-repeat: no-repeat;
  // }
  .ranking {
    padding: 0px 0.2rem;

    // background-size: 100% 6.45rem;
    position: relative;

    .rankingTh {
      // position: relative;
      //  margin: 0.2rem 0 0.1rem 0;
      display: flex;
    }
    .rankingTd {
      margin: 0.1rem 0;
      margin-bottom: 0.1rem;
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
  }
  // .borderImg {
  //   position: absolute;
  //   img {
  //     width: 100%;
  //     height: 100%;
  //   }
  // }
  // .borderImg {
  //   width: 1900px;
  //   height: 100%;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   z-index: 10;
  // }
  .Pagination {
    display: flex;
    justify-content: space-between;
    .el-pagination {
      margin-top: 0.04rem;
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
    width: 1.8rem;
    font-size: 0.12rem;
    padding-top: 0.14rem;
  }
  .hot {
    width: 2rem;
    display: flex;
  }
  #xh {
    list-style-type: decimal !important;
  }
  .order {
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    background-color: #3f4590;
    text-align: center;
    margin-left: 0.3rem;
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
</style>