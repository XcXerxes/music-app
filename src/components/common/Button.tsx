import React from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'

type Props = {
  children?: React.ReactElement,
  icon?: React.ReactElement,
  round?: boolean
}
const Button: React.FC<Props> = ({ children, icon, round, ...newProps }) => {
  return (
    <button {...newProps} className={clsx(styles.button, { [styles.round]: round,   } )}>
      {icon}
      {children}
    </button>
  )
}
export default Button
