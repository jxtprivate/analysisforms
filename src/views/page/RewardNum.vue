<!-- 打赏人数 -->
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
      <CLine
        name="TOP10日票"
        :chartData="chartData1"
        :chartsettings="chartsettings1"
      ></CLine>
      <CLine
        name="TOP10日票（起点vs纵横）"
        :chartData="chartData2"
        :chartsettings="chartsettings"
      ></CLine>
    </el-col>
  </el-row>
</template>

<script>
import Table from '@/components/Table'
import CLine from '@/components/charts/CLine.vue'
import axios from '@/http/request'
import apis from '@/http/apis'

export default {
  components: { Table, CLine },
  name: 'RewardNum',
  data() {
    this.chartsettings = {
      labelMap: {
        sum_of_top: '起点',
      },
    }
    this.chartsettings1 = {
      labelMap: {
        sum_of_top: '日票数',
      },
    }
    return {
      chartData1: {},
      chartData2: {},
      tableColumns: [
        { prop: 'list_name', name: '榜单名称' },
        { prop: 'sum_of_top', name: 'TOP10日票和', sortable: true },
      ],
      tableDatas1: [],
      tableDatas2: [],
    }
  },
  methods: {
    //打赏人数数据请求
    getRewardNums() {
      axios.get(apis.DATA_REWARD_NUMS).then((res) => {
        const arr = res.data.data.intervals
        this.tableDatas1 = arr[0].datas
        this.tableDatas2 = arr[1].datas

        let jsonArr1 = JSON.stringify(arr[0].datas)
        let arr1 = JSON.parse(jsonArr1)

        let jsonArr2 = JSON.stringify(arr[1].datas)
        let arr2 = JSON.parse(jsonArr2)

        arr1.forEach((item, i) => {
          item[arr[1].site] = arr[1].datas[i].sum_of_top
        })

        this.chartData2 = {
          columns: ['list_name', 'sum_of_top', '纵横'],
          rows: arr1,
        }
        // 计算总和
        arr[0].datas.map((value, index) => {
          arr2[index].sum_of_top += value.sum_of_top
        })
        this.chartData1 = {
          columns: ['list_name', 'sum_of_top'],
          rows: arr2,
        }
      })
    },
  },
  created() {
    this.getRewardNums()
  },
}
</script>

<style></style>
