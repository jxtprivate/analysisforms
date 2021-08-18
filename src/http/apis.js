const apis = {
  // 用户相关
  USER_LOGIN: '/backend/user/login',
  USER_REGISTER: '/backend/user/register',
  USER_ADMIN_LOGIN: '/backend/user/adminlogin',
  // 数据相关
  DATA_CHAR_NUMS: '/backend/data/charnums', //字数top10接口
  DATA_WORD_CLOUDS: '/backend/data/wordclouds', //词云接口（标签热度）
  DATA_RECOMMEND: '/backend/data/recommend', //推荐指数接口
  DATA_DAILY_TICKETS: '/backend/data/dailytickets', //top10日票接口（某个榜单的书的日票排行top10）
  DATA_MONLY_TICKETS: '/backend/data/monlytickets', //月票榜占比接口
  DATA_WRITE_DAYS: '/backend/data/writedays', //写作天数接口
  DATA_WORK_NUMS: '/backend/data/worknums', //作品数量接口
  DATA_MONLY_RECOMMEND: '/backend/data/monlyrecommend', //推荐指数（周票）接口
  DATA_REWARD_NUMS: '/backend/data/rewardnums', //打赏人数接口
  DATA_FAN_REWARD: '/backend/data/fanreward', //粉丝打赏接口
  DATA_SEX_RATIO: '/backend/data/sexratio', //性别比例接口
  DATA_STATISTIC: '/backend/data/statistic', //上榜次数&分类统计接口
  DATA_RANK_LIST: '/backend/data/ranklist', //纵横榜接口
  // 管理员相关
  USER_MANAGER_SHOW: '/backend/admin/showuserinfo',//展示用户信息接口
  USER_MANAGER_ADDUSER:'/backend/admin/addusers', //新增用户帐号接口
  USER_MANAGER_EDITUSER:'/backend/admin/editusers',//修改用户信息接口
  USER_MANAGER_DELETEUSER:'/backend/admin/userdelete', //删除用户接口
  USER_MANAGER_SEARCHUSER:'/backend/admin/usersearch',//查找用户接口
  USER_MANAGER_SEARCHBYID:'/backend/admin/usersearchbyid',//根据id查找用户接口

  //纵横点击榜相关
  DATA_CLICKRANK_SHOWBOOK:'/backend/admin/clicksrank', // 纵横点击榜信息展示接口
  DATA_CLICKRANK_ADDBOOK:'/backend/admin/clicksrank', //纵横点击榜新增书籍接口
  DATA_CLICKRANK_EDITBOOK:'/backend/admin/editbookclick' ,//纵横点击榜修改书籍接口
  DATA_CLICKRANK_SEARCHBOOK:'/backend/admin/booksearchclick' ,//纵横点击榜寻找书籍接口
  DATA_CLICKRANK_DELETEBOOK:'/backend/admin/bookdeleteclick', //纵横点击榜删除书籍接口
 
  //纵横人气榜相关
  DATA_PORANK_SHOWBOOK:'/backend/admin/popularyrank', //纵横人气榜展示信息接口
  DATA_PORANK_ADDBOOK:'/backend/admin/addbookpo', //纵横人气榜新增书籍接口
  DATA_PORANK_EDITBOOK:'/backend/admin/editbookpo', //纵横人气榜修改书籍接口
  DATA_PORANK_SEARCHBOOK:'/backend/admin/booksearchpo', //纵横人气榜寻找书籍接口
  DATA_PORANK_DELETEBOOK:'/backend/admin/bookdeletepo', //纵横人气榜删除书籍接口

  //纵横推荐榜相关
  DATA_RECOMRANK_SHOWBOOK:'/backend/admin/recommendrank', //纵横推荐榜展示信息接口
  DATA_RECOMRANK_ADDBOOK: '/backend/admin/addbookrecom', //纵横推荐榜增加书籍接口
  DATA_RECOMRANK_EDITBOOK:'/backend/admin/editbookrecom', //纵横推荐榜修改书籍接口
  DATA_RECOMRANK_SEARCHBOOK:'/backend/admin/booksearchrecom', //纵横推荐榜寻找书籍接口
  DATA_RECOMRANK_DELETEBOOK:'/backend/admin/bookdeleterecom', //纵横推荐榜删除书籍接口

  //粉丝打赏榜相关
  DATA_FANRANK_SHOWFANS:'/backend/admin/showfans', //粉丝打赏信息的展示接口
  DATA_FANRANK_ADDFANS:'/backend/admin/addfans', //新增粉丝的接口
  DATA_FANRANK_DELETEFANS:'/backend/admin/fansdelete', //删除粉丝接口
  DATA_FANRANK_EDITFANS:'/backend/admin/editfans', //修改粉丝信息接口
  DATA_FANRANK_SEARCHFANS:'/backend/admin/fansearch', //寻找粉丝接口

  //性别比例榜相关
  DATA_SEXRATIO_SHOWAUTHOR:'/backend/admin/showauthors', //展示作者信息的接口
  DATA_SEXRATIO_ADDAUTHOR:'/backend/admin/addauthor', //新增作者接口
  DATA_SEXRATIO_DELETEAUTHORSEX:'/backend/admin/ardelete',//删除作者性别信息接口
  DATA_SEXRATIO_SEARCHAUTHOR:'/backend/admin/arsearch', //寻找作者信息接口
  DATA_SEXRATIO_EDITAUTHOR:'/backend/admin/aredit', //修改作者信息接口

}

export default apis
