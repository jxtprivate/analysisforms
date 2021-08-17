<template lang="">
  <div>
    <Header :showadd="showadd" :searchmsg="searchmsg"></Header>
    <Card-List :item="title" :istitle="true"></Card-List>
    <div style="overflow:scroll;height:600px">
      <div v-for="item in users" :key="item.uid">
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
import CardList from "@/components/adComponents/usermanager/CardList";
import EditPage from "@/components/adComponents/usermanager/EditPage";
import AddInfo from "@/components/adComponents/usermanager/AddInfo";
import axios from "@/http/request";
import apis from "@/http/apis";

export default {
  data() {
    return {
      title: {
        nickname: "昵称",
        username: "帐号",
        password: "密码",
        phone: "电话",
        mailbox: "邮箱",
        address: "地址",
      },
      users: [],
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
    this.getUsers();
  },
  methods: {
    //获取所有用户信息
    getUsers() {
      axios.get(apis.USER_MANAGER_SHOW).then((res) => {
        this.users = res.data.data.users;
      });
    },
    //搜索用户信息方法（同上）
    searchmsg(keywords) {
      if (keywords.trim() === "") this.getUsers();
      else {
        axios
          .get(apis.USER_MANAGER_SEARCHUSER, {
            params: { username: keywords.trim() },
          })
          .then((res) => {
            if (res.data.data === null) this.users = [];
            else this.users = res.data.data.users;
          });
      }
    },
    //提交修改用户信息方法（同上）
    editcommit(formatdata) {
      let msg = JSON.stringify(formatdata);
      axios.post(apis.USER_MANAGER_EDITUSER, msg).then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          this.getUsers();
          this.editshow = false;
        } else {
          console.log(res);
        }
      });
    },
    //删除用户信息方法（同上）
    userdelete(id) {
      axios
        .get(apis.USER_MANAGER_DELETEUSER, { params: { uid: parseInt(id) } })
        .then((res) => {
          if (res.data.status === 200) {
            this.getUsers();
          } else {
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
    addcommit(info) {
      axios
        .post(apis.USER_MANAGER_ADDUSER, JSON.stringify(info))
        .then((res) => {
          if (res.data.status === 200) {
            this.getUsers();
            this.addshow = false;
          } else {
            console.log(res);
          }
        });
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
