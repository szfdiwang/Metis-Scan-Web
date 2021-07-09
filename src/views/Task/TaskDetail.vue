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
        <el-steps :active="1">
          <el-step title="2020-03-13 10:01:03" description="Task started"> </el-step>
          <el-step title="2020-03-13 10:01:23" description="Computation Succeeded"></el-step>
          <el-step title="2020-03-13 10:01:23" description="Computation failed"></el-step>
        </el-steps>
      </div>
      <!-- <div class="btn" @click="$router.push('/task/TaskLog')">{{ $t('task.VIEWTHETASKEVENTS') }}</div> -->
      <div class="btn" @click="$router.push('/task/TaskLog')">{{ $t('task.VIEWTHETASKEVENTS') }}</div>
    </div>
    <div class="participants">
      <img src="../../assets/img/node/3.button.svg" alt="" />
      <span class="text">{{ $t('task.PARTICIPANTSINFORMATION') }}</span>
    </div>
    <div class="participantsData">
      <table>
        <tbody>
          <tr>
            <td>{{ $t('task.sponsor') }} :</td>
            <td>{{ sponsor.orgName }}</td>
            <td>{{ $t('task.Id') }} ： {{ sponsor.identityId }}</td>
          </tr>
          <tr v-for="(item, index) in taskResult" :key="index">
            <td>{{ $t('task.ResultReceiver') }} :</td>
            <td>{{ index + 1 }} . {{ item.orgName }}</td>
            <td>{{ $t('task.Id') }} ：{{ item.identityId }}</td>
          </tr>
          <!-- <tr>
            <td>{{ $t('task.AlgorithmProvider') }} :</td>
            <td>{{}}</td>
            <td>{{ $t('task.Id') }} ：XXXXXXXXXXXXXXXXXXXXX</td>
          </tr> -->
        </tbody>
      </table>
    </div>
    <div class="Data" style="margin-bottom: 3rem">
      <div class="dataPic">
        <img src="../../assets/img/node/3.button.svg" alt="" />
        <span class="text">{{ $t('task.DATAPROVIDERS') }}</span>
      </div>
      <div class="precedence">
        <div style="width: 1.2rem">{{ $t('node.No') }}</div>
        <div style="width: 3.12rem">{{ $t('task.Name') }}</div>
        <div style="width: 5.21rem">{{ $t('task.Id') }}</div>
        <div style="width: 3rem">{{ $t('task.MetadataNameID') }}</div>
      </div>
      <div class="precedence precedenceData" v-for="(item, index) in taskDataProviderList" :key="index">
        <div style="width: 1.24rem">
          <div id="xh">
            <div v-if="index > 2" class="order">
              {{ index + 1 }}
            </div>
            <img v-if="index === 0" src="../../assets/img/excel/1.svg" alt="" />
            <img v-if="index === 1" src="../../assets/img/excel/2.svg" alt="" />
            <img v-if="index === 2" src="../../assets/img/excel/3.svg" alt="" />
          </div>
        </div>
        <div style="width: 3.12rem">{{ item.dynamicFields.orgName }}</div>
        <div style="width: 5.21rem">{{ item.dynamicFields.identityId }}</div>
        <div style="width: 3rem" class="taskId">
          <div>{{ item.dynamicFields.resourceName }}</div>
          <div style="margin-left: 10px">{{ item.taskId }}</div>
        </div>
      </div>
    </div>

    <!-- 2 -->
    <div class="Data" style="margin-top: 0.1rem">
      <div class="dataPic">
        <img src="../../assets/img/node/3.button.svg" alt="" />
        <span class="text">{{ $t('task.PROVIDERS') }}</span>
      </div>
      <div class="precedence pres">
        <div style="width: 1.24rem">{{ $t('node.No') }}</div>
        <div style="width: 3.12rem">{{ $t('task.Name') }}</div>
        <div style="width: 5.21rem">{{ $t('task.Id') }}</div>
        <div style="width: 3rem">{{ $t('task.OccupiedResources') }}</div>
      </div>
      <div class="precedence precedenceData" v-for="(item, index) in taskPowerprovider" :key="index">
        <div style="width: 1.24rem">
          <div id="xh">
            <div v-if="index > 2" class="order">
              {{ index + 1 }}
            </div>
            <img v-if="index === 0" src="../../assets/img/excel/1.svg" alt="" />
            <img v-if="index === 1" src="../../assets/img/excel/2.svg" alt="" />
            <img v-if="index === 2" src="../../assets/img/excel/3.svg" alt="" />
          </div>
        </div>
        <div style="width: 3.12rem">{{ item.dynamicFields.orgName }}</div>
        <div style="width: 5.21rem">{{ item.identityId }}</div>
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
        <div style="width: 1.24rem">NO.</div>
        <div style="width: 3.12rem">Event type</div>
        <div style="width: 4.19rem">EVent maker</div>
        <div style="width: 3.7rem">Generation time</div>
        <div>Event failed</div>
      </div>
      <div class="TaskLogTd" v-for="(item, index) in 5" :key="index">
        <div style="width: 1.24rem"></div>
        <div style="width: 3.12rem">xxxxxxxxxxx</div>
        <div style="width: 4.19rem">xxxxxxxxxxxxxxx</div>
        <div style="width: 3.7rem">2021-2-2 12:23:59</div>
        <div>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
      </div>
    </div>
  </div>
</template>
<script>
import { taskApi } from '../../api/index'
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
      Id: ''
    }
  },
  created() {
    this.id = this.$route.query.id
    this.Id = this.$route.query.identId
    this.getlog()
    if ((this.id = this.$route.query.id)) {
      this.getTask()
    } else {
      this.getTasks()
    }
  },
  methods: {
    TaskLog() {
      this.show = !this.show
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
        taskId: this.id
      })
      console.log('日志', res)
    }
  }
}
</script>
<style  lang='scss' scoped>
.TakDetail {
  font-size: 0.16rem;
  // height: 1500px;
  padding: 0.2rem;
  line-height: 0.42rem;
  background: url('../../assets/img/home/bj1.png');
  .TakDetailTop {
    height: 0.42rem;
    display: flex;
    margin-bottom: 0.1rem;
    .pic {
      line-height: 0.5rem;
      margin-left: 0.2rem;
    }
    .bank {
      font-size: 0.3rem;
      font-weight: 600;
      margin: 0.02rem 0.2rem;
    }
    .Identifier {
      line-height: 0.6rem;
    }
  }
  .steps {
    height: 1.57rem;
    background-image: linear-gradient(180deg, rgba(129, 170, 255, 0.1) 0%, rgba(2, 29, 83, 0.2) 100%);
    border: 1px solid #1d3a75;
    border-radius: 0.02rem;
    margin: 0.2rem 0.2rem;
    display: flex;
    position: relative;
    .stepper {
      width: 11.37rem;
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
    margin-left: 0.28rem;
    position: relative;
    .text {
      position: absolute;
      left: 0.6rem;
    }
  }
  .participantsData {
    padding: 0.15rem 0.4rem;
    tr {
      // padding-bottom: 10px;
      td {
        padding-right: 1rem;
      }
    }
  }
  .Data {
    padding: 0.2rem;
    height: 3.53rem;
    background: url('../../assets/img/node/4.边框.png');
    background-size: 100%;
    margin-bottom: 0.5rem;
    .dataPic {
      margin-left: 0.04rem;
      position: relative;
      .text {
        position: absolute;
        left: 0.5rem;
      }
    }
    .precedence {
      display: flex;
      padding: 0px 0.15rem;
      width: 18.4rem;
    }
    .precedenceData {
      width: 18.4rem;
      height: 0.4rem;
      background: #080c3d;
      border-radius: 0.04rem;
      line-height: 0.4rem;
      margin: 0.1rem 0;
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
  }
  .taskId {
    display: flex;
  }
}
</style>