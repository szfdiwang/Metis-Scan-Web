<template>
  <div class="home-box">
    <Performance />
  </div>
</template>

<script>
import Performance from './components/Performance'
export default {
  name: 'Home',
  components: {
    Performance
  }
}
</script>
<style lang="scss" scoped>
.home-box {
  height: 1000px;
  background: url('../../assets/img/home/bj1.png');
}
</style>
