import React from 'react'
import styles from './TabItem.module.scss'
import clsx from 'clsx'

export interface MenuItemProps {
  name: string,
  id: number
}
type Props = {
  name: string,
  activeId?: number,
  id: number,
  onClick: (item: MenuItemProps) => void
}
const TabItem:React.FC<Props> = (props) => {
  const { name, id, activeId, onClick } = props
  function handleClick () {
    if (id !== activeId) {
      onClick({ name, id })
    }
  }
  return (
    <li onClick={handleClick} className={clsx(styles['tab-item'], { [styles.active]: activeId === id })}>
      <span>{name}</span>
    </li>
  )
}
export default TabItem
