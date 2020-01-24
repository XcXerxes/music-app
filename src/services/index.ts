/*
 * @Description: 
 * @Author: leo
 * @Date: 2020-01-19 16:36:56
 * @LastEditors  : leo
 * @LastEditTime : 2020-01-24 16:23:56
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
  },
  // 歌单(网友精选碟)
  getPlayList (params: any) {
    return api.get('/top/playlist', params)
  },
  // 热门歌单分类
  getHotPlayList (params: any) {
    return api.get('/playlist/hot', params)
  },
  // 电台banner
  getDjBanner (params: any) {
    return api.get('/dj/banner', params)
  },
  // 电台个性推荐
  getDjRecommend (params: any) {
    return api.get('/dj/recommend', params)
  },
  // 创作｜翻唱 3D|电子 音乐故事 情感调频 二次元
  getDjRadioHot (params: any) {
    return api.get('/dj/radio/hot', params)
  },
  // 付费精品
  getDjPaygift (params: any) {
    return api.get('/dj/paygift', params)
  },
  // 歌单详情
  getPlayDataDetail (params: any) {
    return api.get('/playlist/detail', params)
  },
  // 检测音乐是否可播放
  checkMusic (params: any) {
    return api.get('/check/music', params)
  },
  // 获取音乐播放地址
  getSongUrl (params: any) {
    return api.get('/song/url', params)
  }
}
