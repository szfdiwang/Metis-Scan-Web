<template>
  <div class="map-box">
    <!-- left -->
    <div class="left">
      <div class="compute-center-echart">
        <div class="top">
          <p class="round"></p>
          <img src="../../../assets/img/home/wave6.svg" alt="" class="wave" />
        </div>
        <div class="compute-mid">
          <div class="computeCenterTitle">
            {{ $t('home.computeCenter') }}
          </div>
          <div class="compute-img-box">
            <el-row :gutter="40">
              <el-col :span="8">
                <img src="../../../assets/img/home/left-round1.svg" alt="" class="left-round1" />
              </el-col>
              <el-col :span="8">
                <img src="../../../assets/img/home/left-round2.svg" alt="" class="left-round2" />
              </el-col>
              <el-col :span="8">
                <img src="../../../assets/img/home/left-round3.svg" alt="" class="left-round3" />
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="compute-bottom">
          <img src="../../../assets/img/home/point.svg" alt="" />
        </div>
      </div>
      <div class="top-echart-data">
        <PowerChart />
      </div>
      <!-- <div class="left-cell">
        <img src="../../../assets/img/home/left-cell.svg" alt="" />
        <img src="../../../assets/img/home/left-round.svg" alt="" />
      </div>
      <div class="bottom-map">
        <img src="../../../assets/img/home/left-bottom-map.svg" alt="" />
      </div> -->
    </div>
    <!-- mid -->
    <div class="mid">
      <div class="title">
        <img src="../../../assets/img/home/round-single-left.svg" alt="" />
        <p class="text">
          <img src="../../../assets/img/home/border-left-top.svg" alt="" class="border-left-top" />
          <img src="../../../assets/img/home/border-left-bottom.svg" alt="" class="border-left-bottom" />
          <img src="../../../assets/img/home/border-right-top.svg" alt="" class="border-right-top" />
          <img src="../../../assets/img/home/border-right-bottom.svg" alt="" class="border-right-bottom" />
          {{ $t('home.center') }}
        </p>
        <img src="../../../assets/img/home/round-single-right.svg" alt="" />
      </div>
      <div class="earth-wrapper">
        <EarthChart />
      </div>
      <div class="mfooter"></div>
      <!-- <div class="footer">
        <div class="infinite-img-box">
          <img src="../../../assets/img/home/bottom-line1.svg" alt="" />
          <img src="../../../assets/img/home/bottom-line1.svg" alt="" />
        </div>
        <img src="../../../assets/img/home/bottom-line2.png" alt="" />
      </div> -->
    </div>
    <!-- right -->
    <div class="right">
      <!-- <div class="top-map">
        <img src="../../../assets/img/home/right-top-map.svg" alt="" />
      </div>
      <div class="gap">
        <img src="../../../assets/img/home/wave3.svg" alt="" />
        <img src="../../../assets/img/home/wave4.svg" alt="" />
      </div> -->
      <div class="right-data-echarts">
        <DataChart />
      </div>
      <!-- <div class="gap right-strip">
        <img src="../../../assets/img/home/wave5.png" alt="" />
      </div> -->
      <div class="data-center-charts">
        <div class="top">
          <p class="round" style="background: #0053fc"></p>
          <img src="../../../assets/img/home/wave6.svg" alt="" class="wave" />
        </div>
        <div class="compute-mid">
          <p class="computeCenterTitle">
            {{ $t('home.dataCenter') }}
          </p>
          <div class="compute-img-box">
            <el-row :gutter="40">
              <el-col :span="8">
                <img src="../../../assets/img/home/right-round1.svg" alt="" class="right-round1" />
              </el-col>
              <el-col :span="8">
                <img src="../../../assets/img/home/right-round2.svg" alt="" class="right-round2" />
              </el-col>
              <el-col :span="8">
                <img src="../../../assets/img/home/right-round3.svg" alt="" class="right-round3" />
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="compute-bottom">
          <img src="../../../assets/img/home/point.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DataChart from './Echarts/DataChart.vue'
import PowerChart from './Echarts/PowerChart.vue'
import EarthChart from './Echarts/Earth.vue'
export default {
  components: {
    DataChart,
    PowerChart,
    EarthChart
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.map-box {
  display: flex;
  margin: 0.2rem 0;
  height: 12.57rem;
  .gap > img {
    width: 100%;
  }
  .compute-center-echart,
  .data-center-charts {
    /* border: 1px solid #333352; */
    height: 3.96rem;
    .top {
      display: flex;
      justify-content: center;
      margin: 0.2rem 0 0.3rem;
      .round {
        width: 0.33rem;
        height: 0.33rem;
        background: #dd181f;
        border-radius: 50%;
      }
      .wave {
        width: 3.5rem;
        margin-left: 0.2rem;
      }
    }
    .compute-mid {
      width: 100%;
      .computeCenterTitle {
        font-family: BebasNeueBold;
        font-size: 0.32rem;
        color: #dee9ff;
        letter-spacing: 0;
        text-align: center;
        line-height: 0.48rem;
        font-weight: 700;
      }
      .compute-img-box {
        display: flex;
        justify-content: center;
        margin: 0.35rem 0;
        .left-round1,
        .left-round2,
        .left-round3,
        .right-round1,
        .right-round2,
        .right-round3 {
          width: 1.02rem;
        }
        .left-round1 {
          animation: rotate 1.5s linear infinite;
        }
        .left-round2 {
          animation: rotate 5s linear infinite;
          animation-delay: 0.2s;
        }
        .left-round3 {
          animation: rotate 2s linear infinite;
          animation-delay: 0.4s;
        }
        .right-round1 {
          animation: rotate-reverse 1.5s linear infinite;
        }
        .right-round2 {
          animation: rotate-reverse 5s linear infinite;
          animation-delay: 0.2s;
        }
        .right-round3 {
          animation: rotate-reverse 2s linear infinite;
          animation-delay: 0.4s;
        }
      }
    }
    .compute-bottom {
      width: 4.7rem;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
  }
  .left {
    flex: 1;
    margin-top: 220px;
    width: 4.96rem;
    .top-echart-data {
      height: 4.6rem;
    }
    .left-cell,
    .bottom-map {
      img {
        width: 100%;
      }
    }
    .left-cell img:not(:first-child) {
      margin: 0.33rem 0;
    }
  }
  .mid {
    width: 9.1rem;
    .title {
      display: flex;
      height: 2rem;
      align-items: center;
      justify-content: space-between;
      padding: 0 0.3rem;
      .text {
        font-family: BebasNeueBold;
        font-size: 0.48rem;
        color: #dee9ff;
        letter-spacing: 0;
        text-align: center;
        line-height: 0.48rem;
        font-weight: 700;
        padding: 10px 20px;
        background-color: #1e2e92;
        position: relative;
        .border-left-top {
          position: absolute;
          left: -0.2rem;
          top: -0.2rem;
        }
        .border-left-bottom {
          position: absolute;
          left: -0.2rem;
          bottom: -0.2rem;
        }
        .border-right-top {
          position: absolute;
          right: -0.2rem;
          top: -0.2rem;
        }
        .border-right-bottom {
          position: absolute;
          right: -0.2rem;
          bottom: -0.2rem;
        }
      }
    }
    .earth-wrapper {
      width: 100%;
      height: 7.4rem;
      margin-top: 2.2rem;
    }
    .mfooter {
      position: absolute;
      left: 0;
      width: 100%;
      height: 8px;
      background-image: url('../../../assets/img/home/bottom-line2.png');
    }
    .footer {
      margin: 0 0.3rem;
      overflow: hidden;
      .infinite-img-box {
        display: flex;
        img {
          animation: scroll-left 5s linear infinite normal;
        }
      }
      img {
        width: 100%;
      }
    }
  }
  .right {
    margin-top: 170px;
    flex: 1;
    width: 4.96rem;
    .top-map {
      height: 2rem;
      img {
        width: 100%;
      }
    }
    .right-strip {
      margin: 0.25rem 0;
    }
    .right-data-echarts {
      width: 100%;
      height: 4.58rem;
    }
  }
}
</style>
