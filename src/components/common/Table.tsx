import React from 'react'
import styles from './Table.module.scss'
import { useTable, useSortBy } from 'react-table'
import IosArrowRoundUp from 'react-ionicons/lib/IosArrowRoundUp'
import IosArrowRoundDown from 'react-ionicons/lib/IosArrowRoundDown'

interface TableProps {
  columns: any,
  data: any
}
export const Table:React.FC<TableProps> = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  }, useSortBy)
  console.log(headerGroups)
  return (
    <table className={styles.table} {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              // Add the sorting props to control sorting. For this example
              // we can add them into the header props
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                <div className={styles.th}>
                  <p>{column.render('Header')}</p>
                  {/* Add a sort direction indicator */}
                  <span className={styles['th-sort']}>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? <IosArrowRoundDown />
                        : <IosArrowRoundUp />
                      : <IosArrowRoundUp />}
                  </span>
                </div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row: any, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell: any) => {
                console.log('-----------cell', cell)
                return (
                  <td {...cell.getCellProps()}>
                    <div className={styles.td}>
                      {cell.render('Cell')}
                    </div>
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
