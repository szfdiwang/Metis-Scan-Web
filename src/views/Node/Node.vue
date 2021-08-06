<template>
  <div class="nodeBox">
    <div class="imgBox"></div>
    <div class="textBox">
      <div class="textNode">{{ $t('node.NODE') }}</div>
      <div class="text">
        <span style="color: #f36101; margin-right: 0.05rem; font-size: 40px">{{ this.totalRows }}</span
        >{{ $t('node.PARTICIPATINGNODESINTHEWHOLENETWORK') }}
      </div>
    </div>
    <div style="padding: 0px 1.1rem" class="ImgBox">
      <div class="ranking">
        <div class="rankingTh">
          <div style="width: 1.73rem">
            <span style="margin-left: 0.3rem">{{ $t('node.No') }}</span>
          </div>
          <div style="width: 2.3rem">{{ $t('node.NameIdentifier') }}</div>
          <div style="width: 4.7rem">{{ $t('node.ComputingPower') }}</div>
          <div style="width: 1.95rem">{{ $t('node.Metadata') }}</div>
          <div style="width: 1.96rem">{{ $t('node.ParticipatedTasks') }}</div>
          <div style="width: 1rem">{{ $t('node.ActiveDegree') }}</div>
          <div style="width: 1.2rem"></div>
        </div>
        <div class="rankingTd" v-for="(item, index) in data" :key="index">
          <div style="width: 1.8rem" class="rankingTdImg">
            <div id="xh">
              <div class="order">
                <div class="num">{{ (curPage - 1) * pageSize + index + 1 }}</div>
              </div>
            </div>
          </div>
          <div style="width: 2.5rem">
            <div>{{ item.orgName }}</div>
            <div id="id" class="icoFontlist">{{ item.identityId }}</div>
          </div>
          <div style="width: 5rem" class="power">
            <div style="width: 2rem">
              <div style="display: flex">
                <span style="width: 0.63rem; margin-top: 1.5px">C P U :</span>
                <span style="width: 0.8rem">{{ item.dynamicFields.remainCore }} {{ $t('node.cores') }}</span>
              </div>
              <div style="display: flex; margin: 0.08rem 0">
                <span style="width: 0.65rem">{{ $t('node.Memory') }} :</span>
                <span style="width: 1rem">{{ item.dynamicFields.remainMemory }} MB</span>
              </div>
              <div style="display: flex">
                <span style="width: 0.7rem"> {{ $t('node.Bandwidth') }} :</span>
                <span style="width: 1.2rem">{{ item.dynamicFields.remainBandwidth }} Mbps</span>
              </div>
            </div>
            <div>
              <div style="margin-left: 0.2rem">
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
            <div class="hot" style="width: 1rem">
              <div class="hotBox">
                <div class="box1" v-if="6 - item.dynamicFields.idleDays >= 1"></div>
                <div class="boxa" v-if="6 - item.dynamicFields.idleDays <= 0"></div>
                <div class="box2" v-if="6 - item.dynamicFields.idleDays >= 2"></div>
                <div class="boxb" v-if="6 - item.dynamicFields.idleDays < 2"></div>
                <div class="box3" v-if="6 - item.dynamicFields.idleDays >= 3"></div>
                <div class="boxc" v-if="6 - item.dynamicFields.idleDays < 3"></div>
                <div class="box4" v-if="6 - item.dynamicFields.idleDays >= 4"></div>
                <div class="boxd" v-if="6 - item.dynamicFields.idleDays < 4"></div>
                <div class="box5" v-if="6 - item.dynamicFields.idleDays >= 5"></div>
                <div class="boxe" v-if="6 - item.dynamicFields.idleDays < 5"></div>
                <div class="box6" v-if="6 - item.dynamicFields.idleDays >= 6"></div>
                <div class="boxf" v-if="6 - item.dynamicFields.idleDays < 6"></div>
              </div>
            </div>
          </div>
          <div
            style="
              color: #fec43e;
              cursor: pointer;
              width: 2.8rem;
              height: 100%;
              line-height: 0.94rem;
              margin-left: 0.3rem;
            "
            @click="Detail(item.identityId)"
          >
            <span style="margin-left: 1rem">{{ $t('node.Detail') }}</span>
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
        <img src="../../assets/img/node/border/1.svg" alt="" class="borderBottomRight" />
        <img src="../../assets/img/node/border/2.svg" alt="" class="borderTopRight" />
        <img src="../../assets/img/node/border/3.svg" alt="" class="borderBottomLeft" />
        <img src="../../assets/img/node/border/4.svg" alt="" class="borderTopLeft" />
      </div>
    </div>
  </div>
</template>
<script>
import { nodeApi, dataApi } from '../../api/index'
export default {
  data() {
    return {
      curPage: 1,
      pageSize: 6,
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
      if (res.code === 0) {
        this.data = res.data
        this.totalRows = res.totalRows
      }
    },
    // 点击跳转并传id
    Detail(value) {
      this.$router.push({
        path: 'nodeDetail',
        query: {
          identityId: value
        }
      })
      window.localStorage.setItem('id', value)
    }
  }
}
</script>
<style lang="scss" scoped>
.nodeBox {
  width: 1920px;
  position: relative;
  .imgBox {
    display: flex;
    height: 0.9rem;
    background: url('../../assets/img/node/2.bj1.png');
    opacity: 0.4;
    margin: 0.05rem 0;
    line-height: 0.9rem;
  }
  .textBox {
    position: absolute;
    top: 0.1rem;
    display: flex;
    .textNode {
      font-size: 0.4rem;
      margin: 8px 1rem 0px 1.1rem;
    }
    .text {
      margin-top: 0.15rem;
      font-size: 0.25rem;
    }
  }
  .ranking {
    padding: 0.2rem 0.2rem;
    position: relative;
    .rankingTh {
      display: flex;
      height: 0.16rem;
      line-height: 0.16rem;
    }
    .rankingTd {
      margin: 0.1rem 0;
      margin-bottom: 0.1rem;
      height: 0.94rem;
      background: #0c0e26;
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
  ::v-deep .el-select el-select--mini {
    margin-left: 16rem;
  }
  #id {
    width: 1.4rem;
    font-size: 0.12rem;
    padding-top: 0.14rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
    margin-left: 0.3rem;
    .num {
      text-align: center;
      line-height: 0.2rem;
    }
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
/deep/ .rankingTd[data-v-28655dc5]:hover {
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
.hotBox {
  height: 0.5rem;
  display: flex;
  align-items: flex-end;
  .box1 {
    width: 0.108rem;
    height: 0.115rem;
    opacity: 0.3;
    background: #b03b3b;
    border-radius: 0.0154rem 0.0154rem 0 0;
    border-radius: 0.0154rem 0.0154rem 0px 0px;
    margin-right: 0.03rem;
  }
  .boxa {
    width: 0.108rem;
    height: 0.115rem;
    opacity: 0.15;
    background: #b03b3b;
    border-radius: 0.0154rem 0.0154rem 0 0;
    border-radius: 0.0154rem 0.0154rem 0px 0px;
    margin-right: 0.03rem;
  }
  .box2 {
    width: 0.108rem;
    height: 0.169rem;
    opacity: 0.4;
    background: #b03b3b;
    border-radius: 0.0154rem 0.0154rem 0 0;
    border-radius: 0.0154rem 0.0154rem 0px 0px;
    margin-right: 0.03rem;
  }
  .boxb {
    width: 0.108rem;
    height: 0.169rem;
    opacity: 0.15;
    background: #b03b3b;
    border-radius: 0.0154rem 0.0154rem 0 0;
    border-radius: 0.0154rem 0.0154rem 0px 0px;
    margin-right: 0.03rem;
  }
  .box3 {
    width: 0.108rem;
    height: 0.238rem;
    opacity: 0.5;
    background: #b03b3b;
    border-radius: 0.0154rem 0.0154rem 0 0;
    border-radius: 0.0154rem 0.0154rem 0px 0px;
    margin-right: 0.03rem;
  }
  .boxc {
    width: 0.108rem;
    height: 0.238rem;
    opacity: 0.15;
    background: #b03b3b;
    border-radius: 0.0154rem 0.0154rem 0 0;
    border-radius: 0.0154rem 0.0154rem 0px 0px;
    margin-right: 0.03rem;
  }
  .box4 {
    width: 0.108rem;
    height: 0.338rem;
    opacity: 0.6;
    background: #b03b3b;
    border-radius: 0.0154rem 0.0154rem 0 0;
    border-radius: 0.0154rem 0.0154rem 0px 0px;
    margin-right: 0.03rem;
  }
  .boxd {
    width: 0.108rem;
    height: 0.338rem;
    opacity: 0.15;
    background: #b03b3b;
    border-radius: 0.0154rem 0.0154rem 0 0;
    border-radius: 0.0154rem 0.0154rem 0px 0px;
    margin-right: 0.03rem;
  }
  .box5 {
    width: 0.108rem;
    height: 0.431rem;
    opacity: 0.7;
    background: #b03b3b;
    border-radius: 0.0154rem 0.0154rem 0 0;
    border-radius: 0.0154rem 0.0154rem 0px 0px;
    margin-right: 0.03rem;
  }
  .boxe {
    width: 0.108rem;
    height: 0.431rem;
    opacity: 0.15;
    background: #b03b3b;
    border-radius: 0.0154rem 0.0154rem 0 0;
    border-radius: 0.0154rem 0.0154rem 0px 0px;
    margin-right: 0.03rem;
  }
  .box6 {
    width: 0.108rem;
    height: 0.5rem;
    background: #b03b3b;
    border-radius: 0.0154rem 0.0154rem 0 0;
    border-radius: 0.0154rem 0.0154rem 0px 0px;
  }
  .boxf {
    width: 0.108rem;
    height: 0.5rem;
    opacity: 0.15;
    background: #b03b3b;
    border-radius: 0.0154rem 0.0154rem 0 0;
    border-radius: 0.0154rem 0.0154rem 0px 0px;
  }
}
/deep/ .el-pagination__total {
  height: 0.28rem;
  width: 0.4rem;
}
</style>