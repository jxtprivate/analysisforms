<!-- 用户管理 -->
<template>
  <div>
    <el-menu
      :default-active="'/home/manager/usermanger'"
      class="el-menu-demo"
      mode="horizontal"
      router
    >
      <el-menu-item index="/home/manager/usermanger">用户管理</el-menu-item>
      <el-menu-item index="/home/manager/clickrank">纵横点击榜</el-menu-item>
      <el-menu-item index="/home/manager/hotsrank">纵横人气榜</el-menu-item>
      <el-menu-item index="/home/manager/recommrank">纵横推荐榜</el-menu-item>
      <el-menu-item index="/home/manager/fansrank">粉丝打赏榜</el-menu-item>
      <el-menu-item index="/home/manager/sexrank">性别比例榜</el-menu-item>
    </el-menu>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: "Manager",
  data() {
    return {};
  },
};
</script>

<style></style>
