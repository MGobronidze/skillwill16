import { TicketItem , TicketLot} from "./styled"

const CssStyledListItem = ({ticket}) => {
  return (
    <TicketItem>
         <TicketLot>{ticket}</TicketLot>
    </TicketItem>
  )
}

export default CssStyledListItem