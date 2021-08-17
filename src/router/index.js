import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import util from '@/utils/index.js'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "",
          redirect: "bigdata",
        },
        {
          path: "bigdata",
          name: "BigData",
          component: () => import("@/views/page/BigData"),
        },
        {
          path: "fanreward",
          name: "FanReward",
          component: () => import("@/views/page/FanReward"),
        },
        {
          path: "person",
          name: "Person",
          component: () => import("@/views/page/Person"),
        },
        {
          path: "ranklist",
          name: "RankList",
          component: () => import("@/views/page/RankList"),
        },
        {
          path: "recommend",
          name: "Recommend",
          component: () => import("@/views/page/Recommend"),
        },
        {
          path: "rewardnum",
          name: "RewardNum",
          component: () => import("@/views/page/RewardNum"),
        },
        {
          path: "sexratio",
          name: "SexRatio",
          component: () => import("@/views/page/SexRatio"),
        },
        {
          path: "ticket",
          name: "Ticket",
          component: () => import("@/views/page/Ticket"),
        },
        {
          path: "topword",
          name: "TopWord",
          component: () => import("@/views/page/TopWord"),
        },
        {
          path: "worknum",
          name: "WorkNum",
          component: () => import("@/views/page/WorkNum"),
        },
        {
          path: "writeday",
          name: "WriteDay",
          component: () => import("@/views/page/WriteDay"),
        },
        {
          path: "statistic",
          name: "Statistic",
          component: () => import("@/views/page/Statistic"),
        },
        {
          path: "manager",
          name: "Manager",
          component: () => import("@/views/page/Manager"),
          children: [
            {
              path:"/",
              redirect:"usermanger"
            },
            {
              path: "usermanger",
              name: "Usermanger",
              component: () => import("@/views/adminPages/Usermanger"),
            },
            {
              path: "hotsrank",
              name: "HotsRank",
              component: () => import("@/views/adminPages/HotsRank"),
            },
            {
              path: "clickrank",
              name: "ClickRank",
              component: () => import("@/views/adminPages/ClickRank"),
            },
            {
              path: "recommrank",
              name: "RecommRank",
              component: () => import("@/views/adminPages/RecommRank"),
            },
            {
              path: "sexrank",
              name: "SexRank",
              component: () => import("@/views/adminPages/SexRank"),
            },
            {
              path: "fansrank",
              name: "FansRank",
              component: () => import("@/views/adminPages/FansRank"),
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/Login"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("@/views/Register"),
    },
    {
      path: "/adminlogin",
      name: "AdminLogin",
      component: () => import("@/views/AdminLogin"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  let isAuthenticated = util.getSerializedStorage('username')!==null ?util.getSerializedStorage('username'):util.getSerializedStorage('admin')
  if (to.name === 'Login' || to.name === 'Register' || to.name === 'AdminLogin') next()
  else {
    if(!isAuthenticated) next('/login')
    else next()
  }
})

export default router;
