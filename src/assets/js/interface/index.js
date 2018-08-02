import config from '../../../config/index'
// 接口汇总
// 首页接口
// 今日上新
// 1. 列表相关 API
// 使用代理
const HOST = process.env.NODE_ENV === 'production' ? config.original : config.local;
// 获取首页简报集列表 API
export const GetTodayList = {
  URL: '/index/ajaxDealactList' // /<offset>/<limit>?folderId=
}

