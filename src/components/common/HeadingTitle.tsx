import React from 'react'
import styles from './HeadingTitle.module.scss'
import IosArrowForward from 'react-ionicons/lib/IosArrowForward'
import { Link } from 'react-router-dom'

type Props = {
  title: string
}
const HeadingTitle:React.FC<Props> = ({ title }) => {
  return (
    <Link to="/123" className={styles['heading-title']}>
      <h3>{title}</h3>
      <IosArrowForward fontSize="16px" />
    </Link>
  )
}

export default HeadingTitle
