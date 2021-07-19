<template>
  <div class="Data">
    <div class="imgBox"></div>
    <div style="margin-left: 1.1rem" class="textBox">
      <span class="textNode">{{ $t('data.DATA') }}</span>
      <span class="text">{{ $t('data.PIECESOFMETADATAINTHEWHOLENETWORK') }}</span>
    </div>
    <div style="padding: 0 1.1rem">
      <div class="ranking">
        <div class="rankingTh">
          <div style="width: 1.8rem">
            <span style="margin-left: 0.3rem">{{ $t('data.No') }}</span>
          </div>
          <!-- <div style="width: 3rem">{{ $t('data.NameIdentifier') }}</div>
          <div></div> -->
          <div style="width: 3.2rem">{{ $t('task.Name') }}</div>
          <div style="width: 2.4rem">{{ $t('task.identifier') }}</div>
          <div style="width: 2.5rem">{{ $t('data.DataProvider') }}</div>
          <div style="width: 2.42rem">{{ $t('data.Status') }}</div>
          <div style="width: 2rem">{{ $t('data.ParticipatedTasks') }}</div>
          <div></div>
        </div>
      </div>
      <div class="rankingTd" v-for="(item, index) in DataList" :key="index">
        <div style="width: 1.8rem" class="rankingTdImg">
          <div id="xh">
            <div class="order">
              {{ (curPage - 1) * pageSize + index + 1 }}
            </div>
          </div>
        </div>
        <div style="width: 3.2rem">
          {{ item.resourceName }}
        </div>
        <div style="width: 2.4rem">{{ item.identityId }}</div>
        <div style="width: 2.5rem">{{ item.dynamicFields.orgName }}</div>
        <div style="width: 2.42rem">{{ (item.size / 1024 / 1024).toFixed(2) }}MB</div>
        <div style="width: 2rem">{{ item.dynamicFields.taskCount }}</div>
        <div style="color: #fec43e; cursor: pointer" @click="DataMeat(item.metaDataId)">{{ $t('node.Detail') }}</div>
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
  </div>
</template>
<script>
import { dataApi } from '../../api/index'
console.log('dataApi', dataApi)
export default {
  data() {
    return {
      DataList: [],
      curPage: 1,
      pageSize: 10,
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
        path: '/node/MetaData',
        query: {
          metaId: value
        }
      })
      console.log('打印', value)
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
      console.log('shuju', res)
    }
  }
}
</script>
<style lang="scss" scoped>
.Data {
  .imgBox {
    margin-bottom: 0.2rem;
    height: 0.94rem;
    line-height: 0.94rem;
    background: url('../../assets/img/node/2.bj1.png');
    opacity: 0.4;
    position: relative;
  }
  .textBox {
    position: absolute;
    top: 0.2rem;
    .textNode {
      font-size: 0.4rem;
    }
    .text {
      margin-left: 1rem;
      font-size: 0.32rem;
    }
  }
  .rankingTh {
    margin: 0.1rem 0.2rem;
    display: flex;
  }
  .rankingTd {
    margin: 0.1rem 0.2rem;
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
    text-align: center;
    margin-left: 0.3rem;
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
</style>