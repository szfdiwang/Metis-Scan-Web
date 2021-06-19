<template>
  <div class="home">oh u r in map
    <div id="earth">
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
const world = require('../../config/map/world')
export default {
  name: 'TestMap',
  data() {
    return {
      mapChart: '',
      chart: ''
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initMap() {
      const canvas = document.createElement('canvas')
      this.mapChart = this.$echarts.init(canvas, null, {
        width: 2048, // 调整后 与精细度有关
        height: 1024
      })
      this.mapChart.setOption({
        // id:"" 默认不指定
        // 外层的舞台
        backgroundColor: '#000000',
        geo: {
          type: 'map',
          z: 1,
          map: 'world',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zoom: 0,
          roam: false,
          boundingCoords: [
            [-180, 90],
            [180, -90]
          ], // 设置为一张完整经纬度的世界地图
          nameMap: {
            China: '中国' // 变成中文
          },
          regions: [
            {
              name: '广东',
              itemStyle: {
                areaColor: 'red',
                color: 'red'
              }
            }
          ],
          itemStyle: {
            borderColor: '#000d2d',
            normal: {
              areaColor: '#2455ad',
              borderColor: '#000c2d'
            },
            emphasis: {
              areaColor: '#357cf8',
              label: {
                show: true
              }
            }
          },
          label: {
            fontSize: 24,
            show: false, // 是否显示文本 TODO 显示 但是只显示需要的城市
            color: '#DB7093'
          },
          series: []
        }
      })
    },
    initChart() {
      this.chart = this.$echarts.init(document.getElementById('earth'))
      this.initMap()
      const option = {
        backgroundColor: '',
        globe: {
          roam: false,
          baseTexture: this.mapChart,
          shading: 'color',
          environment: new this.$echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: '#00aaff' // 天空颜色
              },
              {
                offset: 0.7,
                color: '#998866' // 地面颜色
              },
              {
                offset: 1,
                color: '#998866' // 地面颜色
              }
            ],
            false
          ),
          light: {
            main: {
              color: '#fff',
              intensity: 1,
              shadow: false
            },
            ambientCubemap: {
              exposure: 2,
              diffuseIntensity: 2,
              specularIntensity: 2
            }
          },
          viewControl: {
            autoRotate: false
          },
          postEffect: {
            enable: true
          }
        }
      }
      this.chart.setOption(option, true)
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  margin-top: 200px;
  #earth {
    margin: 0 auto;
    width: 600px;
    height: 300px;
    border: 1px solid #6495ed;
    background-color: #1e90ff;
  }
}
</style>