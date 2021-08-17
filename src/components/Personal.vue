<!-- 用户组件 -->
<template>
  <el-card
    class="personal-card"
    :body-style="{ padding: '10px' }"
    shadow="hover"
  >
    <el-row>
      <el-col :span="15">
        <span class="name">{{ username }}</span>
      </el-col>
      <el-col :span="9">
        <el-button
          style="float: right; margin: 6px"
          icon="iconfont icon-tuichu"
          type="danger"
          circle
          @click="logout"
        >
        </el-button>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import util from '@/utils/index.js'

export default {
  name: 'Personal',
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  data() {
    return {}
  },
  methods: {
    logout() {
      if(util.getSerializedStorage('username')!==null){
        util.removeSerializedStorage('username')
        this.$router.replace('/login')
      }else if(util.getSerializedStorage('admin')!==null){
        util.removeSerializedStorage('admin')
        this.$router.replace('/adminlogin')
      }
      
    },
  },
}
</script>

<style lang="scss" scoped>
.personal-card {
  // margin: 10px 20px 10px 25px;
  margin: 20px 0px;
  margin-left: 20px;
  // width: 330px;
  height: 75px;
  .name {
    position: relative;
    left: 25px;
    top: 15px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 21px;
    /* identical to box height */

    color: #2c3e50;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
}
</style>
