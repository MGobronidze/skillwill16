import { TicketItem , TicketLot} from "./styled"

const CssStyledListItem = ({ticket, index}) => {
    return (
    <TicketItem>
         <TicketLot fontSize={index === 5 ? "40px" : "32px"} color={index === 5 ? "red" : "white"}>{ticket}</TicketLot>
    </TicketItem>
  )
}

export default CssStyledListItem