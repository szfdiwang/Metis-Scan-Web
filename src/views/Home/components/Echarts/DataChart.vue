<template>
  <div class="data-echart-box">
    <div class="title">
      {{ $t('home.dataTrend') }}
    </div>
    <div id="dataEchart"></div>
  </div>
</template>

<script>
import { homeApi } from '@/api/index'
export default {
  components: {},
  data() {
    return {
      dataChart: '',
      dataCahrtData: [],
      option: {}
    }
  },
  computed: {},
  watch: {
    '$i18n.locale'(newValue) {
      console.log('切换了文字, 触发图标切换')
      // 不需要重新设置配置项，只需要手动触发一下setOption()
      this.option && this.dataChart.setOption(this.option)
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
    getData() {},
    async initChart() {
      const chartDom = document.getElementById('dataEchart')
      this.dataChart = this.$echarts.init(chartDom)
      const startDate = this.$day(new Date()).format('YYYY-MM-DD')
      // const endDate = this.$day(new Date()).add(30, 'day').format('YYYY-MM-DD')
      const res = await homeApi.getDataTrend({ startDate, days: 30 })
      console.log('data echart', res)
      this.dataCahrtData = res.code === 0 ? res.data : []
      this.option = {
        color: ['#2A6EE6', 'red'],
        legend: {
          bottom: 20,
          itemGap: 40,
          itemHeight: 5,
          itemWidth: 30,
          formatter: params => {
            return this.$t(`home.${params}`)
          },
          data: [
            {
              name: 'growth',
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
          data: ['05.01', '05.02', '05.03', '05.04', '05.05', '05.06', '05.07', '05.08', '05.09', '05.10']
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
            data: this.dataCahrtData,
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
              formatter: params => {
                console.log('params========>', params)
                return this.$t(`home.${params}`)
              }
            }
          },
          {
            name: 'global',
            data: [120, 200, 150, 80, 70, 110, 130, 12, 33, 32],
            type: 'bar',
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: ' #FF6600'
                },
                {
                  offset: 1,
                  color: 'rgba(4,4,42,0.30)'
                }
              ])
            },
            label: {
              formatter: params => {
                return this.$t(params.name)
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
  .title {
    margin-top: 0.33rem;
    text-align: center;
    font-family: BebasNeueBold;
    font-size: 0.32rem;
    color: #dee9ff;
    letter-spacing: 0;
    line-height: 0.48rem;
    font-weight: 700;
  }
  #dataEchart {
    width: 4.3rem;
    height: 4.1rem;
    margin: 0 auto;
  }
}
</style>