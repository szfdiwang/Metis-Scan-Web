<template>
  <div class="nodeBox">
    <div class="imgBox">
      <div class="topImg">
        <div><img src="../../assets/img/node/2.bj1.png" /></div>
        <div><img src="../../assets/img/node/2.bj1.png" /></div>
        <div class="textNode">{{ $t('node.NODE') }}</div>
        <div class="text">{{ $t('node.PARTICIPATINGNODESINTHEWHOLENETWORK') }}</div>
      </div>
    </div>
    <div class="ranking">
      <div class="rankingTh">
        <div style="width: 1.24rem">{{ $t('node.No') }}</div>
        <div style="width: 3.8rem">{{ $t('node.NameIdentifier') }}</div>
        <div style="width: 1.99rem">{{ $t('node.Identifier') }}</div>
        <div style="width: 4.18rem">{{ $t('node.ComputingPower') }}</div>
        <div style="width: 2.04rem">{{ $t('node.Metadata') }}</div>
        <div style="width: 2.62rem">{{ $t('node.ParticipatedTasks') }}</div>
        <div>{{ $t('node.ActiveDegree') }}</div>
      </div>
      <div class="rankingTd" v-for="(item, index) in data" :key="index">
        <div style="width: 1.24rem" class="rankingTdImg">
          <div>
            <img src="../../assets/img/excel/1.svg" alt="" />
          </div>
          <!-- <div>
            <img src="../../assets/img/node/2.icon3.svg" alt="" />
          </div> -->
        </div>
        <div style="width: 3.8rem">
          <div>{{ item.orgName }}银行</div>
          <div id="id" class="icoFontlist">{{ item.identityId }}</div>
        </div>
        <div style="width: 1.99rem; color: #fec43e" @click="Detail(item.identityId)">
          {{ $t('node.Detail') }}
        </div>
        <div style="width: 4.18rem" class="power">
          <div>
            <div>CPU: {{ item.accumulativeCore }}</div>
            <div>{{ $t('node.Memory') }}: {{ item.accumulativeMemory }}</div>
            <div>{{ $t('node.Bandwidth') }}: {{ item.accumulativeBandwidth }}</div>
          </div>
          <div>
            <div>{{ $t('node.Remaining') }}: xxx%</div>
            <div>{{ $t('node.Remaining') }}: xxx%</div>
            <div>{{ $t('node.Remaining') }}: xxx%</div>
          </div>
        </div>
        <div style="width: 2.04rem">{{ item.accumulativeDataFileCount }}</div>
        <div style="width: 2.62rem">2%</div>
        <div>
          <div class="hot">
            <div v-for="(item, index) in hot" :key="index" style="margin: 0px 2px">
              <img src="../../assets/img/excel/hot.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="Pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[4, 100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { nodeApi } from '../../api/index'
console.log('nodeApi', nodeApi)
export default {
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
      },
      hot: '0',
      data: [],
      imgList: [
        <img src="../../assets/img/excel/1.svg" alt="" />,
        <img src="../../assets/img/excel/2.svg" alt="" />,
        <img src="../../assets/img/excel/3.svg" alt="" />
      ]
    }
  },
  created() {
    this.getListOrgInfo()
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    async getListOrgInfo() {
      const res = await nodeApi.getOrgListOrgInfo({
        pageNo: 1,
        pageSize: 5
      })
      this.data = res.data
      this.hot = res.data[0].status
      console.log('123', this.data)
      console.log('刘', res)
    },
    async Detail(value) {
      this.$router.push('/node/NodeDetail')
      // const res = await nodeApi.getOrgListOrgInfo({
      //   identityId: '1'
      // })
      const res = await nodeApi.getFindOrgInfo({
        identityId: value
      })
      console.log('7777', res)
    }
    //   async getInfo() {
    //     const res = await nodeApi.getFindOrgInfo({
    //       identityId: '8e16232fa7972262787a6152caa982530f75806e6025c2507e969542bae27377'
    //     })
    //     console.log('liujun', res)
    //   }
  }
}
</script>
<style lang="scss" scoped>
.nodeBox {
  height: 1000px;
  background: url('../../assets/img/home/bj1.png');
  padding: 0px 0.2rem;
  .imgBox {
    position: relative;
    padding-bottom: 0.1rem;
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
        top: 0.35rem;
        font-size: 30px;
      }
      .text {
        position: absolute;
        left: 2rem;
        top: 0.35rem;
        font-size: 0.25rem;
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
  .Pagination {
    width: 18.4rem;
    height: 0.4rem;
    background: #080c3d;
    border-radius: 0.04rem;
    margin-left: 0.1rem;
  }
  /deep/ .el-select el-select--mini {
    margin-left: 16rem;
  }
  #id {
    overflow: hidden;
    word-break: keep-all;
    text-overflow: ellipsis;
    width: 180px;
  }
  .hot {
    display: flex;
  }
}
</style>
