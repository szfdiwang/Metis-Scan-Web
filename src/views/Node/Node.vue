<template>
  <div class="nodeBox">
    <div class="imgBox">
      <div class="topImg">
        <div><img src="../../assets/img/切图/2.bj1.png" /></div>
        <div><img src="../../assets/img/切图/2.bj1.png" /></div>
        <div class="textNode">{{ $t('node.NODE') }}</div>
        <div class="text">{{ $t('node.PARTICIPATINGNODESINTHEWHOLENETWORK') }}</div>
      </div>
    </div>
    <div class="ranking">
      <div class="rankingTh">
        <div style="width: 124px">{{ $t('node.No') }}</div>
        <div style="width: 380px">{{ $t('node.NameIdentifier') }}</div>
        <div style="width: 199px">{{ $t('node.Identifier') }}</div>
        <div style="width: 418px">{{ $t('node.ComputingPower') }}</div>
        <div style="width: 204px">{{ $t('node.Metadata') }}</div>
        <div style="width: 262px">{{ $t('node.ParticipatedTasks') }}</div>
        <div>{{ $t('node.ActiveDegree') }}</div>
      </div>
      <div class="rankingTd" v-for="(item, index) in 5" :key="index">
        <div style="width: 124px" class="rankingTdImg">
          <div>
            <img src="../../assets/img/2.表格及其他/1.svg" alt="" />
          </div>
          <div>
            <img src="../../assets/img/切图/2.icon3.svg" alt="" />
          </div>
        </div>
        <div style="width: 380px">
          <div>xxxxxxxxx银行</div>
          <div>xxxxxxxxxxxxxxxxxxxx</div>
        </div>
        <div style="width: 199px; color: #fec43e">detail</div>
        <div style="width: 418px" class="power">
          <div>
            <div>CPU:xxx</div>
            <div>Memory:xxx</div>
            <div>Bandwidth:xxx</div>
          </div>
          <div>
            <div>Remaining:xxx%</div>
            <div>Remaining:xxx%</div>
            <div>Remaining:xxx%</div>
          </div>
        </div>
        <div style="width: 204px">100</div>
        <div style="width: 262px">2%</div>
        <div>
          <div>
            <img src="../../assets/img/2.表格及其他/hot.svg" alt="" />
            <img src="../../assets/img/2.表格及其他/hot.svg" alt="" />
            <img src="../../assets/img/2.表格及其他/hot.svg" alt="" />
            <img src="../../assets/img/2.表格及其他/hot.svg" alt="" />
          </div>
          <div>
            <img src="../../assets/img/2.表格及其他/hot.svg" alt="" />
            <img src="../../assets/img/2.表格及其他/hot.svg" alt="" />
            <img src="../../assets/img/2.表格及其他/hot.svg" alt="" />
            <img src="../../assets/img/2.表格及其他/hot.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="Pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 10,
      page: {
        page: 1,
        size: 5,
        total: 10
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.nodeBox {
  height: 1000px;
  background: url('../../assets/img/home/bj1.png');
  padding: 0px 20px;
  .imgBox {
    position: relative;
    padding-bottom: 10px;
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
        top: 35px;
        font-size: 30px;
      }
      .text {
        position: absolute;
        left: 2rem;
        top: 35px;
        font-size: 25px;
      }
    }
  }
  .rankingTh {
    margin: 10px;
    display: flex;
  }
  .rankingTd {
    margin: 10px;
    width: 1840px;
    height: 94px;
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
        margin-right: 20px;
      }
    }
  }
  .Pagination {
    width: 1840px;
    height: 40px;
    background: #080c3d;
    border-radius: 4px;
  }
  /deep/ .el-select el-select--mini {
    margin-left: 1600px;
  }
}
</style>
