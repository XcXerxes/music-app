import React from 'react'
import clsx from 'clsx'
import styles from './MenuItem.module.scss'
import { routerConfigProps } from 'config/routerConfig'
import { NavLink } from 'react-router-dom'

interface Props extends routerConfigProps {
  history: any
}
const MenuItem:React.FC<Props> = ({ icon, title, path, history }) => {
  const IconComponent:any = icon
  return (
    <li className={clsx(styles['menu-item'])}>
      <NavLink to={path || ''} exact={path === '/'} activeClassName={styles['selected']}>
        {IconComponent&&<span className={styles['menu-item__icon']}>
          <IconComponent fontSize="18px" color={history.location.pathname.includes(path) ? '#C0463A' : '#000'} />
        </span>}
        <p>{title}</p>
      </NavLink>
    </li>
  )
}

export default React.memo(MenuItem)
