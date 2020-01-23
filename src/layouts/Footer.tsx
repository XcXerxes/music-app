import React from 'react'
import styles from './index.module.scss'
import { Button } from 'components/common'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-info']}>
      </div>
      <div className={styles['footer-player']}>
        <Button>
          
        </Button>
      </div>
      <div className={styles['footer-action']}></div>
    </footer>
  )
}

export default Footer
