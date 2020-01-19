/*
 * @Description: 
 * @Author: leo
 * @Date: 2020-01-19 16:36:56
 * @LastEditors  : leo
 * @LastEditTime : 2020-01-19 19:32:19
 */
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
  },
  // 最新音乐
  getNewSong (params: any) {
    return api.get('/personalized/newsong', params)
  },
  // 推荐MV
  getPersonalizedMv (params: any) {
    return api.get('/personalized/mv', params)
  },
  // 主播电台
  getDjprogram (params: any) {
    return api.get('/personalized/djprogram', params)
  }
}

