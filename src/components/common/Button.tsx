import React from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactElement,
  round?: boolean
  color?: string,
  className?: string
}
export const Button: React.FC<Props> = ({ children, icon, round, color, ...newProps }) => {
  return (
    <button {...newProps} className={clsx(styles.button, { [styles.round]: round, [styles[color || '']]: color  } )}>
      {icon}
      {children}
    </button>
  )
}
Button.defaultProps = {
  color: ''
}
export default Button
