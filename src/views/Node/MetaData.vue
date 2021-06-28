<template>
  <div class="metaData">
    <div class="metaDataTop">
      <div class="pic" @click="$router.push('/node/NodeDetail')">
        <img src="../../assets/img/node/3.icon1.svg" alt="" style="line-height: 0.42rem" />
      </div>
      <div class="bank">XXXBANK</div>
      <div class="Identifier">ID：XXXXXXXXXXXXXXXXXXXXX</div>
    </div>
    <div class="tableData">
      <table>
        <tbody>
          <tr>
            <td>Data provider</td>
            <td>xxxxxxxxxxx</td>
            <td>Number of fields(columns)</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Size of data</td>
            <td>2.0 GB</td>
            <td>Number of data(rows)</td>
            <td>3,000</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="Description">
      <div>Description</div>
      <div class="ipt">xxxxxxxxx</div>
    </div>
    <div class="rankingListTop">
      <div><img src="../../assets/img/node/3.button.svg" alt="" /></div>
      <div class="text">INFORMATION OF FIFLDS</div>
    </div>
    <div class="rankingTh">
      <div style="width: 1.27rem">NO.</div>
      <div style="width: 5.1rem">Field name</div>
      <div style="width: 1.27rem">NO.</div>
      <div style="width: 5.06rem">Field name</div>
      <div style="width: 1.27rem">NO.</div>
      <div style="width: 4.03rem">Field name</div>
    </div>
    <div class="rankingList">
      <div class="rankingTd" v-for="(item, index) in 24" :key="index">
        <div style="width: 1.27rem">
          <img src="../../assets/img/excel/1.svg" alt="" style="margin: 0.05rem" /><img
            src="../../assets/img/node/2.icon3.svg"
            alt=""
            style="margin: 0.05rem"
          />
        </div>
        <div>xxxxxxxxxxxx</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style lang='scss' scoped>
.metaData {
  height: 1000px;
  background: url('../../assets/img/home/bj1.png');
  padding: 0px 0.2rem;
  .metaDataTop {
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
      margin-left: 0.3rem;
      line-height: 0.6rem;
    }
  }
  .tableData {
    padding: 0.1rem 0.4rem;
    td {
      padding: 0.2rem;
    }
  }
  .Description {
    display: flex;
    padding-left: 0.6rem;
    .ipt {
      width: 9rem;
      height: 1.1rem;
      border: 0.02rem solid #333352;
      border-radius: 0.02rem;
      margin-left: 0.55rem;
      padding-left: 0.2rem;
    }
  }
  .rankingListTop {
    display: flex;
    padding: 0.4rem 0.2rem;
    position: relative;
    .text {
      position: absolute;
      top: 0.5rem;
      left: 0.5rem;
    }
  }
  .rankingTh {
    display: flex;
    padding: 0px 0.18rem;
  }
  .rankingList {
    padding: 0px 0.1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .rankingTd {
      width: 5.8rem;
      height: 0.4rem;
      background: #080c3d;
      border-radius: 0.04rem;
      display: flex;
      margin: 0.1rem 0px;
      line-height: 0.4rem;
    }
  }
}
</style>