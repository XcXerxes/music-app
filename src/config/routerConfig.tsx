import React from 'react'
import IosMusicalNotesOutline from 'react-ionicons/lib/IosMusicalNotesOutline'
import IosHeadsetOutline from 'react-ionicons/lib/IosHeadsetOutline'
import IosDownloadOutline from 'react-ionicons/lib/IosDownloadOutline'
import IosHeartOutline from 'react-ionicons/lib/IosHeartOutline'
import IosPlayOutline from 'react-ionicons/lib/IosPlayOutline'
import IosContactsOutline from 'react-ionicons/lib/IosContactsOutline'

export interface routerConfigProps {
  id: number,
  title: string,
  icon?: React.ComponentType,
  children?: routerConfigProps[]
}
export const routerConfig: routerConfigProps[] = [
  {
    id: 1,
    title: '发现音乐',
    icon: IosMusicalNotesOutline
  },
  {
    id: 2,
    title: '私人FM',
    icon: IosHeadsetOutline
  },
  {
    id: 3,
    title: '视频',
    icon: IosPlayOutline
  },
  {
    id: 4,
    title: '朋友',
    icon: IosContactsOutline
  },
  {
    id: 5,
    title: '我的音乐',
    children: [
      {
        id: 1,
        title: 'iTunes音乐',
        icon: IosContactsOutline
      },
      {
        id: 2,
        title: '下载管理',
        icon: IosDownloadOutline
      }
    ]
  },
  {
    id: 6,
    title: '创建的歌单',
    children: [
      {
        id: 1,
        title: '我喜欢的音乐',
        icon: IosHeartOutline
      }
    ]
  },
]