import React from 'react'
import clsx from 'clsx'
import styles from './MenuItem.module.scss'
import { routerConfigProps } from 'config/routerConfig'

interface Props extends routerConfigProps {
}
const MenuItem:React.FC<Props> = ({ icon, title }) => {
  const IconComponent:any = icon
  return (
    <li className={clsx(styles['menu-item'])}>
      {IconComponent&&<span className={styles['menu-item__icon']}>
        <IconComponent fontSize="18px" />
      </span>}
      <p>{title}</p>
    </li>
  )
}

export default MenuItem
