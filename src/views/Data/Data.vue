<template>
  <div class="Data">
    <div class="imgBox">
      <div class="topImg">
        <div><img src="../../assets/img/node/2.bj1.png" /></div>
        <div><img src="../../assets/img/node/2.bj1.png" /></div>
        <div class="textNode">{{ $t('data.DATA') }}</div>
        <div class="text">{{ $t('data.PIECESOFMETADATAINTHEWHOLENETWORK') }}</div>
      </div>
    </div>
    <div class="ranking">
      <div class="rankingTh">
        <div style="width: 1.24rem">{{ $t('data.No') }}</div>
        <div style="width: 3.8rem">{{ $t('data.NameIdentifier') }}</div>
        <div style="width: 2.1rem">{{ $t('data.Identifier') }}</div>
        <div style="width: 2.9rem">{{ $t('data.DataProvider') }}</div>
        <div style="width: 2.62rem">{{ $t('data.Status') }}</div>
        <div>{{ $t('data.ParticipatedTasks') }}</div>
      </div>
    </div>
    <div class="rankingTd" v-for="(item, index) in DataList" :key="index">
      <div style="width: 1.24rem" class="rankingTdImg">
        <div id="xh">
          <div v-if="index > 2 && isShow === true" class="order">
            {{ (curPage - 1) * pageSize + index + 1 }}
          </div>
          <div v-if="isShow === false" class="order">
            {{ (curPage - 1) * pageSize + index + 1 }}
          </div>
          <img v-if="index === 0 && isShow" src="../../assets/img/excel/1.svg" alt="" />
          <img v-if="index === 1 && isShow" src="../../assets/img/excel/2.svg" alt="" />
          <img v-if="index === 2 && isShow" src="../../assets/img/excel/3.svg" alt="" />
        </div>
      </div>

      <div style="width: 3.8rem">
        <div>{{ item.resourceName }}</div>
        <div id="id">ID:{{ item.identityId }}</div>
      </div>
      <div style="width: 2.1rem; color: #fec43e" @click="DataMeat(item.metaDataId)">{{ $t('node.Detail') }}</div>
      <div style="width: 2.9rem">{{ item.dynamicFields.orgName }}</div>
      <div style="width: 2.62rem">{{ (item.size / 1024 / 1024).toFixed(2) }}MB</div>
      <div>{{ item.dynamicFields.taskCount }}</div>
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
import Pagination from '../../components/Pagination.vue'
import { dataApi } from '../../api/index'
console.log('dataApi', dataApi)
export default {
  components: { Pagination },
  data() {
    return {
      DataList: [],
      curPage: 1,
      pageSize: 5,
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
  height: 1000px;
  background: url('../../assets/img/home/bj1.png');
  padding: 0px 0.2rem;
  .imgBox {
    position: relative;
    padding-bottom: 0.1rem;
    .topImg {
      padding: 0px 1.445rem;
      width: 1.24rem;
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
        font-size: 25px;
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
    margin: 0.2rem 0.09rem;
  }
  #id {
    overflow: hidden;
    word-break: keep-all;
    text-overflow: ellipsis;
    width: 180px;
  }
  .order {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #3f4590;
    text-align: center;
    margin-left: 20px;
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
}
</style>