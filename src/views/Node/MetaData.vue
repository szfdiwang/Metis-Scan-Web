<template>
  <div class="metaData">
    <div class="metaDataTop">
      <div class="pic" @click="$router.push('/node/NodeDetail')">
        <img src="../../assets/img/node/3.icon1.svg" alt="" />
      </div>
      <div class="bank">XXXBANK</div>
      <div class="Identifier">ID：{{ this.id || this.Id }}</div>
    </div>
    <div class="tableData">
      <table>
        <tbody>
          <tr>
            <td>{{ $t('data.Dataprovide') }} :</td>
            <td><span style="margin-left:0.2rem ;">{{ dataList.identityId }}</span></td>
            <td style="padding-left: 3.2rem">{{ $t('data.INFORMATIONOFFIFLDS') }} :</td>
            <td>{{ dataList.rows }}</td>
          </tr>
          <tr>
            <td>{{ $t('data.Size0fData') }} :</td>
            <td> <span style="margin-left:0.2rem ;">{{ dataList.size / 1024 }} GB</span></td>
            <td style="padding-left: 3.2rem">{{ $t('data.NumberOfData') }} :</td>
            <td>{{ dataList.columns }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="Description">
      <div>{{ $t('data.Description') }} :</div>
      <div class="ipt"> <span style="margin-left:0.2rem ;">{{ dataList.remarks }}</span></div>
    </div>
    <div>
      <div class="rankingListTop">
        <div><img src="../../assets/img/node/3.button.svg" alt="" /></div>
        <div class="text">{{ $t('data.INFO') }}</div>
      </div>
      <div class="rankingTh">
        <div style="width: 5rem">
          <span style="margin-left: 0.3rem">{{ $t('node.No') }}</span>
          <span style="margin-left: 0.7rem">{{ $t('data.FieldName') }}</span>
        </div>
        <div style="width: 5rem; margin-left: 0.6rem">
          <span style="margin-left: 0.3rem">{{ $t('node.No') }}</span>
          <span style="margin-left: 0.7rem">{{ $t('data.FieldName') }}</span>
        </div>
        <div style="width: 500px; margin-left: 0.6rem">
          <span style="margin-left: 0.3rem">{{ $t('node.No') }}</span>
          <span style="margin-left: 0.7rem">{{ $t('data.FieldName') }}</span>
        </div>
      </div>
      <div class="rankingList">
        <div class="rankingTd" v-for="(item, index) in metaList" :key="index">
          <div style="width: 1.27rem">
            <div id="xh">
              <div class="order">
                {{ index + 1 }}
              </div>
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
  // height: 1000px;
  // background: url('../../assets/img/home/bj1.png');
  padding: 0px 1.1rem;
  .metaDataTop {
    height: 0.42rem;
    display: flex;
    margin-bottom: 0.1rem;
    .pic {
      line-height: 0.5rem;
      // margin-left: 0.2rem;
    }
    .bank {
      font-size: 0.3rem;
      font-weight: 600;
      margin: 0.02rem 0.2rem;
    }
    .Identifier {
      margin-left: 0.3rem;
      // line-height: 0.6rem;
      margin-top: 0.15rem;
    }
  }
  .tableData {
    padding: 0.1rem 0;
    td {
      padding: 0.1rem 0.45rem 0.1rem 0;
    }
  }
  .Description {
    display: flex;
    padding-bottom: 0.2rem;
    .ipt {
      width: 9rem;
      border-radius: 0.02rem;
      margin-left: 45px;
    }
  }
  .rankingListTop {
    display: flex;
    padding: 0.2rem 0.2rem;
    position: relative;
    .text {
      position: absolute;
      top: 0.3rem;
      left: 0.9rem;
    }
  }
  .rankingTh {
    display: flex;
  }
  .rankingList {
    height: 2.4rem;
    padding: 0px 0.1rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    .rankingTd {
      width: 5rem;
      height: 0.4rem;
      background: #080c3d;
      border-radius: 0.04rem;
      display: flex;
      margin: 0.1rem 0px;
      line-height: 0.4rem;
    }
  }
  #xh {
    text-align: center;
    width: 5rem;
    height: 0.4rem;
    .order {
      width: 0.2rem;
      height: 0.2rem;
      border-radius: 50%;
      margin: 0.1rem 0.2rem 0;
      background-color: #3f4590;
      line-height: 0.2rem;
    }
  }
  .Pagination {
    display: flex;
    justify-content: space-between;
    margin-left: 0.1rem;
    .el-pagination {
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