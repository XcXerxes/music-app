import React from 'react'
import { MusicDetailItem } from 'components/common'
import styles from './MusicDetail.module.scss'
import services from 'services'
import { useFetch } from 'hooks/useFetch'

type MusicDetailProps = {
  match: any
}

const MusicDetail:React.FC<MusicDetailProps> = ({ match }) => {
  const { id } = match.params
  const { data, loading }: any = useFetch(services.getPlayDataDetail, { id })
  return (
    <div className="music-app__wrapper">
      <div className={styles.heading}>
        <MusicDetailItem {...data.playlist}  />
      </div>
    </div>
  )
}

export default MusicDetail
