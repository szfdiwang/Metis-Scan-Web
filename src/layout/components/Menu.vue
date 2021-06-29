<template>
  <ul class="menu-box">
    <li v-for="menu in menuList" :key="menu.name" class="menu-item-box pointer" @click="link(menu)">
      <div class="menu-wrapper-box pointer" :class="{ active: $route.path.includes(menu.path) }"></div>
      <p class="menu-text-box pointer">{{ menu.label }}</p>
    </li>
  </ul>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      activeIndex: 1
    }
  },
  computed: {
    // currentUrl() {
    //   return this.$route
    // },
    menuList() {
      return [
        {
          menuIndex: 1,
          name: 'home',
          label: this.$t('menu.home'),
          path: '/home'
        },
        {
          menuIndex: 2,
          name: 'node',
          label: this.$t('menu.node'),
          path: '/node'
        },
        {
          menuIndex: 3,
          name: 'data',
          label: this.$t('menu.data'),
          path: '/data'
        },
        { menuIndex: 4, name: 'task', label: this.$t('menu.task'), path: '/task' }
      ]
    }
  },
  mounted() {
    console.log(this.$route.path)
  },
  methods: {
    link(item) {
      this.activeIndex = item.menuIndex
      this.$router.push({
        name: item.name
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.menu-box {
  padding-left: 0.36rem;
  display: flex;
  .menu-item-box {
    width: 120px;
    height: 40px;
    position: relative;
    margin-right: 10px;
    &:hover .menu-wrapper-box {
      background-color: #3954ff;
    }
    .menu-wrapper-box {
      width: 100%;
      height: 100%;
      background: #11175d;
      transform: rotateZ(10deg) skew(-10deg, -10deg);
      line-height: 40px;
      border-radius: 4px;
      text-align: center;
      position: relative;
      &.active {
        background-color: #3954ff;
      }
    }
    .menu-text-box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: PingFangSC-Medium;
      font-size: 14px;
      color: #ffffff;
      letter-spacing: 0;
      font-weight: 500;
    }
  }
}
</style>