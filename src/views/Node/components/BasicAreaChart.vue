<template>
  <div class="data-echart-box">
    <div id="dataEchart"></div>
  </div>
</template>

<script>
import { taskApi } from '../../../api/index'
import { formatDate } from '../../../utils/tiem'
export default {
  props: ['id'],
  components: {},
  data() {
    return {
      dataChart: '',
      option: {},
      // taskList: [],
      numList: [],
      newArray: []
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
    formatDate(time) {
      return formatDate(time, 'HH:mm:ss')
    },
    resizeFn() {
      this.dataChart.resize()
    },
    async initChart() {
      const chartDom = document.getElementById('dataEchart')
      this.dataChart = this.$echarts.init(chartDom)
      const res = await taskApi.getOrgTaskTrend({
        identityId: this.id,
        startDate: this.$day(new Date()).subtract(20, 'day').format('YYYY-MM-DD'),
        days: 6
      })
      this.newArray = res.data.map(item => {
        return this.$day(item.createAt).format('YYYY-MM-DD')
      })
      this.numList = res.data.map(item => {
        return item.taskCount
      })
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
          data: this.newArray
        },
        yAxis: {
          axisLabel: {
            fontSize: 14,
            color: '#DEE9FF'
          },
          type: 'value'
          // realtimeSort: true,
          // splitLine:{show:false}
        },
        series: [
          {
            data: this.numList,
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
      console.log('打印', this.numList)

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