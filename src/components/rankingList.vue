<template>
  <div class="rankingList">
      
      <div class="rankingTd" v-for="(item,index) in 5" :key="index">
        <div style="width: 124px" class="rankingTdImg">
          <div>
            <img src="../../assets/img/2.表格及其他/1.svg" alt="" />
          </div>
          <div>
            <img src="../../assets/img/切图/2.icon3.svg" alt="" />
          </div>
        </div>
        <div style="width: 380px">
          <div>xxxxxxxxx银行</div>
          <div>xxxxxxxxxxxxxxxxxxxx</div>
        </div>
        <div style="width: 199px ;color:#FEC43E;">detail</div>
        <div style="width: 418px" class="power">
          <div>
            <div>CPU:xxx</div>
            <div>Memory:xxx</div>
            <div>Bandwidth:xxx</div>
          </div>
          <div>
            <div>Remaining:xxx%</div>
            <div>Remaining:xxx%</div>
            <div>Remaining:xxx%</div>
          </div>
        </div>
        <div style="width: 204px">100</div>
        <div style="width: 262px">2%</div>
        <div>
          <div>
            <img src="../../assets/img/2.表格及其他/hot.svg" alt="" />
            <img src="../../assets/img/2.表格及其他/hot.svg" alt="" />
            <img src="../../assets/img/2.表格及其他/hot.svg" alt="" />
            <img src="../../assets/img/2.表格及其他/hot.svg" alt="" />
          </div>
          <div>
            <img src="../../assets/img/2.表格及其他/hot.svg" alt="" />
            <img src="../../assets/img/2.表格及其他/hot.svg" alt="" />
            <img src="../../assets/img/2.表格及其他/hot.svg" alt="" />
            <img src="../../assets/img/2.表格及其他/hot.svg" alt="" />
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>