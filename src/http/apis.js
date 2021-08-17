const apis = {
  // 用户相关
  USER_LOGIN: '/api/user/login',
  USER_REGISTER: '/api/user/register',
  USER_ADMIN_LOGIN: '/api/user/adminlogin',
  // 数据相关
  DATA_CHAR_NUMS: '/api/data/charnums', //字数top10接口
  DATA_WORD_CLOUDS: '/api/data/wordclouds', //词云接口（标签热度）
  DATA_RECOMMEND: '/api/data/recommend', //推荐指数接口
  DATA_DAILY_TICKETS: '/api/data/dailytickets', //top10日票接口（某个榜单的书的日票排行top10）
  DATA_MONLY_TICKETS: '/api/data/monlytickets', //月票榜占比接口
  DATA_WRITE_DAYS: '/api/data/writedays', //写作天数接口
  DATA_WORK_NUMS: '/api/data/worknums', //作品数量接口
  DATA_MONLY_RECOMMEND: '/api/data/monlyrecommend', //推荐指数（周票）接口
  DATA_REWARD_NUMS: '/api/data/rewardnums', //打赏人数接口
  DATA_FAN_REWARD: '/api/data/fanreward', //粉丝打赏接口
  DATA_SEX_RATIO: '/api/data/sexratio', //性别比例接口
  DATA_STATISTIC: '/api/data/statistic', //上榜次数&分类统计接口
  DATA_RANK_LIST: '/api/data/ranklist', //纵横榜接口
  // 管理员相关
  USER_MANAGER_SHOW: '/api/admin/showuserinfo',//展示用户信息接口
  USER_MANAGER_ADDUSER:'/api/admin/addusers', //新增用户帐号接口
  USER_MANAGER_EDITUSER:'/api/admin/editusers',//修改用户信息接口
  USER_MANAGER_DELETEUSER:'/api/admin/userdelete', //删除用户接口
  USER_MANAGER_SEARCHUSER:'/api/admin/usersearch',//查找用户接口
  USER_MANAGER_SEARCHBYID:'/api/admin/usersearchbyid',//根据id查找用户接口

  //纵横点击榜相关
  DATA_CLICKRANK_SHOWBOOK:'/api/admin/clicksrank', // 纵横点击榜信息展示接口
  DATA_CLICKRANK_ADDBOOK:'/api/admin/clicksrank', //纵横点击榜新增书籍接口
  DATA_CLICKRANK_EDITBOOK:'/api/admin/editbookclick' ,//纵横点击榜修改书籍接口
  DATA_CLICKRANK_SEARCHBOOK:'/api/admin/booksearchclick' ,//纵横点击榜寻找书籍接口
  DATA_CLICKRANK_DELETEBOOK:'/api/admin/bookdeleteclick', //纵横点击榜删除书籍接口
 
  //纵横人气榜相关
  DATA_PORANK_SHOWBOOK:'/api/admin/popularyrank', //纵横人气榜展示信息接口
  DATA_PORANK_ADDBOOK:'/api/admin/addbookpo', //纵横人气榜新增书籍接口
  DATA_PORANK_EDITBOOK:'/api/admin/editbookpo', //纵横人气榜修改书籍接口
  DATA_PORANK_SEARCHBOOK:'/api/admin/booksearchpo', //纵横人气榜寻找书籍接口
  DATA_PORANK_DELETEBOOK:'/api/admin/bookdeletepo', //纵横人气榜删除书籍接口

  //纵横推荐榜相关
  DATA_RECOMRANK_SHOWBOOK:'/api/admin/recommendrank', //纵横推荐榜展示信息接口
  DATA_RECOMRANK_ADDBOOK: '/api/admin/addbookrecom', //纵横推荐榜增加书籍接口
  DATA_RECOMRANK_EDITBOOK:'/api/admin/editbookrecom', //纵横推荐榜修改书籍接口
  DATA_RECOMRANK_SEARCHBOOK:'/api/admin/booksearchrecom', //纵横推荐榜寻找书籍接口
  DATA_RECOMRANK_DELETEBOOK:'/api/admin/bookdeleterecom', //纵横推荐榜删除书籍接口

  //粉丝打赏榜相关
  DATA_FANRANK_SHOWFANS:'/api/admin/showfans', //粉丝打赏信息的展示接口
  DATA_FANRANK_ADDFANS:'/api/admin/addfans', //新增粉丝的接口
  DATA_FANRANK_DELETEFANS:'/api/admin/fansdelete', //删除粉丝接口
  DATA_FANRANK_EDITFANS:'/api/admin/editfans', //修改粉丝信息接口
  DATA_FANRANK_SEARCHFANS:'/api/admin/fansearch', //寻找粉丝接口

  //性别比例榜相关
  DATA_SEXRATIO_SHOWAUTHOR:'/api/admin/showauthors', //展示作者信息的接口
  DATA_SEXRATIO_ADDAUTHOR:'/api/admin/addauthor', //新增作者接口
  DATA_SEXRATIO_DELETEAUTHORSEX:'/api/admin/ardelete',//删除作者性别信息接口
  DATA_SEXRATIO_SEARCHAUTHOR:'/api/admin/arsearch', //寻找作者信息接口
  DATA_SEXRATIO_EDITAUTHOR:'/api/admin/aredit', //修改作者信息接口

}

export default apis
