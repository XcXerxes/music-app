import api from './api'

export default {
  // 获取轮播图
  getBanner () {
    return api.get('/banner')
  },
  // 推荐歌单
  getPersonalized (params: any) {
    return api.get('personalized', params)
  },
  // 独家放送
  getPrivatecontent (params: any) {
    return api.get('/personalized/privatecontent', params)
  }
}
