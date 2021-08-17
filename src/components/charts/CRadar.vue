<!-- 雷达图 -->
<template>
  <el-card class="histogram" :body-style="{ padding: '15px' }" shadow="hover">
    <div slot="header">
      <span style="font-weight:700">{{ name }}</span>
    </div>
    <ve-Radar
      :data="chartData"
      :settings="chartSettings"
      :width="width"
      :height="height"
    ></ve-Radar>
  </el-card>
</template>

<script>
export default {
  name: 'CRadar',
  props: {
    width: {
      type: String,
      default: '340px',
    },
    height: {
      type: String,
      default: '300px',
    },
    name: {
      type: String,
      required: true,
    },
    chartData: {
      type: Object,
      required: true,
    },
  },
  data() {
    this.chartSettings = {
      radius: ['0', '10%'],
    }
    // this.chartSettings = {
    //     tooltipVisible:"false",
    //     labelMap: {
    //         'rank': 'date',
    //         '推荐榜': '推荐榜',
    //         '月票榜': '月票榜',
    //         '更新榜': '更新榜',
    //         '收藏榜': '收藏榜',
    //         '打赏榜': '打赏榜',
    //         '阅读指数榜': '阅读指数榜',
    //     },
    // }
    return {}
  },
}
</script>

<style lang="scss" scoped>
.histogram {
  // width: 330px;
  margin-bottom: 10px;
  // margin: 10px 0px 25px 20px;
}
</style>
