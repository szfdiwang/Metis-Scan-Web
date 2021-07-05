<template>
  <div class="earth-box">
    <div id="earth-map"></div>
    <img src="../../../../assets/img/home/out-earth.svg" alt="" class="out-earth" />
    <img src="../../../../assets/img/home/orange.png" alt="" class="out-orange" />
    <img src="../../../../assets/img/home/blue.png" alt="" class="out-blue" />
    <!-- <img src="../../../../assets/img/home/equator.png" alt="" class="out-equator" /> -->
  </div>
</template>

<script>
import 'echarts-gl'
export default {
  name: 'EarthMap',
  components: {},
  data() {
    return {
      bgUrl: require('../../../../assets/img/home/earthnew1.png'),
      chart: ''
      // geoCoordMap: {
      //   // 南宁: [108.479, 23.1152],
      //   // 广州: [113.5107, 23.2196],
      //   重庆: [107.7539, 30.1904]
      //   // 芬兰: [24.909912, 60.169095],
      //   // 美国: [-100.696295, 33.679979],
      //   // 日本: [139.710164, 35.706962],
      //   // 韩国: [126.979208, 37.53875],
      //   // 瑞士: [7.445147, 46.956241],
      //   // 东南亚: [117.53244, 5.300343],
      //   // 澳大利亚: [135.193845, -25.304039],
      //   // 德国: [13.402393, 52.518569],
      //   // 英国: [-0.126608, 51.208425],
      //   // 加拿大: [-102.646409, 59.994255]
      // }
    }
  },
  computed: {},
  mounted() {
    const earthImg = new Image()
    earthImg.src = this.bgUrl
    earthImg.onload = () => {
      this.initChart(earthImg)
    }
    window.addEventListener('resize', this.resizeFn)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeFn)
  },
  methods: {
    resizeFn() {
      this.chart.resize()
    },
    initChart(earthImg) {
      this.chart = this.$echarts.init(document.getElementById('earth-map'))
      const option = {
        backgroundColor: 'rgb(0 0 0 / 0%)',
        tooltip: {
          trigger: 'item',
          transitionDuration: 0
        },
        dataZoom: [
          {
            moveOnMouseWheel: false,
            moveOnMouseMove: true,
            preventDefaultMouseMove: true
          }
        ],
        globe: {
          environment: 'auto',
          baseTexture: earthImg, // this.mapChart, //
          baseColor: '#fff',
          shading: 'color',
          // light: {
          //   main: {
          //     color: '',
          //     intensity: 1,
          //     shadow: false
          //   },
          //   ambientCubemap: {
          //     exposure: 2,
          //     diffuseIntensity: 2,
          //     specularIntensity: 2
          //   }
          // },
          viewControl: {
            autoRotateSpeed: 10,
            autoRotate: true,
            animation: true,
            zoomSensitivity: 0
          }
        },
        series: [
          // {
          //   // 点
          //   name: '数据中心',
          //   //		        type: 'effectScatter',
          //   //		        coordinateSystem: 'bmap',
          //   type: 'scatter3D',
          //   blendMode: 'lighter',
          //   coordinateSystem: 'globe',
          //   showEffectOn: 'render',
          //   zlevel: 2,
          //   effectType: 'ripple',
          //   symbolSize: 15,
          //   rippleEffect: {
          //     period: 4,
          //     scale: 4,
          //     brushType: 'fill'
          //   },
          //   //		        showEffectOn: 'hover',
          //   label: {
          //     show: true,
          //     position: 'right',
          //     //			                formatter: '{b}',
          //     formatter: function(params) {
          //       if (params.dataIndex === 1) {
          //         return '南京'
          //       } else if (params.dataIndex === 2) {
          //         return '沈阳'
          //       } else if (params.dataIndex === 3) {
          //         return '太原'
          //       } else if (params.dataIndex === 4) {
          //         return '日本'
          //       } else if (params.dataIndex === 5) {
          //         return '雅加达'
          //       } else if (params.dataIndex === 0) {
          //         return '徐州'
          //       } else if (params.dataIndex === 6) {
          //         return '昆明'
          //       }
          //     },
          //     fontSize: 18,
          //     color: '#f5d909',
          //     fontWeight: 'bold',
          //     //			                    backgroundColor:'rgba(255,255,255,0.2)'
          //     backgroundColor: 'transparent'
          //   },
          //   itemStyle: {
          //     color: 'rgb(29,183,255)'
          //   },
          //   data: [
          //     [117.11, 34.15],
          //     [118.58, 32.01],
          //     [123.38, 41.8],
          //     [112.01, 38.01],
          //     [139.46, 35.42],
          //     [116.58, 6.1],
          //     [102.9, 25.31]
          //   ]
          // }
        ]
      }
      this.chart.setOption(option, true)
    }
  }
}
</script>

<style lang='scss' scoped>
.earth-box {
  width: 100%;
  display: flex;
  background: transparent;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  position: relative;
  #earth-map {
    width: 6.8rem;
    height: 6.8rem;
    position: relative;
    background: transparent;
    z-index: 100;
  }
  .out-earth {
    width: 9.1rem;
    position: absolute;
    z-index: 10;
  }
  .out-orange {
    width: 6.8rem;
    position: absolute;
    bottom: -0.7rem;
    right: 0.1rem;
  }
  .out-blue {
    width: 6.8rem;
    position: absolute;
    top: -0.7rem;
    left: 0.1rem;
  }
  .out-equator {
    width: 8.7rem;
    position: absolute;
    z-index: 10000;
  }
}
</style>