import React from "react";
import TicketListItem from "../ticket-list-item";
import s from "./ticket-list.module.css";

const TicketList = ({ tickets }) => (
  <ul className={s.list}>
    {tickets.map((ticket, idx) => (
      <li key={idx}>
        <TicketListItem ticket={ticket} />
      </li>
    ))}
  </ul>
);

export default TicketList;
