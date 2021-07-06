<template>
  <div class="card-box">
    <el-row :gutter="20" style="margin-bottom: 20px">
      <el-col v-for="card in cardListUp" :key="card.id" :span="8">
        <div class="card-mini-box">
          <p class="label">{{ card.label }}</p>
          <p class="desc">{{ card.desc }}</p>
          <p class="value">
            <span>{{ getValue(card) }}</span>
          </p>
          <img src="../../../assets/img/home/person.svg" alt="" class="personIcon" />
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col v-for="card in cardListDown" :key="card.id" :span="8">
        <div class="card-mini-box">
          <p class="label">{{ card.label }}</p>
          <p class="desc">{{ card.desc }}</p>
          <p class="value">
            <span>{{ getValue(card) }}</span>
            <!-- <span>{{ getUnit(card) }}</span> -->
          </p>
          <img src="../../../assets/img/home/person.svg" alt="" class="personIcon" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { thousandMark, changeSizeWithMarkFn } from '@/utils/utils'
export default {
  components: {},
  data() {
    return {}
  },
  props: {
    partnerCount: { type: Number, default: 0 },
    dataFileSize: { type: Number, default: 0 },
    taskCount: { type: Number, default: 0 },
    usedDataFileSize: { type: Number, default: 0 }, // 使用数据量
    powerServerCount: { type: Number, default: 0 },
    dataServerCount: { type: Number, default: 0 }
  },
  computed: {
    cardListUp() {
      return [
        {
          id: 1,
          name: 'nodeNum',
          label: this.$t('home.nodeNum'),
          desc: this.$t('home.nodeNumDesc'),
          value: this.dataServerCount
        },
        {
          id: 2,
          name: 'uploadData',
          label: this.$t('home.uploadData'),
          desc: this.$t('home.uploadDataDesc'),
          value: this.dataFileSize
        },
        {
          id: 3,
          name: 'completedTask',
          label: this.$t('home.completedTask'),
          desc: this.$t('home.completedTaskDesc'),
          value: this.partnerCount
        }
      ]
    },
    cardListDown() {
      return [
        {
          id: 1,
          name: 'computingExecutors',
          label: this.$t('home.computingExecutors'),
          desc: this.$t('home.computingExecutorsDesc'),
          value: this.powerServerCount
        },
        {
          id: 2,
          name: 'transactionData',
          label: this.$t('home.transactionData'),
          desc: this.$t('home.transactionDataDesc'),
          value: this.usedDataFileSize,
          unit: ''
        },
        {
          id: 3,
          name: 'totalTask',
          label: this.$t('home.totalTask'),
          desc: this.$t('home.totalTaskDesc'),
          value: this.taskCount
        }
      ]
    }
  },
  methods: {
    getValue(card) {
      if (card.name === 'uploadData' || card.name === 'transactionData') {
        return changeSizeWithMarkFn(card.value)
      } else {
        return thousandMark(card.value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-box {
  margin: 55px 0 20px;
  .card-mini-box {
    // width: 6.13rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 1.76rem;
    background: url('../../../assets/img/home/border.png') no-repeat; //linear-gradient(180deg, rgba(129, 170, 255, 0.1) 0%, rgba(2, 29, 83, 0.2) 100%);
    background-size: 100% 100%;
    border-radius: 0.08rem;
    position: relative;
    .personIcon {
      position: absolute;
      width: 0.24rem;
      top: 0.2rem;
      right: 0.2rem;
    }
    .label {
      font-size: 0.2rem;
      color: #dee9ff;
      text-align: center;
      line-height: 0.14rem;
      font-weight: 500;
    }
    .desc {
      width: 4rem;
      opacity: 0.5;
      font-family: PingFangSC-Medium;
      font-size: 0.14rem;
      color: #dee9ff;
      text-align: center;
      line-height: 0.14rem;
      font-weight: 500;
      margin-top: 0.12rem;
    }
    .value {
      margin-top: 0.32rem;
      font-family: DINPro-Bold;
      font-size: 0.4rem;
      color: #dee9ff;
      letter-spacing: 0;
      text-align: center;
      line-height: 0.24rem;
      font-weight: 700;
    }
  }
}
</style>
