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
// import earthImg from '../../../../assets/img/home/earthnew1.png'
export default {
  name: 'EarthMap',
  components: {},
  data() {
    return {
      bgUrl: require('../../../../assets/img/home/earthnew1.png'),
      // bgUrl: require('../../../../assets/img/home/mapgithub.png'),
      chart: ''
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
    initChart() {
      this.chart = this.$echarts.init(document.getElementById('earth-map'))
      const option = {
        backgroundColor: 'rgb(0 0 0 / 0%)',
        // tooltip: {
        //   trigger: 'item',
        //   transitionDuration: 0
        // },
        dataZoom: [
          {
            moveOnMouseWheel: false,
            moveOnMouseMove: true,
            preventDefaultMouseMove: true
          }
        ],
        globe: {
          environment: 'auto',
          baseTexture: require('../../../../assets/img/home/earthnew1.png'), // this.mapChart, //
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
            zoomSensitivity: 0,
            minAlpha: -15,
            maxAlpha: 30
          }
        },
        series: [
          {
            // 点
            name: '数据中心',
            type: 'scatter3D',
            // blendMode: 'lighter',
            coordinateSystem: 'globe',
            // showEffectOn: 'render',
            // zlevel: 2,
            // effectType: 'ripple',
            // symbolSize: 15,
            // rippleEffect: {
            //   color: '#3954ff',
            //   period: 4,
            //   scale: 4,
            //   brushType: 'fill'
            // },
            //		        showEffectOn: 'hover',
            label: {
              show: true,
              position: 'right',
              //			                formatter: '{b}',
              formatter: function (params) {
                const centerList = [
                  `北京`,
                  '东京',
                  '深圳',
                  '上海',
                  '雅加达',
                  '南京',
                  '纽约',
                  '伦敦',
                  '洛杉矶',
                  '斯德哥尔摩',
                  '巴黎',
                  '慕尼黑',
                  '墨尔本'
                  // $t('map.beijing'),
                  // $t('map.tokyo'),
                  // $t('map.shenzhen'),
                  // $t('map.shanghai'),
                  // $t('map.jakarta'),
                  // $t('map.nanjing'),
                  // $t('map.newyork'),
                  // $t('map.london'),
                  // $t('map.losAngeles'),
                  // $t('map.stockholm'),
                  // $t('map.paris'),
                  // $t('map.munich')
                ]
                return centerList[params.dataIndex]
              },
              fontSize: 18,
              color: '#f5d909',
              fontWeight: 'bold',
              //			                    backgroundColor:'rgba(255,255,255,0.2)'
              backgroundColor: 'transparent'
            },
            itemStyle: {
              color: 'rgb(29,183,255)'
            },
            data: [
              [116.4, 39.9],
              [139.75, 35.68],
              [113.9, 22.5],
              [121.4, 31.22],
              [106.84, -6.19],
              [118.8, 32.09],
              [-73.96, 40.77],
              [-0.15, 51.47],
              [-118.255, 34.05],
              [18.05, 59.33],
              [2.293, 48.85],
              [11.56, 48.16],
              [144.95, -37.78]
            ]
          }
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
    width: 4.8rem;
    height: 4.8rem;
    position: relative;
    background: transparent;
    z-index: 100;
  }
  .out-earth {
    width: 6.5rem;
    position: absolute;
    z-index: 10;
  }
  .out-orange {
    width: 4.8rem;
    position: absolute;
    bottom: -0.7rem;
    right: 0.1rem;
  }
  .out-blue {
    width: 4.8rem;
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
