<template>
  <div class="metaData">
    <div class="metaDataTop">
      <!-- <div class="pic" @click="$router.push('/node/NodeDetail')"> -->
      <div class="picBox" @click="comment">
        <img src="../assets/img/node/3.icon1.svg" alt="" class="pic" />
      </div>
      <div class="bank">{{ curName }}</div>
      <div class="Identifier">ID：{{ this.id || this.Id }}</div>
    </div>
    <div class="tableData">
      <div style="display: flex; margin: 0.2rem 0">
        <div style="display: flex; height: 0.16rem; line-height: 0.16rem">
          <div style="width: 1.3rem; height: 0.16rem; line-height: 0.16rem">{{ $t('data.Dataprovide') }}:</div>
          <div style="margin-left: 0.45rem; height: 0.16rem; line-height: 0.16rem; width: 3rem">
            {{ dataList.identityId }}
          </div>
        </div>
        <div style="display: flex; margin-left: 1.16rem; height: 0.16rem; line-height: 0.16rem">
          <div style="width: 1.5rem">{{ $t('data.INFORMATIONOFFIFLDS') }}:</div>
          <div>{{ thousandMark(dataList.rows) }}</div>
        </div>
      </div>
      <div style="display: flex; margin: 0.1rem 0; height: 0.16rem; line-height: 0.16rem">
        <div style="display: flex">
          <div style="width: 1.3rem">{{ $t('data.Size0fData') }}:</div>
          <div style="margin-left: 0.45rem; width: 2rem">{{ changeSizeFn(dataList.size) }}</div>
        </div>
        <div style="display: flex; margin-left: 2.16rem">
          <div style="width: 1rem">{{ $t('data.NumberOfData') }} :</div>
          <div style="margin-left: 0.52rem">{{ thousandMark(dataList.columns) }}</div>
        </div>
      </div>
    </div>
    <div class="Description" style="height: 0.16rem; line-height: 0.16rem; margin-bottom: 0.4rem">
      <div style="width: 1.3rem">{{ $t('data.Description') }} :</div>
      <div class="ipt">
        <div style="width: 4rem">{{ dataList.remarks }}</div>
      </div>
    </div>
    <div class="content">
      <div class="rankingListTop">
        <div class="text">{{ $t('data.INFO') }}</div>
      </div>
      <div>
        <div class="rankingTh" style="height: 0.16rem; line-height: 0.16rem">
          <div style="width: 5.4rem; display: flex">
            <div style="width: 0.5rem; margin-left: 0.3rem">{{ $t('node.No') }}</div>
            <div style="width: 4rem; margin-left: 0.55rem">{{ $t('data.FieldName') }}</div>
          </div>
          <div style="width: 5.4rem; display: flex; text-align: center" v-if="metaList.length > 10">
            <div style="width: 0.5rem; margin-left: 0.3rem">{{ $t('node.No') }}</div>
            <div style="width: 2rem">{{ $t('data.FieldName') }}</div>
          </div>
          <div style="width: 5.4rem; display: flex; margin-left: 2.8rem" v-if="metaList.length == 10">
            <div style="width: 0.5rem; margin-left: 0.4rem">{{ $t('node.No') }}</div>
            <div style="width: 4rem; margin-left: 0.52rem">{{ $t('data.FieldName') }}</div>
          </div>
          <div style="width: 5.4rem; margin-left: 0.55rem; display: flex" v-if="metaList.length > 10">
            <div style="width: 0.5rem">{{ $t('node.No') }}</div>
            <div style="width: 4rem; margin-left: 0.56rem">{{ $t('data.FieldName') }}</div>
          </div>
        </div>
        <!-- <div style="display: flex;"> <div>{{ $t('node.No') }}</div><div>{{ $t('data.FieldName') }}</div></div> -->
        <div class="rankingList">
          <div class="rankingTd" v-for="(item, index) in metaList" :key="index">
            <div style="width: 1.27rem">
              <div id="xh">
                <div class="order">
                  <div class="num">{{ (curPage - 1) * pageSize + index + 1 }}</div>
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
        <img src="../assets/img/node/border/1.svg" alt="" class="borderBottomRight" />
        <img src="../assets/img/node/border/2.svg" alt="" class="borderTopRight" />
        <img src="../assets/img/node/border/3.svg" alt="" class="borderBottomLeft" />
        <img src="../assets/img/node/border/4.svg" alt="" class="borderTopLeft" />
      </div>
    </div>
  </div>
</template>

<script>
import { dataApi } from '../api/index'
import { changeSizeFn, thousandMark } from '@/utils/utils'
export default {
  data() {
    return {
      id: '',
      Id: '',
      curPage: 1,
      pageSize: 21,
      totalRows: 10,
      dataList: {},
      metaList: []
      // fromPath: '',
      // deatil: ''
    }
  },
  created() {
    // this.deatil = this.$route.query.deatil
    // window.localStorage.setItem('deatil', this.deatil)
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
  computed: {
    curName: function () {
      return this.$route.query.name
    }
  },
  methods: {
    changeSizeFn,
    thousandMark,
    handleCurrentChange(page) {
      this.curPage = page
      if ((this.id = this.$route.query.metaDataId)) {
        this.getMeta()
      } else {
        this.getMetas()
      }
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
        })
    },
    // data页面跳转
    getFiles() {
      dataApi.getDataFile({ metaDataId: this.Id }).then(res => {
        this.dataList = res.data
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
        })
    },
    comment() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang='scss' scoped>
.metaData .rankingList .rankingTd[data-v-ee1f2d90]:hover {
  background-color: #3954ff !important;
}
.metaData {
  font-size: 0.14rem;
  padding: 0px 1.1rem;
  .metaDataTop {
    height: 0.42rem;
    display: flex;
    margin-top: 0.3rem;
    .picBox {
      height: 0.3rem;
      width: 0.6rem;
      background: #11175d;
      border-radius: 0.08rem;
      border-radius: 0.08rem;
      margin-top: 0.05rem;
      cursor: pointer;
      text-align: center;
      .pic {
        margin-top: 0.04rem;
      }
    }
    .bank {
      font-size: 0.3rem;
      font-weight: 600;
      margin: 0.05rem 0.2rem 0 0.1rem;
    }
    .Identifier {
      margin-left: 0.3rem;
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
    margin: 0rem 0 0.1rem 0.1rem;
    background: url('../assets/img/node/3.button.svg');
    width: 2.69rem;
    height: 0.4rem;
    margin-bottom: 20px;
    .text {
      text-align: center;
      line-height: 0.4rem;
    }
  }
  .rankingTh {
    display: flex;
  }
  .rankingList {
    height: 3.5rem;
    padding: 0px 0.1rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    .rankingTd {
      width: 5rem;
      height: 0.4rem;
      background: #0c0e26;
      border-radius: 0.04rem;
      display: flex;
      margin: 0.05rem 0.1rem 0.05rem 0;
      line-height: 0.4rem;
      font-family: PingFangSC-Regular;
      font-size: 0.14rem;
    }
  }
  #xh {
    text-align: center;
    width: 5rem;
    .order {
      width: 0.2rem;
      height: 0.2rem;
      border-radius: 50%;
      margin: 0.1rem 0.2rem 0;
      background-color: #3f4590;
      .num {
        text-align: center;
        line-height: 0.2rem;
      }
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
.content {
  position: absolute;
  padding: 0.2rem 0.1rem;
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
// /deep/ .x-hidden,
// .app-hidden,
// .el-scrollbar__wrap {
//   margin-bottom: 0px;
//   margin-right: 0px;
// }
/deep/ .el-pagination__total {
  height: 0.28rem;
  width: 0.5rem;
}
</style>