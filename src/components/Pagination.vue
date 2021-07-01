<template>
  <div class="Pagination">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[4, 100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  },
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 10,
      page: {
        page: 1,
        size: 5,
        total: 10
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Pagination {
  width: 18.4rem;
  height: 0.4rem;
  background: #080c3d;
  border-radius: 0.04rem;
//   margin: 0.05rem 0.3rem;
}
</style>