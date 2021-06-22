<template>
  <div class="layout-box">
    <Head />
    <AppMain />
  </div>
</template>
<script>
import Head from './Head'
import AppMain from './components/AppMain'
export default {
  name: 'Layout',
  components: {
    Head,
    AppMain
  }
}
</script>
<style lang="scss" scoped>
.layout-box {
  height: 100%;
}
</style>

