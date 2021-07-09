<template>
  <div class="data-echart-box">
    <div id="dataEchart"></div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      dataChart: '',
      option: {}
    }
  },
  computed: {},
  watch: {
    '$i18n.locale'(newValue) {
      console.log('语言改变', newValue)
      // 不需要重新设置配置项，只需要手动触发一下setOption()
      this.dataChart.setOption(this.option)
    }
  },

  mounted() {
    this.initChart()
    window.addEventListener('resize', this.resizeFn)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeFn)
  },
  methods: {
    resizeFn() {
      this.dataChart.resize()
    },
    initChart() {
      const chartDom = document.getElementById('dataEchart')
      this.dataChart = this.$echarts.init(chartDom)
      this.option = {
        color: ['#2A6EE6', 'red'],
        legend: {
          bottom: 20,
          itemGap: 40,
          itemHeight: 5,
          itemWidth: 30,
          // formatter: params => {
          //   return this.$t(`home.${params}`)
          // },
          data: [
            {
              // name: 'growth',
              // icon: 'rect',
              itemStyle: {
                borderWidth: 100
              },
              lineStyle: {},
              textStyle: {
                fontSize: 12,
                fontWeight: 'bolder',
                color: '#DEE9FF'
              }
            },
            {
              name: 'global',
              icon: 'rect',
              itemStyle: {
                borderWidth: 100
              },
              lineStyle: {},
              textStyle: {
                fontSize: 12,
                fontWeight: 'bolder',
                color: '#DEE9FF'
              }
            }
          ]
        },
        grid: {
          left: 35,
          top: 25,
          right: 35,
          bottom: 75
        },
        xAxis: {
          axisLabel: {
            fontSize: 14,
            color: '#DEE9FF'
          },
          type: 'category',
          boundaryGap: true,
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
          axisLabel: {
            fontSize: 14,
            color: '#DEE9FF'
          },
          type: 'value'
        },
        series: [
          {
            data: [220, 132, 91, 34, 290, 133, 320, 10, 22, 99],
            type: 'line',
            lineStyle: {
              color: '#2A6EE6'
              //  new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
              //   {
              //     offset: 0,
              //     color: '#9C2ED3'
              //   },
              //   {
              //     offset: 1,
              //     color: '#AE0BFF'
              //   }
              // ])
            },
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(156,46,211,0.16)'
                },
                {
                  offset: 1,
                  color: '#0B22FF'
                }
              ]),
              opacity: 0.4
            },
            smooth: true,
            name: 'growth',
            label: {
              normal: {
                formatter: params => {
                  return this.$t(`home.${params}`)
                }
              }
            }
          }
          
        ]
      }

      this.option && this.dataChart.setOption(this.option)
    }
  }
}
</script>

<style lang='scss' scoped>
.data-echart-box {
  #dataEchart {
    // width: 10.3rem;
    // height: 4.1rem;
    margin: 0 auto;
    width: 1769px;
    height: 190px;
  }
}
</style>