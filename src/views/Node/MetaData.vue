<template>
  <div class="metaData">
    <div class="metaDataTop">
      <div class="pic" @click="$router.push('/node/NodeDetail')">
        <img src="../../assets/img/node/3.icon1.svg" alt="" style="line-height: 0.42rem" />
      </div>
      <div class="bank">XXXBANK</div>
      <div class="Identifier">ID：{{ this.id }}</div>
    </div>
    <div class="tableData">
      <table>
        <tbody>
          <tr>
            <td>{{ $t('data.Dataprovide') }}</td>
            <td>xxxxxxxxxxx</td>
            <td>{{ $t('data.INFORMATIONOFFIFLDS') }}:</td>
            <td>13,000</td>
          </tr>
          <tr>
            <td>{{ $t('data.Size0fData') }}</td>
            <td>2.0 GB</td>
            <td>{{ $t('data.NumberOfData') }}</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="Description">
      <div>{{ $t('data.Description') }}</div>
      <div class="ipt">xxxxxxxxx</div>
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
      <div class="rankingTd" v-for="(item, index) in 24" :key="index">
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
        <div>xxxxxxxxxxxx</div>
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
      curPage: 1,
      pageSize: 5,
      totalRows: 10
    }
  },
  created() {
    this.metaData()
    this.getFile()
  },
  methods: {
    handleCurrentChange(page) {
      this.curPage = page
    },
    metaData() {
      this.id = this.$route.query.metaDataId
      console.log('222', this.id)
    },
    getFile() {
      dataApi.getDataFile({ metaDataId: this.id }).then(res => {
        console.log('meta', res)
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