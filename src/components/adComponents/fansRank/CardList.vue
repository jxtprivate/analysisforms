<!-- 信息项卡片封装 -->
<template>
  <div>
    <el-card
      :body-style="{
        padding: '10px 0px',
        paddingRight: '30px',
        textAlign: 'center',
        fontSize: '14px',
      }"
      style="margin-top:5px"
      shadow="never"
    >
      <el-row :gutter="10" type="flex" justify="space-between">
        <el-col :span="12">{{ item.nickname }}</el-col>
        <el-col :span="12">{{ item.reward }}</el-col>
        <el-col :span="1"
          ><i class="el-icon-edit-outline" v-show="!istitle" @click="showedict(item)"></i
        ></el-col>
        <el-col :span="1"
          ><i class="el-icon-delete" v-show="!istitle" @click="userdelete(item.fid)"></i
        ></el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    istitle: {
      type: Boolean,
      default: false,
    },
    userdelete: {
      type: Function,
      default: null,
    },
    showedict:{
      type:Function,
      default:null
    },
    
  },
  data() {
    return {};
  },

  components: {},

  // computed: {},

  // mounted: {},

  methods: {},
};
</script>
<style lang="scss" scoped>
i:hover {
  cursor: pointer;
  font-size: 18px;
  transition: 0.5s;
}
</style>
