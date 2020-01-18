import React from 'react'
import styles from './ThumbnailItem.module.scss'
import clsx from 'clsx'
import IosPlayOutline from 'react-ionicons/lib/IosPlayOutline'

type Props = {
  column: number,
  picUrl?: string,
  name?: string,
  playCount?: number
}
const ThumbnailItem:React.FC<Props> = ({ column, picUrl, name, playCount }) => {
  return (
    <li className={clsx(styles['thumbnail-item'], styles[`thumbnail-item__${column}`] )}>
      <div className={styles['thumbnail-item__body']}>
        <div className={styles['thumbnail-item__media']}>
          <img src={picUrl} alt={name} />
        </div>
        <div className={styles['thumbnail-item__views']}>
          <IosPlayOutline color="#fff" />
            <span>{playCount}</span>
        </div>
      </div>
      <div className={styles['thumbnail-item__footer']}>
        <span>{name}</span>
      </div>
    </li>
  )
}

export default ThumbnailItem
