import React from 'react'
import styles from './Input.module.scss'
import clsx from 'clsx'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactElement
}
const Input:React.FC<Props> = ({ icon, ...newProps }) => {
  return (
    <div className={styles['input-wrapper']}>
      <div className={styles['input-icon']}>
        {icon}
      </div>
      <input type="text" className={clsx({ [styles['has-icon']]: icon })} {...newProps} />
    </div>
  )
}
export default Input
