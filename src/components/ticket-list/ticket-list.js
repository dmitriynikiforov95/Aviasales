import React from "react";
import TicketListItem from "../ticket-list-item";
import s from "./ticket-list.module.css";

const TicketList = ({ tickets }) =>  {
    return (
      <ul className={s.list}>
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
