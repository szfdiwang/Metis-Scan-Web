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
import { changeSizeToGb, changeSizeFn } from '@/utils/utils'
export default {
  components: {},
  data() {
    return {
      timeList: [],
      dataChart: '',
      growthData: [],
      totalData: [],
      dataCahrtData: [],
      option: {}
    }
  },
  computed: {},
  watch: {
    '$i18n.locale'(newValue) {
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
      // const startDate = this.$day(new Date()).format('YYYY-MM-DD')
      const startDate = this.$day(new Date()).subtract(30, 'day').format('YYYY-MM-DD')
      const res = await homeApi.getDataTrend({ startDate, days: 30 })
      // TODO: this.growthData this.totalData 两个趋势
      this.growthData = res.data.dailySize.map(size => changeSizeToGb(size))
      this.totalData = res.data.totalSize.map(size => changeSizeToGb(size))
      this.timeList = res.data.updateAt.map(day => {
        return this.$day(day).format('MM.DD')
      })
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
              name: 'dataGrowth',
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
              name: 'dataGlobal',
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
          left: 65,
          top: 30,
          right: 65,
          bottom: 75
        },
        xAxis: {
          axisLabel: {
            fontSize: 12,
            color: '#DEE9FF'
          },
          type: 'category',
          boundaryGap: true,
          data: this.timeList // 固定的 当前天数向前推进30天
        },
        yAxis: [
          {
            name: `${this.$t('home.dataGlobal')}`,
            nameTextStyle: {
              color: '',
              fontSize: 12
            },
            axisLabel: {
              fontSize: 12,
              color: '#DEE9FF',
              formatter: params => changeSizeFn(params)
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
          {
            name: `${this.$t('home.dataGrowth')}`,
            nameTextStyle: {
              color: '',
              fontSize: 12
            },
            axisLabel: {
              fontSize: 12,
              color: '#DEE9FF',
              formatter: params => changeSizeFn(params)
            },
            splitLine: {
              lineStyle: {
                color: '#14153B',
                width: 1
              }
            },

            type: 'value',
            scale: true
          }
        ],
        series: [
          {
            name: 'dataGlobal',
            data: this.totalData,
            yAxisIndex: 0,
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
              opacity: 0.1
            },
            smooth: true,
            label: {
              formatter: params => {
                return this.$t(`home.${params}`)
              }
            }
          },
          {
            name: 'dataGrowth',
            data: this.growthData,
            yAxisIndex: 1,
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
    font-family: BebasNeueBold, PuHuiTiMedium;
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