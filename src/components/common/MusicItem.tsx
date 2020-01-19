import React from 'react'
import styles from './MusicItem.module.scss'
import MdArrowDroprightCircle from 'react-ionicons/lib/MdArrowDroprightCircle'
import Button from './Button'
import LazyImage from './LazyImage'

type MusicItemProps = {
  picUrl?: string,
  name?: string,
  song?: any
}
export const MusicItem: React.FC<MusicItemProps> = ({ picUrl, name, song }) => {
  return (
    <li className={styles['music-item']}>
      <div className={styles['music-item__media']}>
        <LazyImage src={picUrl} />
      </div>
      <div className={styles['music-item__body']}>
        <div className={styles['music-item__description']}>
          <p className={styles.title}>
            {name}
            {song.alias && song.alias.length > 0 && <React.Fragment>({song.alias.map((item: string) => <span key={item}>{item}</span>)})</React.Fragment>}
          </p>
          <div className={styles['music-item__author']}>
            {song.artists && song.artists.length > 0 && song.artists.map((item: any) => (<p key={item.id}>{item.name}{song.artists.length > 1 ? ' / ' : ''}</p>)) }
          </div>
        </div>
      </div>
      <div className={styles['music-item__right']}>
        <Button><MdArrowDroprightCircle color="#C0463A" /></Button>
      </div>
    </li>
  )
}
MusicItem.defaultProps = {
  song: {}
}

export default MusicItem
