<!-- 编辑页面 -->
<template>
  <div class="editbox">
    <el-card :body-style="{ padding: '10px 50px' }">
      <el-form
        :label-position="labelPosition"
        label-width="80px"
        :model="formLabelAlign"
      >
        <el-form-item label="昵称">
          <el-input v-model="formLabelAlign.nickname"></el-input>
        </el-form-item>
        <el-form-item label="打赏数">
          <el-input v-model="formLabelAlign.reward"></el-input>
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
        hots: "",
        
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
        fid:this.userinfo.fid,
        nickname:this.userinfo.nickname,
        reward: this.userinfo.reward
      }
    },
    postmsg(){
      this.formLabelAlign["reward"] = parseInt(this.formLabelAlign["reward"])
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
