<template>
  <div class="card-box">
    <el-row :gutter="20" style="margin-bottom: 20px">
      <el-col v-for="card in cardListUp" :key="card.id" :span="8">
        <div class="card-mini-box">
          <p class="label">{{ card.label }}</p>
          <p class="desc">{{ card.desc }}</p>
          <p class="value">{{ card.value }}</p>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col v-for="card in cardListDown" :key="card.id" :span="8">
        <div class="card-mini-box">
          <p class="label">{{ card.label }}</p>
          <p class="desc">{{ card.desc }}</p>
          <p class="value">{{ card.value }}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  computed: {
    cardListUp() {
      return [
        {
          id: 1,
          name: 'nodeNum',
          label: this.$t('home.nodeNum'),
          desc: this.$t('home.nodeNumDesc'),
          value: '1222'
        },
        {
          id: 2,
          name: 'uploadData',
          label: this.$t('home.uploadData'),
          desc: this.$t('home.uploadDataDesc'),
          value: '2,000.00'
        },
        {
          id: 3,
          name: 'completedTask',
          label: this.$t('home.completedTask'),
          desc: this.$t('home.completedTaskDesc'),
          value: '100,000'
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
          value: '888'
        },
        {
          id: 2,
          name: 'transactionData',
          label: this.$t('home.transactionData'),
          desc: this.$t('home.transactionDataDesc'),
          value: '2,000.00'
        },
        {
          id: 3,
          name: 'totalTask',
          label: this.$t('home.totalTask'),
          desc: this.$t('home.totalTaskDesc'),
          value: '100,000'
        }
      ]
    }
  },
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.card-box {
  margin: 55px 0.2rem 20px;
  .card-mini-box {
    // width: 6.13rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 1.76rem;
    background-image: linear-gradient(180deg, rgba(129, 170, 255, 0.1) 0%, rgba(2, 29, 83, 0.2) 100%);
    border: 1px solid #0a54ea;
    border-radius: 0.08rem;
    .label {
      font-family: PingFangSC-Medium;
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
