<template>
  <div class="header-box-wrapper">
    <div class="header-box">
      <div class="logo">
        <router-link to="/home">
          <img src="@/assets/img/home/logo.svg" alt="" />
        </router-link>
        <Menu />
      </div>
      <Lang />
    </div>
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
.header-box-wrapper {
  width: 100%;
  background: #000;
  color: #fff;
  /* box-shadow: 0 1px 0 0 rgba(10,84,234,0.30); */
  border-bottom: 1px solid rgba(10, 84, 234, 0.3);
  .header-box {
    margin: 0 auto;
    max-width: 1700px;
    height: 79px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding: 0 1%; */
  }
  .logo {
    display: flex;
    align-items: center;
  }
}
</style>
