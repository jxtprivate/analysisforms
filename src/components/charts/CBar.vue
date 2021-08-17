<!--  -->
<template>
  <el-card class="histogram" :body-style="{ padding: '15px' }" shadow="hover">
    <div slot="header">
      <span style="font-weight:700">{{ name }}</span>
    </div>
    <ve-bar
      :data="chartData"
      :height="height"
      :settings="chartsettings"
      :width="width"
      :extend="cpuExtend"
    ></ve-bar>
  </el-card>
</template>

<script>
export default {
  name: 'CBar',
  data() {
    return {}
  },
  props: {
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
    chartsettings: {
      default: () => {
        return {}
      },
    },
    width: {
      type: String,
      default: '340px',
    },
    height: {
      type: String,
      default: '350px',
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
}
</script>
<style lang="scss" scoped>
.histogram {
  // margin-top: 10px;
  margin-bottom: 10px;
}
</style>
