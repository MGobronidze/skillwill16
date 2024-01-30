import React from 'react'
const CssStyledListItem = ({ticket}) => {
  return (
    <div className='ticketItem'>
         <p className='ticketLot'>{ticket}</p>
    </div>
  )
}

export default CssStyledListItem