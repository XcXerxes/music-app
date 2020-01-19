import React from 'react'
import styles from './AnchorStationItem.module.scss'
import LazyImage from './LazyImage'

type AnchorStationItemProps = {
  picUrl?: string,
  name?: string,
  program?: any
}
export const  AnchorStationItem: React.FC<AnchorStationItemProps> = ({ picUrl, name, program }) => {
  return (
    <li className={styles['anchor-item']}>
      <div className={styles['anchor-item__media']}>
        <LazyImage src={program.radio && program.radio.picUrl} />
      </div>
      <div className={styles['anchor-item__body']}>
        <div className={styles['anchor-item__description']}>
          <p className={styles.title}>
            {program.radio && (program.radio.rcmdText || program.radio.desc)}
          </p>
          <div className={styles['anchor-item__author']}>
            {program.radio && program.radio.name}
          </div>
        </div>
      </div>
    </li>
  )
}
AnchorStationItem.defaultProps = {
  program: {}
}

export default  AnchorStationItem
