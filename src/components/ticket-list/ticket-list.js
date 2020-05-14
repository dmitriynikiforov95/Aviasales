import React from "react";
import TicketListItem from "../ticket-list-item";

const TicketList = ({ tickets }) =>  {
    return (
      <ul>
        {tickets.map((ticket, idx) => {
          return (
            <li key={idx}>
              <TicketListItem ticket={ticket} />
            </li>
          );
        })}
      </ul>
    );
}


export default TicketList;
