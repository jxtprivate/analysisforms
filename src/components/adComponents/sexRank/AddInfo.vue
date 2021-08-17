<!-- 新增编辑页面 -->
<template>
    <div class="addbox">
    <el-card :body-style="{ padding: '10px 50px' }">
      <el-form
        :label-position="labelPosition"
        label-width="80px"
        :model="formLabelAlign"
      >
        <el-form-item label="作者昵称">
          <el-input v-model="formLabelAlign.author_name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="formLabelAlign.sex"></el-input>
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="addcommit(formLabelAlign)">保存</el-button>
          <el-button @click="hideadd">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  props:{
        hideadd:{
            type:Function,
            default:null
        },
        addcommit:{
            type:Function,
            default:null
        },
        
    },
  data () {
    return {
      labelPosition: "left",
      formLabelAlign: {
        author_name: "",
        sex: ""
      },
    };
  },

  components: {},
  methods: {}
}

</script>
<style lang='scss' scoped>
.addbox {
  width: 500px;
}
</style>