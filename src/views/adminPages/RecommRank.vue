<template lang="">
  <div>
    <Header :showadd="showadd" :searchmsg="searchmsg"></Header>
    <Card-List :item="title" :istitle="true"></Card-List>
    <div style="overflow:scroll;height:600px">
      <div v-for="item in books" :key="item.book_id">
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
import CardList from "@/components/adComponents/recommRank/CardList";
import EditPage from "@/components/adComponents/recommRank/EditPage";
import AddInfo from "@/components/adComponents/recommRank/AddInfo";
import axios from "@/http/request";
import apis from "@/http/apis";

export default {
  data() {
    return {
      title: {
        book_name: "书名",
        author_name: "作者名",
        lastchapter: "最新章节",
        updatetime: "最新更新时间",
        recommends: "推荐数",
      },
      books: [],
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
    this.getBooks();
  },
  methods: {
    //获取所有用户信息
    getBooks() {
      axios.get(apis.DATA_RECOMRANK_SHOWBOOK).then((res) => {
        this.books = res.data.data.books;
      });
    },
    //搜索用户信息方法（同上）
    searchmsg(keywords) {
      if (keywords.trim() === "") this.getBooks();
      else {
        axios.get(apis.DATA_RECOMRANK_SEARCHBOOK, { params: { book_name: keywords.trim() } }).then((res) => {
          if(res.data.data === null) this.books = []
          else this.books = res.data.data.books
        });
      }
    },
    //提交修改用户信息方法（同上）
    editcommit(formatdata) {
      let msg = JSON.stringify(formatdata);
      console.log(msg);
      axios.post(apis.DATA_RECOMRANK_EDITBOOK, msg).then((res) => {
        if(res.data.status === 200) {
          this.getBooks()
          this.editshow = false
        }else {
          console.log(res);
        }
      });
    },
    //删除用户信息方法（同上）
    userdelete(id) {
      axios
        .get(apis.DATA_RECOMRANK_DELETEBOOK, { params: { book_id: id } })
        .then((res) => {
          if(res.data.status === 200){
            this.getBooks()
          }else{
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
        axios.post(apis.DATA_RECOMRANK_ADDBOOK,JSON.stringify(info)).then(res=>{
          if(res.data.status === 200) {
            this.getBooks();
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
