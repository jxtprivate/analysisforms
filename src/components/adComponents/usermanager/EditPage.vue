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
        <el-form-item label="帐号">
          <el-input v-model="formLabelAlign.username" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formLabelAlign.password"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="formLabelAlign.phone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="formLabelAlign.mailbox"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="formLabelAlign.address"></el-input>
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
        uid:"",
        nickname: "",
        username: "",
        password: "",
        phone: "",
        mailbox: "",
        address: "",
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
        uid:this.userinfo.uid,
        nickname: this.userinfo.nickname,
        username: this.userinfo.username,
        password: this.userinfo.password,
        phone: this.userinfo.phone,
        mailbox: this.userinfo.mailbox,
        address: this.userinfo.address,
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
