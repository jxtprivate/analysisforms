<!-- 折线图 -->
<template>
  <el-card class="line" :body-style="{ padding: '15px' }" shadow="hover">
    <div slot="header">
      <span style="font-weight:700">{{ name }}</span>
    </div>
    <ve-line
      :data="chartData"
      :width="width"
      :height="height"
      :settings="chartsettings"
      :extend="cpuExtend"
    ></ve-line>
  </el-card>
</template>

<script>
export default {
  name: 'CLine',
  props: {
    chartsettings: {
      //新增settings属性
      default: {},
    },
    cpuExtend: {
      //新增设置横纵坐标属性
      default: () => {
        return {
          xAxis: {
            axisLabel: {
              interval: 0,
              margin: 20,
              rotate: 45,
            },
          },
        }
      },
    },
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
    return {}
  },
}
</script>

<style lang="scss" scoped>
.line {
  // width: 330px;
  // margin: 10px 0px 25px 20px;
  margin-bottom: 10px;
}
</style>
