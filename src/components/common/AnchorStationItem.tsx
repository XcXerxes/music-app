import React from 'react'
import styles from './AnchorStationItem.module.scss'
import LazyImage from './LazyImage'

type AnchorStationItemProps = {
  name?: string,
  picUrl?: any,
  rcmdText?: string,
  desc?: string,

}
export const  AnchorStationItem: React.FC<AnchorStationItemProps> = ({ name, picUrl, rcmdText, desc }) => {
  return (
    <li className={styles['anchor-item']}>
      <div className={styles['anchor-item__media']}>
        <LazyImage height="100%" src={picUrl} alt={name} />
      </div>
      <div className={styles['anchor-item__body']}>
        <div className={styles['anchor-item__description']}>
          <p className={styles.title}>
            {rcmdText || desc}
          </p>
          <div className={styles['anchor-item__author']}>
            {name}
          </div>
        </div>
      </div>
    </li>
  )
}

export default  AnchorStationItem
