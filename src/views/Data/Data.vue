<template>
  <div class="Data">
    <div class="imgBox">
      <div class="topImg">
        <div><img src="../../assets/img/node/2.bj1.png" /></div>
        <div><img src="../../assets/img/node/2.bj1.png" /></div>
        <div class="textNode">{{ $t('data.DATA') }}</div>
        <div class="text">{{ $t('data.PIECESOFMETADATAINTHEWHOLENETWORK') }}</div>
      </div>
    </div>
    <div class="ranking">
      <div class="rankingTh">
        <div style="width: 1.24rem">{{ $t('data.No') }}</div>
        <div style="width: 3.8rem">{{ $t('data.NameIdentifier') }}</div>
        <div style="width: 2.1rem">{{ $t('data.Identifier') }}</div>
        <div style="width: 2.9rem">{{ $t('data.DataProvider') }}</div>
        <div style="width: 2.04rem">{{$t('node.Size')}}</div>
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
      <div style="width: 2.1rem; color: #fec43e" @click="$router.push('/node/metaData')">{{ $t('node.Detail') }}</div>
      <div style="width: 2.9rem">XXX BANK</div>
      <div style="width: 2.04rem">10</div>
      <div style="width: 2.62rem">200.0MB</div>
      <div>22</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    imgEvent() {
      this.imgList++
      this.imgUrl = '../../assets/img/excel/1.svg'
      console.log(this.imgUrl)
    }
  },
  created() {
    // this.imgEvent()
  }
}
</script>
<style lang="scss" scoped>
.Data {
  height: 1000px;
  background: url('../../assets/img/home/bj1.png');
  padding: 0px 0.2rem;
  .imgBox {
    position: relative;
    padding-bottom: 0.1rem;
    .topImg {
      padding: 0px 1.445rem;
      width: 1.24rem;
      display: flex;
      justify-content: space-between;
      img {
        width: 8rem;
        height: 1rem;
      }
      .textNode {
        position: absolute;
        left: 0.2rem;
        top: 0.35rem;
        font-size: 30px;
      }
      .text {
        position: absolute;
        left: 2rem;
        top: 0.35rem;
        font-size: 25px;
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