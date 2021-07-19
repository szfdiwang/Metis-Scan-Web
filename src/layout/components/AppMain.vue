<template>
  <el-scrollbar ref="scroll" class="app-main" wrapClass="x-hidden app-hidden">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </el-scrollbar>
</template>
<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  },
  watch: {
    $route: {
      handler() {
        this.$refs['scroll'].wrap.scrollTop = 0
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.app-main {
  height: calc(100vh - 80px);
  width: 100%;
  position: relative;
  background-color: #000; // #05052e;
}
.x-hidden {
  overflow-x: hidden;
}
/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
