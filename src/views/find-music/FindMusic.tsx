import React, { useCallback } from 'react'
import styles from './FindMusic.module.scss'
import Carousel from 'xerxes-react-carousel'
import { HeadingTitle, ThumbnailItem, MusicItem, AnchorStationItem, Button } from 'components/common'
import { useFetch } from 'hooks/useFetch'
import services from 'services'
import clsx from 'clsx'
import PageLoading from 'components/skeleton/PageLoading'

type FindMusicProps = {
  history: any
}
const FindMusic:React.FC<FindMusicProps> = ({ history }) => {
  const { data }: any = useFetch(services.getBanner, {})
  const { data: NewData, loading }: any = useFetch(services.getPersonalized, { limit: 10 })
  const { data: privatecontentData }: any = useFetch(services.getPrivatecontent, { limit: 10 })
  const { data: newSongData }: any = useFetch(services.getNewSong, { limit: 10 })
  const { data: mvData }: any = useFetch(services.getPersonalizedMv, { limit: 10 })
  const { data: getDjprogramData }: any = useFetch(services.getDjprogram, { limit: 10 })

  const newItemClick = useCallback(
    (id: any) => {
      history.push(`/music-detail/${id}`)
    },
    [history]
  )
  return (
    <div className="music-app__wrapper">
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
      { loading ? <PageLoading /> :
      <div className={styles['find-content']}>
        <div className={styles['find-item']}>
          <HeadingTitle title="推荐歌单" />
          <ul className={styles['find-item__menus']}>
            {NewData.result && NewData.result.map((item: any) => (
              <ThumbnailItem onClick={newItemClick} column={5} key={item.id} {...item} />
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
          <ul className={clsx(styles['find-item__menus'], styles['find-item__newMenus'])}>
            {newSongData.result && newSongData.result.map((item: any) => (
              <MusicItem column={5} key={item.id} {...item} />
            ))}
          </ul>
        </div>
        <div className={styles['find-item']}>
          <HeadingTitle title="推荐MV" />
          <ul className={styles['find-item__menus']}>
            {mvData.result && mvData.result.map((item: any) => (
              <ThumbnailItem column={mvData.result.length} {...item} key={item.id} />
            ))}
          </ul>
        </div>
        <div className={styles['find-item']}>
          <HeadingTitle title="主播电台" />
          <ul className={styles['find-item__menus']}>
            {getDjprogramData.result && getDjprogramData.result.map((item: any) => (
              <AnchorStationItem {...item.program.radio} column={5} key={item.id} />
            ))}
          </ul>
        </div>
      </div>}
      <div className={styles['find-footer']}>
        <p>现在可以根据个人喜好，自由调整首页栏目顺序啦~</p>
        <Button color="primary">调整栏目顺序</Button>
      </div>
    </div>
  )
}

export default FindMusic
