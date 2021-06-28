<template>
  <div class="NodeDetail">
    <div class="NodeDetailTop">
      <div class="pic" @click="$router.push('/node/index')">
        <img src="../../assets/img/node/3.icon1.svg" alt="" style="line-height: 0.42rem" />
      </div>
      <div class="bank">XXXBANK</div>
      <div class="Identifier">Identifier：XXXXXXXXXXXXXXXXXXXXX</div>
    </div>
    <div style="text-align: center">
      <img src="../../assets/img/node/3.标题.svg" alt="" />
    </div>
    <div>
      <!-- <div id="main" style="width: 600px; height: 400px"></div> -->
    </div>
    <div class="conent">
      <div class="conentTop">
        <div @click="$router.push('/node/metaData')"><img src="../../assets/img/node/3.button.svg" alt="" /></div>
        <div @click="$router.push('/task/TaskDetail')"><img src="../../assets/img/node/3.button2.svg" alt="" /></div>
        <div class="Metadata">Metadata：100</div>
        <div class="Tasks">Tasks：200</div>
      </div>
      <div class="ranking">
        <div class="rankingTh">
          <div style="width: 1.24rem">{{ $t('data.No') }}</div>
          <div style="width: 3.8rem">{{ $t('data.NameIdentifier') }}</div>
          <div style="width: 1.99rem">{{ $t('data.Identifier') }}</div>
          <div style="width: 4.18rem">{{ $t('data.DataProvider') }}</div>
          <div style="width: 2.04rem">Size</div>
          <div style="width: 2.62rem">{{ $t('data.Status') }}</div>
          <div>{{ $t('data.ParticipatedTasks') }}</div>
        </div>
      </div>
      <div class="rankingTd" v-for="(item, index) in 5" :key="index">
        <div style="width: 1.24rem" class="rankingTdImg">
          <div>
            <img src="../../assets/img/excel/1.svg" alt="" />
          </div>
          <div>
            <img src="../../assets/img/node/2.icon3.svg" alt="" />
          </div>
        </div>
        <div style="width: 3.8rem">
          <div>xxxxxxxxx任务</div>
          <div>xxxxxxxxxxxxxxxxxxxx</div>
        </div>
        <div style="width: 1.99rem; color: #fec43e">detail</div>
        <div style="width: 4.18rem">XXX BANK</div>
        <div style="width: 2.04rem">10</div>
        <div style="width: 2.62rem">200.0MB</div>
        <div>22</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang='scss' scoped>
.NodeDetail {
  height: 1000px;
  padding: 0.2rem;
  line-height: 0.42rem;
  background: url('../../assets/img/home/bj1.png');
  .NodeDetailTop {
    height: 0.42rem;
    display: flex;
    margin-bottom: 0.1rem;
    .pic {
      line-height: 0.5rem;
      margin-left: 0.2rem;
    }
    .bank {
      font-size: 30px;
      font-weight: 600;
      margin: 0.02rem 0.2rem;
    }
    .Identifier {
      line-height: 0.6rem;
    }
  }
  .conent {
    padding: 0.2rem;
    background: url('../../assets/img/node/2.边框.svg');
    .conentTop {
      display: flex;
      position: relative;
      .Metadata {
        position: absolute;
        left: 0.785rem;
      }
      .Tasks {
        position: absolute;
        left: 344px;
      }
    }
  }

  .rankingTh {
    margin: 0.1rem;
    display: flex;
  }
  .rankingTd {
    margin: 0.1rem;
    width: 18.4rem;
    height: 0.94rem;
    background: #080c3d;
    border-radius: 4px;
    display: flex;
    align-items: center;
    .rankingTdImg {
      display: flex;
      img {
        margin: 0px 0.15rem;
      }
    }

    .power {
      display: flex;
      align-items: center;
      div {
        margin-right: 0.2rem;
      }
    }
  }
}
</style>