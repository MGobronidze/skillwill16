import React from 'react'
import CssStyledListItem from './CssStyledListItem'
import { TicketWrapper } from './styled'

const CssStyledWrapper = () => {
  const tickets =[1,2,3,4,5,6]
  return (
    <TicketWrapper >
        {tickets.map((ticket, index) => <CssStyledListItem ticket={ticket} index={index}/> )}
    </TicketWrapper>
  )
}

export default CssStyledWrapper