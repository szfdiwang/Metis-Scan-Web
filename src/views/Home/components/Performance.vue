<template>
  <div class="performance-box">
    <img src="@/assets/img/home/corner3.png" alt="" class="corner" />
    <div v-for="info in performanceInfoList" :key="info.id" class="info-box">
      <div>
        <span class="label">{{ getLabel(info.name) }}</span>
        <span class="content">
          <span class="value">{{ getValue(info) | numFormat }}</span>
          <span class="unit">{{ getUnit(info) }}</span>
          <img src="@/assets/img/home/left.svg" alt="" class="left" />
          <img src="@/assets/img/home/right.svg" alt="" class="right" />
        </span>
        <!-- <img src="@/assets/img/home/left.svg" alt="" class="left" />
          <img src="@/assets/img/home/topLeft.svg" alt="" class="topLeft" />
          <img src="@/assets/img/home/topRight.svg" alt="" class="topRight" />
          <img src="@/assets/img/home/right.svg" alt="" class="right" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import { changeSizeFnWithPlus, changeSizeToMb } from '@/utils/utils'
export default {
  props: {
    cpu: {
      type: Number,
      default: 0
    },
    memory: {
      type: Number,
      default: 0
    },
    bandWidth: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      // infoList: [
      //   {
      //     id: 1,
      //     name: 'memory',
      //     label: this.$t('common.memory'),
      //     value: this.memory,
      //     unit: ''
      //   },
      //   {
      //     id: 2,
      //     name: 'cpu',
      //     label: this.$t('common.cpuCore'),
      //     value: this.cpu,
      //     unit: ''
      //   },
      //   {
      //     id: 3,
      //     name: 'bindWidth',
      //     label: this.$t('common.bandWidth'),
      //     value: this.bandWidth,
      //     unit: 'MB/S'
      //   }
      // ]
    }
  },
  computed: {
    performanceInfoList() {
      return [
        {
          id: 1,
          name: 'memory',
          label: this.$t('common.memory'),
          value: this.memory,
          unit: ''
        },
        {
          id: 2,
          name: 'cpu',
          label: this.$t('common.cpuCore'),
          value: this.cpu,
          unit: ''
        },
        {
          id: 3,
          name: 'bindWidth',
          label: this.$t('common.bandWidth'),
          value: this.bandWidth,
          unit: 'MB/S'
        }
      ]
    }
  },
  methods: {
    getUnit(info) {
      if (info.name === 'memory') {
        return changeSizeFnWithPlus(info.value).split('-')[1]
      } else {
        return info.unit
      }
    },
    getValue(info) {
      if (info.name === 'memory') {
        // B to GB
        return changeSizeFnWithPlus(info.value).split('-')[0]
      } else if (info.name === 'bindWidth') {
        // B to MB
        return changeSizeToMb(info.value)
      } else {
        return info.value
      }
    },
    getLabel(name) {
      switch (name) {
        case 'memory':
          return this.$t('common.memory')
        case 'cpu':
          return this.$t('common.cpuCore')
        case 'bindWidth':
          return this.$t('common.bandWidth')
        default:
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.performance-box {
  display: flex;
  height: 172px;
  // background: linear-gradient(180deg, rgba(129, 170, 255, 0.1) 0%, rgba(2, 29, 83, 0.2) 100%);
  // background: url('../../../assets/img/home/corner1.svg') no-repeat; //;
  // background-size: cover;
  //   border: 1px solid #0a54ea;
  // border: 1px solid red;
  background-image: linear-gradient(180deg, rgba(129, 170, 255, 0.1) 0%, rgba(2, 29, 83, 0.2) 100%);
  border-radius: 5px;
  position: relative;
  .corner {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1000;
    top: 0;
    left: 0;
  }
  .info-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    position: relative;
    vertical-align: middle;
    .label {
      font-family: BebasNeueBold, PuHuiTiMedium;
      font-size: 0.45rem;
      color: #dee9ff;
      letter-spacing: 0;
      text-align: center;
      line-height: 0.48rem;
      font-weight: 700;
      padding-right: 0.65rem;
      vertical-align: middle;
    }
    .content {
      position: relative;
      display: inline-block;
      line-height: 0.8rem;
      .value {
        position: relative;
        // border-top: 3.5px solid #72cff0;
        &:before {
          content: '';
          position: absolute;
          width: 95%;
          height: 3.5px;
          background: #72cff0;
          top: -0.05rem;
          left: 0;
          right: 0;
          margin: auto;
        }
      }
      .value,
      .unit {
        font-family: DINEngschrift, PuHuiTiRegular;
        font-size: 0.54rem;
        color: #ffffff;
        letter-spacing: 1px;
        text-align: left;
        text-shadow: 0 0 16px #ff6600;
        font-weight: 400;
        position: relative;
        vertical-align: middle;
      }
      .left {
        width: 0.59rem;
        position: absolute;
        top: -0.1rem;
        left: -0.5rem;
      }
      .topRight {
        position: absolute;
        top: 0;
        right: 0;
      }
      .topLeft {
        position: absolute;
        top: 0;
        left: 0;
      }
      .right {
        width: 0.32rem;
        position: absolute;
        top: -0.09rem;
        right: -0.25rem;
      }
    }
  }
}
</style>
