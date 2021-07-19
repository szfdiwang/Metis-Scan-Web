<template>
  <div class="home-box">
    <Performance :cpu="cpu" :memory="memory" :bandWidth="bandWidth" />
    <vue-particles
      color="#2E2E2E"
      :particleOpacity="0.7"
      :particlesNumber="50"
      shapeType="circle"
      :particleSize="2"
      linesColor="#2E2E2E"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.7"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="false"
      clickMode="repulse"
      class="lizi"
    ></vue-particles>
    <!-- <img src="../../assets/img/home/bj4.png" alt="" class="bg-blue" /> -->
    <!-- <img src="../../assets/img/home/bj5.png" alt="" class="bg-stripe" /> -->
    <div class="welcome">
      <img src="../../assets/img/home/WelcometoRosetta.svg" alt="" />
    </div>
    <div class="search-bar">
      <el-input v-model="input2" :placeholder="$t('home.searchPlaceholder')" class="search-box">
        <template slot="suffix">
          <div class="search-btn pointer">{{ $t('common.search') }}</div>
        </template>
      </el-input>
    </div>
    <Card
      :partnerCount="partnerCount"
      :dataFileSize="dataFileSize"
      :taskCount="taskCount"
      :usedDataFileSize="usedDataFileSize"
      :powerServerCount="powerServerCount"
      :dataServerCount="dataServerCount"
    />
    <Map />
    <BottomTable :totalBandWidth="bandWidth" />
  </div>
</template>

<script>
import Performance from './components/Performance'
import Card from './components/Card'
import Map from './components/Map'
import BottomTable from './components/BottomTable'
import { homeApi } from '@/api/index'
export default {
  name: 'Home',
  components: {
    Performance,
    Card,
    Map,
    BottomTable
  },
  data() {
    return {
      cpu: 0,
      memory: 0,
      bandWidth: 0,
      partnerCount: 0,
      dataFileSize: 0,
      taskCount: 0,
      usedDataFileSize: 0,
      powerServerCount: 0,
      dataServerCount: 0,
      input2: ''
    }
  },
  mounted() {
    this.initGlobalData()
  },
  methods: {
    initGlobalData() {
      homeApi.getGlobalState({}).then(res => {
        if (res.code === 0) {
          this.memory = res.data.totalMemory || 0
          this.cpu = res.data.totalCore || 0
          this.bandWidth = res.data.totalBandwidth || 0

          this.partnerCount = res.data.partnerCount || 0
          this.dataFileSize = res.data.dataFileSize || 0
          this.taskCount = res.data.taskCount || 0
          this.usedDataFileSize = res.data.usedDataFileSize || 0
          this.powerServerCount = res.data.powerServerCount || 0
          this.dataServerCount = res.data.dataServerCount || 0
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.home-box {
  height: auto;
  /* background: url('../../assets/img/home/bj1.png') repeat; */
  position: relative;
  margin: 50px auto 0;
  max-width: 1700px;
  z-index: 0;
  .bg-blue {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    margin-top: 20px;
  }
  .bg-stripe {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    margin-top: 100px;
  }
  .welcome {
    text-align: center;
    margin: 100px 0 91px;
  }
  .search-bar {
    width: 100%;
    height: 0.8rem;
    text-align: center;
    .search-box {
      width: 15rem;
      height: 0.8rem;
      ::v-deep .el-input__inner {
        height: 100% !important;
        font-family: BebasNeueBold, PuHuiTiRegular;
        font-size: 20px;
        color: #dee9ff;
        background: linear-gradient(180deg, rgba(22, 72, 174, 0.1) 0%, rgba(19, 62, 148, 0.31) 100%);
        letter-spacing: 0;
        text-align: left;
        font-weight: 600;
        border: 1px solid #0a54ea;
        border-bottom-left-radius: 8px;
        border-top-left-radius: 8px;
      }
      ::v-deep .el-input__inner::placeholder {
        opacity: 0.5;
      }
      ::v-deep .el-input__suffix {
        display: flex;
      }
      .search-btn {
        width: 1.66rem;
        height: 0.58rem;
        background: #3954ff;
        border-radius: 8px;
        margin-top: 0.1rem;
        font-family: BebasNeueBold, PuHuiTiMedium;
        font-size: 0.4rem;
        color: #dee9ff;
        letter-spacing: 0;
        text-align: center;
        line-height: 0.4rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        &:hover {
          background: #4a5fec;
        }
      }
    }
  }
}

.lizi {
  position: absolute;
  top: -50px;
  left: calc(850px - 50vw);
  height: 800px;
  width: 100%;
  min-width: 100vw;
  z-index: -1;
}
</style>
