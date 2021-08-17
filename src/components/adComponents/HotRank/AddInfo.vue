<!-- 新增编辑页面 -->
<template>
    <div class="addbox">
    <el-card :body-style="{ padding: '10px 30px' }">
      <el-form
        :label-position="labelPosition"
        label-width="80px"
        :model="formLabelAlign"
      >
        <el-form-item label="书名">
          <el-input v-model="formLabelAlign.book_name"></el-input>
        </el-form-item>
        <el-form-item label="作者名">
          <el-input v-model="formLabelAlign.author_name"></el-input>
        </el-form-item>
        <el-form-item label="最新章节">
          <el-input v-model="formLabelAlign.lastchapter"></el-input>
        </el-form-item>
        <el-form-item label="最新更新时间">
          <el-input v-model="formLabelAlign.updatetime"></el-input>
        </el-form-item>
        <el-form-item label="热度">
          <el-input v-model="formLabelAlign.hots"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="postmsg">保存</el-button>
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
        book_name: "",
        author_name: "",
        lastchapter: "",
        updatetime: "",
        hots: ""
      },
    };
  },

  components: {},
  methods: {
    postmsg(){
      this.formLabelAlign["hots"] = parseInt(this.formLabelAlign["hots"])
      this.addcommit(this.formLabelAlign)
    }
  }
}

</script>
<style lang='scss' scoped>
.addbox {
  width: 500px;
}
</style>