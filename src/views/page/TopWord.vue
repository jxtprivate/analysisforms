<!-- 字数榜 -->
<template>
  <el-row type="flex" justify="space-around">
    <el-col :span="16" style="padding-right:8px">
      <el-row type="flex" justify="space-between" :gutter="10">
        <el-col :span="12">
          <Table
            name="起点"
            :columns="tableColumns"
            :datas="tableDatas1"
            height="700px"
          >
          </Table>
        </el-col>
        <el-col :span="12">
          <Table
            name="纵横"
            :columns="tableColumns"
            :datas="tableDatas2"
            height="700px"
          ></Table>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="8" style="padding-left:15px">
      <CBar
        name="字数TOP10"
        :chartData="chartData1"
        :chartsettings="chartsettings"
      ></CBar>
      <CBar
        name="字数TOP10（起点vs纵横）"
        :chartData="chartData2"
        :chartsettings="chartsettings1"
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
  name: 'TopWord',
  data() {
    //TOP10字数显示设置
    this.chartsettings = {
      labelMap: {
        charnums: 'TOP10字数',
      },
      dataOrder: {
        label: 'charnums',
        order: 'desc',
      },
    }
    this.chartsettings1 = {
      labelMap: {
        wordnums: '总字数',
      },
      dataOrder: {
        label: 'wordnums',
        order: 'desc',
      },
    }
    return {
      chartData1: {},
      chartData2: {},
      tableColumns: [
        { prop: 'author_name', name: '作者' },
        { prop: 'ranking', name: '排名', sortable: true },
        { prop: 'charnums', name: '字数', sortable: true },
      ],
      tableDatas1: [],
      tableDatas2: [],
    }
  },
  components: {
    Table,
    CBar,
  },
  created() {
    this.getTopWord()
  },
  methods: {
    getTopWord() {
      axios.get(apis.DATA_CHAR_NUMS).then((res) => {
        const data = res.data.data.author_details
        this.chartData1 = {
          columns: ['author_name', 'charnums'],
          rows: data[0].ranks,
        }
        this.tableDatas1 = data[0].ranks
        this.tableDatas2 = data[1].ranks
        let num1 = data[0].ranks.reduce(
          (total, curr) => total + curr.charnums,
          0,
        )
        let num2 = data[1].ranks.reduce(
          (total, curr) => total + curr.charnums,
          0,
        )
        this.chartData2 = {
          columns: ['type', 'wordnums'],
          rows: [
            { type: '起点', wordnums: num1 },
            { type: '纵横', wordnums: num2 },
          ],
        }
      })
    },
  },
}
</script>

<style></style>
