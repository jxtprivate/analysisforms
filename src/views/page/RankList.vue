<!-- 纵横榜 -->
<template>
  <el-row type="flex" justify="space-around">
    <el-col :span="16" style="padding-right:8px">
      <el-row type="flex" justify="space-between" :gutter="20">
        <el-col :span="12">
          <Table
            name="点击榜"
            :columns="tableColumns1"
            :datas="tableDatas1"
            height="300px"
          >
          </Table>
          <Table
            name="推荐榜"
            :columns="tableColumns2"
            :datas="tableDatas2"
            height="300px"
          >
          </Table>
        </el-col>
        <el-col :span="12">
          <Table
            name="人气榜"
            :columns="tableColumns3"
            :datas="tableDatas3"
            height="300px"
          ></Table>
          <CBar
            name="推荐榜"
            :chartData="chartData2"
            height="310px"
            :chartsettings="chartsettings2"
          ></CBar>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="8" style="padding-left:15px">
      <CBar
        name="点击榜"
        :chartData="chartData1"
        height="310px"
        :chartsettings="chartsettings1"
      ></CBar>
      <CBar
        name="人气榜"
        :chartData="chartData3"
        height="310px"
        :chartsettings="chartsettings3"
      ></CBar>
    </el-col>
  </el-row>
</template>

<script>
import Table from '@/components/Table'
import CBar from '@/components/charts/CBar.vue'
import axios from '@/http/request'
import apis from '@/http/apis'

export default {
  name: 'RankList',
  data() {
    //点击榜显示设置
    this.chartsettings1 = {
      labelMap: {
        number: '点击数',
      },
      dataOrder: {
        label: 'number',
        order: 'desc',
      },
    }
    //推荐榜显示设置
    this.chartsettings2 = {
      labelMap: {
        number: '推荐数',
      },
      dataOrder: {
        label: 'number',
        order: 'desc',
      },
    }
    //人气榜显示设置
    this.chartsettings3 = {
      labelMap: {
        number: '人气值',
      },
      dataOrder: {
        label: 'number',
        order: 'desc',
      },
    }
    return {
      chartData1: {
        columns: ['bookname', 'number'],
        rows: [],
      },
      chartData2: {
        columns: ['bookname', 'number'],
        rows: [],
      },
      chartData3: {
        columns: ['bookname', 'number'],
        rows: [],
      },
      tableColumns1: [
        { prop: 'bookname', name: '书名' },
        { prop: 'number', name: '点击数', sortable: true },
      ],
      tableColumns2: [
        { prop: 'bookname', name: '书名' },
        { prop: 'number', name: '推荐数', sortable: true },
      ],
      tableColumns3: [
        { prop: 'bookname', name: '书名' },
        { prop: 'number', name: '人气值', sortable: true },
      ],
      tableDatas1: [],
      tableDatas2: [],
      tableDatas3: [],
    }
  },
  components: {
    Table,
    CBar,
  },
  created() {
    this.getRankList()
  },
  methods: {
    getRankList() {
      axios.get(apis.DATA_RANK_LIST).then((res) => {
        const arr = res.data.data.intervals
        this.tableDatas1 = arr[0].datas
        this.tableDatas2 = arr[1].datas
        this.tableDatas3 = arr[2].datas
        this.chartData1.rows = arr[0].datas
        this.chartData2.rows = arr[1].datas
        this.chartData3.rows = arr[2].datas
      })
    },
  },
}
</script>

<style></style>
