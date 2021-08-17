<template lang="">
  <div>
    <el-card
      :body-style="{ height: '50px', padding: '0px 50px', paddingTop: '10px' }"
      shadow="never"
    >
      <el-col :span="12"><el-button type="primary" @click="showadd">新增</el-button></el-col>
      <el-col :span="12"
        ><el-input placeholder="请输入查找关键字" prefix-icon="el-icon-search" v-model="keywords" @blur="searchmsg(keywords)">
        </el-input
      ></el-col>
    </el-card>
  </div>
</template>
<script>
export default {
    props:{
        showadd:{
            type:Function,
            default:null
        },
        searchmsg:{
            type:Function,
            default:null
        }
    },
    data(){
        return {
            keywords:''
        }
    },
};
</script>
<style lang=""></style>
