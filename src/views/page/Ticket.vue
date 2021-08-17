<!-- 月票榜 -->
<template>
  <el-row type="flex" justify="space-around">
    <el-col :span="16" style="padding-right:8px">
      <el-row type="flex" justify="space-between" :gutter="10">
        <el-col :span="12">
          <Table
            name="起点"
            :columns="tableColumns"
            :datas="tableDatas"
            height="700px"
          >
          </Table>
        </el-col>

        <el-col :span="12">
          <Table
            name="起点"
            :columns="tableColumns1"
            :datas="tableDatas1"
            height="700px"
          >
          </Table>

          <Table
            name="纵横"
            :columns="tableColumns1"
            :datas="tableDatas2"
            height="700px"
          >
          </Table>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="8" style="padding-left:15px">
      <CHistogram
        name="月票区间人数分布"
        :chartData="chartData"
        height="400px"
        :chartsettings="chartsettings"
      ></CHistogram>
    </el-col>
  </el-row>
</template>

<script>
import Table from '@/components/Table'
import CHistogram from '@/components/charts/CHistogram.vue'
import axios from '@/http/request'
import apis from '@/http/apis'

export default {
  name: 'TopWord',
  data() {
    this.chartsettings = {
      labelMap: {
        counts: '起点',
      },
    }
    return {
      chartData: {},
      tableColumns: [
        { prop: 'scope', name: '月票数区间' },
        { prop: 'counts', name: '月票数量', sortable: true },
      ],
      tableDatas: [],
      tableColumns1: [{ prop: 'totaltickets', name: '月票总数' }],
      tableDatas1: [],
      tableDatas2: [],
    }
  },
  components: {
    Table,
    CHistogram,
  },
  methods: {
    getMonlyticks() {
      axios.get(apis.DATA_MONLY_TICKETS).then((res) => {
        const arr = res.data.data.intervals
        this.tableDatas = arr[0].ranks
        let obj1 = { totaltickets: res.data.data.total_ticks[0].number }
        let obj2 = { totaltickets: res.data.data.total_ticks[1].number }
        this.tableDatas1.push(obj1)
        this.tableDatas2.push(obj2)

        let jsonArr2 = JSON.stringify(arr[0].ranks)
        let rows = JSON.parse(jsonArr2)
        rows.forEach((item, i) => {
          item[arr[1].site] = arr[1].ranks[i].counts
        })
        this.chartData = {
          columns: ['scope', 'counts', arr[1].site],
          rows,
        }
      })
    },
  },
  created() {
    this.getMonlyticks()
  },
}
</script>

<style lang="scss" scoped></style>
