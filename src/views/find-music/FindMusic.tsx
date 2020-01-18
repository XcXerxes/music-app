import React from 'react'
import styles from './FindMusic.module.scss'
import Carousel from 'xerxes-react-carousel'
import 'xerxes-react-carousel/lib/index.css'
import HeadingTitle from 'components/common/HeadingTitle'
import ThumbnailItem from 'components/common/ThumbnailItem'
import { useFetch } from 'hooks/useFetch'
import services from 'services'

const slides = [
  {
    key: 1,
    img: "http://p1.music.126.net/GGvxPBqMHv1trHzbLhmA1A==/109951164631651891.jpg"
  },
  {
    key: 2,
    img: "http://p1.music.126.net/_pWd3KBxMPOzo_-c0qiADg==/109951164627651457.jpg"
  },
  {
    key: 3,
    img: "http://p1.music.126.net/xifYs7osuzoPlr6gBYtenA==/109951164630929440.jpg"
  },
  {
    key: 4,
    img: "http://p1.music.126.net/g5vStqon9vDfotSjZvMHcw==/109951164632451602.jpg"
  },
  {
    key: 5,
    img: "http://p1.music.126.net/OZNMr2gTKcznrBsIuTgPiA==/109951164632455570.jpg"
  },
  {
    key: 6,
    img: "http://p1.music.126.net/7Mc1EBJThxYitL9bwOZfuw==/109951164632461852.jpg"
  },
  {
    key: 7,
    img: "http://p1.music.126.net/lOHmxoME46xExGdz4tXvow==/109951164632463202.jpg"
  },
  {
    key: 8,
    img: "http://p1.music.126.net/r2fQrcJ03k8FwFA3vXE5nA==/109951164632475577.jpg"
  }
]

const FindMusic = () => {
  const { data, loading }: any = useFetch(services.getBanner, {})
  const { data: NewData }: any = useFetch(services.getPersonalized, { limit: 10 })
  const { data: privatecontentData }: any = useFetch(services.getPrivatecontent, { limit: 10 })
  console.log(data)
  return (
    <div className="container">
      <div className={styles.carousel}>
        <Carousel type="card" indicatorClassName="carousel-indicator" indicatorPosition="outside" autoplay height={200}>
          {data.banners && data.banners.map((item: any) => (
            <Carousel.Item key={item.imageUrl}>
              <div style={{ width: '100%', height: '100%' }}>
                <img style={{ width: '100%', height: '100%' }} src={item.imageUrl} alt={item.key} />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className={styles['find-content']}>
        <div className={styles['find-item']}>
          <HeadingTitle title="推荐歌单" />
          <ul className={styles['find-item__menus']}>
            {NewData.result && NewData.result.map((item: any) => (
              <ThumbnailItem column={5} key={item.id} {...item} />
            ))}
          </ul>
        </div>
        <div className={styles['find-item']}>
          <HeadingTitle title="独家放送" />
          <ul className={styles['find-item__menus']}>
            {privatecontentData.result && privatecontentData.result.map((item: any) => (
              <ThumbnailItem column={privatecontentData.result.length} key={item.id} {...item} />
            ))}
          </ul>
        </div>
        <div className={styles['find-item']}>
          <HeadingTitle title="最新音乐" />
          <ul className={styles['find-item__menus']}>
            {Array.from({length: 10 }).map((_item: any, i) => (
              <ThumbnailItem column={5} key={i} />
            ))}
          </ul>
        </div>
        <div className={styles['find-item']}>
          <HeadingTitle title="推荐MV" />
          <ul className={styles['find-item__menus']}>
            {Array.from({length: 4 }).map((_item: any, i) => (
              <ThumbnailItem column={4} key={i} />
            ))}
          </ul>
        </div>
        <div className={styles['find-item']}>
          <HeadingTitle title="主播电台" />
          <ul className={styles['find-item__menus']}>
            {Array.from({length: 10 }).map((_item: any, i) => (
              <ThumbnailItem column={5} key={i} />
            ))}
          </ul>
        </div>
      </div>
      <div className={styles['find-footer']}>
        <p>现在可以根据个人喜好，自由调整首页栏目顺序啦~</p>
      </div>
    </div>
  )
}

export default FindMusic
