<template>
  <div class="NodeDetail">
    <div class="NodeDetailTop">
      <div class="pic" @click="$router.push('/node/index')">
        <img src="../../assets/img/node/3.icon1.svg" alt="" style="line-height: 0.42rem" />
      </div>
      <div class="bank">XXXBANK</div>
      <div class="Identifier">Identifier：XXXXXXXXXXXXXXXXXXXXX</div>
    </div>
    <div style="text-align: center">
      <img src="../../assets/img/node/3.title.svg" alt="" />
    </div>
    <div>
      <basic-area-chart></basic-area-chart>
    </div>
    <div class="conent">
      <!-- <div class="conentTop">
        <div class="Metadata">{{ $t('node.metadata') }}：100</div>
        <div class="Tasks">{{ $t('node.Tasks') }}：200</div>
      </div> -->
    </div>
    <div class="tab">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane name="first" label="用户管理">
          <div slot="label" :class="{ active: index == '0' }" class="Metadatayy">{{ $t('node.metadata') }}：100</div>
          <div class="conent">
            <div class="ranking">
              <div class="rankingTh">
                <div style="width: 1.24rem">{{ $t('data.No') }}</div>
                <div style="width: 3.8rem">{{ $t('data.NameIdentifier') }}</div>
                <div style="width: 2.5rem">{{ $t('data.Identifier') }}</div>
                <div style="width: 2.9rem">{{ $t('node.Size') }}</div>
                <div style="width: 2.54rem">{{ $t('node.Columns') }}</div>
                <div style="width: 2.62rem">{{ $t('node.Rows') }}</div>
                <div>{{ $t('data.ParticipatedTasks') }}</div>
              </div>
            </div>
            <div class="rankingTd" v-for="(item, index) in DataList" :key="index">
              <div style="width: 1.24rem" class="rankingTdImg">
                <div id="xh">
                  <div v-if="index > 2" class="order">
                    {{ index + 1 }}
                  </div>
                  <img v-if="index === 0" src="../../assets/img/excel/1.svg" alt="" />
                  <img v-if="index === 1" src="../../assets/img/excel/2.svg" alt="" />
                  <img v-if="index === 2" src="../../assets/img/excel/3.svg" alt="" />
                </div>
              </div>
              <!-- <BasicAreaChart></BasicAreaChart> -->
              <div style="width: 3.8rem">
                <div>{{ item.fileName }}数据</div>
                <div>{{ item.identityId }}</div>
              </div>
              <div style="width: 2.5rem; color: #fec43e" @click="$router.push('/node/metaData')">
                {{ $t('node.Detail') }}
              </div>
              <div style="width: 2.9rem">{{ item.size }}0MB</div>
              <div style="width: 2.54rem">{{ item.columns }}</div>
              <div style="width: 2.62rem">{{ item.rows }}</div>
              <div>{{ item.dynamicFields.taskCount }}</div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane name="second" label="用户管理" stretch="true">
          <div slot="label" :class="{ active: index == '1' }">{{ $t('node.Tasks') }}：100</div>
          <div class="conent">
            <div class="ranking">
              <div class="rankingTh">
                <div style="width: 1.24rem">{{ $t('task.No') }}</div>
                <div style="width: 3.8rem">{{ $t('task.NameIdentifier') }}</div>
                <div style="width: 1.99rem">{{ $t('task.Identifier') }}</div>
                <div style="width: 2.7rem">{{ $t('task.Capacity') }}</div>
                <div style="width: 2.04rem">{{ $t('node.Columns') }}</div>
                <div style="width: 2.04rem">{{ $t('task.Status') }}</div>
                <div style="width: 2.62rem">{{ $t('task.StartTime') }}</div>
                <div>{{ $t('task.TimeSpent') }}</div>
              </div>
            </div>
            <div class="rankingTd" v-for="(item, index) in 5" :key="index">
              <div style="width: 1.24rem" class="rankingTdImg">
                <div id="xh">
                  <div v-if="index > 2" class="order">
                    {{ index + 1 }}
                  </div>
                  <img v-if="index === 0" src="../../assets/img/excel/1.svg" alt="" />
                  <img v-if="index === 1" src="../../assets/img/excel/2.svg" alt="" />
                  <img v-if="index === 2" src="../../assets/img/excel/3.svg" alt="" />
                </div>
              </div>
              <div style="width: 3.8rem">
                <div>xxxxxxxxx任务</div>
                <div>xxxxxxxxxxxxxxxxxxxx</div>
              </div>
              <div style="width: 1.99rem; color: #fec43e" @click="$router.push('/task/TaskDetail')">
                {{ $t('node.Detail') }}
              </div>
              <div style="width: 2.7rem">XXX BANK</div>
              <div style="width: 2.04rem">10</div>
              <div style="width: 2.04rem">{{ $t('task.Succeeded') }}</div>
              <div style="width: 2.62rem">2021-1-22 13:00:00</div>
              <div>12:22:59</div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
      <Pagination class="Pagination"></Pagination>
    </div>
  </div>
</template>
<script>
import BasicAreaChart from './components/BasicAreaChart.vue'
import Pagination from '../../components/Pagination.vue'
import { dataApi, nodeApi } from '../../api/index'
console.log('dataApi', dataApi)
export default {
  components: { BasicAreaChart, Pagination },
  data() {
    return {
      index: '0',
      activeName: 'first',
      DataList: [],
      id: ''
    }
  },
  created() {
    this.listData()
    this.getParams()
    this.getOrgInfo()
  },
  methods: {
    handleClick(tab) {
      console.log(tab)
      this.index = tab.index
    },
    async listData() {
      const res = await dataApi.getListDataFileBy({
        identityId: 'identityId_000001',
        pageNo: 1,
        pageSize: 5
      })
      this.DataList = res.data
    },
    getParams() {
      this.id = this.$route.params.identityId
      console.log('标', this.id)
    },
    // async getOrgInfo() {
    //   const res = await nodeApi.getOrgListOrgInfo({
    //     identityId: this.id
    //   })
    //   console.log('1', identityId)
    // }
    // async getData() {
    //   const res = await dataApi.getDataFile({
    //     identityId: 'identityId_000001'
    //   })
    //   console.log('元数据', res)
    // }
  }
}
</script>
<style lang='scss' scoped>
.active {
  background-color: #3954ff !important;
  margin: 0px 0px !important;
}
.NodeDetail {
  height: 1000px;
  padding: 0.2rem;
  line-height: 0.42rem;
  background: url('../../assets/img/home/bj1.png');
  .NodeDetailTop {
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
      line-height: 0.6rem;
    }
  }
  .conent {
    padding: 0px 0.2rem;
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
  /deep/ .el-tabs__active-bar {
    background-color: transparent;
  }
  /deep/ ::after {
    display: none;
  }
  /deep/ #tab-first {
    margin: 0px 10px 0px 40px;
    width: 2.41rem;
    height: 0.4rem;
    text-align: center;
    color: #eee;
    background: #11175d;
    transform: rotateZ(10deg) skew(-10deg, -10deg);
  }
  /deep/ #tab-second {
    width: 2.41rem;
    height: 0.4rem;
    text-align: center;
    color: #eee;
    background: #11175d;
    transform: rotateZ(10deg) skew(-10deg, -10deg);
  }
  .Pagination {
    margin: 0.1rem 0.3rem;
  }
}
/deep/ .el-tabs__item {
  padding: 0px;
}
.order {
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
  background-color: #3f4590;
  text-align: center;
  line-height: 0.2rem;
  margin-left: 0.2rem;
}
</style>