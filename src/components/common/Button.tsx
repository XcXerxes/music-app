import React from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  prefixIcon?: React.ReactElement,
  suffixIcon?: React.ReactElement,
  round?: boolean
  color?: string,
  className?: string
}
export const Button: React.FC<Props> = ({ children, prefixIcon, suffixIcon, round, color, ...newProps }) => {
  return (
    <button {...newProps} className={clsx(styles.button, { [styles.round]: round, [styles[color || '']]: color  } )}>
      {prefixIcon && <span className={styles['prefix-icon']}>{prefixIcon}</span>}
      {children}
      {suffixIcon && <span className={styles['suffix-icon']}>{suffixIcon}</span>}
    </button>
  )
}
Button.defaultProps = {
  color: ''
}
export default Button
