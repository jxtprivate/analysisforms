<!-- 作品数量 -->
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
      <CScatter
        name="作品数量"
        :chartData="chartData1"
        :chartsettings="chartsettings1"
      ></CScatter>
      <CScatter
        name="作品数量（起点vs纵横）"
        :chartData="chartData2"
        :chartsettings="chartsettings2"
      ></CScatter>
    </el-col>
  </el-row>
</template>

<script>
import Table from '@/components/Table'
import CScatter from '@/components/charts/CScatter.vue'
import axios from '@/http/request'
import apis from '@/http/apis'

export default {
  components: { Table, CScatter },
  name: 'WorkNum',
  data() {
    this.chartsettings1 = {
      labelMap: {
        counts: '总人数',
      },
    }
    this.chartsettings2 = {
      labelMap: {
        counts: '起点',
      },
    }
    return {
      chartData1: {},
      chartData2: {},
      tableColumns: [
        { prop: 'scope', name: '作品数量' },
        { prop: 'counts', name: '人数', sortable: true },
      ],
      tableDatas1: [],
      tableDatas2: [],
    }
  },
  methods: {
    getWorkNums() {
      axios.get(apis.DATA_WORK_NUMS).then((res) => {
        const arr = res.data.data.intervals
        // 采用序列化深拷贝
        let jsonArr1 = JSON.stringify(arr[0].ranks)
        let jsonArr2 = JSON.stringify(arr[1].ranks)
        this.tableDatas1 = JSON.parse(jsonArr1)
        this.tableDatas2 = JSON.parse(jsonArr2)

        // let rows = [...arr[0].ranks] 对象数组，这样拷贝相当于没有

        arr[0].ranks.forEach((item, i) => {
          item[arr[1].site] = arr[1].ranks[i].counts
        })

        this.chartData2 = {
          columns: ['scope', 'counts', arr[1].site],
          rows: arr[0].ranks,
        }

        // 计算总和
        arr[0].ranks.map((value, index) => {
          arr[1].ranks[index].counts += value.counts
        })
        this.chartData1 = {
          columns: ['scope', 'counts'],
          rows: arr[1].ranks,
        }
      })
    },
  },
  created() {
    this.getWorkNums()
  },
}
</script>

<style></style>
