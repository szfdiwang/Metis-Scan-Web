<template>
  <div class="TakDetail">
    <div class="TakDetailTop">
      <div class="pic" @click="$router.push('/node/index')">
        <img src="../../assets/img/node/3.icon1.svg" alt="" style="line-height: 0.42rem" />
      </div>
      <div class="bank">XXXBANK</div>
      <div class="Identifier">Identifier：XXXXXXXXXXXXXXXXXXXXX</div>
    </div>
    <div class="steps">
      <div class="stepper">
        <el-steps :active="1">
          <el-step title="2020-03-13 10:01:03" description="Task started"></el-step>
          <el-step title="2020-03-13 10:01:23" description="Computation Succeeded"></el-step>
          <el-step title="2020-03-13 10:01:23" description="Computation failed"></el-step>
        </el-steps>
      </div>
      <div class="btn">VIEW THE TASK EVENTS</div>
    </div>
    <div class="participants">
      <img src="../../assets/img/node/3.button.svg" alt="" />
      <span class="text">PARTICIPANTS INFORMATION</span>
    </div>
    <div class="participantsData">
      <table>
        <tbody>
          <tr>
            <td>Sponsor:</td>
            <td>XXXXXXXXXXXX</td>
            <td>Identifier：XXXXXXXXXXXXXXXXXXXXX</td>
          </tr>
          <tr>
            <td>Result receiver:</td>
            <td>1.XXXX</td>
            <td>Identifier：XXXXXXXXXXXXXXXXXXXXX</td>
          </tr>
          <tr>
            <td></td>
            <td>2.XXXX</td>
            <td>Identifier：XXXXXXXXXXXXXXXXXXXXX</td>
          </tr>
          <tr>
            <td>Algorithm provider:</td>
            <td>XXXXXXXXXXXX</td>
            <td>Identifier：XXXXXXXXXXXXXXXXXXXXX</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="Data">
      <div class="dataPic">
        <img src="../../assets/img/node/3.button.svg" alt="" />
        <span class="text">DATA PROVIDERS</span>
      </div>
      <div class="precedence">
        <div style="width: 1.2rem">NO.</div>
        <div style="width: 3.12rem">Name</div>
        <div style="width: 5.21rem">Identifier</div>
        <div style="width: 3rem">Metadata name & ID</div>
      </div>
      <div class="precedence precedenceData" v-for="(item, index) in 5" :key="index">
        <div style="width: 1.24rem">
          <img src="../../assets/img/excel/1.svg" alt="" style="margin: 0.05rem" /><img
            src="../../assets/img/node/2.icon3.svg"
            alt=""
            style="margin: 0.05rem"
          />
        </div>
        <div style="width: 3.12rem">XXXXXXXXX</div>
        <div style="width: 5.21rem">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
        <div style="width: 3rem">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
      </div>
    </div>
    <!-- 2 -->
    <div class="Data">
      <div class="dataPic">
        <img src="../../assets/img/node/3.button.svg" alt="" />
        <span class="text">DATA PROVIDERS</span>
      </div>
      <div class="precedence pres">
        <div style="width: 1.24rem">NO.</div>
        <div style="width: 3.12rem">Name</div>
        <div style="width: 5.21rem">Identifier</div>
        <div style="width: 3rem">Occupied resources</div>
      </div>
      <div class="precedence precedenceData" v-for="(item, index) in 5" :key="index">
        <div style="width: 1.24rem">
          <img src="../../assets/img/excel/1.svg" alt="" style="margin: 0.05rem" /><img
            src="../../assets/img/node/2.icon3.svg"
            alt=""
            style="margin: 0.05rem"
          />
        </div>
        <div style="width: 3.12rem">XXXXXXXXX</div>
        <div style="width: 5.21rem">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
        <div style="width: 7rem" class="data">
          <span>CPU：xxxx</span>
          <span style="margin: 0px 0.5rem">Memory： xxxx</span>
          <span>Bandwidth:xxxx</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style  lang='scss' scoped>
.TakDetail {
  font-size: 0.16rem;
  height: 15rem;
  padding: 0.2rem;
  line-height: 0.42rem;
  background: url('../../assets/img/home/bj1.png');
  .TakDetailTop {
    height: 0.42rem;
    display: flex;
    margin-bottom: 0.1rem;
    .pic {
      line-height: 0.5rem;
      margin-left: 0.2rem;
    }
    .bank {
      font-size: 0.3rem;
      font-weight: 600;
      margin: 0.02rem 0.2rem;
    }
    .Identifier {
      line-height: 0.6rem;
    }
  }
  .steps {
    height: 1.57rem;
    background-image: linear-gradient(180deg, rgba(129, 170, 255, 0.1) 0%, rgba(2, 29, 83, 0.2) 100%);
    border: 1px solid #1d3a75;
    border-radius: 0.02rem;
    margin: 0.2rem 0.2rem;
    display: flex;
    position: relative;
    .stepper {
      width: 11.37rem;
      padding-top: 0.45rem;
      margin-left: 1.96rem;
    }
    .btn {
      width: 1.99rem;
      height: 0.4rem;
      background: #3954ff;
      border-radius: 0.08rem;
      text-align: center;
      position: absolute;
      top: 0.6rem;
      right: 1.6rem;
      font-size: 0.14rem;
    }
  }
  .participants {
    margin-left: 0.18rem;
    position: relative;
    .text {
      position: absolute;
      left: 0.2rem;
    }
  }
  .participantsData {
    padding: 0.15rem 0.4rem;
    tr {
      // padding-bottom: 10px;
      td {
        padding-right: 1rem;
      }
    }
  }
  .Data {
    padding: 0.2rem;
    height: 3.53rem;
    background: url('../../assets/img/node/4.边框.png');
    background-size: 100%;
    margin-bottom: 0.5rem;
    .dataPic {
      margin-left: 0.08rem;
      position: relative;
      .text {
        position: absolute;
        left: 0.5rem;
      }
    }
    // tbody {
    //   tr {
    //     width: 1840px;
    //     height: 40px;
    //     background: #080c3d;
    //     border-radius: 4px;
    //   }
    // }
    .precedence {
      display: flex;
      padding: 0px 0.15rem;
      width: 18.4rem;
    }
    .precedenceData {
      width: 18.4rem;
      height: 0.4rem;
      background: #080c3d;
      border-radius: 0.04rem;
      line-height: 0.4rem;
      margin: 0.1rem 0;
    }
  }
}
</style>