<template>
  <div class="Data">
    <div class="imgBox">
      <div class="topImg">
        <div><img src="../../assets/img/切图/2.bj1.png" /></div>
        <div><img src="../../assets/img/切图/2.bj1.png" /></div>
        <div class="textNode">{{ $t('task.TASK') }}</div>
        <div class="text">{{ $t('task.PTASKSINTHEWHOLENETWORK') }}</div>
      </div>
    </div>
    <div class="selectItem">
      <div>
        <span>{{ $t('task.StatusItem') }}:</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </div>
      <div>
        <span>{{ $t('task.TimeSpan') }}:</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </div>
      <div>
        <span>to</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </div>
    </div>
    <div class="ranking">
      <div class="rankingTh">
        <div style="width: 124px">{{ $t('task.No') }}</div>
        <div style="width: 380px">{{ $t('task.NameIdentifier') }}</div>
        <div style="width: 199px">{{ $t('task.Identifier') }}</div>
        <div style="width: 418px">{{ $t('task.Sponsor') }}</div>
        <div style="width: 204px">{{ $t('task.Status') }}</div>
        <div style="width: 262px">{{ $t('task.StartTime') }}</div>
        <div>{{ $t('task.TimeSpent') }}</div>
      </div>
    </div>
    <div class="rankingTd" v-for="(item, index) in 5" :key="index">
      <div style="width: 124px" class="rankingTdImg">
        <div>
          <img src="../../assets/img/2.表格及其他/1.svg" alt="" />
        </div>
        <div>
          <img src="../../assets/img/切图/2.icon3.svg" alt="" />
        </div>
      </div>
      <div style="width: 380px">
        <div>xxxxxxxxx任务</div>
        <div>xxxxxxxxxxxxxxxxxxxx</div>
      </div>
      <div style="width: 199px; color: #fec43e">detail</div>
      <div style="width: 418px">XXX BANK</div>
      <div style="width: 204px">Succeeded</div>
      <div style="width: 262px">2021-1-22 13:00:00</div>
      <div>12:22:59</div>
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
      this.imgUrl = '../../assets/img/2.表格及其他/1.svg'
      console.log(this.imgUrl)
    }
  }
}
</script>
<style lang="scss" scoped>
.Data {
  height: 1000px;
  background: url('../../assets/img/home/bj1.png');
  padding: 0px 20px;
  .select {
    height: 0.4rem;
    background-color: sandybrown;
  }
  .imgBox {
    position: relative;
    padding-bottom: 10px;
    .topImg {
      padding: 0px 1.445rem;
      width: 124px;
      display: flex;
      justify-content: space-between;
      img {
        width: 8rem;
        height: 1rem;
      }
      .textNode {
        position: absolute;
        left: 0.2rem;
        top: 35px;
        font-size: 30px;
      }
      .text {
        position: absolute;
        left: 2rem;
        top: 35px;
        font-size: 25px;
      }
    }
  }
  .rankingTh {
    margin: 10px;
    display: flex;
  }
  .rankingTd {
    margin: 10px;
    width: 1840px;
    height: 94px;
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
        margin-right: 20px;
      }
    }
  }
  .selectItem {
    display: flex;
    padding: 20px 10px;
    span {
      margin-right: 0.2rem;
    }
    div {
      margin-right: 0.7rem;
    }
  }
}
</style>