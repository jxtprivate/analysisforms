<!-- 性别比例 -->
<template>
  <el-row type="flex" justify="space-around">
    <el-col :span="16" style="padding-right:8px">
      <el-row type="flex" justify="space-between" :gutter="10">
        <el-col :span="12">
          <Table
            name="起点"
            :columns="tableColumns"
            :datas="tableDatas1"
            height="500px"
          >
          </Table>
        </el-col>
        <el-col :span="12">
          <Table
            name="纵横"
            :columns="tableColumns"
            :datas="tableDatas2"
            height="500px"
          ></Table>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="8" style="padding-left:15px">
      <CRing name="性别比例" :chartData="chartData1"></CRing>
      <CRing name="性别比例（起点vs纵横）" :chartData="chartData2"></CRing>
    </el-col>
  </el-row>
</template>

<script>
import Table from '@/components/Table'
import CRing from '@/components/charts/CRing.vue'
import axios from '@/http/request'
import apis from '@/http/apis'

export default {
  components: { Table, CRing },
  name: 'SexRatio',
  data() {
    return {
      tableColumns: [
        { prop: 'sex', name: '性别' },
        { prop: 'number', name: '人数', sortable: true },
      ],
      tableDatas1: [],
      tableDatas2: [],
      // 性别比例
      chartData1: {
        columns: ['sex', 'number'],
        rows: [],
      },
      // 性别比例（起点vs纵横）
      chartData2: {
        columns: ['sex', 'number'],
        rows: [],
      },
    }
  },
  created() {
    this.getSexRatio()
  },
  methods: {
    getSexRatio() {
      axios.get(apis.DATA_SEX_RATIO).then((res) => {
        const arr = res.data.data.intervals
        this.tableDatas1 = arr[0].datas
        this.tableDatas2 = arr[1].datas

        let jsonArr1 = JSON.stringify(arr[1].datas)
        let arr1 = JSON.parse(jsonArr1)
        // 计算总和
        arr[0].datas.map((value, index) => {
          arr1[index].number += value.number
        })
        this.chartData1 = {
          columns: ['sex', 'number'],
          rows: arr1,
        }

        let jsonArr2 = JSON.stringify(arr[0].datas)
        let arr2 = JSON.parse(jsonArr2)
        arr2.forEach((item) => {
          item.sex = '起点：' + item.sex
        })
        let jsonArr3 = JSON.stringify(arr[1].datas)
        let arr3 = JSON.parse(jsonArr3)
        arr3.forEach((item) => {
          item.sex = '纵横：' + item.sex
        })
        let result = arr2.concat(arr3)

        this.chartData2 = {
          columns: ['sex', 'number'],
          rows: result,
        }
      })
    },
  },
}
</script>

<style></style>
