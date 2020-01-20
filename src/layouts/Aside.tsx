import React from 'react'
import styles from './index.module.scss'
import MenuItem from 'components/menu/MenuItem'
import { routerConfig, routerConfigProps } from 'config/routerConfig'

type Props = {
  history: any
}
const Aside:React.FC<Props> = ({ history }) => {
  function renderItem (item: routerConfigProps): any {
    if (item.children) {
      return item.children.map((v: routerConfigProps) => renderItem(v))
    }
    return <MenuItem key={item.id} {...item} history={history} />
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
