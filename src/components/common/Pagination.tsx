import React from 'react'
import ReactPagination, { ReactJsPaginationProps } from 'react-js-pagination'
import styles from './Pagination.module.scss'

interface PaginationProps extends ReactJsPaginationProps {
}
export const Pagination: React.FC<PaginationProps> = (props) => {
  const { totalItemsCount } = props
  return (
    <div className={styles['pagination-wrapper']}>
      <ReactPagination
        {...props}
      />
      <span className={styles.total}>总 {totalItemsCount} 条</span>
    </div>
  )
}

export default Pagination
