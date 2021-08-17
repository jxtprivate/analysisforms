<!-- 粉丝打赏榜 -->
<template>
  <el-row type="flex" justify="space-around">
    <el-col :span="16" style="padding-right:8px">
      <CBar
        name="粉丝打赏前10名"
        :chartData="chartData"
        width="730px"
        height="650px"
        :chartsettings="chartsettings"
      ></CBar>
    </el-col>

    <el-col :span="8" style="padding-left:15px">
      <Table
        name="起点"
        :columns="tableColumns"
        :datas="tableDatas"
        height="650px"
      >
      </Table>
    </el-col>
  </el-row>
</template>

<script>
import Table from '@/components/Table'
import CBar from '@/components/charts/CBar.vue'
import axios from '@/http/request'
import apis from '@/http/apis'

export default {
  name: 'TopWord',
  components: {
    Table,
    CBar,
  },
  data() {
    this.chartsettings = {
      labelMap: {
        reward: '打赏数量',
      },
      dataOrder: {
        label: 'reward',
        order: 'desc',
      },
    }
    return {
      chartData: {},
      tableColumns: [
        { prop: 'nickname', name: '粉丝名称' },
        { prop: 'reward', name: '打赏数量', sortable: true },
      ],
      tableDatas: [],
    }
  },
  created() {
    axios.get(apis.DATA_FAN_REWARD).then((res) => {
      this.chartData = {
        columns: ['nickname', 'reward'],
        rows: res.data.data.slice(0, 10),
      }
      this.tableDatas = res.data.data
    })
  },
}
</script>

<style></style>
