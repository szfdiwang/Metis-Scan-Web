<template>
  <div class="card-box">
    <el-row :gutter="20">
      <el-col :span="8"><div class="card-mini-box">1</div></el-col>
      <el-col :span="8"><div class="card-mini-box">2</div></el-col>
      <el-col :span="8"><div class="card-mini-box">3</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8"><div class="card-mini-box">1</div></el-col>
      <el-col :span="8"><div class="card-mini-box">2</div></el-col>
      <el-col :span="8"><div class="card-mini-box">3</div></el-col>
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
    cardListUp:[
      {
        id:1,
        name:'nodeNum',
        label:this.$t('home.nodeNum'),
        value:'1222'
      },
      {
        id:2,
        name:'uploadData',
        label:this.$t('home.uploadData'),
        value:'2,000.00'
      },
      {
        id:3,
        name:'completedTask',
        label:this.$t('home.completedTask'),
        value:'100,000'
      }
    ],
    cardListDown:[
       {
        id:1,
        name:'computingExecutors',
        label:this.$t('home.computingExecutors'),
        value:'888'
      },
      {
        id:2,
        name:'transactionData',
        label:this.$t('home.transactionData'),
        value:'2,000.00'
      },
      {
        id:3,
        name:'totalTask',
        label:this.$t('home.totalTask'),
        value:'100,000'
      }
    ],
  },
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.card-box{
  margin: 55px .2rem 20px;
  .card-mini-box{
    // width: 6.13rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 1.76rem;
    background-image: linear-gradient(180deg, rgba(129,170,255,0.10) 0%, rgba(2,29,83,0.20) 100%);
    border: 1px solid #0A54EA;
    border-radius: 8px;
  }
}
</style>
