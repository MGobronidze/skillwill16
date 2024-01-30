import React from 'react'
import styles from './tickets.module.css'
const CssStyledListItem = ({ticket}) => {
  return (
    <div className={styles.ticketItem}>
         <p className={styles.ticketLlot}>{ticket}</p>
    </div>
  )
}

export default CssStyledListItem