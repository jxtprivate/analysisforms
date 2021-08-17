<!-- 词云 -->
<template>
  <el-card class="histogram" :body-style="{ padding: '15px' }" shadow="hover">
    <div slot="header">
      <span style="font-weight:700">{{ name }}</span>
    </div>
    <ve-wordcloud
      :data="chartData"
      width="350px"
      height="350px"
      :settings="myset"
    ></ve-wordcloud>
  </el-card>
</template>

<script>
export default {
  name: 'CWordcloud',
  data() {
    return {
      myset: {
        shape: ['pentagon'],
      },
    }
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    chartData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    wordClickHandler(name, value, vm) {
      console.log('wordClickHandler', name, value, vm)
    },
  },
}
</script>
<style lang="scss" scoped>
.histogram {
  margin-bottom: 10px;
}
</style>
