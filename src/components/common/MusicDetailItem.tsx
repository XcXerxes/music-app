import React from 'react'
import styles from './MusicDetailItem.module.scss'
import { LazyImage, Button } from 'components/common'
import { chineseUnit } from 'utils'
import dayjs from 'dayjs'

interface MusicDetailItemProps {
  coverImgUrl?: string,
  name?: string,
  description?: string,
  createTime?: number,
  trackCount?: number,
  shareCount?: number,
  playCount?: number,
  tags?: string[],
  subscribedCount?: number
}

export const MusicDetailItem: React.FC<MusicDetailItemProps> = ({ subscribedCount = 0, coverImgUrl, name, description, createTime, trackCount = 0, shareCount = 0, playCount = 0, tags = []}) => {
  return (
    <div className={styles['detail-item']}>
      <div className={styles['detail-item__media']}>
        <LazyImage src={coverImgUrl} height={200} alt={name} />
      </div>
      <div className={styles['detail-item__body']}>
        <div className={styles['title']}>
          <p></p>
          <h2>{name}</h2>
        </div>
        <div className={styles.update}>
          <div className={styles.avator}>网易云音乐</div>
          <p>{dayjs(createTime).format('YYYY-MM-DD')} 创建</p>
        </div>
        <div className={styles.buttonGroup}>
          <Button color="primary">播放全部</Button>
          <Button color="primary">收藏({chineseUnit(subscribedCount, 0)})</Button>
          <Button color="primary">分享({chineseUnit(shareCount, 0)})</Button>
        </div>
        <div className={styles.tags}>
          <span>标 签：</span>
          {tags.map((item: string) => <p key={item}>{item}</p>)}
        </div>
        <div className={styles.songs}>
          <p>歌曲数：<span>{trackCount}</span></p>
          <p>播放数：<span>{chineseUnit(playCount, 1)}</span></p>
        </div>
        <div className={styles.desc}>
          <span>简  介：</span>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default MusicDetailItem
