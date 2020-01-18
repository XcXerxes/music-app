import React from 'react'
import styles from './index.module.scss'
import MenuItem from 'components/menu/MenuItem'
import { routerConfig, routerConfigProps } from 'config/routerConfig'

const Aside = () => {
  function renderItem (item: routerConfigProps): any {
    if (item.children) {
      return item.children.map((v: routerConfigProps) => renderItem(v))
    }
    return <MenuItem key={item.id} {...item} />
  }
  return (
    <aside className={styles.aside}>
      <ul>
        {routerConfig.map((item: routerConfigProps) => {
          return renderItem(item)
        })}
      </ul>
    </aside>
  )
}
export default Aside
