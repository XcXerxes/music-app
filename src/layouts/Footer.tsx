import React, { useState, useRef, useEffect } from 'react'
import styles from './index.module.scss'
import { Button, LazyImage, } from 'components/common'
import dayjs from 'dayjs'
import { useFetch } from 'hooks/useFetch'
import services from 'services'
import { Howl } from 'howler'

import { Slider } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { PlayCircleFilledWhite, SkipPrevious, SkipNext, FavoriteBorder, ShareOutlined } from '@material-ui/icons'

const MySlider = withStyles({
  rail: {
    opacity: 0.5,
    backgroundColor: '#ededed'
  }
})(Slider)

interface FooterProps {

}
const Footer:React.FC<FooterProps> = () => {
  const { data }: any = useFetch(services.getSongUrl, { id: 1417862046 })
  const [progress, setprogress] = useState(100)
  const currentSound = useRef<any>(null)
  useEffect(() => {
    currentSound.current = new Howl({
      src: data.data ? data.data[0].url : ''
    })
    return () => {
      currentSound.current = null
    }
  }, [data])
  function sliderChange (_e: any, value: any) {
    setprogress(value)
  }
  // 播放
  function clickPlay () {
    currentSound.current.play()
  }
  return (
    <footer className={styles.footer}>
      <div className={styles.slider}>
      <MySlider
        value={progress}
        valueLabelDisplay="auto"
        min={0}
        max={288571}
        onChange={sliderChange}
        valueLabelFormat={(value: number) => dayjs(value).format('mm:ss')}
        className="slider-wrapper"
      />
      </div>
      <div className={styles['footer-info']}>
        <div className={styles['footer-info__media']}>
          <LazyImage />
        </div>
        <div className={styles['footer-info__body']}>
          <h4>请笃信一个梦 <span>- 周深</span></h4>
          <p>{dayjs(progress).format('mm:ss')} / {dayjs(288571).format('mm:ss')}</p>
        </div>
      </div>
      <div className={styles['footer-player']}>
        <div className={styles.heart}>
          <FavoriteBorder />
        </div>
        <div className={styles.skipPrevious}>
          <SkipPrevious fontSize="inherit" color="primary" />
        </div>
        <div className={styles['footer-player__play']} onClick={clickPlay}>
          <PlayCircleFilledWhite fontSize="inherit" color="primary" />
        </div>
        <div className={styles.skipNext}>
          <SkipNext fontSize="inherit" color="primary" />
        </div>
        <div className={styles.share}>
          <ShareOutlined />
        </div>
      </div>
      <div className={styles['footer-action']}></div>
    </footer>
  )
}

export default Footer
