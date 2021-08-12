<template>
  <div class="TaskDetail">
    <div class="TaskDetailTop">
      <div class="picBox" @click="back">
        <img src="../assets/img/node/3.icon1.svg" alt="" class="pic" />
      </div>
      <div class="bank">XXXBANK</div>
      <div class="Identifier">Identifier：{{ this.id || this.Id }}</div>
    </div>
    <div class="steps">
      <div class="stepper">
        <div class="ste">
          <div class="ste1">
            <div style="width: 2rem; margin: 0.2rem 0 0 -0.4rem">
              {{ dayjs(taskList.createAt).format('YYYY-MM-DD HH:mm:ss') }}
            </div>
            <div style="width: 1rem; margin: -0.1rem 0 0 -0.3rem">
              {{ $t('task.TaskStarted') }}
            </div>
          </div>
          <div class="ste2">
            <div style="margin: 0.1rem 0 0 2.5rem">
              Time spent : {{ formatDuring(dayjs(taskList.endAt).valueOf() - dayjs(taskList.createAt).valueOf()) }}
            </div>
          </div>
          <div class="ste3">
            <div style="width: 2rem; margin: 0.2rem 0 0 -0.4rem">
              {{ dayjs(taskList.startAt).format('YYYY-MM-DD HH:mm:ss') }}
            </div>
            <div style="width: 1.9rem; margin: -0.1rem 0 0 -0.8rem; color: #5bc49f">
              <div style="text-align: center">
                {{ $t('task.ComputationSucceeded') }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="btn" @click="log" style="cursor: pointer">
        <span v-if="isHowse">{{ $t('task.VIEWTHETASKEVENTS') }}</span>
        <span v-if="isHows">{{ $t('task.return') }}</span>
      </div>
    </div>
    <div class="content" v-if="isShow">
      <div>
        <div class="participants">
          <div class="text">{{ $t('task.taskSponsor') }}</div>
        </div>
        <div class="participantsData">
          <div>
            <span style="margin-left: 1.2rem">{{ $t('task.Name') }}</span>
            <span style="margin-left: 2.66rem">{{ $t('task.Id') }}</span>
          </div>
          <div class="td">
            <span style="margin-left: 1.2rem">{{ sponsor.orgName }}</span>
            <span style="margin-left: 2.05rem"> {{ sponsor.identityId }}</span>
          </div>
        </div>
        <div>
          <div class="participants">
            <div class="text">{{ $t('task.ResultReceiver') }}</div>
          </div>
          <div class="ResultReceiverTh">
            <div style="width: 1.2rem">
              <span style="padding-left: 0.2rem">{{ $t('task.No') }}</span>
            </div>
            <div style="width: 3.1rem">{{ $t('task.Name') }}</div>
            <div style="width: 3rem">{{ $t('task.Id') }}</div>
          </div>
          <div class="ResultReceiverTd" v-for="(item, index) in taskResult" :key="index">
            <div class="order">
              <div class="num">{{ index + 1 }}</div>
            </div>
            <div style="width: 3.1rem; margin-left: 0.8rem">{{ item.orgName }}</div>
            <div style="width: 3rem">{{ item.identityId }}</div>
          </div>
        </div>
        <!-- 算法提供方 -->
        <div class="participants" style="margin-top: 0.4rem">
          <div class="text">{{ $t('task.AlgorithmProvider') }}</div>
        </div>
        <div class="participantsData">
          <div>
            <span style="margin-left: 1.2rem">{{ $t('task.Name') }}</span>
            <span style="margin-left: 2.66rem">{{ $t('task.Id') }}</span>
          </div>
          <div class="td">
            <span style="margin-left: 1.2rem">{{ taskAlgoProvider.dynamicFields.orgName }}</span>
            <span style="margin-left: 2.05rem"> {{ this.taskAlgoProvider.identityId }}</span>
          </div>
        </div>

        <div class="Data" style="margin-bottom: 0.4rem">
          <div class="dataPic" style="margin-top: 0.4rem">
            <div class="text">{{ $t('task.DATAPROVIDERS') }}</div>
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
                  <div class="num">{{ index + 1 }}</div>
                </div>
              </div>
            </div>
            <div style="width: 3.12rem">{{ item.dynamicFields.orgName }}</div>
            <div style="width: 4.21rem">{{ item.identityId }}</div>
            <div class="taskId">
              <div>{{ item.dynamicFields.resourceName }}</div>
              <div style="margin-left: 0.2rem">
                ID: <span style="margin-left: 0.1rem">{{ item.taskId }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 2 -->
      <div class="Data" style="margin-top: 0.1rem">
        <div class="dataPic">
          <div class="text">{{ $t('task.PROVIDERS') }}</div>
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
                <div class="num">{{ index + 1 }}</div>
              </div>
            </div>
          </div>
          <div style="width: 3.12rem">{{ item.dynamicFields.orgName }}</div>
          <div style="width: 4.21rem">{{ item.identityId }}</div>
          <div style="width: 7rem" class="data">
            <span>CPU ：{{ item.usedCore }}</span>
            <span style="margin: 0px 0.5rem">{{ $t('node.Memory') }} ：{{ changeSizeFn(item.usedMemory) }}</span>
            <span>{{ $t('node.Bandwidth') }} ： {{ `${changeSizeFn(item.usedBandwidth)}P/S` }}</span>
          </div>
        </div>
      </div>
      <img src="../assets/img/node/border/1.svg" alt="" class="borderBottomRight" />
      <img src="../assets/img/node/border/2.svg" alt="" class="borderTopRight" />
      <img src="../assets/img/node/border/3.svg" alt="" class="borderBottomLeft" />
      <img src="../assets/img/node/border/4.svg" alt="" class="borderTopLeft" />
    </div>
    <!-- 日志板块 -->
    <div class="TaskLog" v-if="!isShow">
      <div class="TaskLogTh">
        <div style="width: 2rem">
          <span style="margin-left: 30px">{{ $t('node.No') }}</span>
        </div>
        <div style="width: 3.12rem">{{ $t('log.EventType') }}</div>
        <div style="width: 3.6rem">{{ $t('log.EVentMaker') }}</div>
        <div style="width: 3.6rem">{{ $t('log.GenerationTime') }}</div>
        <div>{{ $t('log.EventFailed') }}</div>
      </div>
      <div class="TaskLogTd" v-for="(item, index) in logList" :key="index">
        <div style="width: 2rem; padding: 0px 0.1rem">
          <div id="xh" style="line-height: 40px">
            <div class="orders">
              <div class="num">{{ index + 1 }}</div>
            </div>
          </div>
        </div>
        <div style="width: 3.12rem">{{ item.eventType }}</div>
        <div style="width: 3.6rem">{{ item.dynamicFields.orgName }}</div>
        <div style="width: 3.6rem">{{ dayjs(item.eventAt).format('YYYY-MM-DD HH:mm:ss') }}</div>
        <div>{{ item.eventContent }}</div>
      </div>
      <img src="../assets/img/node/border/1.svg" alt="" class="borderBtmRight" />
      <img src="../assets/img/node/border/2.svg" alt="" class="borderTRight" />
      <img src="../assets/img/node/border/3.svg" alt="" class="borderBtmLeft" />
      <img src="../assets/img/node/border/4.svg" alt="" class="borderTLeft" />
    </div>
  </div>
</template>
<script>
import { taskApi } from '../api/index'
import { changeSizeFn, thousandMark, formatDuring } from '../utils/utils'
import dayjs from 'dayjs'
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
      taskAlgoProvider: {},
      logList: [],
      Id: '',
      isShow: true,
      isHows: false,
      isHowse: true
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
    dayjs,
    changeSizeFn,
    thousandMark,
    formatDuring,
    back() {
      this.$router.go(-1)
    },
    log() {
      this.show = !this.show
      this.isShow = !this.isShow
      this.isHows = !this.isHows
      this.isHowse = !this.isHowse
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
      this.taskAlgoProvider = res.data.taskAlgoProvider
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
      this.taskAlgoProvider = res.data.taskAlgoProvider
    },
    async getlog() {
      const res = await taskApi.getListTaskLog({
        taskId: this.Id
      })
      this.logList = res.data
    },
    async getlogs() {
      const res = await taskApi.getListTaskLog({
        taskId: this.id
      })
      this.logList = res.data
    }
  }
}
</script>
<style  lang='scss' scoped>
.TaskDetail {
  padding: 0 1.1rem;
  line-height: 0.42rem;
  margin-bottom: 0.5rem;
  .TaskDetailTop {
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
      margin-right: 0.1rem;
      .pic {
        margin-bottom: 0.03rem;
      }
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
      right: 2.8rem;
      font-size: 0.14rem;
    }
  }
  .participants {
    margin: 0 0.2rem;
    width: 2.69rem;
    height: 0.4rem;
    background: url('../assets/img/node/btn.svg') no-repeat;
    background-size: 100% 100%;
    .text {
      text-align: center;
      // line-height: 0.4rem;
    }
  }
  .participantsData {
    padding: 0px 0.2rem;
    .td {
      background: #0c0e26;
      border-radius: 0.04rem;
      height: 0.4rem;
      margin-bottom: 0.4rem;
    }
  }
  .Data {
    background-size: 100%;
    padding: 0px 0.2rem;
    .dataPic {
      width: 2.69rem;
      height: 0.4rem;
      background: url('../assets/img/node/btn.svg') no-repeat;
      background-size: 100% 100%;
      .text {
        text-align: center;
        // line-height: 40px;
      }
    }
    .precedence {
      display: flex;
      margin-bottom: -0.15rem;
    }
    .precedenceData {
      background: #0c0e26;
      border-radius: 0.04rem;
      margin: 0.1rem 0;
      display: flex;
    }
  }
  // 日志模块
  .TaskLog {
    padding: 0.2rem;
    position: relative;
    .TaskLogTh {
      display: flex;
    }
    .TaskLogTd {
      display: flex;
      height: 0.4rem;
      background: #0c0e26;
      border-radius: 0.04rem;
      margin-bottom: 0.1rem;
      align-items: center;
    }
  }
  .orders {
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    background-color: #3f4590;
    margin-left: 0.2rem;
    .num {
      text-align: center;
      line-height: 0.2rem;
    }
  }
  .borderBtmRight {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .borderTRight {
    position: absolute;
    top: 0;
    right: 0;
  }
  .borderBtmLeft {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .borderTLeft {
    position: absolute;
    top: 0;
    left: 0;
  }
  .order {
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    background-color: #3f4590;
    margin-top: 0.1rem;
    margin-left: 0.2rem;
    .num {
      text-align: center;
      line-height: 0.2rem;
    }
  }
  .taskId {
    display: flex;
  }
}
/deep/ .el-step__line {
  background-color: #3954ff;
}
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
  background: #0c0e26;
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
    border: 2px solid #ccc;
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
    border: 2px solid #ccc;
  }
}
.TakDetail .participantsData .td[data-v-69f16454]:hover {
  background-color: #3954ff;
}
.ResultReceiverTd[data-v-69f16454]:hover {
  background-color: #3954ff;
}
.TakDetail .Data .precedenceData[data-v-69f16454]:hover {
  background-color: #3954ff;
}
.TakDetail .TaskLog .TaskLogTd[data-v-69f16454]:hover {
  background-color: #3954ff;
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
.content {
  position: relative;
  padding: 0.2rem 0 0.1rem 0;
}
</style>