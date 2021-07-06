<template>
  <div class="power-echart-box">
    <div class="title">
      {{ $t('home.powerTrend') }}
    </div>
    <div id="powerEchart"></div>
  </div>
</template>

<script>
import { homeApi } from '@/api/index'
export default {
  components: {},
  data() {
    return {
      growthData: [],
      totalData: [],
      powerChart: '',
      powerData: [],
      option: {}
    }
  },
  computed: {},
  watch: {},
  mounted() {
    this.initChart()
    window.addEventListener('resize', this.resizeFn)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeFn)
  },
  methods: {
    resizeFn() {
      this.powerChart.resize()
    },
    async initChart() {
      const chartDom = document.getElementById('powerEchart')
      this.powerChart = this.$echarts.init(chartDom)
      // const startDate = this.$day(new Date()).format('YYYY-MM-DD')
      const startDate = this.$day(new Date()).subtract(30, 'day').format('YYYY-MM-DD')
      const res = await homeApi.getPowerTrend({ startDate, days: 30 })
      // TODO: 两个y轴数据
      console.log('power', res)
      if (res.code !== 0) return
      this.growthData = res.data.dailyBandwidth
      this.totalData = res.data.totalBandwidth
      this.timeList = res.data.updateAt.map(day => {
        return this.$day(day).format('MM.DD')
      })
      this.option = {
        color: ['#AE0BFF', '#AE0BFF'],
        legend: {
          bottom: 20,
          itemGap: 40,
          itemHeight: 5,
          itemWidth: 30,
          formatter: params => {
            console.log('formatter params', params)
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
          left: 55,
          top: 25,
          right: 0,
          bottom: 75
        },
        xAxis: {
          axisLabel: {
            fontSize: 12,
            color: '#DEE9FF'
          },
          type: 'category',
          boundaryGap: true,
          data: this.timeList
        },
        yAxis: {
          axisLabel: {
            fontSize: 12,
            color: '#DEE9FF'
          },
          splitLine: {
            lineStyle: {
              color: '#14153B',
              width: 1
            }
          },
          type: 'value',
          scale: true
        },
        series: [
          {
            data: this.totalData,
            type: 'line',
            lineStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#9C2ED3'
                },
                {
                  offset: 1,
                  color: '#AE0BFF'
                }
              ])
            },
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#9C2ED3'
                },
                {
                  offset: 1,
                  color: '#AE0BFF'
                }
              ]),
              opacity: 0
            },
            smooth: true,
            name: 'growth',
            label: {
              formatter: params => {
                return this.$t(`home.${params}`)
              }
            }
          },
          {
            name: 'global',
            data: this.growthData,
            type: 'bar',
            itemStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#2529E9'
                },
                {
                  offset: 1,
                  color: '#03042F'
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

      this.option && this.powerChart.setOption(this.option)
    }
  }
}
</script>

<style lang='scss' scoped>
.power-echart-box {
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
  #powerEchart {
    width: 4.3rem;
    height: 4.1rem;
    margin: 0 auto;
  }
}
</style>