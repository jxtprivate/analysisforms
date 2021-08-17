<!-- 上榜次数&分类统计 -->
<template>
  <el-row type="flex" justify="space-around">
    <el-col :span="16" style="padding-right:8px">
      <el-row type="flex" justify="space-between" :gutter="10">
        <el-col :span="12">
          <Table
            name="起点"
            :columns="tableColumns1"
            :datas="tableDatas1"
            height="700px"
          >
          </Table>
        </el-col>
        <el-col :span="12">
          <Table
            name="纵横"
            :columns="tableColumns2"
            :datas="tableDatas2"
            height="700px"
          ></Table>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="8" style="padding-left:15px">
      <CRing name="上榜次数" :chartData="chartData1"></CRing>
      <CHistogram
        name="分类统计"
        :chartData="chartData2"
        :chartsettings="chartsettings"
      ></CHistogram>
    </el-col>
  </el-row>
</template>

<script>
import Table from '@/components/Table'
import CRing from '@/components/charts/CRing.vue'
import CHistogram from '@/components/charts/CHistogram.vue'
import axios from '@/http/request'
import apis from '@/http/apis'

export default {
  components: { Table, CRing, CHistogram },
  name: 'Statistic',
  data() {
    this.chartsettings = {
      labelMap: {
        number: '数目',
      },
    }
    return {
      chartData1: {
        columns: ['time', 'number'],
        rows: [],
      },
      tableColumns1: [
        { prop: 'time', name: '上榜次数' },
        { prop: 'number', name: '人数', sortable: true },
      ],
      tableDatas1: [],
      chartData2: {
        columns: ['type', 'number'],
        rows: [],
      },
      tableColumns2: [
        { prop: 'type', name: '类型' },
        { prop: 'number', name: '数目', sortable: true },
      ],
      tableDatas2: [],
    }
  },
  created() {
    this.getStatistic()
  },
  methods: {
    getStatistic() {
      axios.get(apis.DATA_STATISTIC).then((res) => {
        const arr = res.data.data.intervals
        this.tableDatas1 = arr[0].datas
        this.tableDatas2 = arr[1].datas
        this.chartData1 = {
          columns: ['time', 'number'],
          rows: arr[0].datas,
        }
        this.chartData2 = {
          columns: ['type', 'number'],
          rows: arr[1].datas,
        }
      })
    },
  },
}
</script>

<style></style>
