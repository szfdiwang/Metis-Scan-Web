<template>
  <div class="metaData">
    <div class="metaDataTop">
      <div class="pic" @click="$router.push('/node/NodeDetail')">
        <img src="../../assets/img/node/3.icon1.svg" alt="" style="line-height: 0.42rem" />
      </div>
      <div class="bank">XXXBANK</div>
      <div class="Identifier">ID：{{ this.id || this.Id}}</div>
    </div>
    <div class="tableData">
      <table>
        <tbody>
          <tr>
            <td>{{ $t('data.Dataprovide') }}</td>
            <td>{{ dataList.identityId }}</td>
            <td>{{ $t('data.INFORMATIONOFFIFLDS') }}:</td>
            <td>{{ dataList.rows }}</td>
          </tr>
          <tr>
            <td>{{ $t('data.Size0fData') }}</td>
            <td>{{ dataList.size / 1024 }} GB</td>
            <td>{{ $t('data.NumberOfData') }}</td>
            <td>{{ dataList.columns }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="Description">
      <div>{{ $t('data.Description') }}</div>
      <div class="ipt">{{ dataList.remarks }}</div>
    </div>
    <div class="rankingListTop">
      <div><img src="../../assets/img/node/3.button.svg" alt="" /></div>
      <div class="text">{{ $t('data.INFO') }}</div>
    </div>
    <div class="rankingTh">
      <div style="width: 1.27rem">{{ $t('node.No') }}</div>
      <div style="width: 5.1rem">{{ $t('data.FieldName') }}</div>
      <div style="width: 1.27rem">{{ $t('node.No') }}</div>
      <div style="width: 5.06rem">{{ $t('data.FieldName') }}</div>
      <div style="width: 1.27rem">{{ $t('node.No') }}</div>
      <div style="width: 4.03rem">{{ $t('data.FieldName') }}</div>
    </div>
    <div class="rankingList">
      <div class="rankingTd" v-for="(item, index) in metaList" :key="index">
        <div style="width: 1.27rem">
          <div id="xh">
            <div v-if="index > 2" class="order">
              {{ index + 1 }}
            </div>
            <img v-if="index === 0" src="../../assets/img/excel/1.svg" alt="" style="margin: 5px 10px" />
            <img v-if="index === 1" src="../../assets/img/excel/2.svg" alt="" style="margin: 5px 10px" />
            <img v-if="index === 2" src="../../assets/img/excel/3.svg" alt="" style="margin: 5px 10px" />
          </div>
        </div>
        <div>{{ item.columnName }}</div>
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
import { dataApi } from '../../api/index'
console.log('dataApi', dataApi)
export default {
  data() {
    return {
      id: '',
      Id: '',
      curPage: 1,
      pageSize: 10,
      totalRows: 10,
      dataList: {},
      metaList: []
    }
  },
  created() {
    this.id = this.$route.query.metaDataId
    this.Id = this.$route.query.metaId
    if ((this.id = this.$route.query.metaDataId)) {
      this.getFile()
      this.getMeta()
    } else {
      this.getFiles()
      this.getMetas()
    }
  },
  methods: {
    handleCurrentChange(page) {
      this.curPage = page
    },
    getFile() {
      dataApi.getDataFile({ metaDataId: this.id }).then(res => {
        this.dataList = res.data
      })
    },
    getMeta() {
      dataApi
        .getListMetaData({
          metaDataId: this.id,
          pageNo: this.curPage,
          pageSize: this.pageSize
        })
        .then(res => {
          this.metaList = res.data
          this.totalRows = res.totalRows
          // console.log('数据详情1', res)
        })
    },
    // data页面跳转
    getFiles() {
      dataApi.getDataFile({ metaDataId: this.Id }).then(res => {
        this.dataList = res.data
        // console.log('数据22', res)
      })
    },
    getMetas() {
      dataApi
        .getListMetaData({
          metaDataId: this.Id,
          pageNo: this.curPage,
          pageSize: this.pageSize
        })
        .then(res => {
          this.metaList = res.data
          this.totalRows = res.totalRows
           console.log('数据详情22', res)
        })
    }
  }
}
</script>
<style lang='scss' scoped>
.metaData {
  height: 1000px;
  background: url('../../assets/img/home/bj1.png');
  padding: 0px 0.2rem;
  .metaDataTop {
    height: 0.42rem;
    display: flex;
    margin-bottom: 0.1rem;
    .pic {
      line-height: 0.5rem;
      margin-left: 0.2rem;
    }
    .bank {
      font-size: 30px;
      font-weight: 600;
      margin: 0.02rem 0.2rem;
    }
    .Identifier {
      margin-left: 0.3rem;
      line-height: 0.6rem;
    }
  }
  .tableData {
    padding: 0.1rem 0.4rem;
    td {
      padding: 0.2rem;
    }
  }
  .Description {
    display: flex;
    padding-left: 0.6rem;
    .ipt {
      width: 9rem;
      height: 1.1rem;
      border: 0.02rem solid #333352;
      border-radius: 0.02rem;
      margin-left: 0.55rem;
      padding-left: 0.2rem;
    }
  }
  .rankingListTop {
    display: flex;
    padding: 0.4rem 0.2rem;
    position: relative;
    .text {
      position: absolute;
      top: 0.5rem;
      left: 0.7rem;
    }
  }
  .rankingTh {
    display: flex;
    padding: 0px 0.18rem;
  }
  .rankingList {
    padding: 0px 0.1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .rankingTd {
      width: 5.8rem;
      height: 0.4rem;
      background: #080c3d;
      border-radius: 0.04rem;
      display: flex;
      margin: 0.1rem 0px;
      line-height: 0.4rem;
    }
  }
  .order {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #3f4590;
    line-height: 20px;
    text-align: center;
    margin: 10px;
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