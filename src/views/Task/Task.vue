<template>
  <div class="Data">
    <div class="imgBox">
      <div class="topImg">
        <div><img src="../../assets/img/node/2.bj1.png" /></div>
        <div><img src="../../assets/img/node/2.bj1.png" /></div>
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
        <span>{{ $t('task.to') }}</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </div>
    </div>
    <div class="ranking">
      <div class="rankingTh">
        <div style="width: 1.24rem">{{ $t('task.No') }}</div>
        <div style="width: 3.8rem">{{ $t('task.NameIdentifier') }}</div>
        <div style="width: 1.99rem">{{ $t('task.Identifier') }}</div>
        <div style="width: 4.18rem">{{ $t('task.Sponsor') }}</div>
        <div style="width: 2.04rem">{{ $t('task.Status') }}</div>
        <div style="width: 2.62rem">{{ $t('task.StartTime') }}</div>
        <div>{{ $t('task.TimeSpent') }}</div>
      </div>
    </div>
    <div class="rankingTd" v-for="(item, index) in listTask" :key="index">
      <div style="width: 1.24rem" class="rankingTdImg">
        <div id="xh">
          <div v-if="index > 2" class="order">
            {{ index + 1 }}
          </div>
          <img v-if="index === 0" src="../../assets/img/excel/1.svg" alt="" />
          <img v-if="index === 1" src="../../assets/img/excel/2.svg" alt="" />
          <img v-if="index === 2" src="../../assets/img/excel/3.svg" alt="" />
        </div>
      </div>
      <div style="width: 3.8rem">
        <div>{{ item.taskName }}任务</div>
        <div>ID: {{ item.id }}</div>
      </div>
      <div style="width: 1.99rem; color: #fec43e" @click="$router.push('/task/TaskDetail')">
        {{ $t('node.Detail') }}
      </div>
      <div style="width: 4.18rem">{{ item.dynamicFields.sponsorName }}</div>
      <div style="width: 2.04rem">{{ $t('task.Succeeded') }}</div>
      <div style="width: 2.62rem">{{ item.createAt }}</div>
      <div>{{ item.endAt }}</div>
    </div>
    <div class="Pagination">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        :current-page="curPage"
        :page-size="pageSize"
        layout="total, prev, pager, next"
        :total="totalRows"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import Pagination from '../../components/Pagination.vue'
import { taskApi } from '../../api/index'
console.log('taskApi', taskApi)
export default {
  components: { Pagination },
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: '',
      listTask: [],
      curPage: 1,
      pageSize: 5,
      totalRows: 10
    }
  },
  created() {
    this.getListTask()
  },
  methods: {
    handleCurrentChange(page) {
      this.curPage = page
    },
    async getListTask() {
      const res = await taskApi.getListTask({
        pageNo: 1,
        pageSize: 10
      })
      this.listTask = res.data
      console.log('任务', res)
    }
  }
}
</script>
<style lang="scss" scoped>
.Data {
  height: 1000px;
  background: url('../../assets/img/home/bj1.png');
  padding: 0px 0.2rem;
  .select {
    height: 0.4rem;
    background-color: sandybrown;
  }
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
  .selectItem {
    display: flex;
    padding: 0.2rem 0.1rem;
    span {
      margin-right: 0.2rem;
    }
    div {
      margin-right: 0.7rem;
    }
  }
  .pagination {
    margin: 0.2rem 0.1rem;
  }
  .order {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #3f4590;
    text-align: center;
    margin-left: 20px;
  }
  .el-pagination {
      margin-top: 0.1rem;
      ::v-deep .el-input__inner {
        background: #303047;
        border-color: #303047;
        color: #fff;
      }
      ::v-deep .btn-prev,
      ::v-deep .btn-next {
        background: #303047;
        border-color: #303047;
        color: #fff;
      }
    }
  }

</style>