<template>
  <div class="home">oh u r in map
    <div id="earth">
    </div>
  </div>
</template>
<script>
// import world from '../../config/map/world'
// eslint-disable-next-line no-unused-vars
// import world from '../../../public/map/world3'
import 'echarts-gl'
import worldImg from '../../../public/img/8.png'
// import worldImg from '../../../public/map/world.topo.bathy.200401.jpg'
export default {
  name: 'TestMap',
  data() {
    return {
      // mapChart: '',
      chart: '',
      geoCoordMap: {
        南宁: [108.479, 23.1152],
        广州: [113.5107, 23.2196],
        重庆: [107.7539, 30.1904],
        芬兰: [24.909912, 60.169095],
        美国: [-100.696295, 33.679979],
        日本: [139.710164, 35.706962],
        韩国: [126.979208, 37.53875],
        瑞士: [7.445147, 46.956241],
        东南亚: [117.53244, 5.300343],
        澳大利亚: [135.193845, -25.304039],
        德国: [13.402393, 52.518569],
        英国: [-0.126608, 51.208425],
        加拿大: [-102.646409, 59.994255]
      }
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initMap() {
      const canvas = document.createElement('canvas')
      // eslint-disable-next-line no-unused-vars
      const context = canvas.getContext('2d')
      this.mapChart = this.$echarts.init(canvas, null, {
        width: 4096, // 调整后 与精细度有关
        height: 2048
      })
      this.mapChart.setOption(
        {
          // id:"" 默认不指定
          // 外层的舞台
          backgroundColor: '#000',
          tooltip: {
            show: true,
            trigger: 'item',
            formatter: function(params) {
              console.log(params)
              return params
            }
          },
          geo: {
            type: 'map',
            z: 1,
            map: 'world',
            top: 10,
            left: 10,
            right: 10,
            bottom: 10,
            zoom: 0,
            roam: false,
            boundingCoords: [
              [-180, 90],
              [180, -90]
            ], // 设置为一张完整经纬度的世界地图
            nameMap: {
              China: '中国' // 变成中文
            },
            // regions: [
            //   {
            //     name: '中国',
            //     itemStyle: {
            //       areaColor: 'red',
            //       color: 'red'
            //     }
            //   }
            // ],
            // blur: {
            //   label: {
            //     show: false
            //   }
            // },
            itemStyle: {
              borderColor: '#000d2d',
              areaColor: '#2455ad' // 地图区块颜色
            },
            emphasis: {
              itemStyle: {
                areaColor: '#2455ad' // 地图区块选中的颜色
              },
              label: {
                show: false
              }
            },
            label: {
              fontSize: 24,
              show: false, // 是否显示文本 TODO 显示 但是只显示需要的城市
              color: '#DB7093'
            }
          }
          // series: [
          //   {
          //     type: 'effectScatter',
          //     coordinateSystem: 'geo',
          //     zlevel: 10,
          //     z: 10,
          //     showEffectOn: 'emphasis',
          //     rippleEffect: {
          //       brushType: 'stroke'
          //     },
          //     label: {
          //       fontSize: 24,
          //       show: true,
          //       position: 'right',
          //       formatter: '{b}'
          //     },
          //     itemStyle: {
          //       color: '#f5f802'
          //     },
          //     tooltip: {
          //       trigger: 'item',
          //       position: [10, 10],
          //       backgroundColor: 'red',
          //       formatter: '{b0}: {c0}<br />{b1}: {c1}',
          //       padding: 5
          //     },
          //     data: [
          //       { name: '巴基斯坦', value: [-102.646409, 59.994255], symbolSize: 60 },
          //       { name: '加拿大', value: [-100.696295, 33.679979], symbolSize: 20 }
          //     ]
          //   }
          // ]
        },
        true
      )
    },
    initChart() {
      this.chart = this.$echarts.init(document.getElementById('earth'))
      // this.initMap()
      const option = {
        backgroundColor: '',
        tooltip: {
          trigger: 'item'
        },
        globe: {
          roam: false,
          environment: 'none',
          baseTexture: worldImg, // this.mapChart, //
          shading: 'lambert',
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
            autoRotate: false,
            animation: true
          },
          postEffect: {
            enable: true
          }
        },
        series: [
          {
            name: 'lines3D',
            type: 'lines3D',
            coordinateSystem: 'globe',
            effect: {
              show: true,
              period: 2,
              trailWidth: 3,
              trailLength: 0.5,
              trailOpacity: 1,
              trailColor: '#0087f4'
            },
            blendMode: 'lighter',
            lineStyle: {
              width: 1,
              color: '#0087f4',
              opacity: 0.2
            },
            data: [],
            //		        data: [{
            //		            from: 'A',
            //		            to: 'B',
            //		            coords: [
            //		                [-83.69501541554166, -75.76453333240994],
            //						[105.18, 37.51]
            //		            ],
            //		            value:"2013.48"
            //		        }, {
            //		            from: 'A',
            //		            to: 'C',
            //		            coords: [
            //		                [118.377173, 31.337123],
            //		                [105.18, 37.51]
            //		            ],
            //		            value:"2013.48"
            //		        }],
            silent: false
          },
          {
            // 点
            name: '景区',
            //		        type: 'effectScatter',
            //		        coordinateSystem: 'bmap',
            type: 'scatter3D',
            blendMode: 'lighter',
            coordinateSystem: 'globe',
            showEffectOn: 'render',
            zlevel: 2,
            effectType: 'ripple',
            symbolSize: 15,
            rippleEffect: {
              period: 4,
              scale: 4,
              brushType: 'fill'
            },

            //		        showEffectOn: 'hover',
            label: {
              show: true,
              position: 'right',
              //			                formatter: '{b}',
              formatter: function(params) {
                if (params.dataIndex === 1) {
                  return '南京'
                } else if (params.dataIndex === 2) {
                  return '沈阳'
                } else if (params.dataIndex === 3) {
                  return '太原'
                } else if (params.dataIndex === 4) {
                  return '日本'
                } else if (params.dataIndex === 5) {
                  return '雅加达'
                } else if (params.dataIndex === 0) {
                  return '徐州'
                } else if (params.dataIndex === 6) {
                  return '昆明'
                }
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
            //		        data: [{
            //		            'name': 'A',
            //		            'value': [105.18, 37.51, 1500]
            //		        }, {
            //		            'name': 'B',
            //		            'value': [118.393252, 31.15576, 1500]
            //		        }, {
            //		            'name': 'C',
            //		            'value': [117.989662, 31.293115, 1500]
            //		        }]
            data: [
              [117.11, 34.15],
              [118.58, 32.01],
              [123.38, 41.8],
              [112.01, 38.01],
              [139.46, 35.42],
              [116.58, 6.1],
              [102.9, 25.31]
            ]
          }
        ]
      }
      this.chart.setOption(option, true)
      // window.addEventListener('resize', function(this.chart) {
      //   this.chart.resize()
      // })
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
    overflow: hidden;
    margin: 0 auto;
    width: 680px;
    height: 680px;
    // width: 300px;
    // height: 300px;
    border: 1px solid #6495ed;
    background-color: #1e90ff;
  }
}
</style>