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
          <el-input v-model="formLabelAlign.ar_name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="formLabelAlign.sex"></el-input>
        </el-form-item>
       
        <el-form-item>
          <el-button type="primary" @click="editcommit(formLabelAlign)">保存</el-button>
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
        aid:"",
        ar_name: "",
        sex: "",
        
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
        aid:this.userinfo.aid,
        ar_name: this.userinfo.nickname,
        sex: this.userinfo.sex,
        
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.editbox {
  width: 500px;
}
</style>
