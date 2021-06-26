<template>
  <div class="map-box">
    <!-- left -->
    <div class="left">
      <div class="compute-center-echart"></div>
      <div class="top-echart-data">
        <PowerChart />
      </div>
      <div class="left-cell">
        <img src="../../../assets/img/home/left-round.svg" alt="" />
        <img src="../../../assets/img/home/left-cell.svg" alt="" />
      </div>
      <div class="bottom-map">
        <img src="../../../assets/img/home/left-bottom-map.svg" alt="" />
      </div>
    </div>
    <!-- mid -->
    <div class="mid">
      <div class="title">
        <img src="../../../assets/img/home/round-single-left.svg" alt="" />
        <p class="text">
          {{ $t('home.center') }}
        </p>
        <img src="../../../assets/img/home/round-single-right.svg" alt="" />
      </div>
      <div class="earth-box">
        <EarthChart />
      </div>
      <div class="footer">
        <img src="../../../assets/img/home/bottom-line1.svg" alt="" />
        <img src="../../../assets/img/home/bottom-line2.png" alt="" />
      </div>
    </div>
    <!-- right -->
    <div class="right">
      <div class="top-map">
        <img src="../../../assets/img/home/right-top-map.svg" alt="" />
      </div>
      <div class="gap">
        <img src="../../../assets/img/home/wave3.svg" alt="" />
        <img src="../../../assets/img/home/wave4.svg" alt="" />
      </div>
      <div class="right-data-echarts">
        <DataChart />
      </div>
      <div class="gap right-strip">
        <img src="../../../assets/img/home/wave5.png" alt="" />
      </div>
      <div id="data-center-charts"></div>
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
  .left {
    flex: 1;
    width: 4.96rem;
    border: 1px solid red;
    .compute-center-echart {
      height: 3.96rem;
      border: 1px solid yellow;
    }
    .top-echart-data {
      height: 5.05rem;
      border: 1px solid yellow;
    }
    .left-cell,
    .bottom-map {
      img {
        width: 100%;
      }
    }
    .left-cell {
      margin: 0.33rem 0;
    }
  }
  .mid {
    width: 9.1rem;
    border: 1px solid red;
    .title {
      display: flex;
      height: 2rem;
      align-items: center;
      justify-content: space-between;
      border: 1px solid yellow;
      padding: 0 0.3rem;
      .text {
        height: 0.48rem;
        font-family: BebasNeueBold;
        font-size: 0.48rem;
        color: #dee9ff;
        letter-spacing: 0;
        text-align: center;
        line-height: 0.48rem;
        font-weight: 700;
      }
    }
    .earth-box {
      width: 100%;
      height: 8.87rem;
      border: 1px solid yellow;
    }
    .footer {
      margin-top: 0.6rem;
      img {
        width: 100%;
      }
    }
  }
  .right {
    flex: 1;
    width: 4.96rem;
    border: 1px solid red;
    .top-map {
      height: 2rem;
      border: 1px solid red;
      img {
        width: 100%;
      }
    }
    .right-strip {
      margin: 0.15rem 0;
    }
    .right-data-echarts {
      width: 100%;
      height: 5.18rem;
      border: 1px solid yellow;
    }
    #data-center-charts {
      width: 100%;
      height: 3.96rem;
      border: 1px solid yellow;
    }
  }
}
</style>