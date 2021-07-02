<template>
  <div class="TaskLog">
    <div class="TaskLogTh">
      <div style="width: 1.24rem">{{ $t('node.No') }}</div>
      <div style="width: 3.12rem">{{ $t('log.EventType') }}</div>
      <div style="width: 4.19rem">{{ $t('log.EVentMaker') }}</div>
      <div style="width: 3.7rem">{{ $t('log.GenerationTime') }}</div>
      <div>{{ $t('log.EventFailed') }}</div>
    </div>
    <div class="TaskLogTd" v-for="(item, index) in 5" :key="index">
      <div style="width: 1.24rem">
        <img src="../../assets/img/excel/1.svg" alt="" style="margin: 0.05rem" /><img
          src="../../assets/img/node/2.icon3.svg"
          alt=""
          style="margin: 0.05rem"
        />
      </div>
      <div style="width: 3.12rem">xxxxxxxxxxx</div>
      <div style="width: 4.19rem">xxxxxxxxxxxxxxx</div>
      <div style="width: 3.7rem">2021-2-2 12:23:59</div>
      <div>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang='scss' scoped>
.TaskLog {
  padding: 0.4rem;
  .TaskLogTh {
    display: flex;
  }
  .TaskLogTd {
    display: flex;
    width: 18.4rem;
    height: 0.4rem;
    background: #080c3d;
    border-radius: 0.04rem;
    margin: 0.1rem 0px;
    align-items: center;
  }
}
</style>
