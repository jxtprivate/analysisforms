<!-- 大数据看板 -->
<template>
  <div>
    <el-row class="row1" :gutter="20">
      <el-col :span="8"
        ><CBar
          name="字数TOP10"
          :chartData="chartData1"
          height="350px"
          :chartsettings="chartsettings1"
          width="330px"
        ></CBar
      ></el-col>
      <el-col :span="8"
        ><CWordcloud name="词云--书的类型" :chartData="chartData3"></CWordcloud
      ></el-col>
      <el-col :span="8"
        ><CRadar name="推荐指数" :chartData="chartData2" height="350px"></CRadar
      ></el-col>
    </el-row>
    <el-row type="flex" justify="space-between" :gutter="10">
      <el-col :span="7"
        ><CLine
          name="TOP10日票"
          :chartData="chartData5"
          width="300px"
          height="300px"
          :chartsettings="chartsettings2"
        ></CLine
      ></el-col>
      <el-col :span="6"
        ><CRing
          name="月票榜总数占比"
          :chartData="chartData4"
          width="260px"
          height="300px"
        ></CRing
      ></el-col>
      <el-col :span="6"
        ><CHistogram
          name="写作天数区间人数分布"
          :chartData="chartData6"
          width="220px"
          height="300px"
          :chartsettings="chartsettings3"
        ></CHistogram
      ></el-col>
      <el-col :span="6"
        ><CScatter
          name="作品数量"
          :chartData="chartData7"
          width="220px"
          height="300px"
          :chartsettings="chartsettings3"
        ></CScatter
      ></el-col>
    </el-row>
  </div>
</template>

<script>
import CBar from '@/components/charts/CBar'
import CRadar from '@/components/charts/CRadar'
import CWordcloud from '@/components/charts/CWordcloud'
import CLine from '@/components/charts/CLine'
import CRing from '@/components/charts/CRing'
import CScatter from '@/components/charts/CScatter'
import CHistogram from '@/components/charts/CHistogram'
import axios from '@/http/request'
import apis from '@/http/apis'
export default {
  name: 'BigData',
  data() {
    //TOP10字数显示设置
    this.chartsettings1 = {
      labelMap: {
        charnums: 'TOP10字数',
      },
      dataOrder: {
        label: 'charnums',
        order: 'desc',
      },
    }
    //TOP10日票显示设置
    this.chartsettings2 = {
      labelMap: {
        tickets: 'TOP10日票数',
      },
    }
    //写作天数显示设置
    this.chartsettings3 = {
      labelMap: {
        counts: '推荐榜',
      },
    }
    //作品数量显示设置
    this.chartsettings4 = {
      labelMap: {
        counts: '区间作品数量',
      },
    }
    //设置横坐标间距和倾斜45度，解决数据展示不全的问题
    // this.cpuExtend={
    //   xAxis:{
    //     axisLabel:{
    //       interval:0,
    //       margin:20,
    //       rotate:45
    //     }
    //   }
    // }

    return {
      chartData1: {},
      chartData2: {},
      chartData3: {},
      chartData4: {},
      chartData5: {},
      chartData6: {},
      chartData7: {},
    }
  },
  methods: {
    //字数top10请求
    getTopCharnums() {
      axios.get(apis.DATA_CHAR_NUMS).then((res) => {
        this.chartData1 = {
          columns: ['author_name', 'charnums'],
          rows: res.data.data.author_details[0].ranks,
        }
      })
    },
    //词云数据请求
    getWordClouds() {
      axios.get(apis.DATA_WORD_CLOUDS).then((res) => {
        this.chartData3 = {
          columns: ['tag_name', 'value'],
          rows: res.data.data.tags,
        }
      })
    },
    //推荐指数数据请求
    getRecommends() {
      axios.get(apis.DATA_RECOMMEND).then((res) => {
        let obj = {}
        let rows = []
        obj['type'] = '推荐指数'
        const recommends = res.data.data.recommends
        // const columns = recommends.map((item) => item.rank_name).unshift('type')
        recommends.forEach((item) => {
          obj[item.rank_name] = item.value
        })
        rows.push(obj)
        rows.push({
          type: '推荐基准线',
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
          columns: [
            'type',
            '推荐榜',
            '月票榜',
            '更新榜',
            '收藏榜',
            '打赏榜',
            '阅读指数榜',
            '粉丝榜',
            '畅销榜',
          ],
          rows,
        }
      })
    },
    //top10日票数请求
    getTopdailyticks() {
      axios.get(apis.DATA_DAILY_TICKETS).then((res) => {
        this.chartData5 = {
          columns: ['book_name', 'tickets'],
          rows: res.data.data.tickets_daily,
        }
      })
    },
    //月票数总榜占比
    getMonlyticksVs() {
      axios.get(apis.DATA_MONLY_TICKETS).then((res) => {
        this.chartData4 = {
          columns: ['site', 'number'],
          rows: res.data.data.total_ticks,
        }
      })
    },
    //写作天数区间人数分布请求
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

        this.chartData6 = {
          columns: [
            'scope',
            'counts',
            arr[1].rank_type,
            arr[2].rank_type,
            arr[3].rank_type,
          ],
          rows,
        }
      })
    },
    //作品数量数据请求
    getWordNums() {
      axios.get(apis.DATA_WORK_NUMS).then((res) => {
        const arr = res.data.data.intervals
        arr[0].ranks.forEach((item, i) => {
          item[arr[1].site] = arr[1].ranks[i].counts
        })
        this.chartData7 = {
          columns: ['scope', 'counts', arr[1].site],
          rows: arr[0].ranks,
        }
      })
    },
  },
  created() {
    this.getTopCharnums()
    this.getWordClouds()
    this.getRecommends()
    this.getTopdailyticks()
    this.getMonlyticksVs()
    this.getWriteDayScope()
    this.getWordNums()
  },
  components: {
    CBar,
    CRadar,
    CWordcloud,
    CLine,
    CRing,
    CScatter,
    CHistogram,
  },
}
</script>

<style lang="scss" scoped></style>
