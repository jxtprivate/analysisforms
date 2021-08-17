<!-- 编辑页面 -->
<template>
  <div class="editbox">
    <el-card :body-style="{ padding: '10px 50px' }">
      <el-form
        :label-position="labelPosition"
        label-width="80px"
        :model="formLabelAlign"
      >
        <el-form-item label="书名">
          <el-input v-model="formLabelAlign.book_name"></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="formLabelAlign.author_name"></el-input>
        </el-form-item>
        <el-form-item label="最新章节">
          <el-input v-model="formLabelAlign.lastchapter"></el-input>
        </el-form-item>
        <el-form-item label="最近更新时间">
          <el-input v-model="formLabelAlign.updatetime"></el-input>
        </el-form-item>
        <el-form-item label="推荐数">
          <el-input v-model="formLabelAlign.recommends"></el-input>
        </el-form-item>
       
        <el-form-item>
          <el-button type="primary" @click="postmsg">保存</el-button>
          <el-button @click="hidedict">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
    props:{
        hidedict:{
            type:Function,
            default:null
        },
        editcommit:{
            type:Function,
            default:null
        },
        userinfo:{
            type:Object,
            default:() => {}
        }
    },
  data() {
    return {
      labelPosition: "left",
      formLabelAlign: {
        book_id:"",
        book_name: "",
        author_name: "",
        lastchapter: "",
        updatetime: "",
        recommends: "",
        
      },
    };
  },
  watch:{
    userinfo(){
      this.init();
    }
  },

  components: {},

//   computed: {},

//   mounted: {},
  // created(){
    
  // },
  methods: {
    init(){
      this.formLabelAlign = {
        book_id:this.userinfo.book_id,
        book_name: this.userinfo.book_name,
        author_name: this.userinfo.author_name,
        lastchapter: this.userinfo.lastchapter,
        updatetime: this.userinfo.updatetime,
        recommends: this.userinfo.recommends
        
      }
    },
    postmsg(){
      this.formLabelAlign["recommends"] = parseInt(this.formLabelAlign["recommends"])
      this.editcommit(this.formLabelAlign)
    }
  },
};
</script>
<style lang="scss" scoped>
.editbox {
  width: 500px;
}
</style>
