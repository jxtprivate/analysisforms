<!-- 写作天数 -->
<template>
  <el-row type="flex" justify="space-around">
    <el-col :span="16" style="padding-right:8px">
      <el-row type="flex" justify="space-between" :gutter="10">
        <el-col :span="12">
          <Table
            :name="rank_name[0]"
            :columns="tableColumns"
            :datas="tableDatas1"
            height="700px"
          >
          </Table>
        </el-col>
        <el-col :span="12">
          <Table
            :name="rank_name[1]"
            :columns="tableColumns"
            :datas="tableDatas2"
            height="700px"
          ></Table>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-between" :gutter="10">
        <el-col :span="12">
          <Table
            :name="rank_name[2]"
            :columns="tableColumns"
            :datas="tableDatas3"
            height="700px"
          >
          </Table>
        </el-col>
        <el-col :span="12">
          <Table
            :name="rank_name[3]"
            :columns="tableColumns"
            :datas="tableDatas4"
            height="700px"
          ></Table>
        </el-col>
      </el-row>
    </el-col>

    <el-col :span="8" style="padding-left:15px">
      <CHistogram
        name="写作天数区间人数分布"
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
    this.chartsettings = {}
    return {
      rank_name: ['A', 'B', 'C', 'D'],
      chartData: {},
      tableColumns: [
        { prop: 'scope', name: '写作天数' },
        { prop: 'counts', name: '人数', sortable: true },
      ],
      tableDatas1: [],
      tableDatas2: [],
      tableDatas3: [],
      tableDatas4: [],
    }
  },
  components: {
    Table,
    CHistogram,
  },
  methods: {
    //获取写作天数区间分布数据
    getWriteDayScope() {
      axios.get(apis.DATA_WRITE_DAYS).then((res) => {
        const arr = res.data.data.intervals

        let jsonArr = JSON.stringify(arr[0].ranks)
        let rows = JSON.parse(jsonArr)
        rows.forEach((item, i) => {
          item[arr[1].rank_type] = arr[1].ranks[i].counts
        })
        rows.forEach((item, i) => {
          item[arr[2].rank_type] = arr[2].ranks[i].counts
        })
        rows.forEach((item, i) => {
          item[arr[3].rank_type] = arr[3].ranks[i].counts
        })

        this.chartData = {
          columns: [
            'scope',
            'counts',
            arr[1].rank_type,
            arr[2].rank_type,
            arr[3].rank_type,
          ],
          rows,
        }
        this.tableDatas1 = arr[0].ranks
        this.tableDatas2 = arr[1].ranks
        this.tableDatas3 = arr[2].ranks
        this.tableDatas4 = arr[3].ranks
        this.rank_name = arr.map((item) => item.rank_type)

        this.chartsettings = {
          labelMap: {
            counts: arr[0].rank_type,
          },
        }
      })
    },
  },
  created() {
    this.getWriteDayScope()
  },
}
</script>

<style></style>
