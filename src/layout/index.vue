<template>
  <div class="">

    <Head />
    <router-view />
  </div>
</template>
<script>
import Head from './Head'
export default {
  name: 'Layout',
  components: {
    Head
  }
}
</script>
<style lang="scss" scoped>
</style>

