import React from 'react'
import styles from './ThumbnailItem.module.scss'
import clsx from 'clsx'
import MdArrowDroprightCircle from 'react-ionicons/lib/MdArrowDroprightCircle'
import IosLinkOutline from 'react-ionicons/lib/IosLinkOutline'
import { chineseUnit } from 'utils'
import LazyImage from './LazyImage'

type Props = {
  column: number,
  picUrl?: string,
  name?: string,
  playCount?: number,
  url?: string,
  artists?: any,
  id?: number,
  rcmdtext?: string,
  onClick?: any
}
export const ThumbnailItem:React.FC<Props> = ({ column, picUrl, name, playCount, url, artists, id, rcmdtext, onClick }) => {
  function handleClick () {
    onClick(id)
  }
  return (
    <li className={clsx(styles['thumbnail-item'], styles[`thumbnail-item__${column}`] )} onClick={handleClick}>
      <div className={styles['thumbnail-item__body']}>
        <div className={styles['thumbnail-item__media']}>
          <LazyImage key={id} height="100%" src={picUrl} alt={name} />
        </div>
        {playCount &&<div className={styles['thumbnail-item__views']}>
          <MdArrowDroprightCircle color="#fff" />
            <span>{chineseUnit(playCount || 0, 1)}</span>
        </div>}
        {(playCount === null || playCount === undefined) && <div className={styles['thumbnail-item__play']}>
          {url ? <IosLinkOutline color="#fff" /> : <MdArrowDroprightCircle color="#fff" /> }
        </div>}
        {rcmdtext && <div className={styles['thumbnail-item__description']}>{rcmdtext}</div>}
      </div>
      <div className={styles['thumbnail-item__footer']}>
        <p>{name}</p>
        <p>{artists && artists.length > 0 && artists.map((item: any) => item.name)}</p>
      </div>
    </li>
  )
}

ThumbnailItem.defaultProps = {
  artists: []
}

export default ThumbnailItem
