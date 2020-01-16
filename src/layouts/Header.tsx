import React, { useState } from 'react'
import styles from './index.module.scss'
import TabItem, { MenuItemProps } from 'components/common/TabItem'
import Setting from 'react-ionicons/lib/IosSettingsOutline'
import Button from 'components/common/Button'

const menus = [
  {
    id: 1,
    name: '个性推荐'
  },
  {
    id: 2,
    name: '歌单'
  },
  {
    id: 3,
    name: '主播电台'
  },
  {
    id: 4,
    name: '排行榜'
  },
  {
    id: 5,
    name: '歌手'
  },
  {
    id: 6,
    name: '最新音乐'
  }
]

const Header = () => {
  const [activeId, setactiveId] = useState(1)
  // 菜单切换时
  function tabItemClick (tab: MenuItemProps) {
    setactiveId(tab.id)
  }
  return (
    <header className={styles["header"]}>
      <div className={styles["header-nav"]}></div>
      <div className={styles["header-content"]}>
        <ul className={styles["header-content__menu"]}>
          {menus.map((item: MenuItemProps) => (
            <TabItem activeId={activeId} key={item.id} {...item} onClick={tabItemClick} />
          ))}
        </ul>
        <div className={styles["header-content__action"]}>
          <input type="text"/>
          <div className={styles["header-content__tool"]}>
            <Button round>
              <Setting />
            </Button>
          </div>
        </div>  
      </div>
    </header>
  )
}
export default Header
