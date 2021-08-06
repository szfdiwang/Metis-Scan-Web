<template>
  <div v-if="curIndex > 3" class="rank-round">
    {{ curIndex }}
  </div>
  <div v-else>
    <span v-if="curIndex === 1">
      <img src="../../../assets/img/home/rank1.svg" alt="" class="rank" />
    </span>
    <span v-if="curIndex === 2">
      <img src="../../../assets/img/home/rank2.svg" alt="" class="rank" />
    </span>
    <span v-if="curIndex === 3">
      <img src="../../../assets/img/home/rank3.svg" alt="" class="rank" />
    </span>
  </div>
</template>

<script>

export default {
  props: {
    index: {
      type: Number,
      default: 0
    },
    curPage: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 0
    }
  },
  computed: {
    curIndex: function () {
      return (this.curPage - 1) * this.pageSize + this.index + 1
    }
  }
}
</script>
<style lang='scss' scoped>
.rank-round {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #3f4590;
  color: #fff;
  text-align: center;
  line-height: 21px;
  font-size: 12px;
}
.rank {
  width: 20px;
}
</style>