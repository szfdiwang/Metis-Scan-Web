<template>
  <div class="header-box">
    <div class="logo">
      <img src="@/assets/img/home/logo.svg" alt="" />
      <Menu />
    </div>
    <Lang />
  </div>
</template>
<script>
import Menu from './components/Menu'
import Lang from './components/Lang'
export default {
  name: '',
  components: {
    Menu,
    Lang
  }
}
</script>
<style lang="scss" scoped>
.header-box {
  height: 80px;
  width: 100vw;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // padding: 0 1%;
  padding: 0 1.1rem;
  .logo {
    display: flex;
    align-items: center;
  }
}
</style>