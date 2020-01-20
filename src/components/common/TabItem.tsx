import React from 'react'
import styles from './TabItem.module.scss'
import clsx from 'clsx'

export interface MenuItemProps {
  name: string,
  id?: number,
  path?: string
}
type Props = {
  name: string,
  activeName?: string,
  id?: number,
  path?: string,
  onClick: (item: MenuItemProps) => void,
  activeClassName?: string
}
export const TabItem:React.FC<Props> = (props) => {
  const { name, activeName, onClick, activeClassName = '' } = props
  function handleClick () {
    onClick(props)
  }
  return (
    <li onClick={handleClick} className={clsx(styles['tab-item'], { [styles.active]: activeName === name }, activeClassName)}>
      <span>{name}</span>
    </li>
  )
}
export default TabItem
