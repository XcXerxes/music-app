import React, { useState } from 'react'
import styles from './index.module.scss'
import TabItem, { MenuItemProps } from 'components/common/TabItem'
import Setting from 'react-ionicons/lib/IosSettingsOutline'
import Mail from 'react-ionicons/lib/IosMailOutline'
import ShirtOutline from 'react-ionicons/lib/IosShirtOutline'
import BrowsersOutline from 'react-ionicons/lib/IosBrowsersOutline'
import Search from 'react-ionicons/lib/IosSearchOutline'
import Button from 'components/common/Button'
import Input from 'components/common/Input'

const menus = [
  {
    id: 1,
    name: '个性推荐',
    path: ''
  },
  {
    id: 2,
    name: '歌单',
    path: '/find/song'
  },
  {
    id: 3,
    name: '主播电台',
    path: '/find/dj'
  },
  {
    id: 4,
    name: '排行榜',
    path: '/find/ranking'
  },
  {
    id: 5,
    name: '歌手',
    path: '/find/singer'
  },
  {
    id: 6,
    name: '最新音乐',
    path: '/find/new'
  }
]
type Props = {
  history: any
}
const Header:React.FC<Props> = ({ history }) => {
  const [activecat, setactivecat] = useState('个性推荐')
  // 菜单切换时
  function tabItemClick (tab: MenuItemProps) {
    setactivecat(tab.name)
    history.push(tab.path)
  }
  return (
    <header className={styles["header"]}>
      <div className={styles["header-nav"]}></div>
      <div className={styles["header-content"]}>
        <ul className={styles["header-content__menu"]}>
          {menus.map((item: MenuItemProps) => (
            <TabItem activeName={activecat} key={item.id} {...item} onClick={tabItemClick} />
          ))}
        </ul>
        <div className={styles["header-content__action"]}>
          <div className={styles['header-content__field']}>
            <Input placeholder="搜索" icon={<Search fontSize="20px" />} />
          </div>
          <ul className={styles["header-content__tool"]}>
            <li>
              <Button round>
                <Setting fontSize="20px" />
              </Button>
            </li>
            <li>
              <Button round>
                <Mail fontSize="20px" />
              </Button>
            </li>
            <li>
              <Button round>
                <ShirtOutline fontSize="20px" />
              </Button>
            </li>
            <li>
              <Button round>
                <BrowsersOutline fontSize="20px" />
              </Button>
            </li>
          </ul>
        </div>  
      </div>
    </header>
  )
}
export default Header
