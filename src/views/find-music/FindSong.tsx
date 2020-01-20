import React, { useState, useCallback } from 'react'
import styles from './FindSong.module.scss'
import { ThumbnailItem, TabItem, Button, Pagination } from 'components/common'
import { useFetch } from 'hooks/useFetch'
import services from 'services'
import PageLoading from 'components/skeleton/PageLoading'
import IosArrowForward from 'react-ionicons/lib/IosArrowForward'

const FindSong = () => {
  const [activePage, setactivePage] = useState(1)
  const [activecat, setactivecat] = useState('华语')
  const { data: playData, loading }: any = useFetch(services.getPlayList, { order: 'hot', limit: 100, cat: activecat })
  const { data: hotList }: any = useFetch(services.getHotPlayList, {})

  // 渲染单个组件
  function renderItem (item: any) {
    const {
      coverImgUrl: picUrl
    } = item
    return (
      <ThumbnailItem column={5} key={item.id} {...item} picUrl={picUrl} />
    )
  }
  // 页数改变时
  function paginationChange (page: number) {
    if (page !== activePage) {
      setactivePage(page)
    }
  }
  const handleClick = useCallback(
    ({ name }) => {
      if (activecat !== name ){
        setactivecat(name)
      }
    },[activecat])
  // 渲染热门标签导航
  function renderTab () {
    return hotList.tags && hotList.tags.map((item: any) => (
      <TabItem key={item.id} {...item} activeName={activecat} onClick={handleClick}  />
    ))
  }
  return (
    <div className="music-app__wrapper">
      <div className={styles.banner}>
        <span>123123123</span>
      </div>
      { loading && <PageLoading /> }
      <div className={styles['find-song__content']}>
        <div className={styles['find-song__heading']}>
          <Button color="default" suffixIcon={<IosArrowForward color="#646464" />}>{activecat}</Button>
          <ul className={styles['find-song__tabs']}>
            {renderTab()}
          </ul>
        </div>
        <ul className={styles['find-song__menus']}>
          {playData.playlists && playData.playlists.map((item: any) => renderItem(item))}
        </ul>
        <div className={styles['find-song__pagination']}>
          <Pagination
            pageRangeDisplayed={5}
            activePage={activePage}
            itemsCountPerPage={100}
            totalItemsCount={playData.total}
            onChange={paginationChange}
          />
        </div>
      </div>
    </div>
  )
}
export default FindSong
