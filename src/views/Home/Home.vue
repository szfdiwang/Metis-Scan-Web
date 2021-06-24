<template>
  <div class="home-box">
    <Performance />
    <img src="../../assets/img/home/bj4.png" alt="" class="bg-blue" />
    <img src="../../assets/img/home/bj5.png" alt="" class="bg-stripe" />
    <div class="welcome">
      <img src="../../assets/img/home/WelcometoRosetta.svg" alt="" />
    </div>
    <div class="search-bar">
      <el-input v-model="input2" placeholder="请输入内容" class="search-box">
        <template slot="suffix">
          <div class="search-btn pointer">{{ $t('common.search') }}</div>
        </template>
      </el-input>
    </div>
    <Card />
  </div>
</template>

<script>
import Performance from './components/Performance'
import Card from './components/Card'
export default {
  name: 'Home',
  components: {
    Performance,
    Card
  },
  data() {
    return {
      input2: '111111111'
    }
  }
}
</script>
<style lang="scss" scoped>
.home-box {
  height: 1000px;
  background: url('../../assets/img/home/bj1.png');
  position: relative;
  .bg-blue {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    margin-top: 20px;
  }
  .bg-stripe {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    margin-top: 100px;
  }
  .welcome {
    text-align: center;
    margin: 60px 0;
  }
  .search-bar {
    width: 100%;
    height: 1rem;
    text-align: center;
    .search-box {
      width: 15rem;
      height: 1rem;
      ::v-deep .el-input__inner {
        height: 100% !important;
        font-family: PingFangSC-Semibold;
        font-size: 20px;
        color: #dee9ff;
        background: linear-gradient(180deg, rgba(22, 72, 174, 0.1) 0%, rgba(19, 62, 148, 0.31) 100%);
        letter-spacing: 0;
        text-align: left;
        font-weight: 600;
        border: 1px solid #0a54ea;
        border-bottom-left-radius: 8px;
        border-top-left-radius: 8px;
      }
      ::v-deep .el-input__inner::placeholder {
        opacity: 0.5;
      }
      ::v-deep .el-input__suffix {
        display: flex;
      }
      .search-btn {
        width: 2.56rem;
        height: 0.8rem;
        background: #3954ff;
        border-radius: 8px;
        margin-top: 0.1rem;
        font-family: BebasNeueBold;
        font-size: 0.4rem;
        color: #dee9ff;
        letter-spacing: 0;
        text-align: center;
        line-height: 0.4rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        &:hover {
          background: #4a5fec;
        }
      }
    }
  }
}
</style>
