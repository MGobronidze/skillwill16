import React from 'react'
import CssStyledListItem from './CssStyledListItem'
import './tickets.css'

const CssStyledWrapper = () => {
  const tickets =[1,2,3,4,5,6]
  return (
    <div className='ticketWrapper'>
        {tickets.map((ticket) => <CssStyledListItem ticket={ticket} /> )}
    </div>
  )
}

export default CssStyledWrapper