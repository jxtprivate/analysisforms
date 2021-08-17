<!-- 导航栏 -->
<template>
  <div class="menu">
    <el-menu
      :default-active="defaultActive"
      class="menu"
      @select="handleSelect"
      background-color="#002979"
      text-color="#cccccc"
      active-text-color="#ffffff"
    >
      <div class="header-tips">
        <span>Hello {{ username }},</span>
        <br />
        <span>Welcome back 👋🏻</span>
      </div>
      <el-menu-item index="bigdata">
        <i class="el-icon-menu"></i>
        <span slot="title">大数据看板</span>
      </el-menu-item>
      <el-menu-item index="topword">
        <i class="el-icon-s-data"></i>
        <span slot="title">字数榜TOP10</span>
      </el-menu-item>
      <el-menu-item index="recommend">
        <i class="el-icon-s-claim"></i>
        <span slot="title">推荐指数</span>
      </el-menu-item>
      <el-menu-item index="rewardnum">
        <i class="el-icon-s-open"></i>
        <span slot="title">打赏人数</span>
      </el-menu-item>
      <el-menu-item index="worknum">
        <i class="el-icon-document"></i>
        <span slot="title">作品数量</span>
      </el-menu-item>
      <el-menu-item index="writeday">
        <i class="el-icon-s-management"></i>
        <span slot="title">写作天数</span>
      </el-menu-item>
      <el-menu-item index="ticket">
        <i class="el-icon-s-ticket"></i>
        <span slot="title">月票榜</span>
      </el-menu-item>
      <el-menu-item index="fanreward">
        <i class="el-icon-share"></i>
        <span slot="title">粉丝打赏</span>
      </el-menu-item>
      <el-menu-item index="sexratio">
        <i class="el-icon-s-flag"></i>
        <span slot="title">性别比例</span>
      </el-menu-item>
      <el-menu-item index="statistic">
        <i class="el-icon-star-on"></i>
        <span slot="title">上榜次数&分类统计</span>
      </el-menu-item>
      <el-menu-item index="ranklist">
        <i class="el-icon-s-marketing"></i>
        <span slot="title">纵横榜</span>
      </el-menu-item>
      <h5 style="padding-left:20px;color:#eaeaea">信息维护</h5>
      <el-menu-item index="person">
        <i class="el-icon-s-custom"></i>
        <span slot="title">个人信息</span>
      </el-menu-item>
      <el-menu-item index="manager" v-show="isAdmin">
        <i class="el-icon-s-help"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import util from '@/utils/index.js'
export default {
  name: 'Menu',
  props: {
    username: String,
  },
  data() {
    return {
      isAdmin:false
    }
  },
  computed: {
    defaultActive() {
      return this.$route.path.split('/').reverse()[0]
    },
  },
  methods: {
    handleSelect(key) {
      if (this.defaultActive != key) {
        this.$router.push('/home/' + key)
      }
    },
    jugement(){
      if(util.getSerializedStorage('admin') !== null) {
        this.isAdmin = true
      }else {
        this.isAdmin = false
      }
    }
  },
  created(){
    this.jugement()
  }
}
</script>

<style lang="scss" scoped>
.menu {
  height: 100%;
  .header-tips {
    width: 200px;
    text-align: center;
    padding: 5px;
    color: #ffffff;
    margin: 0px auto;
    margin-top: 15px;
  }
}
</style>
