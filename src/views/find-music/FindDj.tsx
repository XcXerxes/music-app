import React from 'react'
import services from 'services'
import { useFetch } from 'hooks/useFetch'
import styles from './FindDj.module.scss'
import Carousel from 'xerxes-react-carousel'
import { LazyImage, ThumbnailItem, HeadingTitle, AnchorStationItem } from 'components/common'
import PageLoading from 'components/skeleton/PageLoading'

const FindDj = () => {
  const { data: bannerData }:any = useFetch(services.getDjBanner)
  const { data: paygiftData }: any = useFetch(services.getDjPaygift, { limit: 6 })
  const { data: recommendData, loading }: any = useFetch(services.getDjRecommend, { limit: 6, offset: 0 })
  const { data: creationData }: any = useFetch(services.getDjRadioHot, { cateId: 2001, limit: 6 })
  const { data: gameData }: any = useFetch(services.getDjRadioHot, { cateId: 10002, limit: 6 })
  const { data: musicData }: any = useFetch(services.getDjRadioHot, { cateId: 2, limit: 6 })
  const { data: emotionData }: any = useFetch(services.getDjRadioHot, { cateId: 3, limit: 6 })
  const { data: dimensionData }: any = useFetch(services.getDjRadioHot, { cateId: 3001, limit: 6 })

  function renderItem (item: any, column: number): React.ReactElement {
    const { rcmdtext: name } = item
    return <ThumbnailItem column={column} key={item.id} {...item} name={name} />
  }
  return (
    <div className="music-app__wrapper">
      <div className={styles.banner}>
        <Carousel type="card" indicatorClassName="carousel-indicator" indicatorPosition="outside" autoplay height={200}>
          {bannerData.data && bannerData.data.map((item: any) => (
            <Carousel.Item key={item.pic}>
              <div style={{ width: '100%', height: '100%' }}>
                <LazyImage height="100%" src={item.pic} alt={item.key} />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      {loading ?  <PageLoading /> : (
        <div className={styles['find-content']}>
          <div className={styles['find-item']}>
            <HeadingTitle title="付费精品" />
            <ul className={styles['find-item__menus']}>
              {paygiftData.data.list && paygiftData.data.list.map((item: any) => (
                <AnchorStationItem key={item.id} {...item} />
              ))}
            </ul>
          </div>
          <div className={styles['find-item']}>
            <HeadingTitle title="电台个性推荐" />
            <ul className={styles['find-item__menus']}>
              {recommendData.djRadios && recommendData.djRadios.map((item: any) => (
                renderItem(item, 5)
              ))}
            </ul>
          </div>
          <div className={styles['find-item']}>
            <HeadingTitle title="创作｜翻唱" />
            <ul className={styles['find-item__menus']}>
              {creationData.djRadios && creationData.djRadios.map((item: any) => (
                renderItem(item, 5)
              ))}
            </ul>
          </div>
          <div className={styles['find-item']}>
            <HeadingTitle title="3D｜电子" />
            <ul className={styles['find-item__menus']}>
              {gameData.djRadios && gameData.djRadios.map((item: any) => (
                renderItem(item, 4)
              ))}
            </ul>
          </div>
          <div className={styles['find-item']}>
            <HeadingTitle title="音乐故事" />
            <ul className={styles['find-item__menus']}>
              {musicData.djRadios && musicData.djRadios.map((item: any) => (
                renderItem(item, 6)
              ))}
            </ul>
          </div>
          <div className={styles['find-item']}>
            <HeadingTitle title="情感调频" />
            <ul className={styles['find-item__menus']}>
              {emotionData.djRadios && emotionData.djRadios.map((item: any) => (
                renderItem(item, 6)
              ))}
            </ul>
          </div>
          <div className={styles['find-item']}>
            <HeadingTitle title="二次元" />
            <ul className={styles['find-item__menus']}>
              {dimensionData.djRadios && dimensionData.djRadios.map((item: any) => (
                renderItem(item, 4)
              ))}
            </ul>
          </div>
      </div>)}
    </div>
  )
}

export default FindDj
