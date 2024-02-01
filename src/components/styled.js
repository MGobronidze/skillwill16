import styled, {css} from "styled-components";

export const TicketWrapper = styled.div`
    width: 600px;
    border: 2px darkgray dashed;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px; 
`
export const TicketItem = styled.div`
    width: 75px;
    height: 75px;
    background-color: greenyellow;
    margin: 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const TicketLot = styled.p`
    ${({color, fontSize}) => css`
        color: ${color};
        font-size: ${fontSize};
    `}
`