<template>
  <div class="Data">
    <div class="imgBox"></div>
    <div style="margin-left: 1.1rem" class="textBox">
      <div class="textNode">
        <span>{{ $t('data.DATA') }}</span>
      </div>
      <div class="text">
        <span>{{ $t('data.PIECESOFMETADATAINTHEWHOLENETWORK') }}</span>
      </div>
    </div>
    <div style="padding: 0 1.1rem">
      <div class="ranking">
        <div class="rankingTh" style="height: 0.16rem; line-height: 0.16rem">
          <div style="width: 1.6rem">
            <div style="margin-left: 0.3rem; width: 0.32rem; height: 0.16rem; text-align: center; line-height: 0.16rem">
              {{ $t('data.No') }}
            </div>
          </div>
          <div style="width: 2.2rem">{{ $t('task.Name') }}</div>
          <div style="width: 3.78rem">{{ $t('task.identifier') }}</div>
          <div style="width: 2.5rem">{{ $t('data.DataProvider') }}</div>
          <div style="width: 2.42rem">{{ $t('data.Status') }}</div>
          <div style="width: 1.2rem">{{ $t('data.ParticipatedTasks') }}</div>
          <div style="width: 2.6rem"></div>
        </div>
        <div class="rankingTd" v-for="(item, index) in DataList" :key="index">
          <div style="width: 1.6rem" class="rankingTdImg">
            <div id="xh">
              <div class="order">
                <div class="num">{{ (curPage - 1) * pageSize + index + 1 }}</div>
              </div>
            </div>
          </div>
          <div style="width: 2.2rem">
            {{ item.resourceName }}
          </div>
          <div style="width: 3.8rem">{{ item.identityId }}</div>
          <div style="width: 2.5rem">{{ item.dynamicFields.orgName }}</div>
          <div style="width: 2.42rem">{{ (item.size / 1024 / 1024).toFixed(2) }}MB</div>
          <div style="width: 0.9rem">{{ item.dynamicFields.taskCount }}</div>
          <div
            style="
              color: #fec43e;
              cursor: pointer;
              height: 100%;
              width: 2.8rem;
              line-height: 0.4rem;
              text-align: center;
            "
            @click="DataMeat(item.metaDataId)"
          >
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
        <img src="../../assets/img/node/border/1.svg" alt="" class="borderBottomRight" />
        <img src="../../assets/img/node/border/2.svg" alt="" class="borderTopRight" />
        <img src="../../assets/img/node/border/3.svg" alt="" class="borderBottomLeft" />
        <img src="../../assets/img/node/border/4.svg" alt="" class="borderTopLeft" />
      </div>
    </div>
  </div>
</template>
<script>
import { dataApi } from '../../api/index'
export default {
  data() {
    return {
      DataList: [],
      curPage: 1,
      pageSize: 13,
      totalRows: 10,
      isShow: true
    }
  },
  created() {
    this.getListData()
  },
  methods: {
    DataMeat(value) {
      this.$router.push({
        path: '/data/DataDetail',
        query: {
          metaId: value,
          deatil: '3'
        }
      })
    },
    handleCurrentChange(page) {
      this.curPage = page
      this.isShow = false
      if (this.curPage === 1) {
        this.isShow = true
      }
      this.getListData()
    },
    async getListData() {
      const res = await dataApi.getListDataFile({
        pageNo: this.curPage,
        pageSize: this.pageSize
      })
      this.DataList = res.data
      this.totalRows = res.totalRows
    }
  }
}
</script>
<style lang="scss" scoped>
.Data {
  position: relative;
  padding-bottom: 30px;
  .imgBox {
    margin-bottom: 0.2rem;
    height: 0.94rem;
    line-height: 0.94rem;
    background: url('../../assets/img/node/2.bj1.png');
    opacity: 0.4;
  }
  .textBox {
    position: absolute;
    top: 0.2rem;
    display: flex;
    .textNode {
      font-size: 0.4rem;
      width: 80px;
      height: 40px;
      text-align: center;
      line-height: 40px;
    }
    .text {
      margin-left: 1rem;
      font-size: 0.25rem;
      height: 25px;
      width: 339px;
      line-height: 25px;
      margin-top: 15px;
    }
  }
  .ranking {
    position: relative;
    padding: 12px 0;
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
  .Pagination {
    margin: 0 0.15rem;
  }
  #id {
    overflow: hidden;
    word-break: keep-all;
    text-overflow: ellipsis;
    width: 1.8rem;
    margin-top: 0.14rem;
    font-size: 12px;
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
  .Pagination {
    display: flex;
    justify-content: space-between;
    .el-pagination {
      // margin-top: 0.1rem;
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
  /deep/ .el-pager li {
    background: #303047;
    color: #fff;
  }
}
/deep/ .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #3954ff; // 进行修改选中项背景和字体
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
/deep/ .el-pagination__total {
  height: 0.28rem;
  width: 0.5rem;
}
</style>