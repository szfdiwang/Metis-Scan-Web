<template>
  <div class="TakDetail">
    <div class="TakDetailTop">
      <div class="pic" @click="$router.push('/node/NodeDetail')">
        <img src="../../assets/img/node/3.icon1.svg" alt="" style="line-height: 0.42rem" />
      </div>
      <div class="bank">XXXBANK</div>
      <div class="Identifier">Identifier：{{ this.id || this.Id }}</div>
    </div>
    <div class="steps">
      <div class="stepper">
        <!-- <el-steps>
          <el-step description="Task started">
            <template slot="description">
              <div>{{ formatDate(taskList.createAt) }}</div>
              <div>Task started</div>
            </template>
          </el-step>
          <el-step>
            <template slot="description">
              <div>{{ formatDate(taskList.startAt) }}</div>
              <div>Computation succeeded</div>
            </template>
          </el-step>
        </el-steps> -->
        <!-- <div class="ste"></div> -->
        <div class="ste">
          <div class="ste1">
            <div style="width: 2rem;margin:0.2rem 0 0 -0.3rem ;">{{ formatDate(taskList.createAt) }}</div>
            <div style="width: 1rem;margin: -0.1rem;">Task started</div>
          </div>
          <div class="ste2">
            <div style="margin: 0.1rem 0 0 2.8rem ;">
              Time spent: 12:22:59
            </div>
          </div>
          <div class="ste3">
              <div style="width: 2rem;margin:0.2rem 0 0 -0.3rem">{{ formatDate(taskList.startAt) }}</div>
              <div style="width: 2rem;margin: -0.1rem  0 0 -0.3rem;">Computation succeeded</div>
          </div>
        </div>
      </div>
      <div class="btn" @click="log">{{ $t('task.VIEWTHETASKEVENTS') }}</div>
    </div>
    <div v-if="isShow">
      <div class="participants">
        <img src="../../assets/img/node/3.button.svg" alt="" />
        <span class="text" style="margin-left: 0.1rem">{{ $t('task.taskSponsor') }}</span>
      </div>
      <div class="participantsData">
        <div>
          <span style="margin-left: 1.3rem">{{ $t('task.Name') }}</span>
          <span style="margin-left: 2.66rem">{{ $t('task.Id') }}</span>
        </div>
        <div class="td">
          <span style="margin-left: 1.3rem">{{ sponsor.orgName }}</span>
          <span style="margin-left: 2.05rem"> {{ sponsor.identityId }}</span>
        </div>
      </div>
      <div>
        <div class="participants">
          <img src="../../assets/img/node/3.button.svg" alt="" />
          <span class="text">{{ $t('task.ResultReceiver') }}</span>
        </div>
        <div class="ResultReceiverTh">
          <div style="width: 1.22rem">
            <span style="padding-left: 0.2rem">{{ $t('task.No') }}</span>
          </div>
          <div style="width: 3.1rem">{{ $t('task.Name') }}</div>
          <div style="width: 3rem">{{ $t('task.Id') }}</div>
        </div>
        <div class="ResultReceiverTd" v-for="(item, index) in taskResult" :key="index">
          <div class="order">
            <span>{{ index + 1 }}</span>
          </div>
          <div style="width: 3.1rem; margin-left: 0.8rem">{{ item.orgName }}</div>
          <div style="width: 3rem">{{ item.identityId }}</div>
        </div>
      </div>
      <div class="Data" style="margin-bottom: 0.4rem">
        <div class="dataPic">
          <img src="../../assets/img/node/3.button.svg" alt="" />
          <span class="text">{{ $t('task.DATAPROVIDERS') }}</span>
        </div>
        <div class="precedence">
          <div style="width: 1.2rem">
            <span style="padding-left: 0.2rem">{{ $t('task.No') }}</span>
          </div>
          <div style="width: 3.12rem">{{ $t('task.Name') }}</div>
          <div style="width: 4.21rem">{{ $t('task.Id') }}</div>
          <div style="width: 3rem">{{ $t('task.MetadataNameID') }}</div>
        </div>
        <div class="precedenceData" v-for="(item, index) in taskDataProviderList" :key="index">
          <div style="width: 1.24rem">
            <div id="xh">
              <div class="order">
                {{ index + 1 }}
              </div>
            </div>
          </div>
          <div style="width: 3.12rem">{{ item.dynamicFields.orgName }}</div>
          <div style="width: 4.21rem">{{ item.dynamicFields.identityId }}</div>
          <div style="width: 3rem" class="taskId">
            <div>{{ item.dynamicFields.resourceName }}</div>
            <div style="margin-left: 0.2rem">{{ item.taskId }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 2 -->
    <div class="Data" style="margin-top: 0.1rem" v-if="isShow">
      <div class="dataPic">
        <img src="../../assets/img/node/3.button.svg" alt="" />
        <span class="text">{{ $t('task.PROVIDERS') }}</span>
      </div>
      <div class="precedence pres">
        <div style="width: 1.24rem">
          <span style="padding-left: 0.2rem">{{ $t('task.No') }}</span>
        </div>
        <div style="width: 3.12rem">{{ $t('task.Name') }}</div>
        <div style="width: 4.21rem">{{ $t('task.Id') }}</div>
        <div style="width: 3rem">{{ $t('task.OccupiedResources') }}</div>
      </div>
      <div class="precedenceData" v-for="(item, index) in taskPowerprovider" :key="index">
        <div style="width: 1.24rem">
          <div id="xh">
            <div class="order">
              {{ index + 1 }}
            </div>
          </div>
        </div>
        <div style="width: 3.12rem">{{ item.dynamicFields.orgName }}</div>
        <div style="width: 4.21rem">{{ item.identityId }}</div>
        <div style="width: 7rem" class="data">
          <span>CPU ：{{ item.usedCore }}</span>
          <span style="margin: 0px 0.5rem">{{ $t('node.Memory') }} ：{{ item.usedMemory }}</span>
          <span>{{ $t('node.Bandwidth') }} ： {{ item.usedBandwidth }}</span>
        </div>
      </div>
    </div>
    <!-- 日志板块 -->
    <div class="TaskLog" v-if="show">
      <div class="TaskLogTh">
        <div style="width: 1.24rem">
          <span>{{ $t('node.No') }}</span>
        </div>
        <div style="width: 3.12rem">{{ $t('log.EventType') }}</div>
        <div style="width: 4.19rem">{{ $t('log.EVentMaker') }}</div>
        <div style="width: 3.7rem">{{ $t('log.GenerationTime') }}</div>
        <div>{{ $t('log.EventFailed') }}</div>
      </div>
      <div class="TaskLogTd" v-for="(item, index) in logList" :key="index">
        <div style="width: 1.24rem; padding: 0px 0.1rem">
          <div id="xh">
            <div class="order">
              {{ index + 1 }}
            </div>
          </div>
        </div>
        <div style="width: 3.12rem">{{ item.eventType }}</div>
        <div style="width: 4.19rem">{{ item.dynamicFields.orgName }}</div>
        <div style="width: 3.7rem">{{ formatDate(item.eventAt) }}</div>
        <div>{{ item.eventContent }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { taskApi } from '../../api/index'
import { formatDate } from '../../utils/tiem'
console.log('taskApi', taskApi)
export default {
  data() {
    return {
      show: false,
      id: '',
      taskList: {},
      sponsor: {},
      taskResult: [],
      taskPowerprovider: [],
      taskDataProviderList: [],
      logList: [],
      Id: '',
      isShow: true
    }
  },
  created() {
    this.id = this.$route.query.id
    this.Id = this.$route.query.identId
    if ((this.id = this.$route.query.id)) {
      this.getTask()
    } else {
      this.getTasks()
    }
    if ((this.id = this.$route.query.id)) {
      this.getlogs()
    } else {
      this.getlog()
    }
  },
  methods: {
    log() {
      this.show = !this.show
      this.isShow = !this.isShow
    },
    async getTask() {
      const res = await taskApi.getTaskDetail({
        taskId: this.id
      })
      this.taskList = res.data
      this.sponsor = res.data.sponsor
      this.taskResult = res.data.taskResultReceiverList
      this.taskPowerprovider = res.data.taskPowerProviderList
      this.taskDataProviderList = res.data.taskDataProviderList
      console.log('任务详情', res)
    },
    // 任务页面跳转
    async getTasks() {
      const res = await taskApi.getTaskDetail({
        taskId: this.Id
      })
      this.taskList = res.data
      this.sponsor = res.data.sponsor
      this.taskResult = res.data.taskResultReceiverList
      this.taskPowerprovider = res.data.taskPowerProviderList
      this.taskDataProviderList = res.data.taskDataProviderList
      console.log('任务详情', res)
    },
    async getlog() {
      const res = await taskApi.getListTaskLog({
        taskId: this.Id
      })
      this.logList = res.data
      console.log('日志', res)
    },
    async getlogs() {
      const res = await taskApi.getListTaskLog({
        taskId: this.id
      })
      this.logList = res.data
    },
    formatDate(time) {
      return formatDate(time, 'YYYY-MM-DD HH:mm:ss')
    }
  }
}
</script>
<style  lang='scss' scoped>
.TakDetail {
  padding: 0 1.1rem;
  line-height: 0.42rem;
  .TakDetailTop {
    height: 0.42rem;
    display: flex;
    margin-bottom: 0.1rem;
    .pic {
      line-height: 0.5rem;
      margin-right: 0.1rem;
    }
    .bank {
      font-size: 0.3rem;
      font-weight: 600;
      margin-right: 0.35rem;
    }
    .Identifier {
      line-height: 0.55rem;
    }
  }
  .steps {
    height: 1.57rem;
    background-image: linear-gradient(180deg, rgba(129, 170, 255, 0.1) 0%, rgba(2, 29, 83, 0.2) 100%);
    border: 1px solid #1d3a75;
    border-radius: 0.02rem;
    margin: 0.2rem 0 0.4rem 0;
    display: flex;
    position: relative;
    .stepper {
      width: 6.37rem;
      padding-top: 0.45rem;
      margin-left: 1.96rem;
    }
    .btn {
      width: 1.99rem;
      height: 0.4rem;
      background: #3954ff;
      border-radius: 0.08rem;
      text-align: center;
      position: absolute;
      top: 0.6rem;
      right: 1.6rem;
      font-size: 0.14rem;
    }
  }
  .participants {
    margin: 0 0.2rem;
    position: relative;
    .text {
      position: absolute;
      left: 0.9rem;
    }
  }
  .participantsData {
    padding: 0px 0.2rem;
    .td {
      background: #080c3d;
      border-radius: 0.04rem;
      height: 0.4rem;
      margin-bottom: 0.4rem;
    }
  }
  .Data {
    background-size: 100%;
    padding: 0px 0.2rem;
    .dataPic {
      margin: 0.4rem 0 0 0;
      position: relative;
      .text {
        position: absolute;
        left: 0.9rem;
      }
    }
    .precedence {
      display: flex;
      margin-bottom: -0.15rem;
    }
    .precedenceData {
      background: #080c3d;
      border-radius: 0.04rem;
      margin: 0.1rem 0;
      display: flex;
    }
  }
  // 日志模块
  .TaskLog {
    padding: 0.4rem;
    .TaskLogTh {
      display: flex;
    }
    .TaskLogTd {
      display: flex;
      width: 18.4rem;
      height: 0.4rem;
      background: #080c3d;
      border-radius: 0.04rem;
      margin: 0.1rem 0px;
      align-items: center;
    }
  }
  .order {
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    background-color: #3f4590;
    text-align: center;
    line-height: 0.2rem;
    margin-top: 0.1rem;
    margin-left: 0.2rem;
  }
  .taskId {
    display: flex;
  }
}
/deep/ .el-step__line {
  background-color: #3954ff;
}
// .ste {
//   width: 0.23rem;
//   height: 0.23rem;
//   border-radius: 50%;
//   background-color: red;
//   position: absolute;
//   top: 0.58rem;
//   left: 8.5rem;
// }
/deep/ .el-step__icon {
  background-color: #3954ff;
  border: 0;
  font-size: 0;
}
.ResultReceiverTh {
  display: flex;
  padding: 0 0.2rem;
}
.ResultReceiverTd {
  background: #080c3d;
  border-radius: 0.04rem;
  height: 0.4rem;
  display: flex;
  margin: 0 0.2rem 0.1rem 0.2rem;
}
.ste {
  display: flex;
  .ste1 {
    width: 0.23rem;
    height: 0.23rem;
    border-radius: 50%;
    background-color: #3954ff;
  }
  .ste2 {
    width: 6rem;
    height: 0.02rem;
    margin-top: 0.1rem;
    background-color: #3954ff;
  }
  .ste3 {
    width: 0.23rem;
    height: 0.23rem;
    border-radius: 50%;
    background-color: #5bc49f;
  }
}
</style>