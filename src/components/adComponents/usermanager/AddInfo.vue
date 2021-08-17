<!-- 新增编辑页面 -->
<template>
    <div class="addbox">
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
          <el-input v-model="formLabelAlign.username"></el-input>
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
        nickname: "",
        username: "",
        password: "",
        phone: "",
        mailbox: "",
        address: "",
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