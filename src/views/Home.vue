<template>
  <div>
    <el-container style="backgroundColor:#e5ecf4;">
      <el-aside>
        <Menu :username="username"></Menu>
      </el-aside>
      <el-container>
        <el-header height="95px">
          <el-row type="flex" justify="space-between">
            <el-col :span="16">
              <el-card class="title-card" shadow="never">
                <span class="title">小说热度的大数据平台</span>
              </el-card>
            </el-col>
            <el-col :span="8">
              <Personal :username="username"></Personal>
            </el-col>
          </el-row>
        </el-header>
        <el-main style="padding:10px 20px;margin-left:20px;">
          <keep-alive>
            <router-view />
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Personal from '@/components/Personal.vue'
import util from '@/utils/index.js'

export default {
  name: 'Home',
  components: {
    Menu,
    Personal,
  },
  data() {
    return {
      username: '',
    }
  },
  created() {
    this.username = util.getSerializedStorage('username')!==null ?util.getSerializedStorage('username'):util.getSerializedStorage('admin')
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.title-card {
  margin: 20px 0px;
  margin-left: 20px;
  // width: 750px;
  height: 75px;
  background-color: #4778ec;
  text-align: center;
  .title {
    text-align: center;
    line-height: 35px;
    font-size: 40px;
    font-weight: 700;
    -webkit-text-stroke: 1px #ffffff;
    color: white;
  }
}
</style>
