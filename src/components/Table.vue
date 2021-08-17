<!-- 表格 -->
<template>
  <el-card class="table" :body-style="{  }" shadow="hover">
    <div slot="header">
      <span>{{ name }}</span>
    </div>
    <el-table
      :data="datas"
      border
      size="small"
      :max-height="height"
      style="width: 350px"
    >
      <el-table-column
        v-for="(column, index) in columns"
        :key="index"
        :prop="column.prop"
        :sortable="column.sortable"
        :label="column.name"
      >
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  name: 'Table',
  props: {
    name: {
      type: String,
      required: true,
    },
    datas: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    height: String,
  },
}
</script>

<style lang="scss" scoped>
.table {
  // margin: 0 10px;
  // width: 370px;
  margin-bottom: 10px;
}
</style>
