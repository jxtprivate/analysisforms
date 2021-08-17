<template lang="">
  <div>
    <Header :showadd="showadd" :searchmsg="searchmsg"></Header>
    <Card-List :item="title" :istitle="true"></Card-List>
    <div style="overflow:scroll;height:600px">
      <div v-for="item in authors" :key="item.aid">
        <Card-List
          :item="item"
          :userdelete="userdelete"
          :showedict="showedict"
        ></Card-List>
      </div>
    </div>

    <Edit-Page
      class="editbox"
      :editcommit="editcommit"
      v-show="editshow"
      :hidedict="hidedict"
      :userinfo="userinfo"
    ></Edit-Page>
    <Add-Info
      class="editbox"
      v-show="addshow"
      :showadd="showadd"
      :hideadd="hideadd"
      :addcommit="addcommit"
    ></Add-Info>
  </div>
</template>
<script>
import Header from "@/components/adComponents/Header";
import CardList from "@/components/adComponents/sexRank/CardList";
import EditPage from "@/components/adComponents/sexRank/EditPage";
import AddInfo from "@/components/adComponents/sexRank/AddInfo";
import axios from "@/http/request";
import apis from "@/http/apis";

export default {
  data() {
    return {
      title: {
        nickname:'作者昵称',
        sex:'性别'
      },
      authors: [],
      editshow: false,
      addshow: false,
      userinfo: {}, //当前传入编辑页面的数据信息
    };
  },
  components: {
    Header,
    CardList,
    EditPage,
    AddInfo,
  },
  created() {
    this.getAuthors();
  },
  methods: {
    //获取所有用户信息
    getAuthors() {
      axios.get(apis.DATA_SEXRATIO_SHOWAUTHOR).then((res) => {
        this.authors = res.data.data.authors;
      });
    },
    //搜索用户信息方法（同上）
    searchmsg(keywords) {
      if (keywords.trim() === "") this.getAuthors();
      else {
        axios.get(apis.DATA_SEXRATIO_SEARCHAUTHOR, { params: { author_name: keywords.trim() } }).then((res) => {
          if(res.data.data === null) this.authors = []
          else
            this.authors = res.data.data.authors;
        });
      }
    },
    //提交修改用户信息方法（同上）
    editcommit(formatdata) {
      let msg = JSON.stringify(formatdata);
      axios.post(apis.DATA_SEXRATIO_EDITAUTHOR, msg).then((res) => {
        if(res.data.status === 200){
          this.getAuthors()
          this.editshow = false
        }else {
          console.log(res);
        }
      });
    },
    //删除用户信息方法（同上）
    userdelete(id) {
      axios
        .get(apis.DATA_SEXRATIO_DELETEAUTHORSEX, { params: { aid: id } })
        .then((res) => {
          if(res.data.status === 200){
            this.getAuthors()
          }else {
            console.log(res);
          }
        });
      console.log(id);
    },
    //点击编辑显示编辑页
    showedict(userinfo) {
      this.editshow = true;
      this.userinfo = userinfo;
    },
    //点击取消隐藏编辑页
    hidedict() {
      this.editshow = false;
    },
    //点击新增显示新增页面
    showadd() {
      this.addshow = true;
    },
    //点击取消隐藏新增页面
    hideadd() {
      this.addshow = false;
    },
    //点击保存提交新增用户方法
    addcommit(info){
        axios.post(apis.DATA_SEXRATIO_ADDAUTHOR,JSON.stringify(info)).then(res=>{
          if(res.data.status === 200) {
            this.getAuthors();
            this.addshow = false;
          }else {
            console.log(res);
          }
          
        })
    },
  },
};
</script>
<style lang="scss" scoped>
.el-col {
  text-align: center;
}
.editbox {
  position: absolute;
  // top:50%;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
