import React from 'react'
import CssStyledListItem from './CssStyledListItem'
import styles from './tickets.module.css'

const CssStyledWrapper = () => {
  const tickets =[1,2,3,4,5,6]
  return (
    <div className={styles.ticketWrapper}>
        {tickets.map((ticket) => <CssStyledListItem ticket={ticket} /> )}
    </div>
  )
}

export default CssStyledWrapper