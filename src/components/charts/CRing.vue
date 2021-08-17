<!-- 环形图 -->
<template>
  <el-card class="ring" :body-style="{ padding: '15px' }" shadow="hover">
    <div slot="header">
      <span style="font-weight:700">{{ name }}</span>
    </div>
    <ve-ring
      :data="chartData"
      :settings="chartSettings"
      :width="width"
      :height="height"
    ></ve-ring>
  </el-card>
</template>

<script>
export default {
  name: 'CRing',
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
      radius: ['35', '65'],
      offsetY: 160,
    }
    return {}
  },
}
</script>

<style lang="scss" scoped>
.ring {
  // width: 330px;
  // margin: 10px 0px 25px 20px;
  margin-bottom: 10px;
}
</style>
