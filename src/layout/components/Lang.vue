<template>
  <div class="lang-box pointer">
    <span v-if="lang === 'zh'" class="pointer lang-text" @click="switchLang('en')">En</span>
    <span v-else class="pointer lang-text" @click="switchLang('zh')">中</span>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  mounted() {},
  methods: {
    switchLang(lang) {
      console.log(lang)
      this.$i18n.locale = lang
      localStorage.setItem('lang', lang)
    }
  }
}
</script>

<style lang='scss' scoped>
.lang-box {
  width: 77px;
  height: 32px;
  background: #11175d;
  border-radius: 8px;
  color: #fff;
  text-align: center;
  &:hover {
    background-color: rgba(23, 37, 192, 0.7);
  }
  .lang-text {
    width: 100%;
    display: inline-block;
    line-height: 32px;
    font-family: PingFangSC-Semibold;
    font-size: 14px;
    color: #ffffff;
    letter-spacing: 0;
    font-weight: 600;
  }
}
</style>