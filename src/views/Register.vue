<!-- 注册页面 -->
<template>
  <div class="bgc">
    <div class="img">
      <img src="../../public/images/login_bgc.png" alt="" />
    </div>
    <div class="title">
      <h1><span>BIGDATA </span></h1>
      <h1 class="title_name">基于网络爬虫的小说热度的大数据分析平台</h1>
    </div>
    <div class="content">
      <el-card
        class="box-card"
        shadow="always"
        :body-style="{ padding: '20px 70px' }"
      >
        <div slot="header" class="card-header">
          <span>用户注册</span>
        </div>
        <el-form
          label-position="right"
          label-width="80px"
          :model="formRegister"
          :rules="rules"
          ref="formRegister"
          status-icon
        >
          <el-form-item label="账号" prop="username">
            <el-input
              placeholder="请输入用户名/EMAIL/手机号"
              prefix-icon="el-icon-user"
              v-model="formRegister.username"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              show-password
              placeholder="请输入密码"
              prefix-icon="el-icon-lock"
              v-model="formRegister.password"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPassword">
            <el-input
              show-password
              placeholder="请再次输入密码"
              prefix-icon="el-icon-lock"
              v-model="formRegister.checkPassword"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class="btn"
              @click="register('formRegister')"
            >
              立即注册
            </el-button>
            <el-button class="btn" @click="resetForm('formRegister')">
              重置
            </el-button>
          </el-form-item>
          <el-form-item>
            <el-link type="warning" :underline="false" href="/login">
              已有账号，立即登录
            </el-link>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from '@/http/request.js'
import apis from '@/http/apis.js'

export default {
  data() {
    let checkUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入用户名!'))
      } else {
        callback()
      }
    }
    let checkPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入密码!'))
      } else {
        callback()
      }
    }
    let checkPasswordAgain = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请再次输入密码!'))
      } else if (value !== this.formRegister.password) {
        return callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      formRegister: {
        username: '',
        password: '',
        checkPassword: '',
      },
      rules: {
        username: [
          { required: true, validator: checkUserName, trigger: 'blur' },
        ],
        password: [
          { required: true, validator: checkPassword, trigger: 'blur' },
        ],
        checkPassword: [
          { required: true, validator: checkPasswordAgain, trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    // 用户注册
    register(formName) {
      // 表单验证
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios
            .post(apis.USER_REGISTER, {
              username: this.formRegister.username,
              password: this.formRegister.password,
            })
            .then((res) => {
              if (res.data.status == 200) {
                this.$message.success('注册成功')
                this.$router.push('/login')
              } else {
                this.$message.error(res.data.msg)
              }
            })
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>

<style lang="scss" scoped>
// * {
//   padding: 0;
//   margin: 0;
// }
.bgc {
  .img {
    //   width: 100px;
    overflow: hidden;
    height: 100%;
    img {
      height: 95%;
    }
    position: absolute;
    top: 0;
    right: 0;
  }
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-image: linear-gradient(#27ad7b, #6081c9);
  .title {
    position: absolute;
    top: -30px;
    .title_name {
      margin-top: -30px;
      font-size: 25px;
      padding-left: 10px;
      color: #ffffff;
    }
    text-align: left;
    span {
      font-size: 140px;
      font-weight: bolder;
      -webkit-text-stroke: 1px #000000;
      color: white;
    }
  }
  .content {
    position: fixed;
    bottom: 2px;
    left: 0;
    width: 700px;
    height: 400px;
    margin: 0 auto;
    .el-card {
      height: 100%;
      span {
        color: #27ad7b;
        font-size: 20px;
        text-align: left;
      }
      .btn {
        width: 30%;
        height: 50px;
      }
    }
  }
}
</style>
