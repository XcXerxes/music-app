import React, { useMemo } from 'react'
import { MusicDetailItem, TabItem, Table } from 'components/common'
import styles from './MusicDetail.module.scss'
import services from 'services'
import { useFetch } from 'hooks/useFetch'
import dayjs from 'dayjs'

type MusicDetailProps = {
  match: any
}

const tabs = [
  {
    id: 1,
    name: '歌曲列表'
  },
  {
    id: 2,
    name: '评论'
  },
  {
    id: 3,
    name: '收藏者'
  }
]

const MusicDetail:React.FC<MusicDetailProps> = ({ match }) => {
  const columns:any = useMemo(() => [
    {
      Header: '音乐标题',
      accessor: 'name',
      canSort: true,
      Cell: ({ row }: any):any => {
        return (
          <>
            <p>{row.values.name}</p>
            {row.original.alia.length > 0 && <span className={styles['table-alia']}>({row.original.alia.join(' ')})</span>}
          </>
        )
      }
    },
    {
      Header: '歌手',
      accessor: 'ar',
      canSort: true,
      Cell: ({ row }: any):any => {
        return (
          <div>
            <span>{row.values.ar && row.values.ar.map((item: any) => item.name).join('/')}</span>
          </div>
        )
      }
    },
    {
      Header: '专辑',
      accessor: 'al',
      canSort: true,
      Cell: ({ row }: any): any => (
        <span>{row.values.al && row.values.al.name}</span>
      )
    },
    {
      Header: '时长',
      accessor: 'dt',
      canSort: true,
      Cell: ({ row }: any): any => (
        <span>{dayjs(row.values.dt).format('mm:ss')}</span>
      )
    }
  ], [])
  const { id } = match.params
  const { data, loading }: any = useFetch(services.getPlayDataDetail, { id })
  return (
    <div className="music-app__wrapper">
      <div className={styles.heading}>
        <MusicDetailItem {...data.playlist}  />
      </div>
      <div className={styles.content}>
        <ul className={styles.tabs}>
          {tabs.map((item: any) => (
            <TabItem key={item.id} {...item} />
          ))}
        </ul>
        <div className={styles.body}>
          <Table columns={columns} data={data.playlist ? data.playlist.tracks : []} />
        </div>
      </div>
    </div>
  )
}

export default MusicDetail
