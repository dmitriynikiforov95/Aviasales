import React from "react";
import TicketsListItem from "../tickets-list-item";


const TicketsList = ({ tickets }) =>  {
    return (
      <ul>
        {tickets.map((ticket, idx) => {
          return (
            <li key={idx}>
              <TicketsListItem ticket={ticket} />
            </li>
          );
        })}
      </ul>
    );
}



export default TicketsList;
