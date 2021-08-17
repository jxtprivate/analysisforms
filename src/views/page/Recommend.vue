<!-- 推荐榜 -->
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
      <CRadar name="TOP10周票和" :chartData="chartData1"></CRadar>
      <CRadar name="TOP10周票和（起点vs纵横）" :chartData="chartData2"></CRadar>
    </el-col>
  </el-row>
</template>

<script>
import Table from '@/components/Table'
import CRadar from '@/components/charts/CRadar.vue'
import axios from '@/http/request'
import apis from '@/http/apis'

export default {
  name: 'TopWord',
  data() {
    return {
      chartData1: {},
      chartData2: {},
      tableColumns: [
        { prop: 'rank_name', name: '榜单名称' },
        { prop: 'value', name: 'TOP10周票和', sortable: true },
      ],
      tableDatas1: [],
      tableDatas2: [],
    }
  },
  components: {
    Table,
    CRadar,
  },
  methods: {
    //周票总榜数据请求
    getWeeklyTicks() {
      axios.get(apis.DATA_MONLY_RECOMMEND).then((res) => {
        const arr = res.data.data.intervals
        this.tableDatas1 = arr[0].recommends
        this.tableDatas2 = arr[1].recommends
        let obj1 = {}
        let obj2 = {}
        let obj3 = {}
        let rows1 = []
        let rows2 = []
        obj1['site'] = '起点'
        obj2['site'] = '纵横'
        obj3['site'] = '总和'
        let columns = [
          'site',
          '推荐榜',
          '月票榜',
          '更新榜',
          '收藏榜',
          '打赏榜',
          '阅读指数榜',
          '粉丝榜',
          '畅销榜',
        ]
        arr[0].recommends.forEach((item, index) => {
          obj3[item.rank_name] = item.value + arr[1].recommends[index].value
        })
        rows2.push(obj3)
        rows2.push({
          site: '参考基准线',
          推荐榜: 1000,
          月票榜: 1000,
          更新榜: 1000,
          收藏榜: 1000,
          打赏榜: 1000,
          阅读指数榜: 1000,
          粉丝榜: 1000,
          畅销榜: 1000,
        })
        this.chartData1 = {
          columns,
          rows: rows2,
        }

        arr[0].recommends.forEach((item) => {
          obj1[item.rank_name] = item.value
        })
        arr[1].recommends.forEach((item) => {
          obj2[item.rank_name] = item.value
        })
        rows1.push(obj1)
        rows1.push(obj2)
        rows1.push({
          site: '参考基准线',
          推荐榜: 500,
          月票榜: 500,
          更新榜: 500,
          收藏榜: 500,
          打赏榜: 500,
          阅读指数榜: 500,
          粉丝榜: 500,
          畅销榜: 500,
        })
        this.chartData2 = {
          columns,
          rows: rows1,
        }
      })
    },
  },
  created() {
    this.getWeeklyTicks()
  },
}
</script>

<style></style>
