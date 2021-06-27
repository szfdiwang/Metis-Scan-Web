<template>
  <div class="bottom-table-box">
    <el-table
      :data="tableData"
      style="width: 100%"
      :header-cell-style="{ backgroundColor: '#05052E', color: '#fff', border: none }"
    >
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <img src="../../../assets/img/home/table-bg.svg" alt="" class="bg-img" />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.bottom-table-box {
  height: 6.53rem;
  padding: 0.2rem;
  // background: url('../../../assets/img/home/table-bg.svg');
  // background-size: cover;
  margin-bottom: 50px;
  position: relative;
  ::v-deep .el-table__body {
    border-spacing: 0 8px;
    border-collapse: separate;
    table-layout: fixed;
    background: #05052e;
    border: none !important;
  }
  ::v-deep .el-table tr {
    background: #080c3d !important;
    border: none !important;
  }
  .bg-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>